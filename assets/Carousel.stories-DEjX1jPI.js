import{k as ue,A as T,L as $,w as de,g as m,d,C as ce,t as P,s as g,F as M,f as X,B as ve,c,x as p,y as ye,I as Ce,v as ge,m as he}from"./vue.esm-bundler-BuXXOL77.js";const Se=["disabled"],be=["disabled"],we={key:1,class:"neu-carousel__dots",role:"tablist"},_e=["aria-selected","aria-label","onClick"],t=ue({__name:"Carousel",props:{modelValue:{default:0},transition:{default:"slide"},autoplay:{type:Boolean,default:!1},interval:{default:4e3},loop:{type:Boolean,default:!0},showArrows:{type:Boolean,default:!0},showDots:{type:Boolean,default:!0},height:{}},emits:["update:modelValue","change"],setup(e,{emit:l}){const s=e,h=l,i=T([]);let j=0;const n=c(()=>i.value.length),r=T(s.modelValue);$(()=>s.modelValue,o=>{r.value=o});function D(o){let a=o;s.loop?a=(o%n.value+n.value)%n.value:a=Math.min(Math.max(o,0),n.value-1),r.value=a,h("update:modelValue",a),h("change",a)}function N(){D(r.value-1)}function V(){D(r.value+1)}const B=c(()=>!s.loop&&r.value===0),F=c(()=>!s.loop&&r.value===n.value-1);let S=null;function q(){!s.autoplay||n.value<=1||(S=setInterval(V,s.interval))}function A(){S&&(clearInterval(S),S=null)}$([()=>s.autoplay,n],()=>{A(),q()},{immediate:!0}),de(A);let I=0;function me(o){I=o.touches[0].clientX}function pe(o){const a=o.changedTouches[0].clientX-I;Math.abs(a)>50&&(a>0?N():V())}ye("neu-carousel",{register(){const o=j++;return i.value=[...i.value,o],o},unregister(o){i.value=i.value.filter(a=>a!==o)},getPosition(o){return i.value.indexOf(o)},current:r,transition:Ce(s,"transition")});const fe=c(()=>s.transition==="slide"?{transform:`translateX(-${r.value*100}%)`}:{});return(o,a)=>(p(),m("div",{class:"neu-carousel",style:P(e.height?{height:e.height}:{}),onMouseenter:A,onMouseleave:q,onTouchstartPassive:me,onTouchendPassive:pe},[d("div",{class:g(["neu-carousel__track",`neu-carousel__track--${e.transition}`]),style:P(fe.value)},[ce(o.$slots,"default")],6),e.showArrows&&n.value>1?(p(),m(M,{key:0},[d("button",{type:"button",disabled:B.value,class:g(["neu-carousel__arrow","neu-carousel__arrow--prev",{"neu-carousel__arrow--disabled":B.value}]),"aria-label":"Anterior",onClick:N},[...a[0]||(a[0]=[d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"15 18 9 12 15 6"})],-1)])],10,Se),d("button",{type:"button",disabled:F.value,class:g(["neu-carousel__arrow","neu-carousel__arrow--next",{"neu-carousel__arrow--disabled":F.value}]),"aria-label":"Siguiente",onClick:V},[...a[1]||(a[1]=[d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"9 18 15 12 9 6"})],-1)])],10,be)],64)):X("",!0),e.showDots&&n.value>1?(p(),m("div",we,[(p(!0),m(M,null,ve(n.value,C=>(p(),m("button",{key:C,type:"button",role:"tab","aria-selected":C-1===r.value,"aria-label":`Ir a la diapositiva ${C}`,class:g(["neu-carousel__dot",{"neu-carousel__dot--active":C-1===r.value}]),onClick:xe=>D(C-1)},null,10,_e))),128))])):X("",!0)],36))}});t.__docgenInfo={exportName:"default",displayName:"Carousel",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"transition",required:!1,type:{name:"union",elements:[{name:'"slide"'},{name:'"fade"'}]},defaultValue:{func:!1,value:"'slide'"}},{name:"autoplay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interval",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4000"}},{name:"loop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showArrows",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDots",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"height",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"change",type:{names:["number"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Carousel/Carousel.vue"]};const u=ue({__name:"CarouselSlide",setup(e){const l=he("neu-carousel"),s=T(-1),h=c(()=>s.value===-1?-1:(l==null?void 0:l.getPosition(s.value))??-1),i=c(()=>h.value===(l==null?void 0:l.current.value)),j=c(()=>(l==null?void 0:l.transition.value)==="fade");return ge(()=>{s.value=(l==null?void 0:l.register())??-1}),de(()=>{s.value!==-1&&(l==null||l.unregister(s.value))}),(n,r)=>(p(),m("div",{class:g(["neu-carousel__slide",{"neu-carousel__slide--active":i.value,"neu-carousel__slide--fade":j.value}])},[ce(n.$slots,"default")],2))}});u.__docgenInfo={exportName:"default",displayName:"CarouselSlide",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Carousel/CarouselSlide.vue"]};const Le={title:"Components/Carousel",component:t,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{transition:{control:"select",options:["slide","fade"]},interval:{control:{type:"number",min:500,max:1e4,step:500}}}},f=["#d9e8fb","#d1f5e0","#fef3c7","#fde8e8","#ede9fe"],v=["Diapositiva 1","Diapositiva 2","Diapositiva 3","Diapositiva 4","Diapositiva 5"],y=e=>`
  display:flex; align-items:center; justify-content:center;
  height:16rem; background:${e};
  font-family:inherit; font-size:1.25rem; font-weight:600; color:#374151;
`,b={render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `}),args:{transition:"slide",loop:!0}},w={name:"Transición Fade",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `}),args:{transition:"fade",loop:!0}},_={name:"Con Autoplay",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <div>
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">
          Se pausa al pasar el cursor.
        </p>
        <Carousel v-bind="args" style="width:100%; max-width:36rem;">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
          </CarouselSlide>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:2500,loop:!0}},x={name:"Sin Loop",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `}),args:{loop:!1}},k={name:"Sin Puntos",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `}),args:{showDots:!1}},L={name:"Sin Flechas",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e,slideColors:f,slideLabels:v,slideStyle:y}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `}),args:{showArrows:!1}},z={name:"Con Contenido Real",render:e=>({components:{Carousel:t,CarouselSlide:u},setup:()=>({args:e}),template:`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🚀</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Bienvenido</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Descubre todo lo que puedes hacer con jah-ui.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🎨</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Diseño Neumórfico</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Componentes con un estilo suave y moderno.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">⚡</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Vue 3 + TypeScript</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Tipado completo para una mejor experiencia de desarrollo.</p>
          </div>
        </CarouselSlide>
      </Carousel>
    `}),args:{loop:!0}};var E,R,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    transition: 'slide',
    loop: true
  }
}`,...(O=(R=b.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var W,U,G;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Transición Fade',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    transition: 'fade',
    loop: true
  }
}`,...(G=(U=w.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,J,K;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Con Autoplay',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <div>
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">
          Se pausa al pasar el cursor.
        </p>
        <Carousel v-bind="args" style="width:100%; max-width:36rem;">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
          </CarouselSlide>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 2500,
    loop: true
  }
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Sin Loop',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    loop: false
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,le;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Sin Puntos',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    showDots: false
  }
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ae,ne;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Sin Flechas',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors,
      slideLabels,
      slideStyle
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    showArrows: false
  }
}`,...(ne=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,te,ie;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Con Contenido Real',
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args
    }),
    template: \`
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🚀</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Bienvenido</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Descubre todo lo que puedes hacer con jah-ui.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🎨</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Diseño Neumórfico</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Componentes con un estilo suave y moderno.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">⚡</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Vue 3 + TypeScript</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Tipado completo para una mejor experiencia de desarrollo.</p>
          </div>
        </CarouselSlide>
      </Carousel>
    \`
  }),
  args: {
    loop: true
  }
}`,...(ie=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const ze=["Default","FadeTransition","Autoplay","NoLoop","NoDots","NoArrows","WithContent"];export{_ as Autoplay,b as Default,w as FadeTransition,L as NoArrows,k as NoDots,x as NoLoop,z as WithContent,ze as __namedExportsOrder,Le as default};
