import{k as ee,g as r,d as s,f as t,s as k,G as V,c as z,x as l,A as ae}from"./vue.esm-bundler-BuXXOL77.js";const ne=["checked","disabled","indeterminate"],oe={key:0,class:"neu-checkbox__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"},re={key:1,class:"neu-checkbox__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},le={key:0,class:"neu-checkbox__content"},se={key:0,class:"neu-checkbox__label"},g=ee({__name:"Checkbox",props:{modelValue:{type:[Boolean,Array]},value:{},label:{},hint:{},size:{default:"md"},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:x}){const a=e,y=x,C=z(()=>Array.isArray(a.modelValue)),n=z(()=>C.value?a.modelValue.includes(a.value):!!a.modelValue);function Y(){if(!a.disabled)if(C.value){const v=a.modelValue,o=n.value?v.filter(Z=>Z!==a.value):[...v,a.value];y("update:modelValue",o)}else y("update:modelValue",!n.value)}return(v,o)=>(l(),r("label",{class:k(["neu-checkbox",`neu-checkbox--${e.size}`,{"neu-checkbox--disabled":e.disabled,"neu-checkbox--error":e.error}])},[s("input",{type:"checkbox",class:"neu-checkbox__native",checked:n.value,disabled:e.disabled,indeterminate:e.indeterminate,onChange:Y},null,40,ne),s("span",{class:k(["neu-checkbox__box",`neu-checkbox__box--${e.size}`,{"neu-checkbox__box--checked":n.value||e.indeterminate,"neu-checkbox__box--indeterminate":e.indeterminate,"neu-checkbox__box--error":e.error}])},[e.indeterminate&&!n.value?(l(),r("svg",oe,[...o[0]||(o[0]=[s("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)])])):n.value?(l(),r("svg",re,[...o[1]||(o[1]=[s("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):t("",!0)],2),e.label||e.hint?(l(),r("span",le,[e.label?(l(),r("span",se,V(e.label),1)):t("",!0),e.hint?(l(),r("span",{key:1,class:k(["neu-checkbox__hint",{"neu-checkbox__hint--error":e.error}])},V(e.hint),3)):t("",!0)])):t("",!0)],2))}});g.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Checkbox/Checkbox.vue"]};const ie={title:"Components/Checkbox",component:g,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},i={args:{label:"Acepto los términos y condiciones"}},c={args:{label:"Opción seleccionada",modelValue:!0}},d={name:"Con Hint",args:{label:"Recibir notificaciones",hint:"Te enviaremos correos sobre actualizaciones importantes.",modelValue:!1}},u={args:{label:"Seleccionar todo",indeterminate:!0,modelValue:!1}},m={name:"Estado Error",args:{label:"Acepto los términos",hint:"Debes aceptar los términos para continuar.",error:!0,modelValue:!1}},b={args:{label:"Opción deshabilitada",disabled:!0,modelValue:!1}},p={name:"Disabled + Checked",args:{label:"Opción deshabilitada",disabled:!0,modelValue:!0}},f={name:"Grupo (array v-model)",render:()=>({components:{Checkbox:g},setup(){return{selected:ae(["vue"]),options:[{value:"vue",label:"Vue"},{value:"react",label:"React"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte (no disponible)",disabled:!0}]}},template:`
      <div style="display:flex;flex-direction:column;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">¿Qué frameworks conoces?</p>
        <Checkbox
          v-for="opt in options"
          :key="opt.value"
          v-model="selected"
          :value="opt.value"
          :label="opt.label"
          :disabled="opt.disabled"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Seleccionados: <strong style="color:#3b82f6">{{ selected.join(', ') || '—' }}</strong>
        </p>
      </div>
    `})},h={render:()=>({components:{Checkbox:g},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Checkbox size="sm" label="Small" :model-value="true" />
        <Checkbox size="md" label="Medium" :model-value="true" />
        <Checkbox size="lg" label="Large"  :model-value="true" />
      </div>
    `})};var S,A,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Acepto los términos y condiciones'
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var w,B,q;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Opción seleccionada',
    modelValue: true
  }
}`,...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var E,O,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'Recibir notificaciones',
    hint: 'Te enviaremos correos sobre actualizaciones importantes.',
    modelValue: false
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var _,j,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Seleccionar todo',
    indeterminate: true,
    modelValue: false
  }
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,N,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'Acepto los términos',
    hint: 'Debes aceptar los términos para continuar.',
    error: true,
    modelValue: false
  }
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,I,L;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Opción deshabilitada',
    disabled: true,
    modelValue: false
  }
}`,...(L=(I=b.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var M,P,Q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Disabled + Checked',
  args: {
    label: 'Opción deshabilitada',
    disabled: true,
    modelValue: true
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var $,F,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Grupo (array v-model)',
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const selected = ref<string[]>(['vue']);
      const options = [{
        value: 'vue',
        label: 'Vue'
      }, {
        value: 'react',
        label: 'React'
      }, {
        value: 'angular',
        label: 'Angular'
      }, {
        value: 'svelte',
        label: 'Svelte (no disponible)',
        disabled: true
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">¿Qué frameworks conoces?</p>
        <Checkbox
          v-for="opt in options"
          :key="opt.value"
          v-model="selected"
          :value="opt.value"
          :label="opt.label"
          :disabled="opt.disabled"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Seleccionados: <strong style="color:#3b82f6">{{ selected.join(', ') || '—' }}</strong>
        </p>
      </div>
    \`
  })
}`,...(J=(F=f.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,U,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Checkbox size="sm" label="Small" :model-value="true" />
        <Checkbox size="md" label="Medium" :model-value="true" />
        <Checkbox size="lg" label="Large"  :model-value="true" />
      </div>
    \`
  })
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ce=["Default","Checked","WithHint","Indeterminate","WithError","Disabled","DisabledChecked","Group","Sizes"];export{c as Checked,i as Default,b as Disabled,p as DisabledChecked,f as Group,u as Indeterminate,h as Sizes,m as WithError,d as WithHint,ce as __namedExportsOrder,ie as default};
