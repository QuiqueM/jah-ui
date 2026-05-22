import{k as ee,J as ae,e as te,M as ne,q as re,D as oe,c as k,x as t,g as n,s as h,C as s,f as i,d as w,G as z}from"./vue.esm-bundler-BuXXOL77.js";const ie={class:"neu-card__content"},se={key:0,class:"neu-card__header"},de={key:1,class:"neu-card__header"},le={key:0,class:"neu-card__title"},ce={key:1,class:"neu-card__subtitle"},me={key:2,class:"neu-card__body"},a=ee({__name:"Card",props:{title:{},subtitle:{},padding:{default:"md"},rounded:{default:"xl"},hoverable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},coverPosition:{default:"top"}},emits:["click"],setup(e){const b=e,r=ae(),C=k(()=>!!r.cover&&b.coverPosition!=="top"),Y=k(()=>r.cover?["neu-card__cover",`neu-card__cover--${C.value?b.coverPosition:"top"}-${b.rounded}`]:[]);return(o,x)=>(t(),te(oe(e.clickable?"button":"div"),re({class:["neu-card",`neu-card--rounded-${e.rounded}`,{"neu-card--hoverable":e.hoverable||e.clickable,"neu-card--clickable":e.clickable},C.value?`neu-card--cover-${e.coverPosition}`:""]},e.clickable?{type:"button"}:{},{onClick:x[0]||(x[0]=Z=>e.clickable&&o.$emit("click",Z))}),{default:ne(()=>[r.cover?(t(),n("div",{key:0,class:h(Y.value)},[s(o.$slots,"cover")],2)):i("",!0),w("div",ie,[w("div",{class:h(["neu-card__inner",`neu-card__inner--${e.padding}`])},[r.header?(t(),n("div",se,[s(o.$slots,"header")])):e.title||e.subtitle?(t(),n("div",de,[e.title?(t(),n("p",le,z(e.title),1)):i("",!0),e.subtitle?(t(),n("p",ce,z(e.subtitle),1)):i("",!0)])):i("",!0),r.default?(t(),n("div",me,[s(o.$slots,"default")])):i("",!0)],2),r.footer?(t(),n("div",{key:0,class:h(["neu-card__footer",`neu-card__footer--${e.padding}`])},[s(o.$slots,"footer")],2)):i("",!0)])]),_:3},16,["class"]))}});a.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'xl'"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"coverPosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'top'"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"cover"},{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Card/Card.vue"]};const ue={title:"Components/Card",component:a,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{padding:{control:"select",options:["none","sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl"]},coverPosition:{control:"select",options:["top","left","right"]}}},d={args:{title:"Título de la tarjeta",subtitle:"Una descripción breve del contenido."},render:e=>({components:{Card:a},setup:()=>({args:e}),template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card v-bind="args">
          <p style="margin:0;color:#6b7280;font-size:0.9375rem;line-height:1.6">
            Aquí va el contenido principal de la tarjeta. Puede ser texto, imágenes, formularios o cualquier componente.
          </p>
        </Card>
      </div>
    `})},l={name:"Con Footer",render:()=>({components:{Card:a},template:`
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
    `})},y=`
  <template #cover>
    <div style="height:100%;min-height:160px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.7">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    </div>
  </template>`,c={name:"Cover arriba (top)",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:360px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="top">
          ${y}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `})},m={name:"Cover a la izquierda (left)",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="left">
          ${y}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `})},p={name:"Cover a la derecha (right)",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="right">
          ${y}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `})},u={name:"Con Header personalizado",render:()=>({components:{Card:a},template:`
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
    `})},g={name:"Hoverable",render:()=>({components:{Card:a},template:`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:220px;" v-for="i in 3" :key="i">
          <Card :title="'Proyecto ' + i" subtitle="Haz hover sobre la tarjeta" hoverable>
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Descripción breve del proyecto {{ i }}.</p>
          </Card>
        </div>
      </div>
    `})},v={name:"Clickable",render:()=>({components:{Card:a},setup(){return{count:{value:0}}},template:`
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:200px;" v-for="item in ['Inicio','Perfil','Ajustes']" :key="item">
          <Card :title="item" subtitle="Haz clic" clickable @click="count.value++">
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Clicks: {{ count.value }}</p>
          </Card>
        </div>
      </div>
    `})},f={name:"Sin padding",args:{padding:"none",rounded:"xl"},render:e=>({components:{Card:a},setup:()=>({args:e}),template:`
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
    `})};var P,j,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var $,q,H;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,D,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Cover arriba (top)',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:360px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="top">
          \${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var W,V,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Cover a la izquierda (left)',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="left">
          \${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(U=(V=m.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var _,B,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Cover a la derecha (right)',
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="right">
          \${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    \`
  })
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var J,L,M;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,E,I;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,G,O;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(G=v.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ge=["Default","WithFooter","WithCover","WithCoverLeft","WithCoverRight","WithCustomHeader","Hoverable","Clickable","NoPadding"];export{v as Clickable,d as Default,g as Hoverable,f as NoPadding,c as WithCover,m as WithCoverLeft,p as WithCoverRight,u as WithCustomHeader,l as WithFooter,ge as __namedExportsOrder,ue as default};
