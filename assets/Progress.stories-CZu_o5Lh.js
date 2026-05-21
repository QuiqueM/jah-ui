import{k as L,g as r,G as p,f as c,d as f,t as U,s as b,c as y,x as s,v as W,w as F,A as G}from"./vue.esm-bundler-BuXXOL77.js";const O={class:"neu-progress-root"},H={key:0,class:"neu-progress__header"},J={key:0,class:"neu-progress__label"},K={key:1,class:"neu-progress__value"},Q=["aria-valuenow","aria-valuemax","aria-label"],n=L({__name:"Progress",props:{value:{default:0},max:{default:100},variant:{default:"primary"},size:{default:"md"},rounded:{default:"full"},label:{},showValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(e){const a=e,v=y(()=>{if(a.indeterminate)return 40;const g=Math.min(Math.max(a.value,0),a.max);return Math.round(g/a.max*100)}),E=y(()=>`${v.value}%`);return(g,X)=>(s(),r("div",O,[e.label||e.showValue?(s(),r("div",H,[e.label?(s(),r("span",J,p(e.label),1)):c("",!0),e.showValue&&!e.indeterminate?(s(),r("span",K,p(E.value),1)):c("",!0)])):c("",!0),f("div",{class:b(["neu-progress__track",`neu-progress__track--${e.size}`,`neu-progress__track--rounded-${e.rounded}`]),role:"progressbar","aria-valuenow":e.indeterminate?void 0:e.value,"aria-valuemin":0,"aria-valuemax":e.max,"aria-label":e.label},[f("div",{class:b(["neu-progress__fill",`neu-progress__fill--${e.variant}`,`neu-progress__fill--rounded-${e.rounded}`,{"neu-progress__fill--indeterminate":e.indeterminate,"neu-progress__fill--animated":e.animated&&!e.indeterminate}]),style:U(e.indeterminate?void 0:{width:`${v.value}%`})},null,6)],10,Q)]))}});n.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'full'"}},{name:"label",required:!1,type:{name:"string"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"animated",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Progress/Progress.vue"]};const Z={title:"Components/Progress",component:n,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{variant:{control:"select",options:["primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","full"]},value:{control:{type:"range",min:0,max:100,step:1}}}},l={args:{value:60,label:"Progreso",showValue:!0}},t={name:"Todos los variants",render:()=>({components:{Progress:n},template:`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" :value="72" label="Primary"  show-value />
        <Progress variant="success" :value="90" label="Success"  show-value />
        <Progress variant="warning" :value="45" label="Warning"  show-value />
        <Progress variant="danger"  :value="28" label="Danger"   show-value />
      </div>
    `})},o={name:"Tamaños",render:()=>({components:{Progress:n},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress size="sm" :value="65" label="Small" />
        <Progress size="md" :value="65" label="Medium" />
        <Progress size="lg" :value="65" label="Large" />
      </div>
    `})},i={name:"Animado (shimmer)",args:{value:70,label:"Subiendo archivo...",showValue:!0,animated:!0}},d={name:"Indeterminado",args:{label:"Cargando...",indeterminate:!0}},u={name:"Indeterminado · Variants",render:()=>({components:{Progress:n},template:`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" indeterminate label="Conectando..." />
        <Progress variant="success" indeterminate label="Sincronizando..." />
        <Progress variant="warning" indeterminate label="Procesando..." />
        <Progress variant="danger"  indeterminate label="Verificando..." />
      </div>
    `})},m={name:"Reactivo",render:()=>({components:{Progress:n},setup(){const e=G(0);let a;return W(()=>{a=setInterval(()=>{e.value=e.value>=100?0:e.value+2},80)}),F(()=>clearInterval(a)),{value:e}},template:`
      <div style="padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress :value="value" label="Instalando paquetes..." show-value animated />
      </div>
    `})};var h,P,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Progreso',
    showValue: true
  }
}`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var x,V,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Todos los variants',
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" :value="72" label="Primary"  show-value />
        <Progress variant="success" :value="90" label="Success"  show-value />
        <Progress variant="warning" :value="45" label="Warning"  show-value />
        <Progress variant="danger"  :value="28" label="Danger"   show-value />
      </div>
    \`
  })
}`,...(k=(V=t.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var S,z,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Tamaños',
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress size="sm" :value="65" label="Small" />
        <Progress size="md" :value="65" label="Medium" />
        <Progress size="lg" :value="65" label="Large" />
      </div>
    \`
  })
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var q,C,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Animado (shimmer)',
  args: {
    value: 70,
    label: 'Subiendo archivo...',
    showValue: true,
    animated: true
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var B,T,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Indeterminado',
  args: {
    label: 'Cargando...',
    indeterminate: true
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,A,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Indeterminado · Variants',
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" indeterminate label="Conectando..." />
        <Progress variant="success" indeterminate label="Sincronizando..." />
        <Progress variant="warning" indeterminate label="Procesando..." />
        <Progress variant="danger"  indeterminate label="Verificando..." />
      </div>
    \`
  })
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var R,N,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Reactivo',
  render: () => ({
    components: {
      Progress
    },
    setup() {
      const value = ref(0);
      let interval: ReturnType<typeof setInterval>;
      onMounted(() => {
        interval = setInterval(() => {
          value.value = value.value >= 100 ? 0 : value.value + 2;
        }, 80);
      });
      onUnmounted(() => clearInterval(interval));
      return {
        value
      };
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress :value="value" label="Instalando paquetes..." show-value animated />
      </div>
    \`
  })
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const ee=["Default","Variants","Sizes","Animated","Indeterminate","IndeterminateVariants","Reactive"];export{i as Animated,l as Default,d as Indeterminate,u as IndeterminateVariants,m as Reactive,o as Sizes,t as Variants,ee as __namedExportsOrder,Z as default};
