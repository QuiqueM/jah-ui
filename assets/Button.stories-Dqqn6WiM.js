import{k as fe,J as he,g as r,d as x,f as k,C as w,i as Be,G as ke,s as D,x as t}from"./vue.esm-bundler-BuXXOL77.js";const Se=["disabled"],xe={key:0,class:"neu-spinner",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},we={key:0,class:"neu-btn__icon"},De={key:1,class:"neu-btn__icon"},a=fe({__name:"Button",props:{label:{},variant:{default:"primary"},size:{default:"md"},rounded:{default:"lg"},iconPosition:{default:"left"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["click"],setup(e){const S=he();return(B,n)=>(t(),r("button",{disabled:e.disabled||e.loading,class:D(["neu-btn",`neu-btn--${e.variant}`,`neu-btn--${e.size}`,`neu-btn--rounded-${e.rounded}`,{"neu-btn--loading":e.loading}]),onClick:n[0]||(n[0]=be=>B.$emit("click",be))},[e.loading?(t(),r("svg",xe,[...n[1]||(n[1]=[x("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"},null,-1)])])):k("",!0),x("span",{class:D(["neu-btn__content",{"neu-btn__label--hidden":e.loading}])},[S.icon&&e.iconPosition==="left"?(t(),r("span",we,[w(B.$slots,"icon")])):k("",!0),Be(" "+ke(e.label)+" ",1),S.icon&&e.iconPosition==="right"?(t(),r("span",De,[w(B.$slots,"icon")])):k("",!0)],2)],10,Se))}});a.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"ghost"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"iconPosition",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"icon"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Button/Button.vue"]};const Pe={title:"Components/Button",component:a,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl","full"]},iconPosition:{control:"select",options:["left","right"]}}},o={args:{label:"Primary",variant:"primary",rounded:"lg"}},s={args:{label:"Secondary",variant:"secondary",rounded:"lg"}},l={args:{label:"Ghost",variant:"ghost",rounded:"lg"}},i={args:{label:"Danger",variant:"danger",rounded:"lg"}},d={args:{label:"Pill Shape",variant:"primary",rounded:"full"}},u={args:{label:"Square",variant:"primary",rounded:"none"}},m={args:{label:"Small",size:"sm",variant:"primary"}},c={args:{label:"Large",size:"lg",variant:"primary"}},p={args:{label:"Disabled",disabled:!0,variant:"primary"}},g={args:{label:"Guardando...",loading:!0,variant:"primary"}},v={name:"Icon / Left",args:{label:"Guardar",variant:"primary"},render:e=>({components:{Button:a},setup:()=>({args:e}),template:`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
          </svg>
        </template>
      </Button>
    `})},y={name:"Icon / Right",args:{label:"Siguiente",variant:"primary",iconPosition:"right"},render:e=>({components:{Button:a},setup:()=>({args:e}),template:`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </template>
      </Button>
    `})},b={name:"Icon / Danger",args:{label:"Eliminar",variant:"danger"},render:e=>({components:{Button:a},setup:()=>({args:e}),template:`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </template>
      </Button>
    `})},f={name:"Loading / Danger",args:{label:"Eliminando...",loading:!0,variant:"danger"}},h={name:"All Rounded Variants",render:()=>({components:{Button:a},template:`
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;background:#e0e5ec;padding:2rem;border-radius:1rem;">
        <Button label="none"  variant="primary" rounded="none" />
        <Button label="sm"    variant="primary" rounded="sm" />
        <Button label="md"    variant="primary" rounded="md" />
        <Button label="lg"    variant="primary" rounded="lg" />
        <Button label="xl"    variant="primary" rounded="xl" />
        <Button label="full"  variant="primary" rounded="full" />
      </div>
    `})};var L,P,V;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary',
    rounded: 'lg'
  }
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,I,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary',
    rounded: 'lg'
  }
}`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var z,M,G;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Ghost',
    variant: 'ghost',
    rounded: 'lg'
  }
}`,...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var j,R,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    variant: 'danger',
    rounded: 'lg'
  }
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var W,$,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Pill Shape',
    variant: 'primary',
    rounded: 'full'
  }
}`,...(N=($=d.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var A,H,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Square',
    variant: 'primary',
    rounded: 'none'
  }
}`,...(T=(H=u.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var F,J,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm',
    variant: 'primary'
  }
}`,...(O=(J=m.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var K,Q,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    size: 'lg',
    variant: 'primary'
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    variant: 'primary'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Guardando...',
    loading: true,
    variant: 'primary'
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Icon / Left',
  args: {
    label: 'Guardar',
    variant: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
          </svg>
        </template>
      </Button>
    \`
  })
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,se,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Icon / Right',
  args: {
    label: 'Siguiente',
    variant: 'primary',
    iconPosition: 'right'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </template>
      </Button>
    \`
  })
}`,...(le=(se=y.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,ue;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Icon / Danger',
  args: {
    label: 'Eliminar',
    variant: 'danger'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </template>
      </Button>
    \`
  })
}`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ce,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Loading / Danger',
  args: {
    label: 'Eliminando...',
    loading: true,
    variant: 'danger'
  }
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,ve,ye;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'All Rounded Variants',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;background:#e0e5ec;padding:2rem;border-radius:1rem;">
        <Button label="none"  variant="primary" rounded="none" />
        <Button label="sm"    variant="primary" rounded="sm" />
        <Button label="md"    variant="primary" rounded="md" />
        <Button label="lg"    variant="primary" rounded="lg" />
        <Button label="xl"    variant="primary" rounded="xl" />
        <Button label="full"  variant="primary" rounded="full" />
      </div>
    \`
  })
}`,...(ye=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const Ve=["Primary","Secondary","Ghost","Danger","Pill","Square","Small","Large","Disabled","Loading","WithIconLeft","WithIconRight","WithIconDanger","LoadingDanger","AllRounded"];export{h as AllRounded,i as Danger,p as Disabled,l as Ghost,c as Large,g as Loading,f as LoadingDanger,d as Pill,o as Primary,s as Secondary,m as Small,u as Square,b as WithIconDanger,v as WithIconLeft,y as WithIconRight,Ve as __namedExportsOrder,Pe as default};
