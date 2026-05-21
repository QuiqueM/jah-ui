import{k as W,g as l,d as z,C as f,s as b,j as O,M as P,a as X,x as i,f as h,A as I,y as k,G as y,m as G,i as K}from"./vue.esm-bundler-BuXXOL77.js";const r=W({__name:"DropdownMenu",props:{placement:{default:"bottom-start"},disabled:{type:Boolean,default:!1}},setup(e){const a=e,n=I(!1),o=I();function d(s){o.value&&!o.value.contains(s.target)&&u()}function t(){a.disabled||(n.value=!0,setTimeout(()=>document.addEventListener("click",d),0))}function u(){n.value=!1,document.removeEventListener("click",d)}function Z(){n.value?u():t()}function F(s){s.key==="Escape"&&u()}return k("neu-dropdown-close",u),k("neu-dropdown-open",n),(s,te)=>(i(),l("div",{ref_key:"rootRef",ref:o,class:"neu-dropdown-root",onKeydown:F},[z("div",{class:b(["neu-dropdown__trigger-wrap",{"neu-dropdown__trigger-wrap--disabled":e.disabled}]),onClick:Z},[f(s.$slots,"trigger")],2),O(X,{name:"neu-dropdown-drop"},{default:P(()=>[n.value?(i(),l("div",{key:0,class:b(["neu-dropdown__panel",`neu-dropdown__panel--${e.placement}`]),role:"menu"},[f(s.$slots,"default")],2)):h("",!0)]),_:3})],544))}});r.__docgenInfo={exportName:"default",displayName:"DropdownMenu",description:"",tags:{},props:[{name:"placement",required:!1,type:{name:"union",elements:[{name:'"bottom-start"'},{name:'"bottom-end"'},{name:'"top-start"'},{name:'"top-end"'}]},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/DropdownMenu/DropdownMenu.vue"]};const J=["disabled"],Q={key:0,class:"neu-dropdown__item-icon"},U={class:"neu-dropdown__item-label"},Y={key:1,class:"neu-dropdown__item-shortcut"},p=W({__name:"DropdownMenuItem",props:{label:{},shortcut:{},disabled:{type:Boolean,default:!1},danger:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:a}){const n=a,o=G("neu-dropdown-close",()=>{});function d(t){n("click",t),o()}return(t,u)=>(i(),l("button",{type:"button",role:"menuitem",disabled:e.disabled,class:b(["neu-dropdown__item",{"neu-dropdown__item--danger":e.danger,"neu-dropdown__item--disabled":e.disabled}]),onClick:d},[t.$slots.icon?(i(),l("span",Q,[f(t.$slots,"icon")])):h("",!0),z("span",U,[f(t.$slots,"default",{},()=>[K(y(e.label),1)])]),e.shortcut?(i(),l("span",Y,y(e.shortcut),1)):h("",!0)],10,J))}});p.__docgenInfo={exportName:"default",displayName:"DropdownMenuItem",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"shortcut",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/DropdownMenu/DropdownMenuItem.vue"]};const ee=(e,a)=>{const n=e.__vccOpts||e;for(const[o,d]of a)n[o]=d;return n},R={},ne={class:"neu-dropdown__divider","aria-hidden":"true"};function oe(e,a){return i(),l("hr",ne)}const m=ee(R,[["render",oe]]);R.__docgenInfo={displayName:"DropdownDivider",description:"",tags:{},sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/DropdownMenu/DropdownDivider.vue"]};const ae={title:"Components/DropdownMenu",component:r,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{placement:{control:"select",options:["bottom-start","bottom-end","top-start","top-end"]}}},c=`
  <button style="
    display:inline-flex; align-items:center; gap:0.4rem;
    padding:0 1.25rem; height:2.75rem; border:none; border-radius:0.75rem;
    background:#e0e5ec; font-family:inherit; font-size:0.9375rem; font-weight:500;
    color:#374151; cursor:pointer;
    box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
  ">
    Acciones
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
`,w={render:e=>({components:{DropdownMenu:r,DropdownMenuItem:p,DropdownDivider:m},setup:()=>({args:e}),template:`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${c}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Duplicar" />
          <DropdownMenuItem label="Compartir" />
        </DropdownMenu>
      </div>
    `}),args:{placement:"bottom-start"}},g={name:"Con Íconos",render:e=>({components:{DropdownMenu:r,DropdownMenuItem:p,DropdownDivider:m},setup:()=>({args:e}),template:`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${c}</template>
          <DropdownMenuItem label="Editar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownMenuItem label="Duplicar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger>
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </template>
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    `}),args:{placement:"bottom-start"}},D={name:"Con Atajos de Teclado",render:e=>({components:{DropdownMenu:r,DropdownMenuItem:p,DropdownDivider:m},setup:()=>({args:e}),template:`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${c}</template>
          <DropdownMenuItem label="Cortar"   shortcut="⌘X" />
          <DropdownMenuItem label="Copiar"   shortcut="⌘C" />
          <DropdownMenuItem label="Pegar"    shortcut="⌘V" />
          <DropdownDivider />
          <DropdownMenuItem label="Deshacer" shortcut="⌘Z" />
          <DropdownMenuItem label="Rehacer"  shortcut="⌘⇧Z" disabled />
        </DropdownMenu>
      </div>
    `}),args:{placement:"bottom-start"}},v={name:"Con Divisor y Danger",render:e=>({components:{DropdownMenu:r,DropdownMenuItem:p,DropdownDivider:m},setup:()=>({args:e}),template:`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${c}</template>
          <DropdownMenuItem label="Ver perfil" />
          <DropdownMenuItem label="Configuración" />
          <DropdownDivider />
          <DropdownMenuItem label="Cerrar sesión" danger />
        </DropdownMenu>
      </div>
    `}),args:{placement:"bottom-start"}},M={name:"Alineado a la derecha",render:e=>({components:{DropdownMenu:r,DropdownMenuItem:p,DropdownDivider:m},setup:()=>({args:e}),template:`
      <div style="padding: 2rem; display:flex; justify-content:flex-end;">
        <DropdownMenu v-bind="args">
          <template #trigger>${c}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Exportar" />
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger />
        </DropdownMenu>
      </div>
    `}),args:{placement:"bottom-end"}};var _,C,x;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownDivider
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>\${triggerBtn}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Duplicar" />
          <DropdownMenuItem label="Compartir" />
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    placement: 'bottom-start'
  }
}`,...(x=(C=w.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,j,B;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Con Íconos',
  render: args => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownDivider
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>\${triggerBtn}</template>
          <DropdownMenuItem label="Editar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownMenuItem label="Duplicar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger>
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </template>
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    placement: 'bottom-start'
  }
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var $,V,A;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Con Atajos de Teclado',
  render: args => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownDivider
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>\${triggerBtn}</template>
          <DropdownMenuItem label="Cortar"   shortcut="⌘X" />
          <DropdownMenuItem label="Copiar"   shortcut="⌘C" />
          <DropdownMenuItem label="Pegar"    shortcut="⌘V" />
          <DropdownDivider />
          <DropdownMenuItem label="Deshacer" shortcut="⌘Z" />
          <DropdownMenuItem label="Rehacer"  shortcut="⌘⇧Z" disabled />
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    placement: 'bottom-start'
  }
}`,...(A=(V=D.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var N,S,q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Con Divisor y Danger',
  render: args => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownDivider
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>\${triggerBtn}</template>
          <DropdownMenuItem label="Ver perfil" />
          <DropdownMenuItem label="Configuración" />
          <DropdownDivider />
          <DropdownMenuItem label="Cerrar sesión" danger />
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    placement: 'bottom-start'
  }
}`,...(q=(S=v.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var H,L,T;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Alineado a la derecha',
  render: args => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownDivider
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 2rem; display:flex; justify-content:flex-end;">
        <DropdownMenu v-bind="args">
          <template #trigger>\${triggerBtn}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Exportar" />
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger />
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    placement: 'bottom-end'
  }
}`,...(T=(L=M.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const de=["Default","WithIcons","WithShortcuts","WithDividerAndDanger","AlignedEnd"];export{M as AlignedEnd,w as Default,v as WithDividerAndDanger,g as WithIcons,D as WithShortcuts,de as __namedExportsOrder,ae as default};
