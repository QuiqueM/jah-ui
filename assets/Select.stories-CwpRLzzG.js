import{k as oe,v as te,w as se,g as r,G as v,f as g,d,s as m,j as re,M as ue,a as ie,A as p,c as ce,x as u,F as de,B as me,N as pe}from"./vue.esm-bundler-BuXXOL77.js";const fe={key:0,class:"neu-select__label"},ve=["disabled","aria-expanded"],ge={class:"neu-select__value"},be=["aria-selected","aria-disabled","onMouseenter","onMousedown"],he={key:0,class:"neu-select__check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},w=oe({__name:"Select",props:{modelValue:{default:null},options:{},placeholder:{default:"Selecciona una opción"},label:{},hint:{},size:{default:"md"},rounded:{default:"lg"},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(a,{emit:ee}){const o=a,C=ee,s=p(!1),t=p(-1),E=p(null),D=p(null),S=ce(()=>o.options.find(e=>e.value===o.modelValue)??null);function ae(){o.disabled||(s.value?f():P())}function P(){s.value=!0,t.value=o.options.findIndex(e=>e.value===o.modelValue),t.value===-1&&(t.value=0)}function f(){s.value=!1,t.value=-1}function q(e){e.disabled||(C("update:modelValue",e.value),C("change",e.value),f())}function ne(e){if(!s.value){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),P());return}if(e.key==="Escape"){e.preventDefault(),f();return}if(e.key==="ArrowDown")e.preventDefault(),z(1);else if(e.key==="ArrowUp")e.preventDefault(),z(-1);else if(e.key==="Enter"||e.key===" "){e.preventDefault();const n=o.options[t.value];n&&q(n)}}function z(e){var l,c;let n=t.value+e;for(;n>=0&&n<o.options.length&&o.options[n].disabled;)n+=e;n>=0&&n<o.options.length&&(t.value=n,(c=(l=D.value)==null?void 0:l.children[n])==null||c.scrollIntoView({block:"nearest"}))}function M(e){E.value&&!E.value.contains(e.target)&&f()}return te(()=>document.addEventListener("mousedown",M)),se(()=>document.removeEventListener("mousedown",M)),(e,n)=>(u(),r("div",{ref_key:"rootEl",ref:E,class:"neu-select-root"},[a.label?(u(),r("label",fe,v(a.label),1)):g("",!0),d("button",{type:"button",disabled:a.disabled,"aria-expanded":s.value,"aria-haspopup":!0,class:m(["neu-select__trigger",`neu-select__trigger--${a.size}`,`neu-select__trigger--rounded-${a.rounded}`,{"neu-select__trigger--open":s.value,"neu-select__trigger--error":a.error,"neu-select__trigger--disabled":a.disabled,"neu-select__trigger--placeholder":!S.value}]),onClick:ae,onKeydown:ne},[d("span",ge,v(S.value?S.value.label:a.placeholder),1),(u(),r("svg",{class:m(["neu-select__chevron",{"neu-select__chevron--open":s.value}]),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[...n[0]||(n[0]=[d("polyline",{points:"6 9 12 15 18 9"},null,-1)])],2))],42,ve),re(ie,{name:"neu-select-drop"},{default:ue(()=>[s.value?(u(),r("div",{key:0,ref_key:"listEl",ref:D,role:"listbox",class:m(["neu-select__dropdown",`neu-select__dropdown--rounded-${a.rounded}`])},[(u(!0),r(de,null,me(a.options,(l,c)=>(u(),r("div",{key:l.value,role:"option","aria-selected":l.value===a.modelValue,"aria-disabled":l.disabled,class:m(["neu-select__option",`neu-select__option--${a.size}`,{"neu-select__option--selected":l.value===a.modelValue,"neu-select__option--focused":c===t.value,"neu-select__option--disabled":l.disabled}]),onMouseenter:le=>!l.disabled&&(t.value=c),onMousedown:pe(le=>q(l),["prevent"])},[d("span",null,v(l.label),1),l.value===a.modelValue?(u(),r("svg",he,[...n[1]||(n[1]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):g("",!0)],42,be))),128))],2)):g("",!0)]),_:1}),a.hint?(u(),r("span",{key:1,class:m(["neu-select__hint",{"neu-select__hint--error":a.error}])},v(a.hint),3)):g("",!0)],512))}});w.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"SelectOption"}]}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Selecciona una opción'"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Select/Select.vue"]};const i=[{label:"México",value:"mx"},{label:"Estados Unidos",value:"us"},{label:"España",value:"es"},{label:"Argentina",value:"ar"},{label:"Colombia",value:"co"},{label:"Chile",value:"cl"}],ye=[{label:"Chico (S)",value:"s"},{label:"Mediano (M)",value:"m"},{label:"Grande (L)",value:"l"},{label:"Extra Grande (XL)",value:"xl"},{label:"Extra Extra Grande (XXL — agotado)",value:"xxl",disabled:!0}],xe={title:"Components/Select",component:w,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl","full"]}}},b={args:{label:"País",placeholder:"Selecciona un país",options:i}},h={name:"Con valor seleccionado",args:{label:"País",options:i,modelValue:"mx"}},y={name:"Con opción deshabilitada",args:{label:"Talla",options:ye,hint:"El XXL está agotado temporalmente."}},k={name:"Con Hint",args:{label:"País de facturación",options:i,hint:"Debe coincidir con tu dirección fiscal."}},x={name:"Estado Error",args:{label:"País",options:i,error:!0,hint:"Este campo es requerido."}},V={args:{label:"País",options:i,modelValue:"mx",disabled:!0}},_={name:"Reactivo (v-model)",render:()=>({components:{Select:w},setup(){return{value:p(null),countries:i}},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:280px;">
        <Select v-model="value" label="País" :options="countries" hint="Selecciona para ver el valor" />
        <p style="font-size:0.875rem;color:#6b7280;padding-left:0.25rem;">
          Valor actual: <strong style="color:#3b82f6">{{ value ?? '—' }}</strong>
        </p>
      </div>
    `})};var B,L,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'País',
    placeholder: 'Selecciona un país',
    options: countries
  }
}`,...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var O,X,A;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Con valor seleccionado',
  args: {
    label: 'País',
    options: countries,
    modelValue: 'mx'
  }
}`,...(A=(X=h.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var N,$,j;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Con opción deshabilitada',
  args: {
    label: 'Talla',
    options: sizes,
    hint: 'El XXL está agotado temporalmente.'
  }
}`,...(j=($=y.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var F,G,H;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'País de facturación',
    options: countries,
    hint: 'Debe coincidir con tu dirección fiscal.'
  }
}`,...(H=(G=k.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,R,T;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'País',
    options: countries,
    error: true,
    hint: 'Este campo es requerido.'
  }
}`,...(T=(R=x.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,K,J;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'País',
    options: countries,
    modelValue: 'mx',
    disabled: true
  }
}`,...(J=(K=V.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Reactivo (v-model)',
  render: () => ({
    components: {
      Select
    },
    setup() {
      const value = ref<string | null>(null);
      return {
        value,
        countries
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:280px;">
        <Select v-model="value" label="País" :options="countries" hint="Selecciona para ver el valor" />
        <p style="font-size:0.875rem;color:#6b7280;padding-left:0.25rem;">
          Valor actual: <strong style="color:#3b82f6">{{ value ?? '—' }}</strong>
        </p>
      </div>
    \`
  })
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ve=["Default","WithValue","WithDisabledOption","WithHint","WithError","Disabled","Reactive"];export{b as Default,V as Disabled,_ as Reactive,y as WithDisabledOption,x as WithError,k as WithHint,h as WithValue,Ve as __namedExportsOrder,xe as default};
