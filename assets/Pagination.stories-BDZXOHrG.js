import{k as le,g as d,s as m,d as o,f as B,F as E,B as ie,c as z,x as u,G as de,A as i}from"./vue.esm-bundler-BuXXOL77.js";const ue=["disabled"],ge=["disabled"],me={key:0,class:"neu-pagination__ellipsis","aria-hidden":"true"},pe=["disabled","aria-current","onClick"],ce=["disabled"],be=["disabled"],s=le({__name:"Pagination",props:{modelValue:{},totalPages:{},siblings:{default:1},size:{default:"md"},rounded:{default:"lg"},showEdges:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const r=e,te=a,b=z(()=>r.modelValue<=1),P=z(()=>r.modelValue>=r.totalPages);function p(g){if(r.disabled)return;const n=Math.min(Math.max(g,1),r.totalPages);n!==r.modelValue&&te("update:modelValue",n)}const oe=z(()=>{const g=r.totalPages,n=r.modelValue,t=r.siblings;if(g<=1)return[1];const c=[];let v=0;for(let l=1;l<=g;l++){const se=l===1||l===g,re=l>=n-t&&l<=n+t;(se||re)&&(v&&l-v>1&&c.push("..."),c.push(l),v=l)}return c});return(g,n)=>(u(),d("nav",{class:m(["neu-pagination",`neu-pagination--${e.size}`]),"aria-label":"Paginación"},[e.showEdges?(u(),d("button",{key:0,type:"button",disabled:e.disabled||b.value,class:m(["neu-pagination__btn",`neu-pagination__btn--rounded-${e.rounded}`,{"neu-pagination__btn--disabled":e.disabled||b.value}]),"aria-label":"Primera página",onClick:n[0]||(n[0]=t=>p(1))},[...n[4]||(n[4]=[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("polyline",{points:"11 17 6 12 11 7"}),o("polyline",{points:"18 17 13 12 18 7"})],-1)])],10,ue)):B("",!0),o("button",{type:"button",disabled:e.disabled||b.value,class:m(["neu-pagination__btn",`neu-pagination__btn--rounded-${e.rounded}`,{"neu-pagination__btn--disabled":e.disabled||b.value}]),"aria-label":"Página anterior",onClick:n[1]||(n[1]=t=>p(e.modelValue-1))},[...n[5]||(n[5]=[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("polyline",{points:"15 18 9 12 15 6"})],-1)])],10,ge),(u(!0),d(E,null,ie(oe.value,(t,c)=>(u(),d(E,{key:c},[t==="..."?(u(),d("span",me,"…")):(u(),d("button",{key:1,type:"button",disabled:e.disabled,"aria-current":t===e.modelValue?"page":void 0,class:m(["neu-pagination__btn",`neu-pagination__btn--rounded-${e.rounded}`,"neu-pagination__btn--page",{"neu-pagination__btn--active":t===e.modelValue,"neu-pagination__btn--disabled":e.disabled}]),onClick:v=>p(t)},de(t),11,pe))],64))),128)),o("button",{type:"button",disabled:e.disabled||P.value,class:m(["neu-pagination__btn",`neu-pagination__btn--rounded-${e.rounded}`,{"neu-pagination__btn--disabled":e.disabled||P.value}]),"aria-label":"Página siguiente",onClick:n[2]||(n[2]=t=>p(e.modelValue+1))},[...n[6]||(n[6]=[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("polyline",{points:"9 18 15 12 9 6"})],-1)])],10,ce),e.showEdges?(u(),d("button",{key:1,type:"button",disabled:e.disabled||P.value,class:m(["neu-pagination__btn",`neu-pagination__btn--rounded-${e.rounded}`,{"neu-pagination__btn--disabled":e.disabled||P.value}]),"aria-label":"Última página",onClick:n[3]||(n[3]=t=>p(e.totalPages))},[...n[7]||(n[7]=[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("polyline",{points:"13 17 18 12 13 7"}),o("polyline",{points:"6 17 11 12 6 7"})],-1)])],10,be)):B("",!0)],2))}});s.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"totalPages",required:!0,type:{name:"number"}},{name:"siblings",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"showEdges",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Pagination/Pagination.vue"]};const ve={title:"Components/Pagination",component:s,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},modelValue:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},siblings:{control:{type:"number",min:0,max:3}}}},f={render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??1);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:10,modelValue:1}},V={name:"Página intermedia",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??5);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:10,modelValue:5}},y={name:"Con botones de extremos",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??5);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:20,modelValue:5,showEdges:!0}},k={name:"Más páginas visibles",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??8);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:20,modelValue:8,siblings:2}},S={name:"Bordes circulares",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??3);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:10,modelValue:3,rounded:"full"}},w={name:"Tamaño Pequeño",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??4);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:12,modelValue:4,size:"sm"}},C={name:"Tamaño Grande",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??4);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:12,modelValue:4,size:"lg"}},h={name:"Pocas páginas (sin elipsis)",render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??2);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:5,modelValue:2}},x={render:e=>({components:{Pagination:s},setup(){const a=i(e.modelValue??3);return{args:e,page:a}},template:'<Pagination v-bind="args" v-model="page" />'}),args:{totalPages:10,modelValue:3,disabled:!0}};var $,q,M;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 1);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 10,
    modelValue: 1
  }
}`,...(M=(q=f.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var j,F,D;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Página intermedia',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 5);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 10,
    modelValue: 5
  }
}`,...(D=(F=V.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var N,T,L;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Con botones de extremos',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 5);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 20,
    modelValue: 5,
    showEdges: true
  }
}`,...(L=(T=y.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var G,R,W;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Más páginas visibles',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 8);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 20,
    modelValue: 8,
    siblings: 2
  }
}`,...(W=(R=k.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,I,O;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Bordes circulares',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 3);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 10,
    modelValue: 3,
    rounded: 'full'
  }
}`,...(O=(I=S.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var H,J,K;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Tamaño Pequeño',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 4);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 12,
    modelValue: 4,
    size: 'sm'
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Tamaño Grande',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 4);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 12,
    modelValue: 4,
    size: 'lg'
  }
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,_;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Pocas páginas (sin elipsis)',
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 2);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 5,
    modelValue: 2
  }
}`,...(_=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ne,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(args.modelValue ?? 3);
      return {
        args,
        page
      };
    },
    template: \`<Pagination v-bind="args" v-model="page" />\`
  }),
  args: {
    totalPages: 10,
    modelValue: 3,
    disabled: true
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const fe=["Default","MidPage","WithEdges","ManySiblings","Rounded","SmallSize","LargeSize","FewPages","Disabled"];export{f as Default,x as Disabled,h as FewPages,C as LargeSize,k as ManySiblings,V as MidPage,S as Rounded,w as SmallSize,y as WithEdges,fe as __namedExportsOrder,ve as default};
