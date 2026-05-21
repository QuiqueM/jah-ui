import{k as T,g as E,C as W,f as q,s as I,x as N}from"./vue.esm-bundler-BuXXOL77.js";const e=T({__name:"Badge",props:{variant:{default:"primary"},size:{default:"md"},rounded:{default:"full"},dot:{type:Boolean,default:!1},outline:{type:Boolean,default:!1}},setup(a){return(P,M)=>(N(),E("span",{class:I(["neu-badge",`neu-badge--${a.variant}`,`neu-badge--${a.size}`,`neu-badge--rounded-${a.rounded}`,{"neu-badge--dot":a.dot,"neu-badge--outline":a.outline}])},[a.dot?q("",!0):W(P.$slots,"default",{key:0})],2))}});e.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'full'"}},{name:"dot",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Badge/Badge.vue"]};const F={title:"Components/Badge",component:e,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","full"]}}},n={args:{variant:"primary"},render:a=>({components:{Badge:e},setup:()=>({args:a}),template:'<Badge v-bind="args">Nuevo</Badge>'})},r={name:"Todos los variants (solid)",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    `})},t={name:"Todos los variants (outline)",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary"   outline>Primary</Badge>
        <Badge variant="secondary" outline>Secondary</Badge>
        <Badge variant="success"   outline>Success</Badge>
        <Badge variant="warning"   outline>Warning</Badge>
        <Badge variant="danger"    outline>Danger</Badge>
      </div>
    `})},s={name:"Tamaños",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `})},d={name:"Dot",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;align-items:center;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge dot variant="primary" />
        <Badge dot variant="secondary" />
        <Badge dot variant="success" />
        <Badge dot variant="warning" />
        <Badge dot variant="danger" />
      </div>
    `})},i={name:"Con ícono",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="success">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Aprobado
        </Badge>
        <Badge variant="danger">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Rechazado
        </Badge>
        <Badge variant="warning">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Pendiente
        </Badge>
      </div>
    `})},o={name:"En contexto",render:()=>({components:{Badge:e},template:`
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Mensajes</span>
          <Badge variant="danger">12</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Factura #4821</span>
          <Badge variant="success">Pagada</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Versión</span>
          <Badge variant="secondary" outline>v1.0.0</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Servidor</span>
          <div style="display:flex;align-items:center;gap:0.375rem;">
            <Badge dot variant="success" />
            <span style="font-size:0.8125rem;color:#6b7280;">En línea</span>
          </div>
        </div>
      </div>
    `})};var l,g,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`<Badge v-bind="args">Nuevo</Badge>\`
  })
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Todos los variants (solid)',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    \`
  })
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,y,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Todos los variants (outline)',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary"   outline>Primary</Badge>
        <Badge variant="secondary" outline>Secondary</Badge>
        <Badge variant="success"   outline>Success</Badge>
        <Badge variant="warning"   outline>Warning</Badge>
        <Badge variant="danger"    outline>Danger</Badge>
      </div>
    \`
  })
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,x,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Tamaños',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    \`
  })
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,h,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Dot',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge dot variant="primary" />
        <Badge dot variant="secondary" />
        <Badge dot variant="success" />
        <Badge dot variant="warning" />
        <Badge dot variant="danger" />
      </div>
    \`
  })
}`,...(k=(h=d.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var z,S,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Con ícono',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="success">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Aprobado
        </Badge>
        <Badge variant="danger">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Rechazado
        </Badge>
        <Badge variant="warning">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Pendiente
        </Badge>
      </div>
    \`
  })
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,D,V;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'En contexto',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Mensajes</span>
          <Badge variant="danger">12</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Factura #4821</span>
          <Badge variant="success">Pagada</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Versión</span>
          <Badge variant="secondary" outline>v1.0.0</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Servidor</span>
          <div style="display:flex;align-items:center;gap:0.375rem;">
            <Badge dot variant="success" />
            <span style="font-size:0.8125rem;color:#6b7280;">En línea</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(V=(D=o.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const O=["Default","Variants","Outline","Sizes","Dots","WithIcon","InContext"];export{n as Default,d as Dots,o as InContext,t as Outline,s as Sizes,r as Variants,i as WithIcon,O as __namedExportsOrder,F as default};
