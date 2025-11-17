"use strict";(self.webpackChunkkozmedo_cms=self.webpackChunkkozmedo_cms||[]).push([[5905],{76761:(X,D,n)=>{n.r(D),n.d(D,{default:()=>st});var e=n(67294),l=n(31799),f=n(96315),R=n(85018),Q=n(4585),G=n(67109),L=n(53979),p=n(11047),w=n(29728),j=n(49066),u=n(41580),K=n(27361),r=n.n(K),h=n(18721),Z=n.n(h),x=n(18446),b=n.n(x),k=n(11700),N=n.n(k),F=n(86896),J=n(16550),_=n(45697),o=n.n(_),ge=n(38939),fe=n(8060),he=n(79031),ee=n(37909),M=n(75515),Pe=n(49386),ye=n(26478),H=n(13588),T=n(46449),C=n(5002),Re=n(70968);const ke=(0,T.ZP)(p.k)`
  border-radius: 50%;
  color: ${({theme:t,isActive:a})=>a?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function ae({isActive:t}){return e.createElement(ke,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}ae.defaultProps={isActive:!1},ae.propTypes={isActive:o().bool};const Ee=(0,T.ZP)(u.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,l.Q1)(8)};

  svg {
    width: ${(0,l.Q1)(10)};
    height: ${(0,l.Q1)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Be=(0,T.ZP)(p.k)`
  width: ${(0,l.Q1)(140)};
  height: ${(0,l.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${Ee} {
      display: block;
    }

    ${M.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function le({component:t,dzName:a,index:s,isActive:c,isInDevelopmentMode:m,onClick:i}){const{modifiedData:y,removeComponentFromDynamicZone:B}=(0,H.Z)(),{schema:{displayName:P}}=r()(y,["components",t],{schema:{}}),$=E=>{E.stopPropagation(),B(a,s)};return e.createElement(Be,{as:"button",alignItems:"center",direction:"column",className:c?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:i},e.createElement(ae,{isActive:c}),e.createElement(u.x,{marginTop:1,maxWidth:"100%"},e.createElement(M.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},P)),m&&e.createElement(Ee,{as:"button",onClick:$,type:"button"},e.createElement(Re.Z,null)))}le.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},le.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Ae=le,ve=T.ZP.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,l.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,l.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:s})=>a?`background-color: ${s.colors.primary200};`:t?`background-color: ${s.colors.primary200};`:`background: ${s.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function re({customRowComponent:t,component:a,isFromDynamicZone:s,isNestedInDZComponent:c,firstLoopComponentUid:m}){const{modifiedData:i}=(0,H.Z)(),{schema:{attributes:y}}=r()(i,["components",a],{schema:{attributes:[]}});return e.createElement(ve,{isChildOfDynamicZone:s,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(be,{customRowComponent:t,items:y,targetUid:a,firstLoopComponentUid:m||a,editTarget:"components",isFromDynamicZone:s,isNestedInDZComponent:c,isSub:!0,secondLoopComponentUid:m?a:null})))}re.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},re.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const xe=re,Ie=(0,T.ZP)(f.Z)`
  width: ${(0,l.Q1)(32)};
  height: ${(0,l.Q1)(32)};
  padding: ${(0,l.Q1)(9)};
  border-radius: ${(0,l.Q1)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Fe=(0,T.ZP)(u.x)`
  height: ${(0,l.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,T.ZP)(p.k)`
  width: 100%;
  overflow-x: auto;
`,We=(0,T.ZP)(u.x)`
  padding-top: ${(0,l.Q1)(90)};
`,Ue=(0,T.ZP)(p.k)`
  flex-shrink: 0;
  width: ${(0,l.Q1)(140)};
  height: ${(0,l.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function se({customRowComponent:t,components:a,addComponent:s,name:c,targetUid:m}){const{isInDevelopmentMode:i}=(0,H.Z)(),[y,B]=(0,e.useState)(0),{formatMessage:P}=(0,F.Z)(),$=d=>{y!==d&&B(d)},E=()=>{s(c)};return e.createElement(ve,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Fe,{paddingLeft:8},e.createElement(Oe,{gap:2},i&&e.createElement("button",{type:"button",onClick:E},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Ie,null),e.createElement(M.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},P({id:(0,C.Z)("button.component.add"),formatMessage:"Add a component"})))),a.map((d,g)=>e.createElement(Ae,{key:d,dzName:c,index:g,component:d,isActive:y===g,isInDevelopmentMode:i,onClick:()=>$(g)})))),e.createElement(We,null,a.map((d,g)=>{const v={customRowComponent:t,component:d};return e.createElement(u.x,{tabId:`${g}`,key:d,style:{display:y===g?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(xe,{...v,isFromDynamicZone:!0,targetUid:m,key:d}))))}))))}se.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},se.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const Se=se,Ne=(0,T.ZP)(u.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,ze=(0,T.ZP)(u.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Ve=(0,T.ZP)(u.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ce=({children:t,icon:a,color:s,...c})=>e.createElement(Ve,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...c},e.createElement(p.k,null,e.createElement(ze,{color:s,"aria-hidden":!0,background:`${s}200`},a),e.createElement(u.x,{paddingLeft:3},e.createElement(M.Z,{variant:"pi",fontWeight:"bold",textColor:`${s}600`},t))));Ce.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Qe=Ce;function ie({addComponentToDZ:t,customRowComponent:a,editTarget:s,firstLoopComponentUid:c,isFromDynamicZone:m,isMain:i,isNestedInDZComponent:y,isSub:B,items:P,secondLoopComponentUid:$,targetUid:E}){const{formatMessage:d}=(0,F.Z)(),{trackUsage:g}=(0,l.rS)(),{isInDevelopmentMode:v,modifiedData:z,isInContentTypeView:O}=(0,H.Z)(),{onOpenModalAddField:U}=(0,ye.Z)(),A=()=>{g("hasClickedCTBAddFieldBanner"),U({forTarget:s,targetUid:E})};return E?P.length===0&&i?e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(ee.Th,null,e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(ee.Th,null,e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.c4,{action:e.createElement(w.z,{onClick:A,size:"L",startIcon:e.createElement(f.Z,null),variant:"secondary"},d({id:(0,C.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:O?{id:(0,C.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,C.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ne,null,e.createElement(u.x,{paddingLeft:6,paddingRight:i?6:0,...i&&{style:{overflowX:"auto"}}},e.createElement("table",null,i&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,P.map(W=>{const{type:V}=W,Y=a;return e.createElement(e.Fragment,{key:W.name},e.createElement(Y,{...W,isNestedInDZComponent:y,targetUid:E,editTarget:s,firstLoopComponentUid:c,isFromDynamicZone:m,secondLoopComponentUid:$}),V==="component"&&e.createElement(xe,{...W,customRowComponent:a,targetUid:E,isNestedInDZComponent:m,editTarget:s,firstLoopComponentUid:c}),V==="dynamiczone"&&e.createElement(Se,{...W,customRowComponent:a,addComponent:t,targetUid:E}))})))),i&&v&&e.createElement(Pe.c,{icon:e.createElement(f.Z,null),onClick:A},d({id:(0,C.Z)(`form.button.add.field.to.${z.contentType?z.contentType.schema.kind:s||"collectionType"}`),defaultMessage:"Add another field"})),B&&v&&e.createElement(Qe,{icon:e.createElement(f.Z,null),onClick:A,color:m?"primary":"neutral"},d({id:(0,C.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(ee.Th,null,e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(ee.Th,null,e.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.c4,{colSpan:2,content:{id:(0,C.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ie.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ie.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const be=ie;var Te=n(12028),Ke=n(20022),Ze=n(85893);const He=t=>(0,Ze.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,Ze.jsx)("path",{fill:"#8E8EA9",d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"})}),Xe=He,Ge=(0,T.ZP)(u.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Je=T.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Me=t=>e.createElement(Ge,null,e.createElement(Je,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Me.propTypes={color:o().string.isRequired};const Ye=Me,ce=({content:t})=>N()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const qe=ce,_e=(0,T.ZP)(u.x)`
  position: relative;
`;var et=n(66848);const de=({type:t,customField:a,repeatable:s})=>{const{formatMessage:c}=(0,F.Z)();let m=t;return["integer","biginteger","float","decimal"].includes(t)?m="number":["string"].includes(t)&&(m="text"),a?e.createElement(M.Z,null,c({id:(0,C.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(M.Z,null,c({id:(0,C.Z)(`attribute.${m}`),defaultMessage:t}),"\xA0",s&&c({id:(0,C.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const tt=de;function me({configurable:t,customField:a,editTarget:s,firstLoopComponentUid:c,isFromDynamicZone:m,name:i,onClick:y,relation:B,repeatable:P,secondLoopComponentUid:$,target:E,targetUid:d,type:g}){const{contentTypes:v,isInDevelopmentMode:z,removeAttribute:O}=(0,H.Z)(),{formatMessage:U}=(0,F.Z)(),A=g==="relation"&&B.includes("morph"),W=["integer","biginteger","float","decimal"].includes(g)?"number":g,V=r()(v,[E],{}),Y=r()(V,["schema","displayName"],""),q=r()(V,"plugin"),ue=E?"relation":W,te=()=>{A||t!==!1&&y(s,$||c||d,i,g,a)};let S;return $&&c?S=2:c?S=1:S=0,e.createElement(_e,{as:"tr",...(0,l.X7)({fn:te,condition:z&&t&&!A})},e.createElement("td",{style:{position:"relative"}},S!==0&&e.createElement(Ye,{color:m?"primary200":"neutral150"}),e.createElement(p.k,{paddingLeft:2,gap:4},e.createElement(et.Z,{type:ue,customField:a}),e.createElement(M.Z,{fontWeight:"bold"},i))),e.createElement("td",null,E?e.createElement(M.Z,null,U({id:(0,C.Z)(`modelPage.attribute.${A?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${U({id:(0,C.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(tt,{type:g,customField:a,repeatable:P})),e.createElement("td",null,z?e.createElement(p.k,{justifyContent:"flex-end",...l.UW},t?e.createElement(p.k,{gap:1},!A&&e.createElement(Te.h,{onClick:te,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${i}`,noBorder:!0,icon:e.createElement(Q.Z,null)}),e.createElement(Te.h,{onClick:ne=>{ne.stopPropagation(),O(s,i,$||c||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${i}`,noBorder:!0,icon:e.createElement(Ke.Z,null)})):e.createElement(Xe,null)):e.createElement(u.x,{height:(0,l.Q1)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const nt=(0,e.memo)(me),ot=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var at=n(98432);const lt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},pe=({disabled:t,isTemporary:a,isInContentTypeView:s,contentTypeKind:c,targetUid:m})=>{const{formatMessage:i}=(0,F.Z)(),{push:y}=(0,J.k6)(),{collectionTypesConfigurations:B,componentsConfigurations:P,singleTypesConfigurations:$}=lt,E=i({id:"content-type-builder.form.button.configure-view"});let d=B;const g=()=>(a||y(s?`/content-manager/collectionType/${m}/configurations/edit`:`/content-manager/components/${m}/configurations/edit`),!1);return s&&c==="singleType"&&(d=$),s||(d=P),e.createElement(l.jW,{permissions:d},e.createElement(w.z,{startIcon:e.createElement(at.Z,null),variant:"tertiary",onClick:g,disabled:a||t},E))};pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},pe.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const rt=(0,e.memo)(pe),st=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:s,isInContentTypeView:c,submitData:m}=(0,H.Z)(),{formatMessage:i}=(0,F.Z)(),{trackUsage:y}=(0,l.rS)(),B=(0,J.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:P,onOpenModalAddField:$,onOpenModalEditField:E,onOpenModalEditSchema:d,onOpenModalEditCustomField:g}=(0,ye.Z)(),v=c?"contentType":"component",z=[v,"schema","attributes"],O=r()(a,[v,"uid"]),U=r()(a,[v,"isTemporary"],!1),A=r()(a,[v,"schema","kind"],null),W=r()(a,z,[]),V=Z()(t,[v,"plugin"]),Y=!b()(a,t),q=c?"contentType":"component",ue=I=>{P({dynamicZoneTarget:I,targetUid:O})},te=async(I,$e,De,Le,we)=>{const je=ot(Le);we?g({forTarget:I,targetUid:$e,attributeName:De,attributeType:je,customFieldUid:we}):E({forTarget:I,targetUid:$e,attributeName:De,attributeType:je,step:Le==="component"?"2":null})};let S=r()(a,[v,"schema","displayName"],"");const ne=r()(a,[v,"schema","kind"],""),oe=B?.params.currentUID==="create-content-type";!S&&oe&&(S=i({id:(0,C.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const it=()=>{const I=ne||v;I==="collectionType"&&y("willEditNameOfContentType"),I==="singleType"&&y("willEditNameOfSingleType"),d({modalType:v,forTarget:v,targetUid:O,kind:I})};return e.createElement(e.Fragment,null,e.createElement(J.NL,{message:i({id:(0,C.Z)("prompt.unsaved")}),when:Y}),e.createElement(L.T,{id:"title",primaryAction:s&&e.createElement(p.k,{gap:2},!oe&&e.createElement(w.z,{startIcon:e.createElement(f.Z,null),variant:"secondary",onClick:()=>{$({forTarget:q,targetUid:O})}},i({id:(0,C.Z)("button.attributes.add.another")})),e.createElement(w.z,{startIcon:e.createElement(R.Z,null),onClick:()=>m(),type:"submit",disabled:b()(a,t)},i({id:"global.save",defaultMessage:"Save"}))),secondaryAction:s&&!V&&!oe&&e.createElement(w.z,{startIcon:e.createElement(Q.Z,null),variant:"tertiary",onClick:it},i({id:"app.utils.edit",defaultMessage:"Edit"})),title:N()(S),subtitle:i({id:(0,C.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(l.rU,{startIcon:e.createElement(G.Z,null),to:"/plugins/content-type-builder/"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(j.D,null,e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(p.k,{gap:2},e.createElement(rt,{key:"link-to-cm-settings-view",targetUid:O,isTemporary:U,isInContentTypeView:c,contentTypeKind:A,disabled:oe}))),e.createElement(u.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(be,{items:W,customRowComponent:I=>e.createElement(nt,{...I,onClick:te}),addComponentToDZ:ue,targetUid:O,editTarget:q,isMain:!0})))))}},49066:(X,D,n)=>{n.d(D,{D:()=>f});var e=n(85893),l=n(41580);const f=({children:R})=>(0,e.jsx)(l.x,{paddingLeft:10,paddingRight:10,children:R})},53979:(X,D,n)=>{n.d(D,{T:()=>j});var e=n(85893),l=n(67294),f=n(46449);const R=r=>{const h=(0,l.useRef)(null),[Z,x]=(0,l.useState)(!0),b=([k])=>{x(k.isIntersecting)};return(0,l.useEffect)(()=>{const k=h.current,N=new IntersectionObserver(b,r);return k&&N.observe(h.current),()=>{k&&N.disconnect()}},[h,r]),[h,Z]};var Q=n(79698);const G=(r,h)=>{const Z=(0,Q.W)(h);(0,l.useLayoutEffect)(()=>{const x=new ResizeObserver(Z);return Array.isArray(r)?r.forEach(b=>{b.current&&x.observe(b.current)}):r.current&&x.observe(r.current),()=>{x.disconnect()}},[r,Z])};var L=n(41580),p=n(11047),w=n(75515);const j=r=>{const h=(0,l.useRef)(null),[Z,x]=(0,l.useState)(null),[b,k]=R({root:null,rootMargin:"0px",threshold:0});return G(b,()=>{b.current&&x(b.current.getBoundingClientRect())}),(0,l.useEffect)(()=>{h.current&&x(h.current.getBoundingClientRect())},[h]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:Z?.height},ref:b,children:k&&(0,e.jsx)(K,{ref:h,...r})}),!k&&(0,e.jsx)(K,{...r,sticky:!0,width:Z?.width})]})};j.displayName="HeaderLayout";const u=(0,f.ZP)(L.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,K=l.forwardRef(({navigationAction:r,primaryAction:h,secondaryAction:Z,subtitle:x,title:b,sticky:k,width:N,...F},J)=>{const _=typeof x=="string";return k?(0,e.jsx)(u,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:N,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[r&&(0,e.jsx)(L.x,{paddingRight:3,children:r}),(0,e.jsxs)(L.x,{children:[(0,e.jsx)(w.Z,{variant:"beta",as:"h1",...F,children:b}),_?(0,e.jsx)(w.Z,{variant:"pi",textColor:"neutral600",children:x}):x]}),Z?(0,e.jsx)(L.x,{paddingLeft:4,children:Z}):null]}),(0,e.jsx)(p.k,{children:h?(0,e.jsx)(L.x,{paddingLeft:2,children:h}):void 0})]})}):(0,e.jsxs)(L.x,{ref:J,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(L.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(w.Z,{as:"h1",variant:"alpha",...F,children:b}),Z?(0,e.jsx)(L.x,{paddingLeft:4,children:Z}):null]}),h]}),_?(0,e.jsx)(w.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:x}):x]})})},49386:(X,D,n)=>{n.d(D,{c:()=>w});var e=n(85893),l=n(46449),f=n(41580),R=n(70004),Q=n(11047),G=n(75515);const L=(0,l.ZP)(f.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:j})=>j.colors.primary600};
  }
`,p=(0,l.ZP)(f.x)`
  border-radius: 0 0 ${({theme:j})=>j.borderRadius} ${({theme:j})=>j.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,w=({children:j,icon:u,...K})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(R.i,{}),(0,e.jsx)(p,{as:"button",background:"primary100",padding:5,...K,children:(0,e.jsxs)(Q.k,{children:[(0,e.jsx)(L,{"aria-hidden":!0,background:"primary200",children:u}),(0,e.jsx)(f.x,{paddingLeft:3,children:(0,e.jsx)(G.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:j})})]})})]})},67109:(X,D,n)=>{n.d(D,{Z:()=>f});var e=n(85893);const l=R=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),f=l},98432:(X,D,n)=>{n.d(D,{Z:()=>f});var e=n(85893);const l=R=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,e.jsx)("path",{fill:"#212134",d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H5a.2.2 0 0 1-.2-.2V.2ZM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V9.8ZM5 19.2a.2.2 0 0 0-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 0 0 .2-.2v-4.4a.2.2 0 0 0-.2-.2H5Z"})}),f=l}}]);
