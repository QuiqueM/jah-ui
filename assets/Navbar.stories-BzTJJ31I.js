import{k as J,g as r,d as t,C as x,F as k,B as _,f as p,s as d,j as O,M as P,a as T,A as E,x as s,N,G as w}from"./vue.esm-bundler-BuXXOL77.js";const G={class:"neu-navbar__inner"},K={class:"neu-navbar__brand"},Q={key:0,class:"neu-navbar__links",role:"list"},U=["href","aria-current","aria-disabled","onClick"],W={class:"neu-navbar__actions"},X=["aria-expanded"],Y={key:0,class:"neu-navbar__mobile"},Z={class:"neu-navbar__mobile-links",role:"list"},ee=["href","aria-current","aria-disabled","onClick"],ne={key:0,class:"neu-navbar__mobile-actions"},i=J({__name:"Navbar",props:{items:{default:()=>[]},sticky:{type:Boolean,default:!1}},emits:["item-click"],setup(n,{emit:c}){const y=c,a=E(!1);function m(o){o.disabled||(y("item-click",o),a.value=!1)}return(o,l)=>(s(),r("nav",{class:d(["neu-navbar",{"neu-navbar--sticky":n.sticky}])},[t("div",G,[t("div",K,[x(o.$slots,"brand",{},()=>[l[1]||(l[1]=t("span",{class:"neu-navbar__brand-text"},"Brand",-1))])]),n.items.length?(s(),r("ul",Q,[(s(!0),r(k,null,_(n.items,e=>(s(),r("li",{key:e.label},[t("a",{href:e.disabled?void 0:e.href??"#",class:d(["neu-navbar__link",{"neu-navbar__link--active":e.active,"neu-navbar__link--disabled":e.disabled}]),"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled?"true":void 0,onClick:N(H=>m(e),["prevent"])},w(e.label),11,U)]))),128))])):p("",!0),t("div",W,[x(o.$slots,"actions")]),n.items.length?(s(),r("button",{key:1,type:"button",class:d(["neu-navbar__hamburger",{"neu-navbar__hamburger--open":a.value}]),"aria-expanded":a.value,"aria-label":"Menú de navegación",onClick:l[0]||(l[0]=e=>a.value=!a.value)},[...l[2]||(l[2]=[t("span",{class:"neu-navbar__ham-line"},null,-1),t("span",{class:"neu-navbar__ham-line"},null,-1),t("span",{class:"neu-navbar__ham-line"},null,-1)])],10,X)):p("",!0)]),O(T,{name:"neu-navbar-mobile"},{default:P(()=>[a.value?(s(),r("div",Y,[t("ul",Z,[(s(!0),r(k,null,_(n.items,e=>(s(),r("li",{key:e.label},[t("a",{href:e.disabled?void 0:e.href??"#",class:d(["neu-navbar__mobile-link",{"neu-navbar__mobile-link--active":e.active,"neu-navbar__mobile-link--disabled":e.disabled}]),"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled?"true":void 0,onClick:N(H=>m(e),["prevent"])},w(e.label),11,ee)]))),128))]),o.$slots.actions?(s(),r("div",ne,[x(o.$slots,"actions")])):p("",!0)])):p("",!0)]),_:3})],2))}});i.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"NavItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"sticky",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"item-click",type:{names:["NavItem"]}}],slots:[{name:"brand"},{name:"actions"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Navbar/Navbar.vue"]};const te={title:"Components/Navbar",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{sticky:{control:"boolean"}}},h=[{label:"Inicio",href:"#",active:!0},{label:"Productos",href:"#"},{label:"Precios",href:"#"},{label:"Nosotros",href:"#"},{label:"Contacto",href:"#",disabled:!0}],b={name:"Solo brand",render:()=>({components:{Navbar:i},template:`
      <Navbar>
        <template #brand>
          <span style="font-size:1.25rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
    `})},u={name:"Con links",render:n=>({components:{Navbar:i},setup(){const c=E(h.map(a=>({...a})));function y(a){c.value=c.value.map(m=>({...m,active:m.label===a.label}))}return{args:n,items:c,onItemClick:y}},template:`
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
    `}),args:{sticky:!1}},f={name:"Con acciones",render:n=>({components:{Navbar:i},setup(){return{args:n,items:h}},template:`
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
    `}),args:{sticky:!1}},v={name:"Con avatar y búsqueda",render:n=>({components:{Navbar:i},setup(){return{args:n,items:h}},template:`
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
    `}),args:{sticky:!1}},g={name:"Sticky (con scroll)",render:n=>({components:{Navbar:i},setup(){return{args:n,items:h}},template:`
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
    `}),args:{sticky:!0}};var C,z,I;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(z=b.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var j,S,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,$,V;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=($=f.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,R,D;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(R=v.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var F,L,M;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const re=["SoloBrand","ConLinks","ConAcciones","ConAvatar","Sticky"];export{f as ConAcciones,v as ConAvatar,u as ConLinks,b as SoloBrand,g as Sticky,re as __namedExportsOrder,te as default};
