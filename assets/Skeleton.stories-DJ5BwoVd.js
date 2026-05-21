import{k as W,g as i,F as X,B as Y,t as h,s as f,c as k,x as l}from"./vue.esm-bundler-BuXXOL77.js";const Z={key:0,class:"neu-skeleton-group",role:"status","aria-busy":"true","aria-label":"Cargando…"},n=W({__name:"Skeleton",props:{variant:{default:"text"},lines:{default:1},width:{},height:{},rounded:{},animated:{type:Boolean,default:!0}},setup(e){const t=e,K=k(()=>t.variant==="text"&&t.lines>1);function Q(r,x){const a={};return r===x-1&&x>1&&(a.width="65%"),t.width&&(a.width=t.width),t.height&&(a.height=t.height),t.rounded&&(a.borderRadius=t.rounded),a}const U=k(()=>{const r={};return t.width&&(r.width=t.width),t.height&&(r.height=t.height),t.rounded&&(r.borderRadius=t.rounded),r});return(r,x)=>K.value?(l(),i("div",Z,[(l(!0),i(X,null,Y(e.lines,a=>(l(),i("div",{key:a,class:f(["neu-skeleton","neu-skeleton--text",{"neu-skeleton--animated":e.animated}]),style:h(Q(a-1,e.lines))},null,6))),128))])):(l(),i("div",{key:1,role:"status","aria-busy":"true","aria-label":"Cargando…",class:f(["neu-skeleton",`neu-skeleton--${e.variant}`,{"neu-skeleton--animated":e.animated}]),style:h(U.value)},null,6))}});n.__docgenInfo={exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"circle"'},{name:'"rect"'},{name:'"button"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"lines",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"width",required:!1,type:{name:"string"}},{name:"height",required:!1,type:{name:"string"}},{name:"rounded",required:!1,type:{name:"string"}},{name:"animated",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Skeleton/Skeleton.vue"]};const te={title:"Components/Skeleton",component:n,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{variant:{control:"select",options:["text","circle","rect","button"]},lines:{control:{type:"number",min:1,max:10}}}},o={args:{variant:"text",lines:1},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" style="max-width:24rem;" />'})},s={name:"Texto multilínea",args:{variant:"text",lines:4},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" style="max-width:28rem;" />'})},d={name:"Círculo (avatar)",args:{variant:"circle"},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},m={name:"Rectángulo (imagen)",args:{variant:"rect"},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" style="max-width:28rem;" />'})},c={name:"Botón",args:{variant:"button"},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},p={name:"Sin animación",args:{variant:"text",lines:3,animated:!1},render:e=>({components:{Skeleton:n},setup:()=>({args:e}),template:'<Skeleton v-bind="args" style="max-width:28rem;" />'})},u={name:"Placeholder de Tarjeta",render:()=>({components:{Skeleton:n},template:`
      <div style="
        max-width:22rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        display:flex; flex-direction:column; gap:1rem;
      ">
        <Skeleton variant="rect" height="11rem" />
        <Skeleton variant="text" width="55%" />
        <Skeleton variant="text" :lines="3" />
        <div style="display:flex; gap:0.75rem; margin-top:0.25rem;">
          <Skeleton variant="button" width="6rem" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    `})},v={name:"Placeholder de Perfil",render:()=>({components:{Skeleton:n},template:`
      <div style="max-width:22rem; display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="3.5rem" height="3.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="35%" />
          </div>
        </div>
        <Skeleton variant="text" :lines="4" />
        <div style="display:flex; gap:0.75rem;">
          <Skeleton variant="button" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    `})},g={name:"Placeholder de Lista",render:()=>({components:{Skeleton:n},template:`
      <div style="max-width:28rem; display:flex; flex-direction:column; gap:1rem;">
        <div v-for="i in 4" :key="i" style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="2.5rem" height="2.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.4rem;">
            <Skeleton variant="text" :width="i % 2 === 0 ? '70%' : '90%'" />
            <Skeleton variant="text" width="45%" />
          </div>
        </div>
      </div>
    `})};var S,y,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 1
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" style="max-width:24rem;" />\`
  })
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,P,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Texto multilínea',
  args: {
    variant: 'text',
    lines: 4
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" style="max-width:28rem;" />\`
  })
}`,...(C=(P=s.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var T,B,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Círculo (avatar)',
  args: {
    variant: 'circle'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" />\`
  })
}`,...(q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var R,L,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Rectángulo (imagen)',
  args: {
    variant: 'rect'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" style="max-width:28rem;" />\`
  })
}`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var N,F,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Botón',
  args: {
    variant: 'button'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" />\`
  })
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,z,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Sin animación',
  args: {
    variant: 'text',
    lines: 3,
    animated: false
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`<Skeleton v-bind="args" style="max-width:28rem;" />\`
  })
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,_,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Placeholder de Tarjeta',
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div style="
        max-width:22rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        display:flex; flex-direction:column; gap:1rem;
      ">
        <Skeleton variant="rect" height="11rem" />
        <Skeleton variant="text" width="55%" />
        <Skeleton variant="text" :lines="3" />
        <div style="display:flex; gap:0.75rem; margin-top:0.25rem;">
          <Skeleton variant="button" width="6rem" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    \`
  })
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,$,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Placeholder de Perfil',
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div style="max-width:22rem; display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="3.5rem" height="3.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="35%" />
          </div>
        </div>
        <Skeleton variant="text" :lines="4" />
        <div style="display:flex; gap:0.75rem;">
          <Skeleton variant="button" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    \`
  })
}`,...(D=($=v.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Placeholder de Lista',
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div style="max-width:28rem; display:flex; flex-direction:column; gap:1rem;">
        <div v-for="i in 4" :key="i" style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="2.5rem" height="2.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.4rem;">
            <Skeleton variant="text" :width="i % 2 === 0 ? '70%' : '90%'" />
            <Skeleton variant="text" width="45%" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ne=["Text","MultilineText","Circle","Rect","Button","NoAnimation","CardPlaceholder","ProfilePlaceholder","ListPlaceholder"];export{c as Button,u as CardPlaceholder,d as Circle,g as ListPlaceholder,s as MultilineText,p as NoAnimation,v as ProfilePlaceholder,m as Rect,o as Text,ne as __namedExportsOrder,te as default};
