import{k as U,g as a,G as r,f as l,s as t,d as v,x as n,A as y}from"./vue.esm-bundler-BuXXOL77.js";const X={key:0,class:"neu-toggle__content"},Y={key:0,class:"neu-toggle__label"},Z=["checked","disabled"],_={key:1,class:"neu-toggle__content"},ee={key:0,class:"neu-toggle__label"},p=U({__name:"Toggle",props:{modelValue:{type:Boolean,default:!1},label:{},hint:{},labelPosition:{default:"right"},size:{default:"md"},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:h}){const o=e,k=h;function Q(){o.disabled||(k("update:modelValue",!o.modelValue),k("change",!o.modelValue))}return(ae,ne)=>(n(),a("label",{class:t(["neu-toggle",`neu-toggle--${e.size}`,`neu-toggle--label-${e.labelPosition}`,{"neu-toggle--disabled":e.disabled,"neu-toggle--error":e.error}])},[(e.label||e.hint)&&e.labelPosition==="left"?(n(),a("span",X,[e.label?(n(),a("span",Y,r(e.label),1)):l("",!0),e.hint?(n(),a("span",{key:1,class:t(["neu-toggle__hint",{"neu-toggle__hint--error":e.error}])},r(e.hint),3)):l("",!0)])):l("",!0),v("input",{type:"checkbox",class:"neu-toggle__native",checked:e.modelValue,disabled:e.disabled,onChange:Q},null,40,Z),v("span",{class:t(["neu-toggle__track",`neu-toggle__track--${e.size}`,{"neu-toggle__track--on":e.modelValue,"neu-toggle__track--error":e.error}])},[v("span",{class:t(["neu-toggle__thumb",`neu-toggle__thumb--${e.size}`,{"neu-toggle__thumb--on":e.modelValue}])},null,2)],2),(e.label||e.hint)&&e.labelPosition==="right"?(n(),a("span",_,[e.label?(n(),a("span",ee,r(e.label),1)):l("",!0),e.hint?(n(),a("span",{key:1,class:t(["neu-toggle__hint",{"neu-toggle__hint--error":e.error}])},r(e.hint),3)):l("",!0)])):l("",!0)],2))}});p.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Toggle/Toggle.vue"]};const oe={title:"Components/Toggle",component:p,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]},labelPosition:{control:"select",options:["left","right"]}}},s={args:{label:"Activar notificaciones"}},i={args:{label:"Modo oscuro",modelValue:!0}},d={name:"Label izquierda",args:{label:"Sincronización automática",modelValue:!0,labelPosition:"left"}},u={name:"Con Hint",args:{label:"Correos de marketing",hint:"Recibirás ofertas y novedades semanales.",modelValue:!1}},c={name:"Estado Error",args:{label:"Términos y condiciones",hint:"Debes aceptar los términos para continuar.",error:!0,modelValue:!1}},m={args:{label:"Opción no disponible",disabled:!0,modelValue:!1}},g={name:"Disabled + On",args:{label:"Opción fija",disabled:!0,modelValue:!0}},f={render:()=>({components:{Toggle:p},template:`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Toggle size="sm" label="Small"  :model-value="true" />
        <Toggle size="md" label="Medium" :model-value="true" />
        <Toggle size="lg" label="Large"  :model-value="true" />
      </div>
    `})},b={name:"Reactivo (v-model)",render:()=>({components:{Toggle:p},setup(){const e=y(!1),h=y(!0),o=y(!1);return{darkMode:e,notifs:h,autoSave:o}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Preferencias</p>
        <Toggle v-model="darkMode" label="Modo oscuro"            hint="Cambia el tema de la interfaz." />
        <Toggle v-model="notifs"   label="Notificaciones"         hint="Alertas en tiempo real." />
        <Toggle v-model="autoSave" label="Guardado automático"    hint="Guarda cada 5 minutos." />
      </div>
    `})};var V,T,z;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Activar notificaciones'
  }
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var S,x,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Modo oscuro',
    modelValue: true
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,M,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Label izquierda',
  args: {
    label: 'Sincronización automática',
    modelValue: true,
    labelPosition: 'left'
  }
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,q,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'Correos de marketing',
    hint: 'Recibirás ofertas y novedades semanales.',
    modelValue: false
  }
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,B,N;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'Términos y condiciones',
    hint: 'Debes aceptar los términos para continuar.',
    error: true,
    modelValue: false
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var R,w,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Opción no disponible',
    disabled: true,
    modelValue: false
  }
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var G,j,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Disabled + On',
  args: {
    label: 'Opción fija',
    disabled: true,
    modelValue: true
  }
}`,...(H=(j=g.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var W,$,F;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Toggle size="sm" label="Small"  :model-value="true" />
        <Toggle size="md" label="Medium" :model-value="true" />
        <Toggle size="lg" label="Large"  :model-value="true" />
      </div>
    \`
  })
}`,...(F=($=f.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var I,J,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Reactivo (v-model)',
  render: () => ({
    components: {
      Toggle
    },
    setup() {
      const darkMode = ref(false);
      const notifs = ref(true);
      const autoSave = ref(false);
      return {
        darkMode,
        notifs,
        autoSave
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Preferencias</p>
        <Toggle v-model="darkMode" label="Modo oscuro"            hint="Cambia el tema de la interfaz." />
        <Toggle v-model="notifs"   label="Notificaciones"         hint="Alertas en tiempo real." />
        <Toggle v-model="autoSave" label="Guardado automático"    hint="Guarda cada 5 minutos." />
      </div>
    \`
  })
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const te=["Default","On","LabelLeft","WithHint","WithError","Disabled","DisabledOn","Sizes","Reactive"];export{s as Default,m as Disabled,g as DisabledOn,d as LabelLeft,i as On,b as Reactive,f as Sizes,c as WithError,u as WithHint,te as __namedExportsOrder,oe as default};
