import{k as O,J as P,g as r,d as a,C as x,F as _,B as N,f as p,s as d,j as T,M as G,a as K,A as E,x as s,N as w,G as C}from"./vue.esm-bundler-BuXXOL77.js";const Q={class:"neu-navbar__inner"},U={class:"neu-navbar__brand"},W={key:0,class:"neu-navbar__links",role:"list"},X=["href","aria-current","aria-disabled","onClick"],Y={class:"neu-navbar__actions"},Z=["aria-expanded"],ee={key:0,class:"neu-navbar__mobile"},ne={class:"neu-navbar__mobile-links",role:"list"},ae=["href","aria-current","aria-disabled","onClick"],te={key:0,class:"neu-navbar__mobile-actions"},o=O({__name:"Navbar",props:{items:{default:()=>[]},sticky:{type:Boolean,default:!1}},emits:["item-click"],setup(n,{emit:c}){const y=c,m=P(),t=E(!1);function k(i){i.disabled||(y("item-click",i),t.value=!1)}return(i,l)=>(s(),r("nav",{class:d(["neu-navbar",{"neu-navbar--sticky":n.sticky}])},[a("div",Q,[a("div",U,[x(i.$slots,"brand",{},()=>[l[1]||(l[1]=a("span",{class:"neu-navbar__brand-text"},"Brand",-1))])]),n.items.length?(s(),r("ul",W,[(s(!0),r(_,null,N(n.items,e=>(s(),r("li",{key:e.label},[a("a",{href:e.disabled?void 0:e.href??"#",class:d(["neu-navbar__link",{"neu-navbar__link--active":e.active,"neu-navbar__link--disabled":e.disabled}]),"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled?"true":void 0,onClick:w(H=>k(e),["prevent"])},C(e.label),11,X)]))),128))])):p("",!0),a("div",Y,[x(i.$slots,"actions")]),n.items.length?(s(),r("button",{key:1,type:"button",class:d(["neu-navbar__hamburger",{"neu-navbar__hamburger--open":t.value}]),"aria-expanded":t.value,"aria-label":"Menú de navegación",onClick:l[0]||(l[0]=e=>t.value=!t.value)},[...l[2]||(l[2]=[a("span",{class:"neu-navbar__ham-line"},null,-1),a("span",{class:"neu-navbar__ham-line"},null,-1),a("span",{class:"neu-navbar__ham-line"},null,-1)])],10,Z)):p("",!0)]),T(K,{name:"neu-navbar-mobile"},{default:G(()=>[t.value?(s(),r("div",ee,[a("ul",ne,[(s(!0),r(_,null,N(n.items,e=>(s(),r("li",{key:e.label},[a("a",{href:e.disabled?void 0:e.href??"#",class:d(["neu-navbar__mobile-link",{"neu-navbar__mobile-link--active":e.active,"neu-navbar__mobile-link--disabled":e.disabled}]),"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled?"true":void 0,onClick:w(H=>k(e),["prevent"])},C(e.label),11,ae)]))),128))]),m.actions?(s(),r("div",te,[x(i.$slots,"actions")])):p("",!0)])):p("",!0)]),_:3})],2))}});o.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"NavItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"sticky",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"item-click",type:{names:["NavItem"]}}],slots:[{name:"brand"},{name:"actions"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Navbar/Navbar.vue"]};const se={title:"Components/Navbar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{sticky:{control:"boolean"}}},h=[{label:"Inicio",href:"#",active:!0},{label:"Productos",href:"#"},{label:"Precios",href:"#"},{label:"Nosotros",href:"#"},{label:"Contacto",href:"#",disabled:!0}],b={name:"Solo brand",render:()=>({components:{Navbar:o},template:`
      <Navbar>
        <template #brand>
          <span style="font-size:1.25rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
    `})},u={name:"Con links",render:n=>({components:{Navbar:o},setup(){const c=E(h.map(m=>({...m})));function y(m){c.value=c.value.map(t=>({...t,active:t.label===m.label}))}return{args:n,items:c,onItemClick:y}},template:`
      <Navbar :items="items" v-bind="args" @item-click="onItemClick">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
      <div style="padding:2rem 1.5rem;font-family:inherit;font-size:0.875rem;color:#9ca3af;">
        Haz clic en un enlace para cambiar el activo.
      </div>
    `}),args:{sticky:!1}},f={name:"Con acciones",render:n=>({components:{Navbar:o},setup(){return{args:n,items:h}},template:`
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
            font-weight: 500; color: #6b7280; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Iniciar sesión
          </button>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #3b82f6; font-family: inherit; font-size: 0.875rem;
            font-weight: 600; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Registrarse
          </button>
        </template>
      </Navbar>
    `}),args:{sticky:!1}},v={name:"Con avatar y búsqueda",render:n=>({components:{Navbar:o},setup(){return{args:n,items:h}},template:`
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <!-- Search input -->
          <div style="position:relative;display:flex;align-items:center;">
            <svg style="position:absolute;left:0.625rem;width:1rem;height:1rem;color:#9ca3af;"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input placeholder="Buscar…" style="
              padding: 0.4rem 0.75rem 0.4rem 2rem;
              border: none; border-radius: 0.625rem;
              background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
              color: #374151; width: 11rem; outline: none;
              box-shadow: inset 3px 3px 7px #b8bec7, inset -3px -3px 7px #fff;" />
          </div>
          <!-- Avatar -->
          <div style="
            width: 2.25rem; height: 2.25rem; border-radius: 50%;
            background: linear-gradient(135deg,#3b82f6,#8b5cf6);
            display: flex; align-items: center; justify-content: center;
            font-size: 0.875rem; font-weight: 700; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff; flex-shrink: 0;">
            JA
          </div>
        </template>
      </Navbar>
    `}),args:{sticky:!1}},g={name:"Sticky (con scroll)",render:n=>({components:{Navbar:o},setup(){return{args:n,items:h}},template:`
      <div style="height:600px;overflow-y:auto;">
        <Navbar :items="items" sticky v-bind="args">
          <template #brand>
            <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
              jah<span style="color:#374151;">·ui</span>
            </span>
          </template>
          <template #actions>
            <button style="
              padding:0 1rem;height:2.25rem;border:none;border-radius:0.625rem;
              background:#3b82f6;font-family:inherit;font-size:0.875rem;
              font-weight:600;color:#fff;cursor:pointer;
              box-shadow:4px 4px 9px #b8bec7,-4px -4px 9px #fff;">
              Registrarse
            </button>
          </template>
        </Navbar>
        <div style="padding:2rem 1.5rem;font-family:inherit;">
          <p v-for="n in 20" :key="n" style="color:#6b7280;margin:0.75rem 0;font-size:0.9375rem;">
            Contenido de la página — línea {{ n }}. Desplázate para ver el efecto sticky.
          </p>
        </div>
      </div>
    `}),args:{sticky:!0}};var z,I,S;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Solo brand',
  render: () => ({
    components: {
      Navbar
    },
    template: \`
      <Navbar>
        <template #brand>
          <span style="font-size:1.25rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
    \`
  })
}`,...(S=(I=b.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,B,A;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Con links',
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      const items = ref<NavItem[]>(baseItems.map(i => ({
        ...i
      })));
      function onItemClick(item: NavItem) {
        items.value = items.value.map(i => ({
          ...i,
          active: i.label === item.label
        }));
      }
      return {
        args,
        items,
        onItemClick
      };
    },
    template: \`
      <Navbar :items="items" v-bind="args" @item-click="onItemClick">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
      <div style="padding:2rem 1.5rem;font-family:inherit;font-size:0.875rem;color:#9ca3af;">
        Haz clic en un enlace para cambiar el activo.
      </div>
    \`
  }),
  args: {
    sticky: false
  }
}`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var $,V,q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Con acciones',
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        items: baseItems
      };
    },
    template: \`
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
            font-weight: 500; color: #6b7280; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Iniciar sesión
          </button>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #3b82f6; font-family: inherit; font-size: 0.875rem;
            font-weight: 600; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Registrarse
          </button>
        </template>
      </Navbar>
    \`
  }),
  args: {
    sticky: false
  }
}`,...(q=(V=f.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var R,D,F;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Con avatar y búsqueda',
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        items: baseItems
      };
    },
    template: \`
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <!-- Search input -->
          <div style="position:relative;display:flex;align-items:center;">
            <svg style="position:absolute;left:0.625rem;width:1rem;height:1rem;color:#9ca3af;"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input placeholder="Buscar…" style="
              padding: 0.4rem 0.75rem 0.4rem 2rem;
              border: none; border-radius: 0.625rem;
              background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
              color: #374151; width: 11rem; outline: none;
              box-shadow: inset 3px 3px 7px #b8bec7, inset -3px -3px 7px #fff;" />
          </div>
          <!-- Avatar -->
          <div style="
            width: 2.25rem; height: 2.25rem; border-radius: 50%;
            background: linear-gradient(135deg,#3b82f6,#8b5cf6);
            display: flex; align-items: center; justify-content: center;
            font-size: 0.875rem; font-weight: 700; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff; flex-shrink: 0;">
            JA
          </div>
        </template>
      </Navbar>
    \`
  }),
  args: {
    sticky: false
  }
}`,...(F=(D=v.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var J,L,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Sticky (con scroll)',
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        items: baseItems
      };
    },
    template: \`
      <div style="height:600px;overflow-y:auto;">
        <Navbar :items="items" sticky v-bind="args">
          <template #brand>
            <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
              jah<span style="color:#374151;">·ui</span>
            </span>
          </template>
          <template #actions>
            <button style="
              padding:0 1rem;height:2.25rem;border:none;border-radius:0.625rem;
              background:#3b82f6;font-family:inherit;font-size:0.875rem;
              font-weight:600;color:#fff;cursor:pointer;
              box-shadow:4px 4px 9px #b8bec7,-4px -4px 9px #fff;">
              Registrarse
            </button>
          </template>
        </Navbar>
        <div style="padding:2rem 1.5rem;font-family:inherit;">
          <p v-for="n in 20" :key="n" style="color:#6b7280;margin:0.75rem 0;font-size:0.9375rem;">
            Contenido de la página — línea {{ n }}. Desplázate para ver el efecto sticky.
          </p>
        </div>
      </div>
    \`
  }),
  args: {
    sticky: true
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const oe=["SoloBrand","ConLinks","ConAcciones","ConAvatar","Sticky"];export{f as ConAcciones,v as ConAvatar,u as ConLinks,b as SoloBrand,g as Sticky,oe as __namedExportsOrder,se as default};
