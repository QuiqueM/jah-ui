import{k as le,J as ie,g as n,G as c,f as a,d as t,C,s as B,A as V,c as ue,x as o}from"./vue.esm-bundler-BuXXOL77.js";const ce={class:"neu-input-root"},de={key:0,class:"neu-input__label"},pe={key:0,class:"neu-input__icon neu-input__icon--left"},me={key:1,class:"neu-input__affix neu-input__affix--prefix"},fe=["type","value","placeholder","disabled"],ge={key:2,class:"neu-input__affix neu-input__affix--suffix"},he={key:3,class:"neu-input__icon neu-input__icon--right"},be=["tabindex"],xe={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ve={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},l=le({__name:"Input",props:{modelValue:{},type:{default:"text"},placeholder:{},prefix:{},suffix:{},size:{default:"md"},rounded:{default:"lg"},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},label:{},hint:{}},emits:["update:modelValue","focus","blur"],setup(e,{emit:oe}){const k=e,ae=oe,I=ie(),i=V(!1),w=V(!1),te=ue(()=>k.type==="password"?i.value?"text":"password":k.type);function se(s){const r=s.target;ae("update:modelValue",k.type==="number"?Number(r.value):r.value)}return(s,r)=>(o(),n("div",ce,[e.label?(o(),n("label",de,c(e.label),1)):a("",!0),t("div",{class:B(["neu-input__wrapper",`neu-input__wrapper--${e.size}`,`neu-input__wrapper--rounded-${e.rounded}`,{"neu-input__wrapper--focused":w.value,"neu-input__wrapper--error":e.error,"neu-input__wrapper--disabled":e.disabled}])},[I["icon-left"]?(o(),n("span",pe,[C(s.$slots,"icon-left")])):a("",!0),e.prefix?(o(),n("span",me,c(e.prefix),1)):a("",!0),t("input",{type:te.value,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,class:"neu-input__field",onInput:se,onFocus:r[0]||(r[0]=u=>{w.value=!0,s.$emit("focus",u)}),onBlur:r[1]||(r[1]=u=>{w.value=!1,s.$emit("blur",u)})},null,40,fe),e.suffix?(o(),n("span",ge,c(e.suffix),1)):a("",!0),I["icon-right"]&&e.type!=="password"?(o(),n("span",he,[C(s.$slots,"icon-right")])):a("",!0),e.type==="password"?(o(),n("button",{key:4,type:"button",class:"neu-input__password-toggle",tabindex:e.disabled?-1:0,onClick:r[2]||(r[2]=u=>i.value=!i.value)},[i.value?(o(),n("svg",ve,[...r[4]||(r[4]=[t("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),t("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),t("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(o(),n("svg",xe,[...r[3]||(r[3]=[t("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),t("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))],8,be)):a("",!0)],2),e.hint?(o(),n("span",{key:1,class:B(["neu-input__hint",{"neu-input__hint--error":e.error}])},c(e.hint),3)):a("",!0)]))}});l.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"number"'},{name:'"password"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"prefix",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"icon-left"},{name:"icon-right"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Input/Input.vue"]};const ke={title:"Components/Input",component:l,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{type:{control:"select",options:["text","number","password"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl","full"]}}},d={args:{label:"Nombre",placeholder:"Escribe tu nombre",type:"text"}},p={args:{label:"Cantidad",placeholder:"0",type:"number",suffix:"kg"}},m={args:{label:"Contraseña",placeholder:"••••••••",type:"password"}},f={name:"Prefix & Suffix",args:{label:"Precio",placeholder:"0.00",prefix:"$",suffix:"MXN"}},g={name:"Con Hint",args:{label:"Correo",placeholder:"correo@ejemplo.com",hint:"Te enviaremos un código de verificación."}},h={name:"Estado Error",args:{label:"Correo",placeholder:"correo@ejemplo.com",modelValue:"correo-invalido",error:!0,hint:"El correo no tiene un formato válido."}},b={args:{label:"Campo deshabilitado",placeholder:"No editable",disabled:!0}},x={name:"Icon / Left",args:{label:"Buscar",placeholder:"Buscar..."},render:e=>({components:{Input:l},setup:()=>({args:e}),template:`
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </template>
      </Input>
    `})},v={name:"Icon / Right",args:{label:"Correo",placeholder:"correo@ejemplo.com"},render:e=>({components:{Input:l},setup:()=>({args:e}),template:`
      <Input v-bind="args">
        <template #icon-right>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        </template>
      </Input>
    `})},y={name:"Completo (prefix + suffix + iconos)",args:{label:"Monto",placeholder:"0.00",prefix:"$",suffix:"MXN"},render:e=>({components:{Input:l},setup:()=>({args:e}),template:`
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </template>
      </Input>
    `})};var j,N,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    type: 'text'
  }
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,E,M;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Cantidad',
    placeholder: '0',
    type: 'number',
    suffix: 'kg'
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,q,H;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '••••••••',
    type: 'password'
  }
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var W,P,z;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Prefix & Suffix',
  args: {
    label: 'Precio',
    placeholder: '0.00',
    prefix: '$',
    suffix: 'MXN'
  }
}`,...(z=(P=f.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var T,F,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    hint: 'Te enviaremos un código de verificación.'
  }
}`,...(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,X,A;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    modelValue: 'correo-invalido',
    error: true,
    hint: 'El correo no tiene un formato válido.'
  }
}`,...(A=(X=h.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var D,G,J;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Campo deshabilitado',
    placeholder: 'No editable',
    disabled: true
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var O,K,Q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Icon / Left',
  args: {
    label: 'Buscar',
    placeholder: 'Buscar...'
  },
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: \`
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </template>
      </Input>
    \`
  })
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Icon / Right',
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com'
  },
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: \`
      <Input v-bind="args">
        <template #icon-right>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        </template>
      </Input>
    \`
  })
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Completo (prefix + suffix + iconos)',
  args: {
    label: 'Monto',
    placeholder: '0.00',
    prefix: '$',
    suffix: 'MXN'
  },
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: \`
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </template>
      </Input>
    \`
  })
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const we=["Text","Number","Password","WithPrefix","WithHint","WithError","Disabled","WithIconLeft","WithIconRight","Complete"];export{y as Complete,b as Disabled,p as Number,m as Password,d as Text,h as WithError,g as WithHint,x as WithIconLeft,v as WithIconRight,f as WithPrefix,we as __namedExportsOrder,ke as default};
