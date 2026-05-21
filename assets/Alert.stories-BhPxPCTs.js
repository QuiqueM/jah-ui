import{k as P,e as Q,M as U,a as Y,x as n,g as s,s as Z,C as A,d as r,f as o,i as ee,G as re,A as F}from"./vue.esm-bundler-BuXXOL77.js";const te={key:0,class:"neu-alert__icon","aria-hidden":"true"},ae={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ne={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},se={key:2,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},le={key:3,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},oe={class:"neu-alert__body"},ie={key:0,class:"neu-alert__title"},de={key:1,class:"neu-alert__content"},t=P({__name:"Alert",props:{variant:{default:"info"},title:{},icon:{type:Boolean,default:!0},dismissible:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:J}){const x=J;function K(){x("update:modelValue",!1),x("close")}return(l,a)=>(n(),Q(Y,{name:"neu-alert"},{default:U(()=>[e.modelValue?(n(),s("div",{key:0,role:"alert",class:Z(["neu-alert",`neu-alert--${e.variant}`])},[e.icon?(n(),s("span",te,[A(l.$slots,"icon",{},()=>[e.variant==="info"?(n(),s("svg",ae,[...a[0]||(a[0]=[r("circle",{cx:"12",cy:"12",r:"10"},null,-1),r("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),r("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):e.variant==="success"?(n(),s("svg",ne,[...a[1]||(a[1]=[r("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},null,-1),r("polyline",{points:"22 4 12 14.01 9 11.01"},null,-1)])])):e.variant==="warning"?(n(),s("svg",se,[...a[2]||(a[2]=[r("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},null,-1),r("line",{x1:"12",y1:"9",x2:"12",y2:"13"},null,-1),r("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},null,-1)])])):(n(),s("svg",le,[...a[3]||(a[3]=[r("circle",{cx:"12",cy:"12",r:"10"},null,-1),r("line",{x1:"15",y1:"9",x2:"9",y2:"15"},null,-1),r("line",{x1:"9",y1:"9",x2:"15",y2:"15"},null,-1)])]))])])):o("",!0),r("div",oe,[e.title||l.$slots.title?(n(),s("p",ie,[A(l.$slots,"title",{},()=>[ee(re(e.title),1)])])):o("",!0),l.$slots.default?(n(),s("div",de,[A(l.$slots,"default")])):o("",!0)]),e.dismissible?(n(),s("button",{key:1,type:"button",class:"neu-alert__close","aria-label":"Cerrar alerta",onClick:K},[...a[4]||(a[4]=[r("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[r("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])):o("",!0)],2)):o("",!0)]),_:3}))}});t.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"title",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"}],slots:[{name:"icon"},{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Alert/Alert.vue"]};const ce={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{variant:{control:"select",options:["info","success","warning","danger"]}}},i={args:{variant:"info",title:"Información",modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:`
      <Alert v-bind="args" style="max-width: 30rem;">
        Tu sesión expirará en 10 minutos. Guarda tus cambios para no perder el progreso.
      </Alert>
    `})},d={args:{variant:"success",title:"¡Operación exitosa!",modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:`
      <Alert v-bind="args" style="max-width: 30rem;">
        El registro se ha guardado correctamente en la base de datos.
      </Alert>
    `})},u={args:{variant:"warning",title:"Advertencia",modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:`
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta acción modificará configuraciones globales del sistema.
      </Alert>
    `})},c={args:{variant:"danger",title:"Error al procesar",modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:`
      <Alert v-bind="args" style="max-width: 30rem;">
        No se pudo completar la operación. Verifica tu conexión e intenta de nuevo.
      </Alert>
    `})},m={name:"Descartable",render:()=>({components:{Alert:t},setup(){return{visible:F(!0)}},template:`
      <div style="max-width: 30rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <button
          v-if="!visible"
          @click="visible = true"
          style="align-self:flex-start;padding:0.5rem 1rem;border:none;border-radius:0.5rem;
            background:#e0e5ec;font-family:inherit;font-weight:500;cursor:pointer;
            box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #fff;"
        >
          Mostrar alerta
        </button>
        <Alert
          v-model="visible"
          variant="info"
          title="Alerta descartable"
          dismissible
        >
          Haz clic en la X para cerrar esta alerta.
        </Alert>
      </div>
    `})},p={name:"Sin ícono",args:{variant:"success",title:"Sin ícono",icon:!1,modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:`
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta alerta no muestra el ícono de variante.
      </Alert>
    `})},v={name:"Solo título",args:{variant:"warning",title:"Solo título sin cuerpo",modelValue:!0},render:e=>({components:{Alert:t},setup:()=>({args:e}),template:'<Alert v-bind="args" style="max-width: 30rem;" />'})},g={name:"Todas las variantes",render:()=>({components:{Alert:t},template:`
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    :model-value="true">Mensaje informativo para el usuario.</Alert>
        <Alert variant="success" title="Éxito"   :model-value="true">La operación se completó correctamente.</Alert>
        <Alert variant="warning" title="Atención" :model-value="true">Revisa los datos antes de continuar.</Alert>
        <Alert variant="danger"  title="Error"   :model-value="true">Ocurrió un problema al procesar la solicitud.</Alert>
      </div>
    `})},f={name:"Todas descartables",render:()=>({components:{Alert:t},setup(){return{v:F({info:!0,success:!0,warning:!0,danger:!0})}},template:`
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    v-model="v.info"    dismissible>Mensaje informativo.</Alert>
        <Alert variant="success" title="Éxito"   v-model="v.success" dismissible>Operación exitosa.</Alert>
        <Alert variant="warning" title="Atención" v-model="v.warning" dismissible>Revisa los datos.</Alert>
        <Alert variant="danger"  title="Error"   v-model="v.danger"  dismissible>Ocurrió un problema.</Alert>
      </div>
    `})};var b,y,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Información',
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`
      <Alert v-bind="args" style="max-width: 30rem;">
        Tu sesión expirará en 10 minutos. Guarda tus cambios para no perder el progreso.
      </Alert>
    \`
  })
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,k,V;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: '¡Operación exitosa!',
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`
      <Alert v-bind="args" style="max-width: 30rem;">
        El registro se ha guardado correctamente en la base de datos.
      </Alert>
    \`
  })
}`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var S,E,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Advertencia',
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta acción modificará configuraciones globales del sistema.
      </Alert>
    \`
  })
}`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var B,j,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Error al procesar',
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`
      <Alert v-bind="args" style="max-width: 30rem;">
        No se pudo completar la operación. Verifica tu conexión e intenta de nuevo.
      </Alert>
    \`
  })
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var O,T,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Descartable',
  render: () => ({
    components: {
      Alert
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div style="max-width: 30rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <button
          v-if="!visible"
          @click="visible = true"
          style="align-self:flex-start;padding:0.5rem 1rem;border:none;border-radius:0.5rem;
            background:#e0e5ec;font-family:inherit;font-weight:500;cursor:pointer;
            box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #fff;"
        >
          Mostrar alerta
        </button>
        <Alert
          v-model="visible"
          variant="info"
          title="Alerta descartable"
          dismissible
        >
          Haz clic en la X para cerrar esta alerta.
        </Alert>
      </div>
    \`
  })
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,N,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Sin ícono',
  args: {
    variant: 'success',
    title: 'Sin ícono',
    icon: false,
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta alerta no muestra el ícono de variante.
      </Alert>
    \`
  })
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var $,q,z;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Solo título',
  args: {
    variant: 'warning',
    title: 'Solo título sin cuerpo',
    modelValue: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: \`<Alert v-bind="args" style="max-width: 30rem;" />\`
  })
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var L,R,G;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Todas las variantes',
  render: () => ({
    components: {
      Alert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    :model-value="true">Mensaje informativo para el usuario.</Alert>
        <Alert variant="success" title="Éxito"   :model-value="true">La operación se completó correctamente.</Alert>
        <Alert variant="warning" title="Atención" :model-value="true">Revisa los datos antes de continuar.</Alert>
        <Alert variant="danger"  title="Error"   :model-value="true">Ocurrió un problema al procesar la solicitud.</Alert>
      </div>
    \`
  })
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,W,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Todas descartables',
  render: () => ({
    components: {
      Alert
    },
    setup() {
      return {
        v: ref({
          info: true,
          success: true,
          warning: true,
          danger: true
        })
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    v-model="v.info"    dismissible>Mensaje informativo.</Alert>
        <Alert variant="success" title="Éxito"   v-model="v.success" dismissible>Operación exitosa.</Alert>
        <Alert variant="warning" title="Atención" v-model="v.warning" dismissible>Revisa los datos.</Alert>
        <Alert variant="danger"  title="Error"   v-model="v.danger"  dismissible>Ocurrió un problema.</Alert>
      </div>
    \`
  })
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const me=["Info","Success","Warning","Danger","Dismissible","NoIcon","TitleOnly","AllVariants","AllDismissible"];export{f as AllDismissible,g as AllVariants,c as Danger,m as Dismissible,i as Info,p as NoIcon,d as Success,v as TitleOnly,u as Warning,me as __namedExportsOrder,ce as default};
