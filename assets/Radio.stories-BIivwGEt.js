import{k as T,g as a,d as g,f as o,s as b,G as f,c as j,x as n,A as L}from"./vue.esm-bundler-BuXXOL77.js";const M=["name","value","checked","disabled"],$={key:0,class:"neu-radio__dot"},F={key:0,class:"neu-radio__content"},J={key:0,class:"neu-radio__label"},p=T({__name:"Radio",props:{modelValue:{default:null},value:{},label:{},hint:{},name:{},size:{default:"md"},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:v}){const l=e,A=v,r=j(()=>l.modelValue===l.value);function I(){l.disabled||r.value||A("update:modelValue",l.value)}return(K,Q)=>(n(),a("label",{class:b(["neu-radio",`neu-radio--${e.size}`,{"neu-radio--disabled":e.disabled,"neu-radio--error":e.error}])},[g("input",{type:"radio",class:"neu-radio__native",name:e.name,value:e.value,checked:r.value,disabled:e.disabled,onChange:I},null,40,M),g("span",{class:b(["neu-radio__ring",`neu-radio__ring--${e.size}`,{"neu-radio__ring--selected":r.value,"neu-radio__ring--error":e.error}])},[r.value?(n(),a("span",$)):o("",!0)],2),e.label||e.hint?(n(),a("span",F,[e.label?(n(),a("span",J,f(e.label),1)):o("",!0),e.hint?(n(),a("span",{key:1,class:b(["neu-radio__hint",{"neu-radio__hint--error":e.error}])},f(e.hint),3)):o("",!0)])):o("",!0)],2))}});p.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Radio/Radio.vue"]};const X={title:"Components/Radio",component:p,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},s={args:{label:"Opción A",value:"a"}},t={args:{label:"Opción seleccionada",value:"a",modelValue:"a"}},i={name:"Con Hint",args:{label:"Plan Pro",hint:"Incluye todas las funciones premium.",value:"pro",modelValue:"pro"}},d={name:"Estado Error",args:{label:"Opción requerida",hint:"Debes seleccionar una opción.",value:"a",error:!0}},u={args:{label:"Opción deshabilitada",value:"a",disabled:!0}},m={name:"Grupo",render:()=>({components:{Radio:p},setup(){return{plan:L(null),options:[{value:"free",label:"Gratuito",hint:"Hasta 3 proyectos."},{value:"pro",label:"Pro",hint:"Proyectos ilimitados + soporte."},{value:"team",label:"Equipo",hint:"Todo Pro + colaboración."},{value:"enterprise",label:"Enterprise",hint:"Disponible próximamente.",disabled:!0}]}},template:`
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Selecciona un plan</p>
        <Radio
          v-for="opt in options"
          :key="opt.value"
          v-model="plan"
          :value="opt.value"
          :label="opt.label"
          :hint="opt.hint"
          :disabled="opt.disabled"
          name="plan"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Plan actual: <strong style="color:#3b82f6">{{ plan ?? '—' }}</strong>
        </p>
      </div>
    `})},c={render:()=>({components:{Radio:p},template:`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Radio size="sm" label="Small"  value="s" model-value="s" />
        <Radio size="md" label="Medium" value="m" model-value="m" />
        <Radio size="lg" label="Large"  value="l" model-value="l" />
      </div>
    `})};var h,y,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Opción A',
    value: 'a'
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var k,R,S;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Opción seleccionada',
    value: 'a',
    modelValue: 'a'
  }
}`,...(S=(R=t.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var V,x,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Con Hint',
  args: {
    label: 'Plan Pro',
    hint: 'Incluye todas las funciones premium.',
    value: 'pro',
    modelValue: 'pro'
  }
}`,...(q=(x=i.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var E,P,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Estado Error',
  args: {
    label: 'Opción requerida',
    hint: 'Debes seleccionar una opción.',
    value: 'a',
    error: true
  }
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var O,_,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Opción deshabilitada',
    value: 'a',
    disabled: true
  }
}`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var G,H,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Grupo',
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const plan = ref<string | null>(null);
      const options = [{
        value: 'free',
        label: 'Gratuito',
        hint: 'Hasta 3 proyectos.'
      }, {
        value: 'pro',
        label: 'Pro',
        hint: 'Proyectos ilimitados + soporte.'
      }, {
        value: 'team',
        label: 'Equipo',
        hint: 'Todo Pro + colaboración.'
      }, {
        value: 'enterprise',
        label: 'Enterprise',
        hint: 'Disponible próximamente.',
        disabled: true
      }];
      return {
        plan,
        options
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Selecciona un plan</p>
        <Radio
          v-for="opt in options"
          :key="opt.value"
          v-model="plan"
          :value="opt.value"
          :label="opt.label"
          :hint="opt.hint"
          :disabled="opt.disabled"
          name="plan"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Plan actual: <strong style="color:#3b82f6">{{ plan ?? '—' }}</strong>
        </p>
      </div>
    \`
  })
}`,...(B=(H=m.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var N,W,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Radio size="sm" label="Small"  value="s" model-value="s" />
        <Radio size="md" label="Medium" value="m" model-value="m" />
        <Radio size="lg" label="Large"  value="l" model-value="l" />
      </div>
    \`
  })
}`,...(w=(W=c.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const Y=["Default","Selected","WithHint","WithError","Disabled","Group","Sizes"];export{s as Default,u as Disabled,m as Group,t as Selected,c as Sizes,d as WithError,i as WithHint,Y as __namedExportsOrder,X as default};
