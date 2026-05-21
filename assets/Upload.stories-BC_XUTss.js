import{k as he,x as s,g as d,d as a,s as g,G as m,f as D,F as ge,B as xe,h as ye,N as be,A as p,c as W}from"./vue.esm-bundler-BuXXOL77.js";const we=["accept","multiple","disabled"],ke=["disabled"],_e={class:"neu-upload__label"},Ue={key:0,class:"neu-upload__hint"},Fe={key:0,class:"neu-upload__error-msg"},ze={key:1,class:"neu-upload__list"},Se={class:"neu-upload__file-icon"},je={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},Ce={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},De={key:2,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},Be={key:3,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},Ve={key:4,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},Ae={class:"neu-upload__file-info"},We={class:"neu-upload__file-name"},Me={class:"neu-upload__file-meta"},$e={key:0,class:"neu-upload__file-error"},qe={key:1},Pe=["aria-label","onClick"],c=he({__name:"Upload",props:{modelValue:{default:()=>[]},accept:{},multiple:{type:Boolean,default:!1},maxSize:{},maxFiles:{},disabled:{type:Boolean,default:!1},label:{},hint:{},error:{}},emits:["update:modelValue","reject"],setup(t,{emit:o}){const n=t,z=o,v=p(),u=p(0),S=W(()=>u.value>0&&!n.disabled);let ie=0;function B(){return`uf-${++ie}`}function j(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`}function oe(e){return n.maxSize&&e.size>n.maxSize?`Supera el límite de ${j(n.maxSize)}`:n.accept&&!n.accept.split(",").map(l=>l.trim()).some(l=>l.startsWith(".")?e.name.toLowerCase().endsWith(l.toLowerCase()):l.endsWith("/*")?e.type.startsWith(l.slice(0,-1)):e.type===l)?"Tipo de archivo no permitido":null}function V(e){if(!e||n.disabled)return;const r=n.modelValue??[],i=[],l=[];for(const f of Array.from(e)){const C=oe(f);if(C){l.push({file:f,reason:C}),i.push({id:B(),file:f,error:C});continue}if(n.maxFiles&&r.length+i.filter(ve=>!ve.error).length>=n.maxFiles){l.push({file:f,reason:`Máximo ${n.maxFiles} archivos permitidos`});continue}i.push({id:B(),file:f})}l.length&&z("reject",l);const fe=n.multiple?[...r,...i]:i.slice(-1);z("update:modelValue",fe)}function le(e){z("update:modelValue",(n.modelValue??[]).filter(r=>r.id!==e))}function se(e){e.preventDefault(),n.disabled||u.value++}function de(){u.value=Math.max(0,u.value-1)}function pe(e){e.preventDefault()}function ce(e){var r;e.preventDefault(),u.value=0,V(((r=e.dataTransfer)==null?void 0:r.files)??null)}function me(){var e;n.disabled||(e=v.value)==null||e.click()}function ue(e){V(e.target.files),v.value&&(v.value.value="")}function h(e){const r=e.type,i=e.name.toLowerCase();return r.startsWith("image/")?"image":r.startsWith("video/")?"video":r.startsWith("audio/")?"audio":r==="application/pdf"||i.endsWith(".pdf")?"doc":/\.(zip|rar|7z|tar|gz|bz2)$/.test(i)?"archive":"file"}const A=W(()=>{const e=[];return n.accept&&e.push(n.accept.replace(/,\s*/g,", ")),n.maxSize&&e.push(`máx. ${j(n.maxSize)}`),n.maxFiles&&n.multiple&&e.push(`hasta ${n.maxFiles} archivos`),e.join(" · ")});return(e,r)=>(s(),d("div",{class:g(["neu-upload",{"neu-upload--disabled":t.disabled}])},[a("input",{ref_key:"inputRef",ref:v,type:"file",class:"neu-upload__input",accept:t.accept,multiple:t.multiple,disabled:t.disabled,onChange:ue},null,40,we),a("button",{type:"button",disabled:t.disabled,class:g(["neu-upload__zone",{"neu-upload__zone--dragging":S.value,"neu-upload__zone--error":!!t.error,"neu-upload__zone--has-files":(t.modelValue??[]).length>0}]),onClick:me,onDragenter:se,onDragleave:de,onDragover:pe,onDrop:ce},[a("span",{class:g(["neu-upload__icon",{"neu-upload__icon--dragging":S.value}])},[...r[0]||(r[0]=[a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},[a("polyline",{points:"16 16 12 12 8 16"}),a("line",{x1:"12",y1:"12",x2:"12",y2:"21"}),a("path",{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"})],-1)])],2),a("p",_e,m(S.value?"Suelta los archivos aquí":t.label??"Arrastra archivos o haz clic para seleccionar"),1),A.value||t.hint?(s(),d("p",Ue,m(A.value||t.hint),1)):D("",!0)],42,ke),t.error?(s(),d("span",Fe,m(t.error),1)):D("",!0),(t.modelValue??[]).length?(s(),d("ul",ze,[(s(!0),d(ge,null,xe(t.modelValue,i=>(s(),d("li",{key:i.id,class:g(["neu-upload__file",{"neu-upload__file--error":!!i.error}])},[a("span",Se,[h(i.file)==="image"?(s(),d("svg",je,[...r[1]||(r[1]=[a("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),a("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),a("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):h(i.file)==="video"?(s(),d("svg",Ce,[...r[2]||(r[2]=[a("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),a("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):h(i.file)==="audio"?(s(),d("svg",De,[...r[3]||(r[3]=[a("path",{d:"M9 18V5l12-2v13"},null,-1),a("circle",{cx:"6",cy:"18",r:"3"},null,-1),a("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):h(i.file)==="archive"?(s(),d("svg",Be,[...r[4]||(r[4]=[a("polyline",{points:"21 8 21 21 3 21 3 8"},null,-1),a("rect",{x:"1",y:"3",width:"22",height:"5"},null,-1),a("line",{x1:"10",y1:"12",x2:"14",y2:"12"},null,-1)])])):(s(),d("svg",Ve,[...r[5]||(r[5]=[ye('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',5)])]))]),a("div",Ae,[a("span",We,m(i.file.name),1),a("span",Me,[i.error?(s(),d("span",$e,m(i.error),1)):(s(),d("span",qe,m(j(i.file.size)),1))])]),a("button",{type:"button",class:"neu-upload__file-remove","aria-label":`Eliminar ${i.file.name}`,onClick:be(l=>le(i.id),["stop"])},[...r[6]||(r[6]=[a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[a("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Pe)],2))),128))])):D("",!0)],2))}});c.__docgenInfo={exportName:"default",displayName:"Upload",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"Array",elements:[{name:"UploadFile"}]},defaultValue:{func:!1,value:"() => []"}},{name:"accept",required:!1,type:{name:"string"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxSize",required:!1,type:{name:"number"}},{name:"maxFiles",required:!1,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"UploadFile"}]}},{name:"reject",type:{names:["Array"],elements:[{name:"{ file: File; reason: string }"}]}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Upload/Upload.vue"]};const Ee={title:"Components/Upload",component:c,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{accept:{control:"text"},maxSize:{control:"number"},maxFiles:{control:"number"},multiple:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},hint:{control:"text"},error:{control:"text"}}},x={name:"Por defecto",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" />
        <p style="margin-top:1rem;font-family:inherit;font-size:0.8125rem;color:#9ca3af;">
          Archivos: {{ files.length }}
        </p>
      </div>
    `}),args:{}},y={name:"Múltiples archivos",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-files="5"
          label="Arrastra hasta 5 archivos" />
      </div>
    `}),args:{multiple:!0,maxFiles:5}},b={name:"Solo imágenes",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" accept="image/*" multiple
          label="Arrastra imágenes aquí" />
      </div>
    `}),args:{accept:"image/*",multiple:!0}},w={name:"Con límite de tamaño",render:t=>({components:{Upload:c},setup(){const o=p([]),n=p([]);return{args:t,files:o,rejected:n}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-size="2097152"
          accept=".pdf,.doc,.docx" @reject="rejected = $event" />
        <div v-if="rejected.length" style="margin-top:0.75rem;font-family:inherit;font-size:0.8125rem;color:#ef4444;">
          Rechazados: {{ rejected.map(r => r.file.name).join(', ') }}
        </div>
      </div>
    `}),args:{multiple:!0,maxSize:2097152,accept:".pdf,.doc,.docx"}},k={name:"Con error",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" error="Debes adjuntar al menos un archivo" />
      </div>
    `}),args:{error:"Debes adjuntar al menos un archivo"}},_={name:"Con descripción",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files"
          hint="Solo archivos PDF, máx. 10 MB" accept=".pdf" :max-size="10485760" />
      </div>
    `}),args:{hint:"Solo archivos PDF, máx. 10 MB",accept:".pdf",maxSize:10485760}},U={name:"Deshabilitado",render:t=>({components:{Upload:c},setup(){const o=p([]);return{args:t,files:o}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" disabled />
      </div>
    `}),args:{disabled:!0}},F={name:"Con archivos precargados",render:()=>({components:{Upload:c},setup(){return{files:p([{id:"pre-1",file:new File([""],"informe-2024.pdf",{type:"application/pdf"})},{id:"pre-2",file:new File([""],"foto-perfil.png",{type:"image/png"})},{id:"pre-3",file:new File(new Array(512e3).fill("x"),"video-clip.mp4",{type:"video/mp4"})}])}},template:`
      <div style="width:100%;max-width:32rem;">
        <Upload v-model="files" multiple />
      </div>
    `})};var M,$,q;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Por defecto',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" />
        <p style="margin-top:1rem;font-family:inherit;font-size:0.8125rem;color:#9ca3af;">
          Archivos: {{ files.length }}
        </p>
      </div>
    \`
  }),
  args: {}
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var P,L,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Múltiples archivos',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-files="5"
          label="Arrastra hasta 5 archivos" />
      </div>
    \`
  }),
  args: {
    multiple: true,
    maxFiles: 5
  }
}`,...(E=(L=y.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,I,H;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Solo imágenes',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" accept="image/*" multiple
          label="Arrastra imágenes aquí" />
      </div>
    \`
  }),
  args: {
    accept: 'image/*',
    multiple: true
  }
}`,...(H=(I=b.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var O,R,T;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Con límite de tamaño',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      const rejected = ref<{
        file: File;
        reason: string;
      }[]>([]);
      return {
        args,
        files,
        rejected
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-size="2097152"
          accept=".pdf,.doc,.docx" @reject="rejected = $event" />
        <div v-if="rejected.length" style="margin-top:0.75rem;font-family:inherit;font-size:0.8125rem;color:#ef4444;">
          Rechazados: {{ rejected.map(r => r.file.name).join(', ') }}
        </div>
      </div>
    \`
  }),
  args: {
    multiple: true,
    maxSize: 2_097_152,
    accept: '.pdf,.doc,.docx'
  }
}`,...(T=(R=w.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var K,G,J;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Con error',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" error="Debes adjuntar al menos un archivo" />
      </div>
    \`
  }),
  args: {
    error: 'Debes adjuntar al menos un archivo'
  }
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Con descripción',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files"
          hint="Solo archivos PDF, máx. 10 MB" accept=".pdf" :max-size="10485760" />
      </div>
    \`
  }),
  args: {
    hint: 'Solo archivos PDF, máx. 10 MB',
    accept: '.pdf',
    maxSize: 10_485_760
  }
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;U.parameters={...U.parameters,docs:{...(Z=U.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  render: args => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" disabled />
      </div>
    \`
  }),
  args: {
    disabled: true
  }
}`,...(te=(ee=U.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,ne;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Con archivos precargados',
  render: () => ({
    components: {
      Upload
    },
    setup() {
      const files = ref<UploadFile[]>([{
        id: 'pre-1',
        file: new File([''], 'informe-2024.pdf', {
          type: 'application/pdf'
        })
      }, {
        id: 'pre-2',
        file: new File([''], 'foto-perfil.png', {
          type: 'image/png'
        })
      }, {
        id: 'pre-3',
        file: new File(new Array(512_000).fill('x'), 'video-clip.mp4', {
          type: 'video/mp4'
        })
      }]);
      return {
        files
      };
    },
    template: \`
      <div style="width:100%;max-width:32rem;">
        <Upload v-model="files" multiple />
      </div>
    \`
  })
}`,...(ne=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Ne=["Default","Multiple","ImageOnly","WithSizeLimit","WithError","WithHint","Disabled","WithPreloadedFiles"];export{x as Default,U as Disabled,b as ImageOnly,y as Multiple,k as WithError,_ as WithHint,F as WithPreloadedFiles,w as WithSizeLimit,Ne as __namedExportsOrder,Ee as default};
