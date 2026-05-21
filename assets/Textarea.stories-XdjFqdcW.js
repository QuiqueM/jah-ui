import{k as O,g as r,G as t,f as o,d as g,t as J,s as b,A as K,c as P,x as n}from"./vue.esm-bundler-BuXXOL77.js";const Q={class:"neu-textarea-root"},U={key:0,class:"neu-textarea__label"},X=["value","placeholder","rows","disabled","readonly","maxlength"],Y={key:1,class:"neu-textarea__footer"},Z={key:1,class:"neu-textarea__count"},G=O({__name:"Textarea",props:{modelValue:{default:""},label:{},placeholder:{},rows:{default:4},size:{default:"md"},rounded:{default:"lg"},resize:{default:"vertical"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{},hint:{},maxlength:{},showCount:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:F}){const I=e,L=F,p=K(!1),A=P(()=>{var f;return((f=I.modelValue)==null?void 0:f.length)??0});return(f,a)=>(n(),r("div",Q,[e.label?(n(),r("label",U,t(e.label),1)):o("",!0),g("div",{class:b(["neu-textarea__wrapper",`neu-textarea__wrapper--${e.size}`,`neu-textarea__wrapper--rounded-${e.rounded}`,{"neu-textarea__wrapper--focused":p.value,"neu-textarea__wrapper--error":!!e.error,"neu-textarea__wrapper--disabled":e.disabled}])},[g("textarea",{class:"neu-textarea__field",style:J({resize:e.resize}),value:e.modelValue,placeholder:e.placeholder,rows:e.rows,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,onInput:a[0]||(a[0]=h=>L("update:modelValue",h.target.value)),onFocus:a[1]||(a[1]=h=>p.value=!0),onBlur:a[2]||(a[2]=h=>p.value=!1)},null,44,X)],2),e.error||e.hint||e.showCount&&e.maxlength?(n(),r("div",Y,[e.error||e.hint?(n(),r("span",{key:0,class:b(["neu-textarea__hint",{"neu-textarea__hint--error":!!e.error}])},t(e.error??e.hint),3)):o("",!0),e.showCount&&e.maxlength?(n(),r("span",Z,t(A.value)+" / "+t(e.maxlength),1)):o("",!0)])):o("",!0)]))}});G.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"resize",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"vertical"'},{name:'"horizontal"'},{name:'"both"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"maxlength",required:!1,type:{name:"number"}},{name:"showCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Textarea/Textarea.vue"]};const ee={title:"Components/Textarea",component:G,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl"]},resize:{control:"select",options:["none","vertical","horizontal","both"]}}},l={args:{label:"Descripción",placeholder:"Escribe algo..."}},s={name:"Con Hint",args:{label:"Comentario",placeholder:"Deja tu comentario...",hint:"Máximo 200 caracteres."}},u={name:"Estado Error",args:{label:"Comentario",placeholder:"Deja tu comentario...",modelValue:"Texto inválido",error:"El campo no puede contener caracteres especiales."}},d={name:"Con Contador",args:{label:"Bio",placeholder:"Cuéntanos sobre ti...",maxlength:160,showCount:!0,rows:3}},m={name:"Sin Resize",args:{label:"Notas",placeholder:"Escribe tus notas...",resize:"none",rows:5}},i={args:{label:"Campo deshabilitado",modelValue:"Este campo no se puede editar.",disabled:!0}},c={name:"Tamaño Grande",args:{label:"Mensaje",placeholder:"Escribe tu mensaje...",size:"lg",rows:6,maxlength:500,showCount:!0}};var x,y,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    placeholder: 'Escribe algo...'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,w,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'Comentario',
    placeholder: 'Deja tu comentario...',
    hint: 'Máximo 200 caracteres.'
  }
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var V,E,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'Comentario',
    placeholder: 'Deja tu comentario...',
    modelValue: 'Texto inválido',
    error: 'El campo no puede contener caracteres especiales.'
  }
}`,...(q=(E=u.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,S,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Con Contador',
  args: {
    label: 'Bio',
    placeholder: 'Cuéntanos sobre ti...',
    maxlength: 160,
    showCount: true,
    rows: 3
  }
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,k,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sin Resize',
  args: {
    label: 'Notas',
    placeholder: 'Escribe tus notas...',
    resize: 'none',
    rows: 5
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,W,H;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Campo deshabilitado',
    modelValue: 'Este campo no se puede editar.',
    disabled: true
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,R,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Tamaño Grande',
  args: {
    label: 'Mensaje',
    placeholder: 'Escribe tu mensaje...',
    size: 'lg',
    rows: 6,
    maxlength: 500,
    showCount: true
  }
}`,...($=(R=c.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const ae=["Default","WithHint","WithError","WithCounter","NoResize","Disabled","Large"];export{l as Default,i as Disabled,c as Large,m as NoResize,d as WithCounter,u as WithError,s as WithHint,ae as __namedExportsOrder,ee as default};
