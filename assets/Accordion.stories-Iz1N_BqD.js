import{k as M,A as F,L as $,g as I,C as b,x,y as Q,d as c,s as q,j as R,M as H,a as P,c as U,m as W,i as G,G as J,f as K}from"./vue.esm-bundler-BuXXOL77.js";const X={class:"neu-accordion"},s=M({__name:"Accordion",props:{modelValue:{},multiple:{type:Boolean,default:!1},defaultOpen:{}},emits:["update:modelValue"],setup(o,{emit:d}){const i=o,r=d;function m(n){return n===void 0?[]:Array.isArray(n)?n:[n]}const a=F(i.modelValue!==void 0?m(i.modelValue):m(i.defaultOpen));$(()=>i.modelValue,n=>{n!==void 0&&(a.value=m(n))});function y(n){a.value.includes(n)?a.value=a.value.filter(e=>e!==n):a.value=i.multiple?[...a.value,n]:[n],r("update:modelValue",i.multiple?a.value:a.value[0]??"")}function h(n){return a.value.includes(n)}return Q("neu-accordion",{toggle:y,isOpen:h}),(n,t)=>(x(),I("div",X,[b(n.$slots,"default")]))}});s.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultOpen",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Accordion/Accordion.vue"]};const Y=["disabled","aria-expanded"],Z={class:"neu-accordion-item__title"},ee={key:0,class:"neu-accordion-item__body"},ne={class:"neu-accordion-item__content"},l=M({__name:"AccordionItem",props:{value:{},title:{},disabled:{type:Boolean,default:!1}},setup(o){const d=o,i=W("neu-accordion"),r=U(()=>i.isOpen(d.value));function m(){d.disabled||i.toggle(d.value)}function a(t){const e=t;e.style.height="0",e.style.overflow="hidden",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height=e.scrollHeight+"px"}))}function y(t){const e=t;e.style.height="auto",e.style.overflow=""}function h(t){const e=t;e.style.height=e.scrollHeight+"px",e.style.overflow="hidden",requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.height="0"}))}function n(t){const e=t;e.style.height="",e.style.overflow=""}return(t,e)=>(x(),I("div",{class:q(["neu-accordion-item",{"neu-accordion-item--open":r.value,"neu-accordion-item--disabled":o.disabled}])},[c("button",{type:"button",disabled:o.disabled,"aria-expanded":r.value,class:"neu-accordion-item__header",onClick:m},[c("span",Z,[b(t.$slots,"title",{},()=>[G(J(o.title),1)])]),c("span",{class:q(["neu-accordion-item__chevron",{"neu-accordion-item__chevron--open":r.value}]),"aria-hidden":"true"},[...e[0]||(e[0]=[c("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[c("polyline",{points:"6 9 12 15 18 9"})],-1)])],2)],8,Y),R(P,{onEnter:a,onAfterEnter:y,onLeave:h,onAfterLeave:n},{default:H(()=>[r.value?(x(),I("div",ee,[c("div",ne,[b(t.$slots,"default")])])):K("",!0)]),_:3})],2))}});l.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Accordion/AccordionItem.vue"]};const te={title:"Components/Accordion",component:s,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}}},g=[{value:"q1",title:"¿Qué es el diseño neumórfico?",content:"El neumorfismo es una tendencia de diseño que combina el diseño plano y el skeuomorfismo. Utiliza sombras suaves para dar la ilusión de que los elementos están extruídos o presionados desde el fondo."},{value:"q2",title:"¿Cómo instalo jah-ui en mi proyecto?",content:'Puedes instalar jah-ui usando pnpm, npm o yarn. Una vez instalado, importa los componentes que necesitas desde "jah-ui" y úsalos directamente en tus templates de Vue 3.'},{value:"q3",title:"¿Los componentes son accesibles?",content:"Sí. Todos los componentes incluyen atributos ARIA apropiados, soporte de teclado y roles semánticos para garantizar la accesibilidad."},{value:"q4",title:"¿Puedo personalizar los colores?",content:"Los colores base del sistema neumórfico se definen como variables CSS (--neu-bg, --neu-shadow-light, --neu-shadow-dark) en cada componente, por lo que puedes sobrescribirlas fácilmente."}],u={render:o=>({components:{Accordion:s,AccordionItem:l},setup:()=>({args:o,faqItems:g}),template:`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `}),args:{}},p={name:"Con ítem abierto por defecto",render:o=>({components:{Accordion:s,AccordionItem:l},setup:()=>({args:o,faqItems:g}),template:`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `}),args:{defaultOpen:"q1"}},f={name:"Múltiples ítems abiertos",render:o=>({components:{Accordion:s,AccordionItem:l},setup:()=>({args:o,faqItems:g}),template:`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `}),args:{multiple:!0,defaultOpen:["q1","q3"]}},A={name:"Con ítem deshabilitado",render:o=>({components:{Accordion:s,AccordionItem:l},setup:()=>({args:o,faqItems:g}),template:`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="q1" title="¿Qué es el diseño neumórfico?">
          El neumorfismo es una tendencia de diseño que combina el diseño plano y el skeuomorfismo.
        </AccordionItem>
        <AccordionItem value="q2" title="Ítem deshabilitado" disabled>
          Este contenido no se puede abrir.
        </AccordionItem>
        <AccordionItem value="q3" title="¿Los componentes son accesibles?">
          Sí. Todos los componentes incluyen atributos ARIA apropiados.
        </AccordionItem>
      </Accordion>
    `}),args:{}},v={name:"Con título personalizado",render:o=>({components:{Accordion:s,AccordionItem:l},setup:()=>({args:o}),template:`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="info">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Información importante
            </span>
          </template>
          Este ítem usa el slot <code>#title</code> para personalizar el encabezado con un ícono y estilos propios.
        </AccordionItem>
        <AccordionItem value="warning">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Advertencia
            </span>
          </template>
          Ten cuidado con esta configuración, puede afectar el comportamiento de la aplicación.
        </AccordionItem>
      </Accordion>
    `}),args:{}};var k,w,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup: () => ({
      args,
      faqItems
    }),
    template: \`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    \`
  }),
  args: {}
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,V,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Con ítem abierto por defecto',
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup: () => ({
      args,
      faqItems
    }),
    template: \`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    \`
  }),
  args: {
    defaultOpen: 'q1'
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var O,z,S;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Múltiples ítems abiertos',
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup: () => ({
      args,
      faqItems
    }),
    template: \`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    \`
  }),
  args: {
    multiple: true,
    defaultOpen: ['q1', 'q3']
  }
}`,...(S=(z=f.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var E,L,B;A.parameters={...A.parameters,docs:{...(E=A.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Con ítem deshabilitado',
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup: () => ({
      args,
      faqItems
    }),
    template: \`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="q1" title="¿Qué es el diseño neumórfico?">
          El neumorfismo es una tendencia de diseño que combina el diseño plano y el skeuomorfismo.
        </AccordionItem>
        <AccordionItem value="q2" title="Ítem deshabilitado" disabled>
          Este contenido no se puede abrir.
        </AccordionItem>
        <AccordionItem value="q3" title="¿Los componentes son accesibles?">
          Sí. Todos los componentes incluyen atributos ARIA apropiados.
        </AccordionItem>
      </Accordion>
    \`
  }),
  args: {}
}`,...(B=(L=A.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var T,N,D;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Con título personalizado',
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="info">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Información importante
            </span>
          </template>
          Este ítem usa el slot <code>#title</code> para personalizar el encabezado con un ícono y estilos propios.
        </AccordionItem>
        <AccordionItem value="warning">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Advertencia
            </span>
          </template>
          Ten cuidado con esta configuración, puede afectar el comportamiento de la aplicación.
        </AccordionItem>
      </Accordion>
    \`
  }),
  args: {}
}`,...(D=(N=v.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const ae=["Default","DefaultOpen","Multiple","WithDisabled","CustomTitle"];export{v as CustomTitle,u as Default,p as DefaultOpen,f as Multiple,A as WithDisabled,ae as __namedExportsOrder,te as default};
