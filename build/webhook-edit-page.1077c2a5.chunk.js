"use strict";(self.webpackChunkkozmedo_cms=self.webpackChunkkozmedo_cms||[]).push([[5162],{81788:(G,b,t)=>{t.d(b,{Z:()=>ge});var e=t(67294),o=t(31799),j=t(185),M=t(88767),v=t(16550),P=t(39645),me=t(45697),i=t.n(me),ne=t(90321),se=t(85018),Ee=t(67109),pe=t(53979),m=t(11047),S=t(29728),fe=t(49066),k=t(41580),J=t(11276),A=t(74571),Y=t(16364),O=t(41054),$=t(86896),re=t(19270),T=t(75515),le=t(46449),ve=t(36213),Ce=t(92155),be=t(11700),Me=t.n(be);const W=({disabledEvents:n,name:s,events:r,inputValue:l,handleChange:c,handleChangeAll:p})=>{const d=r.filter(h=>!n.includes(h)),u=l.length===d.length,E=l.length>0,I=({target:{name:h}})=>{p({target:{name:h,value:!u}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(ve.X,{indeterminate:E&&!u,"aria-label":"Select all entries",name:s,onChange:I,value:u},Me()(s))),r.map(h=>e.createElement("td",{key:h},e.createElement(Ce.C,{disabled:n.includes(h),"aria-label":h,name:h,value:l.includes(h),onValueChange:f=>c({target:{name:h,value:f}})}))))};W.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},W.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};const a=W,y=n=>n.reduce((s,r)=>{const l=r.split(".")[0];return s[l]||(s[l]=[]),s[l].push(r),s},{}),U=le.ZP.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,Z={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},K=({isDraftAndPublish:n})=>{const s=n?Z.headers.draftAndPublish:Z.headers.default,r=n?Z.events.draftAndPublish:Z.events.default,{formatMessage:l}=(0,$.Z)(),{values:c,handleChange:p}=(0,O.u6)(),d="events",u=c.events,E=[],I=y(u),h=({target:{name:g,value:B}})=>{let R=new Set(u);B?R.add(g):R.delete(g),p({target:{name:d,value:Array.from(R)}})},f=({target:{name:g,value:B}})=>{let R=new Set(u);B?r[g].forEach(L=>{E.includes(L)||R.add(L)}):r[g].forEach(L=>R.delete(L)),p({target:{name:d,value:Array.from(R)}})};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(re.Q,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(U,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),s.map(g=>g==="app.utils.publish"||g==="app.utils.unpublish"?e.createElement("td",{key:g.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},l(g))):e.createElement("td",{key:g.id},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},l(g)))))),e.createElement("tbody",null,Object.keys(r).map(g=>e.createElement(a,{disabledEvents:E,key:g,name:g,events:r[g],inputValue:I[g],handleChange:h,handleChangeAll:f})))))};K.propTypes={isDraftAndPublish:i().bool.isRequired};const q=K;var Pe=t(96315),ye=t(39785),xe=t(29178),ee=t(90608);const ie=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],te=({name:n,onChange:s,value:r,...l})=>{const[c,p]=(0,e.useState)(r?[...ie,r]:ie),d=E=>{s({target:{name:n,value:E}})},u=E=>{p(I=>[...I,E]),s({target:{name:n,value:E}})};return e.createElement(xe.XU,{...l,onChange:d,onCreateOption:u,placeholder:"",value:r},c.map(E=>e.createElement(ee.O,{value:E,key:E},E)))};te.defaultProps={value:void 0},te.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};const Ie=te,Oe=()=>{const{formatMessage:n}=(0,$.Z)(),{values:s,errors:r}=(0,O.u6)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(re.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(k.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(O.F2,{validateOnChange:!1,name:"headers",render:({push:l,remove:c})=>e.createElement(J.r,{gap:4},s.headers?.map((p,d)=>e.createElement(e.Fragment,{key:d},e.createElement(A.P,{col:6},e.createElement(O.gN,{as:Ie,name:`headers.${d}.key`,"aria-label":`row ${d+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[d]?.key&&n({id:r.headers[d]?.key,defaultMessage:r.headers[d]?.key})})),e.createElement(A.P,{col:6},e.createElement(m.k,{alignItems:"flex-end"},e.createElement(k.x,{style:{flex:1}},e.createElement(O.gN,{as:Y.o,"aria-label":`row ${d+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${d}.value`,error:r.headers?.[d]?.value&&n({id:r.headers[d]?.value,defaultMessage:r.headers[d]?.value})})),e.createElement(m.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[d]?.value?0:5},e.createElement(o.fG,{onClick:()=>s.headers.length!==1&&c(d),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:d+1})})))))),e.createElement(A.P,{col:12},e.createElement(ye.A,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(Pe.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var Te=t(86647),F=t(70968);const Q=le.ZP.svg(({theme:n,color:s})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[s]};
  }
`),ae=({isPending:n,statusCode:s})=>{const{formatMessage:r}=(0,$.Z)();return n?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:Te.Z}),e.createElement(T.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):s>=200&&s<300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:se.Z,color:"success700"}),e.createElement(T.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):s>=300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:F.Z,color:"danger700"}),e.createElement(T.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",s)):null};ae.propTypes={isPending:i().bool.isRequired,statusCode:i().number},ae.defaultProps={statusCode:void 0};const H=({statusCode:n,message:s})=>{const{formatMessage:r}=(0,$.Z)();return n>=200&&n<300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(T.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{maxWidth:(0,o.Q1)(250),justifyContent:"flex-end",title:s},e.createElement(T.Z,{ellipsis:!0,textColor:"neutral600"},s))):null};H.propTypes={statusCode:i().number,message:i().string},H.defaultProps={statusCode:void 0,message:void 0};const z=({onCancel:n})=>{const{formatMessage:s}=(0,$.Z)();return e.createElement(m.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(T.Z,{textColor:"neutral400"},s({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(Q,{as:F.Z,color:"neutral400"}))))};z.propTypes={onCancel:i().func.isRequired};const N=({isPending:n,onCancel:s,response:r})=>{const{statusCode:l,message:c}=r,{formatMessage:p}=(0,$.Z)();return e.createElement(k.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(J.r,{gap:4,style:{alignItems:"center"}},e.createElement(A.P,{col:3},e.createElement(T.Z,null,p({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(A.P,{col:3},e.createElement(ae,{isPending:n,statusCode:l})),e.createElement(A.P,{col:6},n?e.createElement(z,{onCancel:s}):e.createElement(H,{statusCode:l,message:c}))))};N.defaultProps={isPending:!1,onCancel(){},response:{}},N.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};const Re=N;var x=t(87561);const De=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,de=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ce=x.Ry().shape({name:x.Z_(o.I0.string).required(o.I0.required).matches(De,o.I0.regex),url:x.Z_(o.I0.string).required(o.I0.required).matches(de,o.I0.regex),headers:x.Vo(n=>{let s=x.IX();if(n.length===1){const{key:r,value:l}=n[0];if(!r&&!l)return s}return s.of(x.Ry().shape({key:x.Z_().required(o.I0.required),value:x.Z_().required(o.I0.required)}))}),events:x.IX()}),X=({handleSubmit:n,data:s,triggerWebhook:r,isCreating:l,isTriggering:c,triggerResponse:p,isDraftAndPublishEvents:d})=>{const{formatMessage:u}=(0,$.Z)(),[E,I]=(0,e.useState)(!1);return e.createElement(O.J9,{onSubmit:n,initialValues:{name:s?.name||"",url:s?.url||"",headers:Object.keys(s?.headers||[]).length?Object.entries(s.headers).map(([h,f])=>({key:h,value:f})):[{key:"",value:""}],events:s?.events||[]},validationSchema:ce,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:h,errors:f})=>e.createElement(o.l0,{noValidate:!0},e.createElement(pe.T,{primaryAction:e.createElement(m.k,{gap:2},e.createElement(S.z,{onClick:()=>{r(),I(!0)},variant:"tertiary",startIcon:e.createElement(ne.Z,null),disabled:l||c,size:"L"},u({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(S.z,{startIcon:e.createElement(se.Z,null),onClick:h,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"}))),title:l?u({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):s?.name,navigationAction:e.createElement(o.rU,{startIcon:e.createElement(Ee.Z,null),to:"/settings/webhooks"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(fe.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},E&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(Re,{isPending:c,response:p,onCancel:()=>I(!1)})),e.createElement(k.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(J.r,{gap:6},e.createElement(A.P,{col:6},e.createElement(O.gN,{as:Y.o,name:"name",error:f.name&&u({id:f.name}),label:u({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(A.P,{col:12},e.createElement(O.gN,{as:Y.o,name:"url",error:f.url&&u({id:f.url}),label:u({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(Oe,null),e.createElement(q,{isDraftAndPublish:d})))))))};X.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},X.defaultProps={data:void 0,triggerResponse:void 0};const Ae=X,ue=n=>({...n,headers:_(n.headers)}),_=n=>n.reduce((s,r)=>{const{key:l,value:c}=r;return l!==""?{...s,[l]:c}:s},{}),he=ue,ge=()=>{const{params:{id:n}}=(0,v.$B)("/settings/webhooks/:id"),{replace:s}=(0,v.k6)(),{lockApp:r,unlockApp:l}=(0,o.o1)(),c=(0,o.lm)(),p=(0,M.useQueryClient)(),{isLoading:d,collectionTypes:u}=(0,P.G)(),{put:E,get:I,post:h}=(0,o.kY)(),f=n==="create",{isLoading:g,data:B}=(0,M.useQuery)(["get-webhook",n],async()=>{try{const{data:{data:D}}=await I(`/admin/webhooks/${n}`);return D}catch{return c({type:"warning",message:{id:"notification.error"}}),null}},{enabled:!f}),{isLoading:R,data:L,isIdle:je,mutate:ke}=(0,M.useMutation)(()=>h(`/admin/webhooks/${n}/trigger`)),C=()=>ke(null,{onError(){c({type:"warning",message:{id:"notification.error"}})}}),Se=(0,M.useMutation)(D=>h("/admin/webhooks",D)),Ze=(0,M.useMutation)(({id:D,body:V})=>E(`/admin/webhooks/${D}`,V)),Be=async D=>{f?(r(),Se.mutate(he(D),{onSuccess({data:V}){c({type:"success",message:{id:"Settings.webhooks.created"}}),s(`/settings/webhooks/${V.data.id}`),l()},onError(V){c({type:"warning",message:{id:"notification.error"}}),console.log(V),l()}})):(r(),Ze.mutate({id:n,body:he(D)},{onSuccess(){p.invalidateQueries(["get-webhook",n]),c({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(V){c({type:"warning",message:{id:"notification.error"}}),console.log(V),l()}}))},We=e.useMemo(()=>u.some(D=>D.options.draftAndPublish===!0),[u]);return g||d?e.createElement(o.dO,null):e.createElement(j.o,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(Ae,{handleSubmit:Be,data:B,triggerWebhook:C,isCreating:f,isTriggering:R,isTriggerIdle:je,triggerResponse:L?.data.data,isDraftAndPublishEvents:We}))}},3672:(G,b,t)=>{t.r(b),t.d(b,{default:()=>P});var e=t(67294),o=t(31799),j=t(87751),M=t(81788);const P=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.create},e.createElement(M.Z,null))},42122:(G,b,t)=>{t.r(b),t.d(b,{default:()=>P});var e=t(67294),o=t(31799),j=t(87751),M=t(81788);const P=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.update},e.createElement(M.Z,null))},29178:(G,b,t)=>{t.d(b,{Wx:()=>Me,XU:()=>$,hQ:()=>O});var e=t(85893),o=t(67294),j=t(70968),M=t(12645),v=t(52605),P=t(46449),me=t(51809),i=t(10892),ne=t(2504),se=t(75368),Ee=t(15585),pe=t(77197),m=t(41580),S=t(75515),fe=t(54574),k=t(11047),J=t(19270),A=t(63428),Y=t(96404);const O=({children:a,clearLabel:y="clear",creatable:U=!1,createMessage:Z=_=>`Create "${_}"`,defaultFilterValue:K,defaultTextValue:q,defaultOpen:Pe=!1,open:ye,onOpenChange:xe,disabled:ee=!1,error:oe,filterValue:ie,hasMoreItems:te=!1,hint:Ie,id:$e,label:Oe,labelAction:Te,loading:F=!1,loadingMessage:Q="Loading content...",noOptionsMessage:ae=()=>"No results found",onChange:H,onClear:z,onCreateOption:N,onFilterValueChange:Re,onInputChange:x,onTextValueChange:De,onLoadMore:de,placeholder:Le="Select or enter a value",required:ce=!1,startIcon:X,textValue:Ae,value:ue})=>{const[_,he]=(0,i.T)({prop:ye,defaultProp:Pe,onChange:xe}),[w,ge]=(0,i.T)({prop:Ae,defaultProp:q,onChange:De}),[n,s]=(0,i.T)({prop:ie,defaultProp:K,onChange:Re}),r=o.useRef(null),l=o.useRef(null),c=o.useRef(null),p=(0,ne.M)($e),d=C=>{z&&!ee&&(ge(""),s(""),z(C),l.current.focus())},u=C=>{he(C)},E=C=>{ge(C)},I=C=>{s(C)},h=C=>{x&&x(C)},f=C=>{H&&H(C)},g=(0,ne.M)(),B=`intersection-${(0,me.B)(g)}`,R=C=>{de&&te&&!F&&de(C)},L=()=>{N&&w&&N(w)};(0,se.s)(r,R,{selectorToWatch:`#${B}`,skipWhen:!_});const je=`${p}-hint`,ke=`${p}-error`;return(0,e.jsx)(fe.g,{hint:Ie,error:oe,id:p,required:ce,children:(0,e.jsxs)(k.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(J.Q,{action:Te,children:Oe}),(0,e.jsxs)(v.hQ.Root,{autocomplete:U?"list":"both",open:_,onOpenChange:u,onTextValueChange:E,textValue:w,allowCustomValue:!0,disabled:ee,required:ce,value:ue===null?void 0:ue,onValueChange:f,filterValue:n,onFilterValueChange:I,children:[(0,e.jsxs)(T,{$hasError:!!oe,children:[(0,e.jsxs)(k.k,{flex:"1",as:"span",gap:3,children:[X?(0,e.jsx)(m.x,{as:"span","aria-hidden":!0,children:X}):null,(0,e.jsx)(le,{placeholder:Le,id:p,"aria-invalid":!!oe,"aria-labelledby":`${je} ${ke}`,onChange:h,ref:l})]}),(0,e.jsxs)(k.k,{as:"span",gap:3,children:[w&&z?(0,e.jsx)(re,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:d,"aria-disabled":ee,"aria-label":y,title:y,ref:c,children:(0,e.jsx)(j.Z,{})}):null,(0,e.jsx)(ve,{children:(0,e.jsx)(M.Z,{})})]})]}),(0,e.jsx)(v.hQ.Portal,{children:(0,e.jsx)(Ce,{sideOffset:4,children:(0,e.jsxs)(be,{ref:r,children:[a,U?(0,e.jsx)(v.hQ.CreateItem,{onPointerUp:L,onClick:L,asChild:!0,children:(0,e.jsx)(W,{children:(0,e.jsx)(S.Z,{children:Z(w??"")})})}):null,!U&&!F?(0,e.jsx)(v.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(W,{$hasHover:!1,children:(0,e.jsx)(S.Z,{children:ae(w??"")})})}):null,F?(0,e.jsx)(k.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(pe.a,{small:!0,children:Q})}):null,(0,e.jsx)(m.x,{id:B,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(A.J,{}),(0,e.jsx)(Y.c,{})]})})},$=a=>(0,e.jsx)(O,{...a,creatable:!0}),re=(0,P.ZP)(m.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,T=(0,P.ZP)(v.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:y})=>y?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:y})=>(0,Ee.k3)()({theme:a,hasError:y})};
`,le=(0,P.ZP)(v.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,ve=(0,P.ZP)(v.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ce=(0,P.ZP)(v.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,be=(0,P.ZP)(v.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,Me=o.forwardRef(({children:a,value:y,disabled:U,textValue:Z,...K},q)=>(0,e.jsx)(v.hQ.ComboboxItem,{asChild:!0,value:y,disabled:U,textValue:Z,children:(0,e.jsx)(W,{ref:q,...K,children:(0,e.jsx)(v.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(S.Z,{children:a})})})})),W=P.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:y=!0})=>y?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(G,b,t)=>{t.d(b,{O:()=>o});var e=t(29178);const o=e.Wx},67109:(G,b,t)=>{t.d(b,{Z:()=>j});var e=t(85893);const o=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),j=o}}]);
