import{k as ze,g as d,d as u,f as R,s as A,t as L,G as B,c as t,A as o,x as f}from"./vue.esm-bundler-BuXXOL77.js";const Pe=["tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-label","aria-disabled"],Se={class:"neu-knob__svg",viewBox:"0 0 100 100","aria-hidden":"true"},we=["d"],Ce=["d","stroke"],Me=["cx","cy","r"],_e=["cx","cy","r","fill"],De={class:"neu-knob__value"},Fe={key:0,class:"neu-knob__suffix"},qe={key:0,class:"neu-knob__label"},Re=50,Ae=50,b=37,h=5,p=225,y=270,s=ze({__name:"Knob",props:{modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},size:{default:"md"},label:{},suffix:{},color:{default:"#3b82f6"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:M}){const a=n,pe=M;function T(e){return e*Math.PI/180}function v(e,l=b){return{x:Re+l*Math.sin(T(e)),y:Ae-l*Math.cos(T(e))}}function G(e,l){if(l<=0)return"";const r=v(e),i=v(e+Math.min(l,359.99)),c=l>180?1:0;return`M ${r.x.toFixed(3)} ${r.y.toFixed(3)} A ${b} ${b} 0 ${c} 1 ${i.x.toFixed(3)} ${i.y.toFixed(3)}`}const g=t(()=>Math.min(Math.max(a.modelValue??a.min,a.min),a.max)),_=t(()=>(g.value-a.min)/(a.max-a.min)),D=t(()=>_.value*y),ve=t(()=>G(p,y)),ge=t(()=>G(p,D.value)),$=t(()=>v(p+D.value,b)),E=t(()=>v(p,b)),xe=t(()=>{var l;const e=g.value;return Number.isInteger(a.step)?String(e):e.toFixed(((l=String(a.step).split(".")[1])==null?void 0:l.length)??1)}),F=o(),x=o(!1);function I(e,l){if(!F.value)return 0;const r=F.value.getBoundingClientRect(),i=e-(r.left+r.width/2),c=l-(r.top+r.height/2);let q=Math.atan2(i,-c)*(180/Math.PI);return q<0&&(q+=360),q}function N(e){let l=e-p;l<0&&(l+=360),l=Math.max(0,Math.min(y,l));const r=a.min+l/y*(a.max-a.min),i=Math.round(r/a.step)*a.step;return parseFloat(Math.min(Math.max(i,a.min),a.max).toFixed(10))}function m(e){e!==a.modelValue&&pe("update:modelValue",e)}function he(e){a.disabled||(e.preventDefault(),x.value=!0,e.target.setPointerCapture(e.pointerId),m(N(I(e.clientX,e.clientY))))}function ye(e){!x.value||a.disabled||m(N(I(e.clientX,e.clientY)))}function H(){x.value=!1}function Ke(e){if(a.disabled)return;const l=a.step*10,r={ArrowUp:a.step,ArrowRight:a.step,ArrowDown:-a.step,ArrowLeft:-a.step,PageUp:l,PageDown:-l};if(e.key==="Home"){e.preventDefault(),m(a.min);return}if(e.key==="End"){e.preventDefault(),m(a.max);return}const i=r[e.key];if(i!==void 0){e.preventDefault();const c=Math.round((g.value+i)/a.step)*a.step;m(parseFloat(Math.min(Math.max(c,a.min),a.max).toFixed(10)))}}const ke=t(()=>{const e={sm:"5rem",md:"7rem",lg:"9rem"};return{width:e[a.size],height:e[a.size]}}),Ve=t(()=>({sm:"0.8125rem",md:"1rem",lg:"1.25rem"})[a.size]);return(e,l)=>(f(),d("div",{class:A(["neu-knob-root",`neu-knob-root--${n.size}`])},[u("div",{ref_key:"knobRef",ref:F,class:A(["neu-knob",{"neu-knob--disabled":n.disabled,"neu-knob--dragging":x.value}]),style:L(ke.value),tabindex:n.disabled?-1:0,role:"slider","aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":g.value,"aria-label":n.label,"aria-disabled":n.disabled,onPointerdown:he,onPointermove:ye,onPointerup:H,onPointercancel:H,onKeydown:Ke},[l[0]||(l[0]=u("div",{class:"neu-knob__base"},null,-1)),(f(),d("svg",Se,[u("path",{d:ve.value,class:"neu-knob__track","stroke-width":h,fill:"none","stroke-linecap":"round"},null,8,we),D.value>0?(f(),d("path",{key:0,d:ge.value,class:"neu-knob__value-arc",stroke:n.color,"stroke-width":h,fill:"none","stroke-linecap":"round"},null,8,Ce)):R("",!0),u("circle",{cx:E.value.x,cy:E.value.y,r:h/2,class:"neu-knob__start-dot"},null,8,Me),u("circle",{cx:$.value.x,cy:$.value.y,r:h/2+1,fill:_.value>0?n.color:void 0,class:A(["neu-knob__tip",{"neu-knob__tip--empty":_.value===0}])},null,10,_e)])),u("div",{class:"neu-knob__center",style:L({fontSize:Ve.value})},[u("span",De,B(xe.value),1),n.suffix?(f(),d("span",Fe,B(n.suffix),1)):R("",!0)],4)],46,Pe),n.label?(f(),d("span",qe,B(n.label),1)):R("",!0)],2))}});s.__docgenInfo={exportName:"default",displayName:"Knob",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"label",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#3b82f6'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Knob/Knob.vue"]};const Te={title:"Components/Knob",component:s,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]},layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"color"},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}}}},K={render:n=>({components:{Knob:s},setup(){const M=o(n.modelValue??50);return{args:n,value:M}},template:'<Knob v-bind="args" v-model="value" />'}),args:{label:"Volumen",suffix:"%",min:0,max:100,step:1,modelValue:50}},k={name:"Tamaño Pequeño",render:n=>({components:{Knob:s},setup(){return{args:n,v:o(30)}},template:'<Knob v-bind="args" v-model="v" />'}),args:{size:"sm",label:"Gain",suffix:"dB",min:0,max:24,step:.5,modelValue:12}},V={name:"Tamaño Grande",render:n=>({components:{Knob:s},setup(){return{args:n,v:o(75)}},template:'<Knob v-bind="args" v-model="v" />'}),args:{size:"lg",label:"Frecuencia",suffix:"Hz",min:20,max:200,step:5,modelValue:75}},z={name:"Color Personalizado",render:()=>({components:{Knob:s},setup(){return{vol:o(60),bass:o(40),treb:o(70)}},template:`
      <div style="display:flex; gap:2.5rem; align-items:flex-end;">
        <Knob v-model="vol"  label="Volumen"  suffix="%" color="#3b82f6" />
        <Knob v-model="bass" label="Graves"   suffix="%" color="#8b5cf6" />
        <Knob v-model="treb" label="Agudos"   suffix="%" color="#10b981" />
      </div>
    `})},P={name:"Paso Decimal",render:n=>({components:{Knob:s},setup(){return{args:n,v:o(1.5)}},template:'<Knob v-bind="args" v-model="v" />'}),args:{label:"Velocidad",suffix:"x",min:.5,max:3,step:.1,modelValue:1.5,color:"#f59e0b"}},S={name:"Rango Completo",render:n=>({components:{Knob:s},setup(){return{args:n,v:o(0)}},template:'<Knob v-bind="args" v-model="v" />'}),args:{label:"Panorama",suffix:"°",min:-180,max:180,step:1,modelValue:0,color:"#ef4444"}},w={name:"Deshabilitado",render:n=>({components:{Knob:s},setup(){return{args:n,v:o(65)}},template:'<Knob v-bind="args" v-model="v" />'}),args:{label:"Bloqueado",suffix:"%",modelValue:65,disabled:!0}},C={name:"Panel de Mezcla",render:()=>({components:{Knob:s},setup(){return{channels:o([{label:"Ch 1",value:75,color:"#3b82f6"},{label:"Ch 2",value:50,color:"#3b82f6"},{label:"Ch 3",value:30,color:"#3b82f6"},{label:"Ch 4",value:85,color:"#3b82f6"}]),reverb:o(20),delay:o(35),master:o(80)}},template:`
      <div style="display:flex; gap:1.5rem; align-items:flex-end; flex-wrap:wrap;">
        <Knob
          v-for="ch in channels"
          :key="ch.label"
          v-model="ch.value"
          :label="ch.label"
          suffix="%"
          size="sm"
          :color="ch.color"
        />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="reverb" label="Reverb" suffix="%" size="sm" color="#8b5cf6" />
        <Knob v-model="delay"  label="Delay"  suffix="%" size="sm" color="#8b5cf6" />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="master" label="Master" suffix="%" size="lg" color="#10b981" />
      </div>
    `})};var U,X,Y;K.parameters={...K.parameters,docs:{...(U=K.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Knob
    },
    setup() {
      const value = ref(args.modelValue ?? 50);
      return {
        args,
        value
      };
    },
    template: \`<Knob v-bind="args" v-model="value" />\`
  }),
  args: {
    label: 'Volumen',
    suffix: '%',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}`,...(Y=(X=K.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var j,W,O;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Tamaño Pequeño',
  render: args => ({
    components: {
      Knob
    },
    setup() {
      return {
        args,
        v: ref(30)
      };
    },
    template: \`<Knob v-bind="args" v-model="v" />\`
  }),
  args: {
    size: 'sm',
    label: 'Gain',
    suffix: 'dB',
    min: 0,
    max: 24,
    step: 0.5,
    modelValue: 12
  }
}`,...(O=(W=k.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var J,Q,Z;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Tamaño Grande',
  render: args => ({
    components: {
      Knob
    },
    setup() {
      return {
        args,
        v: ref(75)
      };
    },
    template: \`<Knob v-bind="args" v-model="v" />\`
  }),
  args: {
    size: 'lg',
    label: 'Frecuencia',
    suffix: 'Hz',
    min: 20,
    max: 200,
    step: 5,
    modelValue: 75
  }
}`,...(Z=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ae,ne;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Color Personalizado',
  render: () => ({
    components: {
      Knob
    },
    setup() {
      return {
        vol: ref(60),
        bass: ref(40),
        treb: ref(70)
      };
    },
    template: \`
      <div style="display:flex; gap:2.5rem; align-items:flex-end;">
        <Knob v-model="vol"  label="Volumen"  suffix="%" color="#3b82f6" />
        <Knob v-model="bass" label="Graves"   suffix="%" color="#8b5cf6" />
        <Knob v-model="treb" label="Agudos"   suffix="%" color="#10b981" />
      </div>
    \`
  })
}`,...(ne=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,oe,re;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Paso Decimal',
  render: args => ({
    components: {
      Knob
    },
    setup() {
      return {
        args,
        v: ref(1.5)
      };
    },
    template: \`<Knob v-bind="args" v-model="v" />\`
  }),
  args: {
    label: 'Velocidad',
    suffix: 'x',
    min: 0.5,
    max: 3,
    step: 0.1,
    modelValue: 1.5,
    color: '#f59e0b'
  }
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,se,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Rango Completo',
  render: args => ({
    components: {
      Knob
    },
    setup() {
      return {
        args,
        v: ref(0)
      };
    },
    template: \`<Knob v-bind="args" v-model="v" />\`
  }),
  args: {
    label: 'Panorama',
    suffix: '°',
    min: -180,
    max: 180,
    step: 1,
    modelValue: 0,
    color: '#ef4444'
  }
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,me,ce;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  render: args => ({
    components: {
      Knob
    },
    setup() {
      return {
        args,
        v: ref(65)
      };
    },
    template: \`<Knob v-bind="args" v-model="v" />\`
  }),
  args: {
    label: 'Bloqueado',
    suffix: '%',
    modelValue: 65,
    disabled: true
  }
}`,...(ce=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,fe,be;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Panel de Mezcla',
  render: () => ({
    components: {
      Knob
    },
    setup() {
      return {
        channels: ref([{
          label: 'Ch 1',
          value: 75,
          color: '#3b82f6'
        }, {
          label: 'Ch 2',
          value: 50,
          color: '#3b82f6'
        }, {
          label: 'Ch 3',
          value: 30,
          color: '#3b82f6'
        }, {
          label: 'Ch 4',
          value: 85,
          color: '#3b82f6'
        }]),
        reverb: ref(20),
        delay: ref(35),
        master: ref(80)
      };
    },
    template: \`
      <div style="display:flex; gap:1.5rem; align-items:flex-end; flex-wrap:wrap;">
        <Knob
          v-for="ch in channels"
          :key="ch.label"
          v-model="ch.value"
          :label="ch.label"
          suffix="%"
          size="sm"
          :color="ch.color"
        />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="reverb" label="Reverb" suffix="%" size="sm" color="#8b5cf6" />
        <Knob v-model="delay"  label="Delay"  suffix="%" size="sm" color="#8b5cf6" />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="master" label="Master" suffix="%" size="lg" color="#10b981" />
      </div>
    \`
  })
}`,...(be=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const Ge=["Default","SmallSize","LargeSize","CustomColor","StepDecimal","FullRange","Disabled","MixerPanel"];export{z as CustomColor,K as Default,w as Disabled,S as FullRange,V as LargeSize,C as MixerPanel,k as SmallSize,P as StepDecimal,Ge as __namedExportsOrder,Te as default};
