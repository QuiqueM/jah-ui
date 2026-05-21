import{k as re,g as i,F as D,B as se,t as ne,s as u,c as oe,x as l,d as c,G as z,f as _,A as m}from"./vue.esm-bundler-BuXXOL77.js";const ae=["tabindex","role","aria-current","onClick","onKeydown"],pe={class:"neu-stepper__indicator-col"},ie={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},le={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},de={key:2,class:"neu-stepper__number"},ce={class:"neu-stepper__content"},me={class:"neu-stepper__label"},ue={key:0,class:"neu-stepper__description"},a=re({__name:"Stepper",props:{modelValue:{},steps:{},orientation:{default:"horizontal"},size:{default:"md"},clickable:{type:Boolean,default:!1},color:{default:"#3b82f6"}},emits:["update:modelValue"],setup(e,{emit:s}){const n=e,V=s;function f(t){var o;return(o=n.steps[t])!=null&&o.error?"error":t<n.modelValue?"completed":t===n.modelValue?"active":"pending"}function C(t){return t<n.modelValue}function Z(t){var o;!n.clickable||(o=n.steps[t])!=null&&o.disabled||V("update:modelValue",t)}function ee(t,o){var p,r;if(n.clickable){if(t.key==="ArrowRight"||t.key==="ArrowDown"){t.preventDefault();const d=Math.min(o+1,n.steps.length-1);(p=n.steps[d])!=null&&p.disabled||V("update:modelValue",d)}if(t.key==="ArrowLeft"||t.key==="ArrowUp"){t.preventDefault();const d=Math.max(o-1,0);(r=n.steps[d])!=null&&r.disabled||V("update:modelValue",d)}}}const te=oe(()=>({"--stepper-color":n.color}));return(t,o)=>(l(),i("div",{class:u(["neu-stepper",`neu-stepper--${e.orientation}`,`neu-stepper--${e.size}`]),style:ne(te.value)},[(l(!0),i(D,null,se(e.steps,(p,r)=>(l(),i(D,{key:r},[c("div",{class:u(["neu-stepper__step",`neu-stepper__step--${f(r)}`,{"neu-stepper__step--clickable":e.clickable&&!p.disabled,"neu-stepper__step--disabled":p.disabled}]),tabindex:e.clickable&&!p.disabled?0:-1,role:e.clickable?"button":void 0,"aria-current":r===e.modelValue?"step":void 0,onClick:d=>Z(r),onKeydown:d=>ee(d,r)},[c("div",pe,[c("div",{class:u(["neu-stepper__indicator",`neu-stepper__indicator--${f(r)}`])},[f(r)==="completed"?(l(),i("svg",ie,[...o[0]||(o[0]=[c("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):f(r)==="error"?(l(),i("svg",le,[...o[1]||(o[1]=[c("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),c("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1)])])):(l(),i("span",de,z(r+1),1))],2),e.orientation==="vertical"&&r<e.steps.length-1?(l(),i("div",{key:0,class:u(["neu-stepper__connector",{"neu-stepper__connector--done":C(r)}])},null,2)):_("",!0)]),c("div",ce,[c("span",me,z(p.label),1),p.description?(l(),i("span",ue,z(p.description),1)):_("",!0)])],42,ae),e.orientation==="horizontal"&&r<e.steps.length-1?(l(),i("div",{key:0,class:u(["neu-stepper__connector",{"neu-stepper__connector--done":C(r)}])},null,2)):_("",!0)],64))),128))],6))}});a.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"steps",required:!0,type:{name:"Array",elements:[{name:"StepperStep"}]}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#3b82f6'"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Stepper/Stepper.vue"]};const fe={title:"Components/Stepper",component:a,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"color"},modelValue:{control:{type:"number",min:0}}}},b=[{label:"Cuenta",description:"Datos personales"},{label:"Dirección",description:"Dirección de envío"},{label:"Pago",description:"Método de pago"},{label:"Confirmación",description:"Revisa tu pedido"}],g={render:e=>({components:{Stepper:a},setup(){const s=m(e.modelValue??1);return{args:e,step:s,basicSteps:b}},template:`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
        <div style="display:flex;gap:0.75rem;margin-top:2rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Siguiente</button>
        </div>
      </div>
    `}),args:{modelValue:1}},v={name:"Orientación Vertical",render:e=>({components:{Stepper:a},setup(){const s=m(1);return{args:e,step:s,basicSteps:b}},template:`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" orientation="vertical" />
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Siguiente</button>
        </div>
      </div>
    `}),args:{modelValue:1}},h={name:"Navegable al hacer clic",render:e=>({components:{Stepper:a},setup(){const s=m(0);return{args:e,step:s,basicSteps:b}},template:`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" clickable />
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-top:1.25rem;">
          Paso activo: <strong>{{ basicSteps[step].label }}</strong>
        </p>
      </div>
    `}),args:{modelValue:0,clickable:!0}},x={name:"Con paso en error",render:e=>({components:{Stepper:a},setup(){const s=m(2);return{args:e,step:s,steps:[{label:"Cuenta",description:"Completado"},{label:"Dirección",description:"Dirección inválida",error:!0},{label:"Pago",description:"Método de pago"}]}},template:`
      <div style="width:100%;max-width:36rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" />
      </div>
    `}),args:{modelValue:2}},y={name:"Con paso deshabilitado",render:e=>({components:{Stepper:a},setup(){const s=m(0);return{args:e,step:s,steps:[{label:"Información"},{label:"Plan",description:"Elige tu plan"},{label:"Pago",description:"Requiere plan",disabled:!0},{label:"Listo"}]}},template:`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" clickable />
      </div>
    `}),args:{modelValue:0,clickable:!0}},S={name:"Todos los tamaños",render:()=>({components:{Stepper:a},setup(){return{steps:[{label:"Paso 1"},{label:"Paso 2"},{label:"Paso 3"}]}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;width:100%;max-width:32rem;">
        <Stepper :steps="steps" :model-value="1" size="sm" />
        <Stepper :steps="steps" :model-value="1" size="md" />
        <Stepper :steps="steps" :model-value="1" size="lg" />
      </div>
    `})},k={name:"Color personalizado",render:e=>({components:{Stepper:a},setup(){const s=m(1);return{args:e,step:s,basicSteps:b}},template:`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
      </div>
    `}),args:{modelValue:1,color:"#8b5cf6"}},w={name:"Todos completados",render:e=>({components:{Stepper:a},setup(){return{args:e,basicSteps:b}},template:`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" :steps="basicSteps" :model-value="4" />
      </div>
    `}),args:{color:"#10b981"}};var P,M,A;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(args.modelValue ?? 1);
      return {
        args,
        step,
        basicSteps
      };
    },
    template: \`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
        <div style="display:flex;gap:0.75rem;margin-top:2rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Siguiente</button>
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: 1
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var q,B,E;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Orientación Vertical',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(1);
      return {
        args,
        step,
        basicSteps
      };
    },
    template: \`
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" orientation="vertical" />
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Siguiente</button>
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: 1
  }
}`,...(E=(B=v.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,T,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Navegable al hacer clic',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(0);
      return {
        args,
        step,
        basicSteps
      };
    },
    template: \`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" clickable />
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-top:1.25rem;">
          Paso activo: <strong>{{ basicSteps[step].label }}</strong>
        </p>
      </div>
    \`
  }),
  args: {
    modelValue: 0,
    clickable: true
  }
}`,...($=(T=h.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var j,L,R;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Con paso en error',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(2);
      const steps = [{
        label: 'Cuenta',
        description: 'Completado'
      }, {
        label: 'Dirección',
        description: 'Dirección inválida',
        error: true
      }, {
        label: 'Pago',
        description: 'Método de pago'
      }];
      return {
        args,
        step,
        steps
      };
    },
    template: \`
      <div style="width:100%;max-width:36rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" />
      </div>
    \`
  }),
  args: {
    modelValue: 2
  }
}`,...(R=(L=x.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,F,I;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Con paso deshabilitado',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(0);
      const steps = [{
        label: 'Información'
      }, {
        label: 'Plan',
        description: 'Elige tu plan'
      }, {
        label: 'Pago',
        description: 'Requiere plan',
        disabled: true
      }, {
        label: 'Listo'
      }];
      return {
        args,
        step,
        steps
      };
    },
    template: \`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" clickable />
      </div>
    \`
  }),
  args: {
    modelValue: 0,
    clickable: true
  }
}`,...(I=(F=y.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var K,O,G;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Todos los tamaños',
  render: () => ({
    components: {
      Stepper
    },
    setup() {
      const steps = [{
        label: 'Paso 1'
      }, {
        label: 'Paso 2'
      }, {
        label: 'Paso 3'
      }];
      return {
        steps
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;width:100%;max-width:32rem;">
        <Stepper :steps="steps" :model-value="1" size="sm" />
        <Stepper :steps="steps" :model-value="1" size="md" />
        <Stepper :steps="steps" :model-value="1" size="lg" />
      </div>
    \`
  })
}`,...(G=(O=S.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var U,H,J;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Color personalizado',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const step = ref(1);
      return {
        args,
        step,
        basicSteps
      };
    },
    template: \`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
      </div>
    \`
  }),
  args: {
    modelValue: 1,
    color: '#8b5cf6'
  }
}`,...(J=(H=k.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Todos completados',
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      return {
        args,
        basicSteps
      };
    },
    template: \`
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" :steps="basicSteps" :model-value="4" />
      </div>
    \`
  }),
  args: {
    color: '#10b981'
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ge=["Default","Vertical","Clickable","WithError","WithDisabled","AllSizes","CustomColor","Completed"];export{S as AllSizes,h as Clickable,w as Completed,k as CustomColor,g as Default,v as Vertical,y as WithDisabled,x as WithError,ge as __namedExportsOrder,fe as default};
