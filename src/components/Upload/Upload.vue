<script setup lang="ts">
import { computed, ref } from 'vue'
import './Upload.css'

export interface UploadFile {
  id: string
  file: File
  error?: string
}

export interface UploadProps {
  modelValue?: UploadFile[]
  accept?: string
  multiple?: boolean
  maxSize?: number
  maxFiles?: number
  disabled?: boolean
  label?: string
  hint?: string
  error?: string
}

const props = withDefaults(defineProps<UploadProps>(), {
  modelValue: () => [],
  multiple: false,
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [files: UploadFile[]]
  reject: [reasons: { file: File; reason: string }[]]
}>()

const inputRef  = ref<HTMLInputElement>()
const dragCount = ref(0)
const isDragging = computed(() => dragCount.value > 0 && !props.disabled)

// ── Helpers ──────────────────────────────────────────────────────
let uid = 0
function genId() { return `uf-${++uid}` }

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1_048_576) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1_048_576).toFixed(1)} MB`
}

function validate(file: File): string | null {
  if (props.maxSize && file.size > props.maxSize)
    return `Supera el límite de ${formatSize(props.maxSize)}`
  if (props.accept) {
    const types = props.accept.split(',').map((t) => t.trim())
    const ok = types.some((t) => {
      if (t.startsWith('.')) return file.name.toLowerCase().endsWith(t.toLowerCase())
      if (t.endsWith('/*'))  return file.type.startsWith(t.slice(0, -1))
      return file.type === t
    })
    if (!ok) return 'Tipo de archivo no permitido'
  }
  return null
}

// ── File processing ───────────────────────────────────────────────
function process(list: FileList | null) {
  if (!list || props.disabled) return
  const current  = props.modelValue ?? []
  const added: UploadFile[] = []
  const rejected: { file: File; reason: string }[] = []

  for (const file of Array.from(list)) {
    const err = validate(file)
    if (err) {
      rejected.push({ file, reason: err })
      added.push({ id: genId(), file, error: err })
      continue
    }
    if (props.maxFiles && current.length + added.filter((f) => !f.error).length >= props.maxFiles) {
      rejected.push({ file, reason: `Máximo ${props.maxFiles} archivos permitidos` })
      continue
    }
    added.push({ id: genId(), file })
  }

  if (rejected.length) emit('reject', rejected)
  const next = props.multiple ? [...current, ...added] : added.slice(-1)
  emit('update:modelValue', next)
}

function remove(id: string) {
  emit('update:modelValue', (props.modelValue ?? []).filter((f) => f.id !== id))
}

// ── Drag events ───────────────────────────────────────────────────
function onDragEnter(e: DragEvent) { e.preventDefault(); if (!props.disabled) dragCount.value++ }
function onDragLeave()              { dragCount.value = Math.max(0, dragCount.value - 1) }
function onDragOver(e: DragEvent)   { e.preventDefault() }
function onDrop(e: DragEvent)       { e.preventDefault(); dragCount.value = 0; process(e.dataTransfer?.files ?? null) }

function openPicker() { if (!props.disabled) inputRef.value?.click() }

function onInputChange(e: Event) {
  process((e.target as HTMLInputElement).files)
  if (inputRef.value) inputRef.value.value = ''
}

// ── File icon type ────────────────────────────────────────────────
type IconKind = 'image' | 'video' | 'audio' | 'doc' | 'archive' | 'file'

function iconKind(file: File): IconKind {
  const t = file.type
  const n = file.name.toLowerCase()
  if (t.startsWith('image/'))                        return 'image'
  if (t.startsWith('video/'))                        return 'video'
  if (t.startsWith('audio/'))                        return 'audio'
  if (t === 'application/pdf' || n.endsWith('.pdf')) return 'doc'
  if (/\.(zip|rar|7z|tar|gz|bz2)$/.test(n))         return 'archive'
  return 'file'
}

const acceptHint = computed(() => {
  const parts: string[] = []
  if (props.accept)  parts.push(props.accept.replace(/,\s*/g, ', '))
  if (props.maxSize) parts.push(`máx. ${formatSize(props.maxSize)}`)
  if (props.maxFiles && props.multiple) parts.push(`hasta ${props.maxFiles} archivos`)
  return parts.join(' · ')
})
</script>

<template>
  <div :class="['neu-upload', { 'neu-upload--disabled': disabled }]">

    <!-- Hidden file input -->
    <input
      ref="inputRef"
      type="file"
      class="neu-upload__input"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="onInputChange"
    />

    <!-- Drop zone -->
    <button
      type="button"
      :disabled="disabled"
      :class="[
        'neu-upload__zone',
        {
          'neu-upload__zone--dragging': isDragging,
          'neu-upload__zone--error':    !!error,
          'neu-upload__zone--has-files': (modelValue ?? []).length > 0,
        },
      ]"
      @click="openPicker"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @dragover="onDragOver"
      @drop="onDrop"
    >
      <!-- Upload cloud icon -->
      <span :class="['neu-upload__icon', { 'neu-upload__icon--dragging': isDragging }]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        </svg>
      </span>

      <p class="neu-upload__label">
        {{ isDragging ? 'Suelta los archivos aquí' : (label ?? 'Arrastra archivos o haz clic para seleccionar') }}
      </p>

      <p v-if="acceptHint || hint" class="neu-upload__hint">
        {{ acceptHint || hint }}
      </p>
    </button>

    <!-- Error message -->
    <span v-if="error" class="neu-upload__error-msg">{{ error }}</span>

    <!-- File list -->
    <ul v-if="(modelValue ?? []).length" class="neu-upload__list">
      <li
        v-for="uf in modelValue"
        :key="uf.id"
        :class="['neu-upload__file', { 'neu-upload__file--error': !!uf.error }]"
      >
        <!-- File type icon -->
        <span class="neu-upload__file-icon">
          <!-- image -->
          <svg v-if="iconKind(uf.file) === 'image'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <!-- video -->
          <svg v-else-if="iconKind(uf.file) === 'video'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
          </svg>
          <!-- audio -->
          <svg v-else-if="iconKind(uf.file) === 'audio'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
          </svg>
          <!-- archive -->
          <svg v-else-if="iconKind(uf.file) === 'archive'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
          </svg>
          <!-- doc / file -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
        </span>

        <!-- File info -->
        <div class="neu-upload__file-info">
          <span class="neu-upload__file-name">{{ uf.file.name }}</span>
          <span class="neu-upload__file-meta">
            <span v-if="uf.error" class="neu-upload__file-error">{{ uf.error }}</span>
            <span v-else>{{ formatSize(uf.file.size) }}</span>
          </span>
        </div>

        <!-- Remove button -->
        <button
          type="button"
          class="neu-upload__file-remove"
          :aria-label="`Eliminar ${uf.file.name}`"
          @click.stop="remove(uf.id)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
