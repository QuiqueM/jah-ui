import{k as M,J as U,e as E,M as I,q as T,D as L,x as t,g as n,s as v,C as d,f as r,d as R,G as y}from"./vue.esm-bundler-BuXXOL77.js";const G={key:0,class:"neu-card__header"},O={key:1,class:"neu-card__header"},K={key:0,class:"neu-card__title"},Q={key:1,class:"neu-card__subtitle"},X={key:2,class:"neu-card__body"},a=M({__name:"Card",props:{title:{},subtitle:{},padding:{default:"md"},rounded:{default:"xl"},hoverable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e){const o=U();return(i,f)=>(t(),E(L(e.clickable?"button":"div"),T({class:["neu-card",`neu-card--rounded-${e.rounded}`,{"neu-card--hoverable":e.hoverable||e.clickable,"neu-card--clickable":e.clickable}]},e.clickable?{type:"button"}:{},{onClick:f[0]||(f[0]=J=>e.clickable&&i.$emit("click",J))}),{default:I(()=>[o.cover?(t(),n("div",{key:0,class:v(["neu-card__cover",`neu-card__cover--rounded-${e.rounded}`])},[d(i.$slots,"cover")],2)):r("",!0),R("div",{class:v(["neu-card__inner",`neu-card__inner--${e.padding}`])},[o.header?(t(),n("div",G,[d(i.$slots,"header")])):e.title||e.subtitle?(t(),n("div",O,[e.title?(t(),n("p",K,y(e.title),1)):r("",!0),e.subtitle?(t(),n("p",Q,y(e.subtitle),1)):r("",!0)])):r("",!0),o.default?(t(),n("div",X,[d(i.$slots,"default")])):r("",!0)],2),o.footer?(t(),n("div",{key:1,class:v(["neu-card__footer",`neu-card__footer--${e.padding}`])},[d(i.$slots,"footer")],2)):r("",!0)]),_:3},16,["class"]))}});a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'xl'"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"cover"},{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Card/Card.vue"]};const Z={title:"Components/Card",component:a,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{padding:{control:"select",options:["none","sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl"]}}},l={args:{title:"Título de la tarjeta",subtitle:"Una descripción breve del contenido."},render:e=>({components:{Card:a},setup:()=>({args:e}),template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card v-bind="args">
          <p style="margin:0;color:#6b7280;font-size:0.9375rem;line-height:1.6">
            Aquí va el contenido principal de la tarjeta. Puede ser texto, imágenes, formularios o cualquier componente.
          </p>
        </Card>
      </div>
    `})},s={name:"Con Footer",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card title="Resumen de cuenta" subtitle="Periodo: Mayo 2026">
          <p style="margin:0;font-size:2rem;font-weight:700;color:#3b82f6;">$4,280.00</p>
          <template #footer>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.8125rem;color:#6b7280;">Próximo corte: 31 mayo</span>
              <span style="font-size:0.8125rem;font-weight:600;color:#3b82f6;cursor:pointer;">Ver detalle →</span>
            </div>
          </template>
        </Card>
      </div>
    `})},c={name:"Con Cover",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:360px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl">
          <template #cover>
            <div style="height:180px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </template>
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `})},m={name:"Con Header personalizado",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card>
          <template #header>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#6366f1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.9375rem;flex-shrink:0;">JD</div>
              <div>
                <p style="margin:0;font-weight:600;color:#1f2937;font-size:0.9375rem;">Juan Díaz</p>
                <p style="margin:0;font-size:0.8125rem;color:#6b7280;">Administrador · hace 5 min</p>
              </div>
            </div>
          </template>
          <p style="margin:0;font-size:0.9375rem;color:#374151;line-height:1.6">
            Se actualizó la configuración del sistema correctamente. Los cambios entrarán en vigor en el próximo ciclo.
          </p>
        </Card>
      </div>
    `})},p={name:"Hoverable",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:220px;" v-for="i in 3" :key="i">
          <Card :title="'Proyecto ' + i" subtitle="Haz hover sobre la tarjeta" hoverable>
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Descripción breve del proyecto {{ i }}.</p>
          </Card>
        </div>
      </div>
    `})},u={name:"Clickable",render:()=>({components:{Card:a},setup(){return{count:{value:0}}},template:`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:200px;" v-for="item in ['Inicio','Perfil','Ajustes']" :key="item">
          <Card :title="item" subtitle="Haz clic" clickable @click="count.value++">
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Clicks: {{ count.value }}</p>
          </Card>
        </div>
      </div>
    `})},g={name:"Sin padding",args:{padding:"none",rounded:"xl"},render:e=>({components:{Card:a},setup:()=>({args:e}),template:`
      <div style="padding:2rem;background:#e0e5ec;max-width:340px;">
        <Card v-bind="args">
          <div style="padding:1.25rem;border-bottom:1px solid rgba(184,190,199,0.4);">
            <p style="margin:0;font-weight:600;color:#1f2937;">Control total de padding</p>
          </div>
          <div style="padding:1.25rem;">
            <p style="margin:0;font-size:0.9375rem;color:#6b7280;">Útil cuando el contenido requiere su propio espaciado.</p>
          </div>
        </Card>
      </div>
    `})};var b,h,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Título de la tarjeta',
    subtitle: 'Una descripción breve del contenido.'
  },
  render: args => ({
    components: {
      Card
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card v-bind="args">
          <p style="margin:0;color:#6b7280;font-size:0.9375rem;line-height:1.6">
            Aquí va el contenido principal de la tarjeta. Puede ser texto, imágenes, formularios o cualquier componente.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,x,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Con Footer',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card title="Resumen de cuenta" subtitle="Periodo: Mayo 2026">
          <p style="margin:0;font-size:2rem;font-weight:700;color:#3b82f6;">$4,280.00</p>
          <template #footer>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.8125rem;color:#6b7280;">Próximo corte: 31 mayo</span>
              <span style="font-size:0.8125rem;font-weight:600;color:#3b82f6;cursor:pointer;">Ver detalle →</span>
            </div>
          </template>
        </Card>
      </div>
    \`
  })
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,j,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Con Cover',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:360px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl">
          <template #cover>
            <div style="height:180px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </template>
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var S,q,H;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Con Header personalizado',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card>
          <template #header>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#6366f1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.9375rem;flex-shrink:0;">JD</div>
              <div>
                <p style="margin:0;font-weight:600;color:#1f2937;font-size:0.9375rem;">Juan Díaz</p>
                <p style="margin:0;font-size:0.8125rem;color:#6b7280;">Administrador · hace 5 min</p>
              </div>
            </div>
          </template>
          <p style="margin:0;font-size:0.9375rem;color:#374151;line-height:1.6">
            Se actualizó la configuración del sistema correctamente. Los cambios entrarán en vigor en el próximo ciclo.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var D,$,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Hoverable',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:220px;" v-for="i in 3" :key="i">
          <Card :title="'Proyecto ' + i" subtitle="Haz hover sobre la tarjeta" hoverable>
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Descripción breve del proyecto {{ i }}.</p>
          </Card>
        </div>
      </div>
    \`
  })
}`,...(B=($=p.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var N,V,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Clickable',
  render: () => ({
    components: {
      Card
    },
    setup() {
      const count = {
        value: 0
      };
      return {
        count
      };
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:200px;" v-for="item in ['Inicio','Perfil','Ajustes']" :key="item">
          <Card :title="item" subtitle="Haz clic" clickable @click="count.value++">
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Clicks: {{ count.value }}</p>
          </Card>
        </div>
      </div>
    \`
  })
}`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var A,W,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Sin padding',
  args: {
    padding: 'none',
    rounded: 'xl'
  },
  render: args => ({
    components: {
      Card
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding:2rem;background:#e0e5ec;max-width:340px;">
        <Card v-bind="args">
          <div style="padding:1.25rem;border-bottom:1px solid rgba(184,190,199,0.4);">
            <p style="margin:0;font-weight:600;color:#1f2937;">Control total de padding</p>
          </div>
          <div style="padding:1.25rem;">
            <p style="margin:0;font-size:0.9375rem;color:#6b7280;">Útil cuando el contenido requiere su propio espaciado.</p>
          </div>
        </Card>
      </div>
    \`
  })
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const ee=["Default","WithFooter","WithCover","WithCustomHeader","Hoverable","Clickable","NoPadding"];export{u as Clickable,l as Default,p as Hoverable,g as NoPadding,c as WithCover,m as WithCustomHeader,s as WithFooter,ee as __namedExportsOrder,Z as default};
