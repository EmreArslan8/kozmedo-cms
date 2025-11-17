"use strict";(self.webpackChunkkozmedo_cms=self.webpackChunkkozmedo_cms||[]).push([[2812],{50935:(_,y,t)=>{t.d(y,{R:()=>f});var e=t(88767),o=t(31799),h=t(80129);function f(m={},E={}){const{id:L="",...v}=m,D=(0,h.stringify)(v,{encode:!1}),{get:I}=(0,o.kY)(),{data:u,isError:n,isLoading:T,refetch:R}=(0,e.useQuery)(["users",L,v],async()=>{const{data:{data:M}}=await I(`/admin/users/${L}${D?`?${D}`:""}`);return M},E);let j=[];return L&&u?j=[u]:Array.isArray(u?.results)&&(j=u.results),{users:j,pagination:u?.pagination??null,isLoading:T,isError:n,refetch:R}}},94699:(_,y,t)=>{t.d(y,{Z:()=>I});var e=t(67294),o=t(45697),h=t.n(o),f=t(86896),m=t(41580),E=t(29728),L=t(89597),v=t(31799);const D=({displayedFilters:u})=>{const[n,T]=(0,e.useState)(!1),{formatMessage:R}=(0,f.Z)(),j=(0,e.useRef)(),M=()=>{T(b=>!b)};return e.createElement(e.Fragment,null,e.createElement(m.x,{paddingTop:1,paddingBottom:1},e.createElement(E.z,{variant:"tertiary",ref:j,startIcon:e.createElement(L.Z,null),onClick:M,size:"S"},R({id:"app.utils.filters",defaultMessage:"Filters"})),n&&e.createElement(v.J5,{displayedFilters:u,isVisible:n,onToggle:M,source:j})),e.createElement(v.W$,{filtersSchema:u}))};D.propTypes={displayedFilters:h().arrayOf(h().shape({name:h().string.isRequired,metadatas:h().shape({label:h().string}),fieldSchema:h().shape({type:h().string})})).isRequired};const I=D},35915:(_,y,t)=>{t.r(y),t.d(y,{default:()=>oe});var e=t(67294),o=t(31799),h=t(87751),f=t(86896),m=t(17034),E=t(49066),L=t(41580),v=t(185),D=t(53979),I=t(36989),u=t(45697),n=t.n(u),T=t(15234),R=t(79031),j=t(37909),M=t(75515),b=t(11047),re=t(12028),ie=t(8934),X=t(23855);const G=()=>{const{formatDate:s}=(0,f.Z)();return c=>{const l=(0,X.Z)(c),p=s(l,{dateStyle:"long"}),r=s(l,{timeStyle:"medium",hourCycle:"h24"});return`${p}, ${r}`}},w={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},Z=s=>w[s]||s,V=({headers:s,rows:g,onOpenModal:c})=>{const{formatMessage:l}=(0,f.Z)(),p=G(),r=({type:d,value:i,model:P})=>d==="date"?p(i):d==="action"?l({id:`Settings.permissions.auditLogs.${i}`,defaultMessage:Z(i)},{model:P}):i||"-";return e.createElement(T.p,null,g.map(d=>e.createElement(R.Tr,{key:d.id,...(0,o.X7)({fn:()=>c(d.id)})},s.map(({key:i,name:P,cellFormatter:C})=>e.createElement(j.Td,{key:i},e.createElement(M.Z,{textColor:"neutral800"},r({type:i,value:C?C(d[P]):d[P],model:d.payload?.model})))),e.createElement(j.Td,{...o.UW},e.createElement(b.k,{justifyContent:"end"},e.createElement(re.h,{onClick:()=>c(d.id),"aria-label":l({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${d.action} action`}),noBorder:!0,icon:e.createElement(ie.Z,null)}))))))};V.defaultProps={rows:[]},V.propTypes={headers:n().array.isRequired,rows:n().array,onOpenModal:n().func.isRequired};const le=V,de=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:s=>s?s.displayName:""}],B=({pagination:s})=>e.createElement(L.x,{paddingTop:4},e.createElement(b.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.v4,null),e.createElement(o.tU,{pagination:s})));B.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},B.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const a=B;var x=t(88767),S=t(42866),Q=t(24969),W=t(2407),N=t(59946),ce=t(77197),me=t(11276),ue=t(82855);const F=({actionLabel:s,actionName:g})=>e.createElement(b.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(M.Z,{textColor:"neutral600",variant:"sigma"},s),e.createElement(M.Z,{textColor:"neutral600"},g));F.propTypes={actionLabel:n().string.isRequired,actionName:n().string.isRequired};const U=F,H=({status:s,data:g,formattedDate:c})=>{const{formatMessage:l}=(0,f.Z)();if(s==="loading")return e.createElement(b.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ce.a,null,"Loading content..."));const{action:p,user:r,payload:d}=g;return e.createElement(e.Fragment,null,e.createElement(L.x,{marginBottom:3},e.createElement(M.Z,{variant:"delta",id:"title"},l({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(me.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(U,{actionLabel:l({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:l({id:`Settings.permissions.auditLogs.${p}`,defaultMessage:Z(p)},{model:d?.model})}),e.createElement(U,{actionLabel:l({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:c}),e.createElement(U,{actionLabel:l({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:r?.displayName||"-"}),e.createElement(U,{actionLabel:l({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:r?.id.toString()||"-"})),e.createElement(ue.V,{value:JSON.stringify(d,null,2),disabled:!0,label:l({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};H.defaultProps={data:{}},H.propTypes={status:n().oneOf(["idle","loading","error","success"]).isRequired,data:n().shape({action:n().string,date:n().string,payload:n().object,user:n().object}),formattedDate:n().string.isRequired};const ge=H,k=({handleClose:s,logId:g})=>{const{get:c}=(0,o.kY)(),l=(0,o.lm)(),p=async C=>{const{data:$}=await c(`/admin/audit-logs/${C}`);if(!$)throw new Error("Audit log not found");return $},{data:r,status:d}=(0,x.useQuery)(["audit-log",g],()=>p(g),{onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),s()}}),i=G(),P=r?i(r.date):"";return e.createElement(S.P,{onClose:s,labelledBy:"title"},e.createElement(Q.x,null,e.createElement(W.O,{label:P,id:"title"},e.createElement(W.$,null,P))),e.createElement(N.f,null,e.createElement(ge,{status:d,data:r,formattedDate:P})))};k.propTypes={handleClose:n().func.isRequired,logId:n().string.isRequired};const pe=k;var he=t(94699),Ee=t(29178),z=t(90608);const J=({value:s,options:g,onChange:c})=>{const{formatMessage:l}=(0,f.Z)(),p=l({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(Ee.hQ,{"aria-label":p,value:s,onChange:c},g.map(({label:r,customValue:d})=>e.createElement(z.O,{key:d,value:d},r)))};J.defaultProps={value:null},J.propTypes={value:n().string,options:n().arrayOf(n().shape({label:n().string.isRequired,customValue:n().string.isRequired}).isRequired).isRequired,onChange:n().func.isRequired};const q=J,Y=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],te=({formatMessage:s,users:g,canReadUsers:c})=>{const l=Object.keys(w).map(r=>({label:s({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:Z(r)},{model:void 0}),customValue:r})),p=[{name:"action",metadatas:{customOperators:Y,label:s({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:l,customInput:q},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:s({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(c&&g){const r=i=>i.username?i.username:i.firstname&&i.lastname?s({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:i.firstname,lastname:i.lastname}):i.email,d=g.map(i=>({label:r(i),customValue:i.id.toString()}));return[...p,{name:"user",metadatas:{customOperators:Y,label:s({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:d,customInput:q},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return p};var fe=t(16550),ae=t(50935);const se=({canReadAuditLogs:s,canReadUsers:g})=>{const{get:c}=(0,o.kY)(),{search:l}=(0,fe.TH)(),p=(0,o.lm)(),r={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:A=>p({type:"warning",message:A.message})},{users:d,isError:i,isLoading:P}=(0,ae.R)({},{...r,enabled:g,staleTime:2*(1e3*60)}),{data:C,isLoading:$,isError:K}=(0,x.useQuery)(["auditLogs",l],async({queryKey:A})=>{const Me=A[1],{data:Pe}=await c(`/admin/audit-logs${Me}`);return Pe},{...r,enabled:s});return{auditLogs:C,users:d,isLoading:P||$,hasError:K||i}},ye={...h.Z.settings.auditLogs,readUsers:h.Z.settings.users.read},ne=()=>{const{formatMessage:s}=(0,f.Z)(),{allowedActions:{canRead:g,canReadUsers:c}}=(0,o.ss)(ye),[{query:l},p]=(0,o.Kx)(),{auditLogs:r,users:d,isLoading:i,hasError:P}=se({canReadAuditLogs:g,canReadUsers:c});(0,o.go)();const C=te({formatMessage:s,users:d,canReadUsers:c}),$=s({id:"global.auditLogs",defaultMessage:"Audit Logs"}),K=de.map(A=>({...A,metadatas:{...A.metadatas,label:s(A.metadatas.label)}}));return P?e.createElement(m.A,null,e.createElement(E.D,null,e.createElement(L.x,{paddingTop:8},e.createElement(o.Hn,null)))):e.createElement(v.o,{"aria-busy":i},e.createElement(o.SL,{name:$}),e.createElement(D.T,{title:$,subtitle:s({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(I.Z,{startActions:e.createElement(he.Z,{displayedFilters:C})}),e.createElement(E.D,{canRead:g},e.createElement(o.tM,{contentType:"Audit logs",headers:K,rows:r?.results||[],withBulkActions:!0,isLoading:i},e.createElement(le,{headers:K,rows:r?.results||[],onOpenModal:A=>p({id:A})})),e.createElement(a,{pagination:r?.pagination})),l?.id&&e.createElement(pe,{handleClose:()=>p({id:null},"remove"),logId:l.id}))},oe=()=>e.createElement(o.O4,{permissions:h.Z.settings.auditLogs.main},e.createElement(ne,null))},2407:(_,y,t)=>{t.d(y,{$:()=>D,O:()=>I});var e=t(85893),o=t(16405),h=t(46449),f=t(63237),m=t(11047),E=t(41580),L=t(75515);const v=(0,h.ZP)(m.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:u})=>u.colors.neutral500};
    }
  }
  :last-of-type ${E.x} {
    display: none;
  }
  :last-of-type ${L.Z} {
    color: ${({theme:u})=>u.colors.neutral800};
    font-weight: ${({theme:u})=>u.fontWeights.bold};
  }
`,D=({children:u})=>(0,e.jsxs)(v,{inline:!0,as:"li",children:[(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral600",children:u}),(0,e.jsx)(E.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(o.Z,{})})]});D.displayName="Crumb";const I=({children:u,label:n,...T})=>(0,e.jsxs)(m.k,{...T,children:[(0,e.jsx)(f.T,{children:n}),(0,e.jsx)("ol",{"aria-hidden":!0,children:u})]});I.displayName="Breadcrumbs"},29178:(_,y,t)=>{t.d(y,{Wx:()=>de,XU:()=>ve,hQ:()=>X});var e=t(85893),o=t(67294),h=t(70968),f=t(12645),m=t(52605),E=t(46449),L=t(51809),v=t(10892),D=t(2504),I=t(75368),u=t(15585),n=t(77197),T=t(41580),R=t(75515),j=t(54574),M=t(11047),b=t(19270),re=t(63428),ie=t(96404);const X=({children:a,clearLabel:x="clear",creatable:S=!1,createMessage:Q=s=>`Create "${s}"`,defaultFilterValue:W,defaultTextValue:N,defaultOpen:ce=!1,open:me,onOpenChange:ue,disabled:F=!1,error:U,filterValue:H,hasMoreItems:ge=!1,hint:k,id:pe,label:he,labelAction:Ee,loading:z=!1,loadingMessage:J="Loading content...",noOptionsMessage:q=()=>"No results found",onChange:Y,onClear:ee,onCreateOption:te,onFilterValueChange:fe,onInputChange:ae,onTextValueChange:xe,onLoadMore:se,placeholder:ye="Select or enter a value",required:Le=!1,startIcon:ne,textValue:Ce,value:oe})=>{const[s,g]=(0,v.T)({prop:me,defaultProp:ce,onChange:ue}),[c,l]=(0,v.T)({prop:Ce,defaultProp:N,onChange:xe}),[p,r]=(0,v.T)({prop:H,defaultProp:W,onChange:fe}),d=o.useRef(null),i=o.useRef(null),P=o.useRef(null),C=(0,D.M)(pe),$=O=>{ee&&!F&&(l(""),r(""),ee(O),i.current.focus())},K=O=>{g(O)},A=O=>{l(O)},Me=O=>{r(O)},Pe=O=>{ae&&ae(O)},Re=O=>{Y&&Y(O)},je=(0,D.M)(),Oe=`intersection-${(0,L.B)(je)}`,Ae=O=>{se&&ge&&!z&&se(O)},Te=()=>{te&&c&&te(c)};(0,I.s)(d,Ae,{selectorToWatch:`#${Oe}`,skipWhen:!s});const Ie=`${C}-hint`,$e=`${C}-error`;return(0,e.jsx)(j.g,{hint:k,error:U,id:C,required:Le,children:(0,e.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(b.Q,{action:Ee,children:he}),(0,e.jsxs)(m.hQ.Root,{autocomplete:S?"list":"both",open:s,onOpenChange:K,onTextValueChange:A,textValue:c,allowCustomValue:!0,disabled:F,required:Le,value:oe===null?void 0:oe,onValueChange:Re,filterValue:p,onFilterValueChange:Me,children:[(0,e.jsxs)(w,{$hasError:!!U,children:[(0,e.jsxs)(M.k,{flex:"1",as:"span",gap:3,children:[ne?(0,e.jsx)(T.x,{as:"span","aria-hidden":!0,children:ne}):null,(0,e.jsx)(Z,{placeholder:ye,id:C,"aria-invalid":!!U,"aria-labelledby":`${Ie} ${$e}`,onChange:Pe,ref:i})]}),(0,e.jsxs)(M.k,{as:"span",gap:3,children:[c&&ee?(0,e.jsx)(G,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:$,"aria-disabled":F,"aria-label":x,title:x,ref:P,children:(0,e.jsx)(h.Z,{})}):null,(0,e.jsx)(V,{children:(0,e.jsx)(f.Z,{})})]})]}),(0,e.jsx)(m.hQ.Portal,{children:(0,e.jsx)(le,{sideOffset:4,children:(0,e.jsxs)(De,{ref:d,children:[a,S?(0,e.jsx)(m.hQ.CreateItem,{onPointerUp:Te,onClick:Te,asChild:!0,children:(0,e.jsx)(B,{children:(0,e.jsx)(R.Z,{children:Q(c??"")})})}):null,!S&&!z?(0,e.jsx)(m.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(B,{$hasHover:!1,children:(0,e.jsx)(R.Z,{children:q(c??"")})})}):null,z?(0,e.jsx)(M.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(n.a,{small:!0,children:J})}):null,(0,e.jsx)(T.x,{id:Oe,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(re.J,{}),(0,e.jsx)(ie.c,{})]})})},ve=a=>(0,e.jsx)(X,{...a,creatable:!0}),G=(0,E.ZP)(T.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,w=(0,E.ZP)(m.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:x})=>x?a.colors.danger600:a.colors.neutral200};
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

  ${({theme:a,$hasError:x})=>(0,u.k3)()({theme:a,hasError:x})};
`,Z=(0,E.ZP)(m.hQ.TextInput)`
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
`,V=(0,E.ZP)(m.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,le=(0,E.ZP)(m.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,De=(0,E.ZP)(m.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,de=o.forwardRef(({children:a,value:x,disabled:S,textValue:Q,...W},N)=>(0,e.jsx)(m.hQ.ComboboxItem,{asChild:!0,value:x,disabled:S,textValue:Q,children:(0,e.jsx)(B,{ref:N,...W,children:(0,e.jsx)(m.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(R.Z,{children:a})})})})),B=E.ZP.div`
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

    ${R.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:x=!0})=>x?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${R.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(_,y,t)=>{t.d(y,{O:()=>o});var e=t(29178);const o=e.Wx},36989:(_,y,t)=>{t.d(y,{Z:()=>h});var e=t(85893),o=t(11047);const h=({startActions:f,endActions:m})=>!f&&!m?null:(0,e.jsxs)(o.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(o.k,{gap:2,wrap:"wrap",children:f}),(0,e.jsx)(o.k,{gap:2,shrink:0,wrap:"wrap",children:m})]})}}]);
