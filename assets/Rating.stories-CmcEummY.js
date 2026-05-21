import{k as me,g as c,F as de,B as ue,s as M,c as B,x as f,d,A as t}from"./vue.esm-bundler-BuXXOL77.js";const ce=["aria-label","aria-valuemax","aria-valuenow","aria-disabled","tabindex"],fe=["disabled","aria-label","onMousemove","onClick"],pe={class:"neu-rating__star",viewBox:"0 0 24 24","aria-hidden":"true"},ge=["id"],ve=["stop-color"],ye=["fill"],s=me({__name:"Rating",props:{modelValue:{default:0},max:{default:5},size:{default:"md"},color:{default:"#fbbf24"},allowHalf:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{}},emits:["update:modelValue"],setup(e,{emit:o}){const r=e,u=o,z=t(null),i=B(()=>!r.readonly&&!r.disabled),C=B(()=>z.value??r.modelValue??0);function w(n){const a=C.value;return a>=n?"full":r.allowHalf&&a>=n-.5?"half":"empty"}function le(n){const a=w(n);return a==="full"?r.color:a==="half"?`url(#neu-half-${n})`:"#c4cad4"}function S(n,a){if(r.allowHalf){const l=n.currentTarget.getBoundingClientRect();return n.clientX-l.left<l.width/2?a-.5:a}return a}function te(n,a){i.value&&(z.value=S(n,a))}function re(){z.value=null}function oe(n,a){if(!i.value)return;const l=S(n,a);u("update:modelValue",r.clearable&&l===r.modelValue?0:l)}function se(n){if(!i.value)return;const a=r.allowHalf?.5:1,l=r.modelValue??0,m={ArrowRight:a,ArrowUp:a,ArrowLeft:-a,ArrowDown:-a};if(n.key==="Home"){n.preventDefault(),u("update:modelValue",0);return}if(n.key==="End"){n.preventDefault(),u("update:modelValue",r.max);return}const k=m[n.key];if(k!==void 0){n.preventDefault();const ie=Math.min(Math.max(l+k,0),r.max);u("update:modelValue",ie)}}return(n,a)=>(f(),c("div",{class:M(["neu-rating",`neu-rating--${e.size}`,{"neu-rating--readonly":e.readonly,"neu-rating--disabled":e.disabled,"neu-rating--half":e.allowHalf}]),role:"slider","aria-label":e.label??"Calificación","aria-valuemin":0,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-disabled":e.disabled,tabindex:i.value?0:-1,onMouseleave:re,onKeydown:se},[(f(!0),c(de,null,ue(e.max,l=>(f(),c("button",{key:l,type:"button",disabled:!i.value,"aria-label":`${e.allowHalf&&C.value===l-.5?l-.5:l} de ${e.max}`,class:M(["neu-rating__btn",{"neu-rating__btn--filled":w(l)==="full","neu-rating__btn--half":w(l)==="half"}]),onMousemove:m=>te(m,l),onClick:m=>oe(m,l)},[(f(),c("svg",pe,[d("defs",null,[d("linearGradient",{id:`neu-half-${l}`,x1:"0",x2:"1",y1:"0",y2:"0"},[d("stop",{offset:"50%","stop-color":e.color},null,8,ve),a[0]||(a[0]=d("stop",{offset:"50%","stop-color":"#c4cad4"},null,-1))],8,ge)]),d("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",fill:le(l),stroke:"none"},null,8,ye)]))],42,fe))),128))],42,ce))}});s.__docgenInfo={exportName:"default",displayName:"Rating",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#fbbf24'"}},{name:"allowHalf",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Rating/Rating.vue"]};const xe={title:"Components/Rating",component:s,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]},layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"color"},max:{control:{type:"number",min:1,max:10}}}},p={render:e=>({components:{Rating:s},setup(){const o=t(e.modelValue??0);return{args:e,value:o}},template:'<Rating v-bind="args" v-model="value" />'}),args:{modelValue:3}},g={name:"Todos los tamaños",render:()=>({components:{Rating:s},setup(){return{sm:t(3),md:t(4),lg:t(5)}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.25rem;">
        <Rating v-model="sm" size="sm" />
        <Rating v-model="md" size="md" />
        <Rating v-model="lg" size="lg" />
      </div>
    `})},v={name:"Media estrella",render:e=>({components:{Rating:s},setup(){const o=t(2.5);return{args:e,value:o}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" allow-half />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    `}),args:{modelValue:2.5}},y={name:"Borrable (clic para quitar)",render:e=>({components:{Rating:s},setup(){const o=t(3);return{args:e,value:o}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" clearable />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    `}),args:{modelValue:3}},b={name:"Solo lectura",render:()=>({components:{Rating:s},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating :model-value="4.5" allow-half readonly label="Calificación del producto" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">4.5 / 5 estrellas</span>
      </div>
    `})},x={name:"Color personalizado",render:()=>({components:{Rating:s},setup(){return{a:t(4),b:t(3),c:t(5)}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating v-model="a" color="#ef4444" />
        <Rating v-model="b" color="#8b5cf6" />
        <Rating v-model="c" color="#10b981" />
      </div>
    `})},R={name:"Máximo personalizado",render:e=>({components:{Rating:s},setup(){const o=t(6);return{args:e,value:o}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" :max="10" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">{{ value }} / 10</span>
      </div>
    `}),args:{modelValue:6,max:10}},h={name:"Deshabilitado",render:e=>({components:{Rating:s},setup(){const o=t(3);return{args:e,value:o}},template:'<Rating v-bind="args" v-model="value" disabled />'}),args:{modelValue:3}},V={name:"Ejemplo en tarjeta",render:()=>({components:{Rating:s},setup(){return{myRating:t(0)}},template:`
      <div style="
        max-width:18rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        font-family:inherit;
      ">
        <p style="font-size:1rem;font-weight:700;color:#1e293b;margin:0 0 0.25rem;">Audífonos Pro X</p>
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
          <Rating :model-value="4.5" allow-half readonly size="sm" />
          <span style="font-size:0.8125rem;color:#6b7280;">4.5 (128 reseñas)</span>
        </div>
        <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.25rem;line-height:1.6;">
          Sonido cristalino con cancelación de ruido activa. Batería de 30 horas.
        </p>
        <p style="font-size:0.8125rem;font-weight:600;color:#374151;margin:0 0 0.5rem;">Tu calificación:</p>
        <Rating v-model="myRating" clearable />
      </div>
    `})};var q,A,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Rating
    },
    setup() {
      const value = ref(args.modelValue ?? 0);
      return {
        args,
        value
      };
    },
    template: \`<Rating v-bind="args" v-model="value" />\`
  }),
  args: {
    modelValue: 3
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,L,j;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Todos los tamaños',
  render: () => ({
    components: {
      Rating
    },
    setup() {
      return {
        sm: ref(3),
        md: ref(4),
        lg: ref(5)
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.25rem;">
        <Rating v-model="sm" size="sm" />
        <Rating v-model="md" size="md" />
        <Rating v-model="lg" size="lg" />
      </div>
    \`
  })
}`,...(j=(L=g.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var T,E,$;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Media estrella',
  render: args => ({
    components: {
      Rating
    },
    setup() {
      const value = ref(2.5);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" allow-half />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    \`
  }),
  args: {
    modelValue: 2.5
  }
}`,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var F,P,_;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Borrable (clic para quitar)',
  render: args => ({
    components: {
      Rating
    },
    setup() {
      const value = ref(3);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" clearable />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    \`
  }),
  args: {
    modelValue: 3
  }
}`,...(_=(P=y.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var N,X,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Solo lectura',
  render: () => ({
    components: {
      Rating
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating :model-value="4.5" allow-half readonly label="Calificación del producto" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">4.5 / 5 estrellas</span>
      </div>
    \`
  })
}`,...(I=(X=b.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var G,K,O;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Color personalizado',
  render: () => ({
    components: {
      Rating
    },
    setup() {
      return {
        a: ref(4),
        b: ref(3),
        c: ref(5)
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating v-model="a" color="#ef4444" />
        <Rating v-model="b" color="#8b5cf6" />
        <Rating v-model="c" color="#10b981" />
      </div>
    \`
  })
}`,...(O=(K=x.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var U,J,Q;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Máximo personalizado',
  render: args => ({
    components: {
      Rating
    },
    setup() {
      const value = ref(6);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" :max="10" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">{{ value }} / 10</span>
      </div>
    \`
  }),
  args: {
    modelValue: 6,
    max: 10
  }
}`,...(Q=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,Y,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  render: args => ({
    components: {
      Rating
    },
    setup() {
      const value = ref(3);
      return {
        args,
        value
      };
    },
    template: \`<Rating v-bind="args" v-model="value" disabled />\`
  }),
  args: {
    modelValue: 3
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Ejemplo en tarjeta',
  render: () => ({
    components: {
      Rating
    },
    setup() {
      const myRating = ref(0);
      return {
        myRating
      };
    },
    template: \`
      <div style="
        max-width:18rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        font-family:inherit;
      ">
        <p style="font-size:1rem;font-weight:700;color:#1e293b;margin:0 0 0.25rem;">Audífonos Pro X</p>
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
          <Rating :model-value="4.5" allow-half readonly size="sm" />
          <span style="font-size:0.8125rem;color:#6b7280;">4.5 (128 reseñas)</span>
        </div>
        <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.25rem;line-height:1.6;">
          Sonido cristalino con cancelación de ruido activa. Batería de 30 horas.
        </p>
        <p style="font-size:0.8125rem;font-weight:600;color:#374151;margin:0 0 0.5rem;">Tu calificación:</p>
        <Rating v-model="myRating" clearable />
      </div>
    \`
  })
}`,...(ne=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Re=["Default","AllSizes","AllowHalf","Clearable","Readonly","CustomColor","CustomMax","Disabled","ProductCard"];export{g as AllSizes,v as AllowHalf,y as Clearable,x as CustomColor,R as CustomMax,p as Default,h as Disabled,V as ProductCard,b as Readonly,Re as __namedExportsOrder,xe as default};
