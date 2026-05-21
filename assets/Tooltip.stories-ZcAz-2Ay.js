import{k as ee,w as te,g as M,C as oe,e as ne,j as re,M as ae,a as pe,T as ie,x as S,t as se,G as le,f as ce,A as m,r as me,c as de}from"./vue.esm-bundler-BuXXOL77.js";const ue=["data-placement"],o=ee({__name:"Tooltip",props:{content:{},placement:{default:"top"},delay:{default:300},disabled:{type:Boolean,default:!1},maxWidth:{default:"16rem"}},setup(e){const l=e,y=m(),v=m(),w=m(!1),k=m({top:"0px",left:"0px"});let i=null,s=null;function Y(){if(!y.value||!v.value)return;const t=y.value.getBoundingClientRect(),n=v.value.getBoundingClientRect(),c=10;let r=0,a=0;switch(l.placement){case"top":r=t.top-n.height-c,a=t.left+t.width/2-n.width/2;break;case"bottom":r=t.bottom+c,a=t.left+t.width/2-n.width/2;break;case"left":r=t.top+t.height/2-n.height/2,a=t.left-n.width-c;break;case"right":r=t.top+t.height/2-n.height/2,a=t.right+c;break}a=Math.max(8,Math.min(a,window.innerWidth-n.width-8)),r=Math.max(8,Math.min(r,window.innerHeight-n.height-8)),k.value={top:`${Math.round(r)}px`,left:`${Math.round(a)}px`}}function B(){l.disabled||(s&&(clearTimeout(s),s=null),i=setTimeout(()=>{w.value=!0,me(Y)},l.delay))}function $(){i&&(clearTimeout(i),i=null),s=setTimeout(()=>{w.value=!1},80)}te(()=>{i&&clearTimeout(i),s&&clearTimeout(s)});const Z=de(()=>({top:k.value.top,left:k.value.left,maxWidth:l.maxWidth}));return(t,n)=>(S(),M("span",{ref_key:"triggerRef",ref:y,class:"neu-tooltip-trigger",onMouseenter:B,onMouseleave:$,onFocusin:B,onFocusout:$},[oe(t.$slots,"default"),(S(),ne(ie,{to:"body"},[re(pe,{name:"neu-tooltip"},{default:ae(()=>[w.value?(S(),M("div",{key:0,ref_key:"tooltipRef",ref:v,role:"tooltip","data-placement":e.placement,class:"neu-tooltip",style:se(Z.value),onMouseenter:B,onMouseleave:$},le(e.content),45,ue)):ce("",!0)]),_:1})]))],544))}});o.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",required:!0,type:{name:"string"}},{name:"placement",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'top'"}},{name:"delay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'16rem'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Tooltip/Tooltip.vue"]};const fe={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]},layout:"centered"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:{type:"number",min:0,max:1e3,step:50}}}},p=`
  <button style="
    padding: 0 1.25rem; height: 2.75rem; border: none; border-radius: 0.75rem;
    background: #e0e5ec; font-family: inherit; font-size: 0.9375rem; font-weight: 500;
    color: #374151; cursor: pointer;
    box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
  ">Pasa el cursor</button>
`,d={render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Esto es un tooltip",placement:"top"}},u={render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Tooltip abajo",placement:"bottom"}},g={render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Tooltip a la izquierda",placement:"left"}},f={render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Tooltip a la derecha",placement:"right"}},b={name:"Texto largo",render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Este tooltip contiene un texto más largo para mostrar cómo se comporta el componente cuando el contenido ocupa varias líneas.",placement:"top",maxWidth:"14rem"}},h={name:"Sin delay",render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Aparece inmediatamente",placement:"top",delay:0}},T={name:"Deshabilitado",render:e=>({components:{Tooltip:o},setup:()=>({args:e}),template:`<Tooltip v-bind="args">${p}</Tooltip>`}),args:{content:"Este tooltip no aparece",placement:"top",disabled:!0}},x={name:"Todas las posiciones",render:()=>({components:{Tooltip:o},template:`
      <div style="display:grid; grid-template-columns:repeat(2,auto); gap:1.5rem; place-items:center;">
        <Tooltip content="Arriba" placement="top">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Top</button>
        </Tooltip>
        <Tooltip content="Abajo" placement="bottom">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Bottom</button>
        </Tooltip>
        <Tooltip content="Izquierda" placement="left">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Left</button>
        </Tooltip>
        <Tooltip content="Derecha" placement="right">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Right</button>
        </Tooltip>
      </div>
    `})};var R,_,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Esto es un tooltip',
    placement: 'top'
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,D,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Tooltip abajo',
    placement: 'bottom'
  }
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,C,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Tooltip a la izquierda',
    placement: 'left'
  }
}`,...(V=(C=g.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var W,z,L;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Tooltip a la derecha',
    placement: 'right'
  }
}`,...(L=(z=f.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,P,F;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Texto largo',
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Este tooltip contiene un texto más largo para mostrar cómo se comporta el componente cuando el contenido ocupa varias líneas.',
    placement: 'top',
    maxWidth: '14rem'
  }
}`,...(F=(P=b.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var I,G,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Sin delay',
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Aparece inmediatamente',
    placement: 'top',
    delay: 0
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var O,U,J;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`<Tooltip v-bind="args">\${triggerBtn}</Tooltip>\`
  }),
  args: {
    content: 'Este tooltip no aparece',
    placement: 'top',
    disabled: true
  }
}`,...(J=(U=T.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Todas las posiciones',
  render: () => ({
    components: {
      Tooltip
    },
    template: \`
      <div style="display:grid; grid-template-columns:repeat(2,auto); gap:1.5rem; place-items:center;">
        <Tooltip content="Arriba" placement="top">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Top</button>
        </Tooltip>
        <Tooltip content="Abajo" placement="bottom">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Bottom</button>
        </Tooltip>
        <Tooltip content="Izquierda" placement="left">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Left</button>
        </Tooltip>
        <Tooltip content="Derecha" placement="right">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Right</button>
        </Tooltip>
      </div>
    \`
  })
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const be=["Top","Bottom","Left","Right","LongText","NoDelay","Disabled","AllPlacements"];export{x as AllPlacements,u as Bottom,T as Disabled,g as Left,b as LongText,h as NoDelay,f as Right,d as Top,be as __namedExportsOrder,fe as default};
