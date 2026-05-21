import{k as ia,g as m,G as la,d as G,s as B,f as ma,A as ca,c as i,x as t,J as da,F as ua,B as pa,e as D,t as C,D as va}from"./vue.esm-bundler-BuXXOL77.js";const ga=["title"],Aa=["src","alt"],fa={key:1,class:"neu-avatar__initials"},ya={key:2,class:"neu-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},n=ia({__name:"Avatar",props:{src:{},alt:{},name:{},size:{default:"md"},rounded:{default:"full"},variant:{default:"auto"},status:{},bordered:{type:Boolean,default:!1}},setup(a){const e=a,o=ca(!1),h=i(()=>e.name?e.name.trim().split(/\s+/).slice(0,2).map(s=>s[0].toUpperCase()).join(""):""),c=i(()=>{if(e.variant!=="auto")return e.variant;if(!e.name)return"secondary";const s=["primary","success","warning","danger","secondary"],r=[...e.name].reduce((w,k)=>w+k.charCodeAt(0),0);return s[r%s.length]}),l=i(()=>!!e.src&&!o.value),z=i(()=>!l.value&&!!e.name);return(s,r)=>(t(),m("span",{class:B(["neu-avatar",`neu-avatar--${a.size}`,`neu-avatar--rounded-${a.rounded}`,`neu-avatar--${c.value}`,{"neu-avatar--bordered":a.bordered}]),title:a.name??a.alt},[l.value?(t(),m("img",{key:0,src:a.src,alt:a.alt??a.name,class:"neu-avatar__img",onError:r[0]||(r[0]=w=>o.value=!0)},null,40,Aa)):z.value?(t(),m("span",fa,la(h.value),1)):(t(),m("svg",ya,[...r[1]||(r[1]=[G("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null,-1),G("circle",{cx:"12",cy:"7",r:"4"},null,-1)])])),a.status?(t(),m("span",{key:3,class:B(["neu-avatar__status",`neu-avatar__status--${a.status}`])},null,2)):ma("",!0)],10,ga))}});n.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",required:!1,type:{name:"string"}},{name:"alt",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'full'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'},{name:'"auto"'}]},defaultValue:{func:!1,value:"'auto'"}},{name:"status",required:!1,type:{name:"union",elements:[{name:'"online"'},{name:'"offline"'},{name:'"busy"'},{name:'"away"'}]}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Avatar/Avatar.vue"]};const xa={class:"neu-avatar-group"},oa=ia({__name:"AvatarGroup",props:{max:{},size:{default:"md"},overlap:{default:"md"}},setup(a){const e=a,o=da(),h={sm:"-0.375rem",md:"-0.75rem",lg:"-1.125rem"},c=i(()=>h[e.overlap]),l=i(()=>{var r;return((r=o.default)==null?void 0:r.call(o))??[]}),z=i(()=>e.max?l.value.slice(0,e.max):l.value),s=i(()=>e.max?Math.max(0,l.value.length-e.max):0);return(r,w)=>(t(),m("div",xa,[(t(!0),m(ua,null,pa(z.value,(k,S)=>(t(),D(va(k),{key:S,style:C({marginLeft:S===0?"0":c.value}),class:"neu-avatar-group__item"},null,8,["style"]))),128)),s.value>0?(t(),D(n,{key:0,name:`+${s.value}`,size:a.size,variant:"secondary",style:C({marginLeft:c.value}),class:"neu-avatar-group__item"},null,8,["name","size","style"])):ma("",!0)]))}});oa.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"max",required:!1,type:{name:"number"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"overlap",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],sourceFiles:["/home/runner/work/jah-ui/jah-ui/src/components/Avatar/AvatarGroup.vue"]};const ha={title:"Components/Avatar",component:n,tags:["autodocs"],parameters:{backgrounds:{default:"neumorphic",values:[{name:"neumorphic",value:"#e0e5ec"}]}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},variant:{control:"select",options:["auto","primary","secondary","success","warning","danger"]},status:{control:"select",options:[void 0,"online","offline","busy","away"]}}},d={name:"Con imagen",args:{src:"https://i.pravatar.cc/150?img=3",alt:"Avatar",size:"md"}},u={name:"Con iniciales",args:{name:"Juan Díaz",size:"md"}},p={name:"Ícono (sin imagen ni nombre)",args:{size:"md"}},v={name:"Tamaños",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="AB" size="xs" />
        <Avatar name="AB" size="sm" />
        <Avatar name="AB" size="md" />
        <Avatar name="AB" size="lg" />
        <Avatar name="AB" size="xl" />
      </div>
    `})},g={name:"Rounded",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="JD" rounded="none" />
        <Avatar name="JD" rounded="sm" />
        <Avatar name="JD" rounded="md" />
        <Avatar name="JD" rounded="lg" />
        <Avatar name="JD" rounded="full" />
      </div>
    `})},A={name:"Variants (iniciales)",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="PR" variant="primary" />
        <Avatar name="SE" variant="secondary" />
        <Avatar name="SU" variant="success" />
        <Avatar name="WA" variant="warning" />
        <Avatar name="DA" variant="danger" />
      </div>
    `})},f={name:"Variant automático por nombre",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="Ana García" />
        <Avatar name="Luis Pérez" />
        <Avatar name="María López" />
        <Avatar name="Carlos Ruiz" />
        <Avatar name="Sara Torres" />
      </div>
    `})},y={name:"Con status",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=1" status="online" />
          <span style="font-size:0.75rem;color:#6b7280;">Online</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=2" status="offline" />
          <span style="font-size:0.75rem;color:#6b7280;">Offline</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=4" status="busy" />
          <span style="font-size:0.75rem;color:#6b7280;">Ocupado</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=5" status="away" />
          <span style="font-size:0.75rem;color:#6b7280;">Ausente</span>
        </div>
      </div>
    `})},x={name:"Bordered",render:()=>({components:{Avatar:n},template:`
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Avatar name="JD" bordered />
        <Avatar src="https://i.pravatar.cc/150?img=7" bordered status="online" />
        <Avatar name="MR" variant="success" bordered />
      </div>
    `})},b={name:"AvatarGroup",render:()=>({components:{Avatar:n,AvatarGroup:oa},template:`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <AvatarGroup :max="4">
          <Avatar src="https://i.pravatar.cc/150?img=1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" />
          <Avatar src="https://i.pravatar.cc/150?img=6" />
        </AvatarGroup>

        <AvatarGroup :max="3">
          <Avatar name="Ana García" />
          <Avatar name="Luis Pérez" />
          <Avatar name="María López" />
          <Avatar name="Carlos Ruiz" />
          <Avatar name="Sara Torres" />
        </AvatarGroup>
      </div>
    `})};var V,_,J;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Con imagen',
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Avatar',
    size: 'md'
  }
}`,...(J=(_=d.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var R,q,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Con iniciales',
  args: {
    name: 'Juan Díaz',
    size: 'md'
  }
}`,...(L=(q=u.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var I,W,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Ícono (sin imagen ni nombre)',
  args: {
    size: 'md'
  }
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var $,O,T;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Tamaños',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="AB" size="xs" />
        <Avatar name="AB" size="sm" />
        <Avatar name="AB" size="md" />
        <Avatar name="AB" size="lg" />
        <Avatar name="AB" size="xl" />
      </div>
    \`
  })
}`,...(T=(O=v.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,E,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Rounded',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="JD" rounded="none" />
        <Avatar name="JD" rounded="sm" />
        <Avatar name="JD" rounded="md" />
        <Avatar name="JD" rounded="lg" />
        <Avatar name="JD" rounded="full" />
      </div>
    \`
  })
}`,...(N=(E=g.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,F,U;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Variants (iniciales)',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="PR" variant="primary" />
        <Avatar name="SE" variant="secondary" />
        <Avatar name="SU" variant="success" />
        <Avatar name="WA" variant="warning" />
        <Avatar name="DA" variant="danger" />
      </div>
    \`
  })
}`,...(U=(F=A.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var H,K,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variant automático por nombre',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="Ana García" />
        <Avatar name="Luis Pérez" />
        <Avatar name="María López" />
        <Avatar name="Carlos Ruiz" />
        <Avatar name="Sara Torres" />
      </div>
    \`
  })
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Con status',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=1" status="online" />
          <span style="font-size:0.75rem;color:#6b7280;">Online</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=2" status="offline" />
          <span style="font-size:0.75rem;color:#6b7280;">Offline</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=4" status="busy" />
          <span style="font-size:0.75rem;color:#6b7280;">Ocupado</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=5" status="away" />
          <span style="font-size:0.75rem;color:#6b7280;">Ausente</span>
        </div>
      </div>
    \`
  })
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,ra;x.parameters={...x.parameters,docs:{...(aa=x.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Bordered',
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Avatar name="JD" bordered />
        <Avatar src="https://i.pravatar.cc/150?img=7" bordered status="online" />
        <Avatar name="MR" variant="success" bordered />
      </div>
    \`
  })
}`,...(ra=(ea=x.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var na,ta,sa;b.parameters={...b.parameters,docs:{...(na=b.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: 'AvatarGroup',
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <AvatarGroup :max="4">
          <Avatar src="https://i.pravatar.cc/150?img=1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" />
          <Avatar src="https://i.pravatar.cc/150?img=6" />
        </AvatarGroup>

        <AvatarGroup :max="3">
          <Avatar name="Ana García" />
          <Avatar name="Luis Pérez" />
          <Avatar name="María López" />
          <Avatar name="Carlos Ruiz" />
          <Avatar name="Sara Torres" />
        </AvatarGroup>
      </div>
    \`
  })
}`,...(sa=(ta=b.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};const za=["WithImage","WithInitials","WithIcon","Sizes","Rounded","Variants","AutoVariant","WithStatus","Bordered","Group"];export{f as AutoVariant,x as Bordered,b as Group,g as Rounded,v as Sizes,A as Variants,p as WithIcon,d as WithImage,u as WithInitials,y as WithStatus,za as __namedExportsOrder,ha as default};
