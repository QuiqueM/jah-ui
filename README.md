# jah·ui

Librería de componentes Vue 3 con diseño **neumórfico**. Construida con TypeScript, Vite y estilos CSS puros sin dependencias de frameworks de utilidades.

---

> **Fondo requerido**
>
> jah·ui es una librería neumórfica. El efecto visual depende completamente del color de fondo sobre el que se renderizan los componentes. Para que las sombras y relieves se vean correctamente, **la página o el contenedor raíz debe tener el color de fondo `#e0e5ec`**.
>
> Sin este fondo, los componentes perderán el efecto tridimensional característico del neumorfismo.

---

## Características

- 28 componentes listos para producción
- Totalmente tipado con TypeScript — todas las interfaces `Props` son exportadas
- Soporte a gráficas con `vue-chartjs` + `chart.js`
- Accesibilidad: roles ARIA, navegación por teclado, atributos `aria-*`
- Sin dependencias de Tailwind ni de ningún framework CSS externo
- Tree-shakeable (ESM nativo)

## Instalación

```bash
# npm
npm install jah-ui chart.js vue-chartjs

# pnpm
pnpm add jah-ui chart.js vue-chartjs

# yarn
yarn add jah-ui chart.js vue-chartjs
```

> `chart.js` y `vue-chartjs` son peer dependencies necesarios solo si vas a usar el componente `Chart`. Si no lo necesitas, puedes omitirlos.

## Configuración inicial

### 1. Importar los estilos

Importa el CSS de la librería una sola vez en el punto de entrada de tu aplicación:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'jah-ui/style.css'

createApp(App).mount('#app')
```

### 2. Establecer el color de fondo

Aplica el fondo neumórfico en tu CSS global o en el elemento raíz de tu aplicación:

```css
/* src/styles/main.css o index.css */
body {
  background-color: #e0e5ec;
  min-height: 100vh;
}
```

También puedes hacerlo directamente en tu componente raíz:

```vue
<!-- App.vue -->
<template>
  <div style="min-height: 100vh; background-color: #e0e5ec;">
    <RouterView />
  </div>
</template>
```

### 3. Registro global (opcional)

Si prefieres registrar todos los componentes globalmente:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'jah-ui/style.css'
import {
  Button, Input, Card, Badge, Alert,
  // ... resto de componentes
} from 'jah-ui'

const app = createApp(App)

app.component('JButton', Button)
app.component('JInput', Input)
app.component('JCard', Card)

app.mount('#app')
```

## Uso básico

Todos los componentes se pueden importar de forma individual (recomendado para tree-shaking):

### Button

```vue
<script setup lang="ts">
import { Button } from 'jah-ui'
</script>

<template>
  <Button label="Guardar" variant="primary" />
  <Button label="Cancelar" variant="secondary" />
  <Button label="Eliminar" variant="danger" :loading="false" />
</template>
```

### Input

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'jah-ui'

const email = ref('')
</script>

<template>
  <Input
    v-model="email"
    label="Correo electrónico"
    placeholder="usuario@ejemplo.com"
    hint="Nunca compartiremos tu correo."
  />
</template>
```

### Card

```vue
<script setup lang="ts">
import { Card, Button } from 'jah-ui'
</script>

<template>
  <Card title="Mi tarjeta" subtitle="Descripción breve" hoverable>
    <p>Contenido de la tarjeta.</p>

    <template #footer>
      <Button label="Ver más" size="sm" />
    </template>
  </Card>
</template>
```

### Alert

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Alert } from 'jah-ui'

const visible = ref(true)
</script>

<template>
  <Alert v-model="visible" variant="success" title="Guardado" dismissible>
    Los cambios se guardaron correctamente.
  </Alert>
</template>
```

### Select

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'jah-ui'
import type { SelectOption } from 'jah-ui'

const pais = ref(null)
const paises: SelectOption[] = [
  { label: 'México',    value: 'mx' },
  { label: 'España',   value: 'es' },
  { label: 'Colombia', value: 'co' },
]
</script>

<template>
  <Select v-model="pais" :options="paises" label="País" />
</template>
```

### Chart

```vue
<script setup lang="ts">
import { Chart } from 'jah-ui'

const data = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
  datasets: [{
    label: 'Ventas',
    data: [120, 190, 80, 150, 200],
    backgroundColor: '#3b82f6',
  }],
}
</script>

<template>
  <Chart type="bar" :data="data" title="Ventas mensuales" height="300px" />
</template>
```

## Componentes disponibles

| Componente | Descripción |
|---|---|
| `Button` | Botón con variantes, tamaños y estado de carga |
| `Input` | Campo de texto con prefijo, sufijo y tipo password |
| `Textarea` | Área de texto con contador de caracteres |
| `Select` | Lista desplegable accesible con teclado |
| `Checkbox` | Casilla individual o en grupo (array) |
| `Radio` | Botón de opción |
| `Toggle` | Interruptor on/off |
| `Datepicker` | Selector de fecha con calendario |
| `Card` | Tarjeta con slots para header, body y footer |
| `Badge` | Etiqueta de estado con variantes y modo punto |
| `Alert` | Mensaje de alerta descartable |
| `Progress` | Barra de progreso con modo indeterminado |
| `Avatar` | Avatar con imagen, iniciales o icono y estado |
| `AvatarGroup` | Grupo de avatares con desbordamiento |
| `Skeleton` | Marcador de posición de carga |
| `Rating` | Componente de calificación con estrellas |
| `Knob` | Control rotativo de valor numérico |
| `Stepper` | Pasos de un proceso con estados |
| `Pagination` | Navegación por páginas |
| `Accordion` | Secciones expandibles (simple o múltiple) |
| `Tooltip` | Información flotante sobre cualquier elemento |
| `DropdownMenu` | Menú contextual desplegable |
| `DropdownMenuItem` | Ítem del menú contextual |
| `Carousel` | Carrusel con autoplay, flechas y puntos |
| `Navbar` | Barra de navegación con menú móvil |
| `Upload` | Zona de arrastre y subida de archivos |
| `Chart` | Gráficas (líneas, barras, pastel, radar, etc.) |

## Tipos exportados

Todas las interfaces de props están disponibles para usar en tus propios componentes:

```ts
import type {
  ButtonProps,
  InputProps,
  SelectProps,
  SelectOption,
  CardProps,
  ChartProps,
  ChartKind,
  NavItem,
  NavbarProps,
  UploadFile,
  UploadProps,
  StepperStep,
  StepperProps,
  // ... y el resto de XxxProps
} from 'jah-ui'
```

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar Storybook
pnpm storybook

# Ejecutar pruebas unitarias
pnpm test

# Pruebas en modo watch
pnpm test:watch

# Verificar tipos
pnpm typecheck

# Compilar la librería
pnpm build
```

## Licencia

MIT
