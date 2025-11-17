(self.webpackChunkkozmedo_cms=self.webpackChunkkozmedo_cms||[]).push([[994],{43973:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>e});const e=()=>null},44545:(pt,Ie,d)=>{"use strict";d.r(Ie),d.d(Ie,{App:()=>Ws,default:()=>Cm});var e=d(67294),Te=d(64593),re=d(16550),h=d(31799),ve=d(185),fe=d(53979),Fe=d(17034),H=d(86896),ot=d(89734),Pe=d.n(ot),ke=d(87751),Ee=d(69881),Le=d(27887);const Se=(0,e.createContext)();var Ke=d(35800),he=d(45697),n=d.n(he);const Ae=(0,e.createContext)();var zt=d(99781),de=d(75642),y=d(47815),_=d(86706),$e=d(80660),Ye=d(15113);const It=()=>({type:Ye.c}),kt=(t,o)=>({type:Ye.O,layout:t,query:o});var ft=d(21323),rt=d(18446),Ce=d.n(rt),Ze=d(49066),De=d(11276),ue=d(74571),F=d(11047),$=d(41580),We=d(4585),He=d(98432),Xe=d(47713);const xt=()=>(0,e.useContext)(Xe.ux),Ut=t=>{const{getAdminInjectedComponents:o}=xt(),[r,s,a]=t.split(".");return o(r,s,a)},zo=({area:t,...o})=>Ut(t).map(s=>e.createElement(s.Component,{key:s.name,...o}));zo.propTypes={area:n().string.isRequired};const Vt=zo;var zs=d(27361),x=d.n(zs),ht=d(63237);function Us(t,o){return r=>{const s=o(r.name);return e.createElement(t,{...r,...s})}}const Vs=Us;function Hs(t){const{addComponentToDynamicZone:o,createActionAllowedFields:r,isCreatingEntry:s,formErrors:a,modifiedData:l,moveComponentField:i,removeComponentFromDynamicZone:c,readActionAllowedFields:g,updateActionAllowedFields:u}=(0,h.Wq)(),m=(0,e.useMemo)(()=>x()(l,[t],[]).map(E=>({componentUid:E.__component,id:E.id??E.__temp_key__})),[l,t]),f=(0,e.useMemo)(()=>(s?r:u).includes(t),[t,s,r,u]),p=(0,e.useMemo)(()=>(s?[]:g).includes(t),[t,s,g]);return{addComponentToDynamicZone:o,formErrors:a,isCreatingEntry:s,isFieldAllowed:f,isFieldReadable:p,moveComponentField:i,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}const Qs=Hs;var j=d(46449),wt=d(61080),ye=d(12028),mn=d(48734),pn=d(74756),gn=d(63081),Qe=d(20022),Je=d(12814),Gs=d(84238),Ks=d.n(Gs);function Ys(t,o){return r=>{const s=o(r);return e.createElement(t,{...r,...s})}}const Xs=Ys;var Js=d(69572),Ft=d.n(Js);function _s({isFromDynamicZone:t,name:o}){const{addNonRepeatableComponentToField:r,createActionAllowedFields:s,isCreatingEntry:a,modifiedData:l,removeComponentFromField:i,readActionAllowedFields:c,updateActionAllowedFields:g,formErrors:u}=(0,h.Wq)(),{contentType:m}=(0,de.PL)(),f=(0,e.useMemo)(()=>{const T=x()(m,["attributes"],{});return Object.keys(T).filter(I=>x()(T,[I,"type"],"")==="dynamiczone")},[m]),p=(0,e.useMemo)(()=>a?s:g,[a,s,g]),E=x()(l,o,null),b=(0,e.useMemo)(()=>(0,y.Ts)(o),[o]),C=(0,e.useMemo)(()=>t&&a||p.filter(I=>I===b[0]).length>0?!0:p.map(I=>I.split(".")).filter(I=>I.length<b.length?!1:Ft()(I,b.length).join(".")===b.join(".")).length>0,[t,a,p,b]),R=(0,e.useMemo)(()=>t||f.includes(b[0])?!0:(a?[]:c).map(I=>I.split(".")).filter(I=>I.length<b.length?!1:Ft()(I,b.length).join(".")===b.join(".")).length>0,[t,f,b,a,c]),D=(0,e.useMemo)(()=>a||C?!1:R,[C,R,a]);return{addNonRepeatableComponentToField:r,formErrors:u,hasChildrenAllowedFields:C,hasChildrenReadableFields:R,isCreatingEntry:a,isReadOnly:D,removeComponentFromField:i,componentValue:E}}const ea=_s;var G=d(75515);const ta=(0,j.ZP)($.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,fn=({intlLabel:t,id:o,labelAction:r,name:s,numberOfEntries:a,showNumberOfEntries:l,required:i})=>{const{formatMessage:c}=(0,H.Z)(),g=t?.id?c(t):s;return e.createElement($.x,{paddingBottom:1},e.createElement(F.k,null,e.createElement(G.Z,{textColor:"neutral800",htmlFor:o||s,variant:"pi",fontWeight:"bold",as:"label"},g,l&&e.createElement(e.Fragment,null,"\xA0(",a,")"),i&&e.createElement(G.Z,{textColor:"danger600"},"*")),r&&e.createElement(ta,{paddingLeft:1},r)))};fn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},fn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};const na=fn;var Uo=d(99782);const oa=j.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:t})=>t.colors.primary200};
    }
    > path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,hn=({error:t,isReadOnly:o,onClick:r})=>{const{formatMessage:s}=(0,H.Z)();return e.createElement(e.Fragment,null,e.createElement($.x,{as:"button",background:"neutral100",borderColor:t?"danger600":"neutral200",disabled:o,hasRadius:!0,onClick:r,paddingTop:9,paddingBottom:9,type:"button"},e.createElement(F.k,{direction:"column",gap:2},e.createElement(F.k,{justifyContent:"center",style:{cursor:o?"not-allowed":"inherit"}},e.createElement(oa,null,e.createElement(Uo.Z,null))),e.createElement(F.k,{justifyContent:"center"},e.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:(0,y.OB)("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),t?.id&&e.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(t,{...t.values})))};hn.defaultProps={error:void 0,isReadOnly:!1},hn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};const Vo=hn;var ra=d(57557),sa=d.n(ra),aa=d(44823),yn=d.n(aa),Pm=d(39961),ia=d(9980),la=d.n(ia),bn=d(77869),ca=d(79411),da=d.n(ca),ua=d(40591),Ho=d.n(ua),ma=d(30645),pa=d.n(ma),ga=d(46635),fa=d.n(ga),ha=d(52384),ya=d.n(ha),ba=d(44266),Ea=d.n(ba),Ca=d(94574),va=d.n(Ca),Ra=d(40700),Ma=d.n(Ra),Ta=d(97003),Da=d.n(Ta);(async()=>{await d.e(7347).then(d.bind(d,24840))})();const yt=new(la())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(t,o){if(o&&o!=="auto"&&(0,bn.getLanguage)(o))return'<pre class="hljs language-'+yt.utils.escapeHtml(o.toLowerCase())+'"><code>'+(0,bn.highlight)(o,t,!0).value+"</code></pre>";if(o==="auto"){const r=(0,bn.highlightAuto)(t);return'<pre class="hljs language-'+yt.utils.escapeHtml(r.language)+'"><code>'+r.value+"</code></pre>"}return'<pre class="hljs"><code>'+yt.utils.escapeHtml(t)+"</code></pre>"}}).use(da()).use(Ho(),"warning").use(Ho(),"tip").use(pa()).use(fa()).use(ya()).use(Ea()).use(va()).use(Ma()).use(Da());yt.renderer.rules.footnote_ref=(t,o,r,s,a)=>'<sup class="footnote-ref"><span>'+a.rules.footnote_caption(t,o,r,s,a)+"</span></sup>",yt.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';const Ia=yt;var ka=d(91036),Qo=d.n(ka);const Oa={...Qo().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}},xa=t=>Qo()(t,Oa),Pa=j.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:t})=>t.colors.neutral0};
  color: ${({theme:t})=>t.colors.neutral800};
  line-height: ${({theme:t})=>t.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:t})=>t.spaces[2]};
    margin-block-end: ${({theme:t})=>t.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:t})=>t.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:t})=>t.spaces[8]};
    margin-bottom: ${({theme:t})=>t.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:t})=>t.colors.neutral150};
    font-style: italic;
    padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:t})=>t.colors.neutral150};

      th {
        padding: ${({theme:t})=>t.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:t})=>t.spaces[4]};
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:t})=>t.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`,En=({data:t})=>{const o=(0,e.useMemo)(()=>xa(Ia.render(t.replaceAll("\\n",`
`)||"")),[t]);return e.createElement(Pa,null,e.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))};En.defaultProps={data:""},En.propTypes={data:n().string};const Go=(0,e.memo)(En),wa=j.ZP.div`
  cursor: ${({disabled:t})=>t?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:t})=>t.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:t})=>t?"100%":"290px"};
    color: ${({theme:t})=>t.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:t})=>`${t.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:t})=>t.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:t})=>t.colors.neutral800} !important;
  }
`;var Cn=d(21817);const we=(0,j.ZP)(ye.h)`
  padding: ${({theme:t})=>t.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,Fa=(0,j.ZP)(we)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,Ko=(0,j.ZP)(ye.o)`
  margin-left: ${({theme:t})=>t.spaces[4]};
`,Yo=(0,j.ZP)(ye.h)`
  margin: ${({theme:t})=>`0 ${t.spaces[2]}`};
  padding: ${({theme:t})=>t.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,La=(0,j.ZP)(ye.o)`
  margin-right: ${({theme:t})=>`${t.spaces[2]}`};
`,Sa=j.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,Aa=(0,j.ZP)(Cn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};
    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var Ht=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,$a=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,Za=/[*+-]\s/;function Ba(t){if(t.getOption("disableInput"))return yn().Pass;for(var o=t.listSelections(),r=[],s=0;s<o.length;s++){var a=o[s].head,l=t.getStateAfter(a.line),i=l.list!==!1,c=l.quote!==0,g=t.getLine(a.line),u=Ht.exec(g),m=/^\s*$/.test(g.slice(0,a.ch));if(!o[s].empty()||!i&&!c||!u||m){t.execCommand("newlineAndIndent");return}if($a.test(g)){var f=c&&/>\s*$/.test(g),p=!/>\s*$/.test(g);(f||p)&&t.replaceRange("",{line:a.line,ch:0},{line:a.line,ch:a.ch+1}),r[s]=`
`}else{var E=u[1],b=u[5],C=!(Za.test(u[2])||u[2].indexOf(">")>=0),R=C?parseInt(u[3],10)+1+u[4]:u[2].replace("x"," ");r[s]=`
`+E+R+b,C&&qa(t,a)}}t.replaceSelections(r)}function qa(t,o){var r=o.line,s=0,a=0,l=Ht.exec(t.getLine(r)),i=l[1];do{s+=1;var c=r+s,g=t.getLine(c),u=Ht.exec(g);if(u){var m=u[1],f=parseInt(l[3],10)+s-a,p=parseInt(u[3],10),E=p;if(i===m&&!isNaN(p))f===p&&(E=p+1),f>p&&(E=f+1),t.replaceRange(g.replace(Ht,m+E+u[4]+u[5]),{line:c,ch:0},{line:c,ch:g.length});else{if(i.length>m.length||i.length<m.length&&s===1)return;a+=1}}}while(u)}const Na=Ba,vn=({disabled:t,editorRef:o,error:r,isPreviewMode:s,isExpandMode:a,name:l,onChange:i,placeholder:c,textareaRef:g,value:u})=>{const m=(0,e.useRef)(i);return(0,e.useEffect)(()=>{o.current=yn().fromTextArea(g.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),yn().commands.newlineAndIndentContinueMarkdownList=Na,o.current.on("change",f=>{m.current({target:{name:l,value:f.getValue(),type:"wysiwyg"}})})},[o,g,l,c]),(0,e.useEffect)(()=>{u&&!o.current.hasFocus()&&o.current.setValue(u)},[o,u]),(0,e.useEffect)(()=>{s||t?o.current.setOption("readOnly","nocursor"):o.current.setOption("readOnly",!1)},[t,s,o]),(0,e.useEffect)(()=>{r?o.current.setOption("screenReaderLabel",r):o.current.setOption("screenReaderLabel","Editor")},[o,r]),e.createElement(Sa,null,e.createElement(wa,{isExpandMode:a,disabled:t||s},e.createElement("textarea",{ref:g})),s&&e.createElement(Go,{data:u}))};vn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},vn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};const ja=vn;var ze=d(40619),be=d(82562),me=d(29728),Wa=d(12160),Xo=d(67628),Jo=d(54244),_o=d(71414),er=d(49901),za=d(42164),Ua=d(66567),Va=d(86780),Ha=d(82752),Qa=d(36606),Ga=d(63851),Ka=d(95629);const Rn=({disabled:t,editorRef:o,isExpandMode:r,isPreviewMode:s,onActionClick:a,onToggleMediaLib:l,onTogglePreviewMode:i})=>{const[c,g]=(0,e.useState)(!1),{formatMessage:u}=(0,H.Z)(),m=u({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),f=(0,e.useRef)(),p=()=>{g(E=>!E)};return t||s?e.createElement(F.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(tr,null,e.createElement(ze.P,{disabled:!0,placeholder:m,size:"S",label:m},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Ko,null,e.createElement(we,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xo.Z,null)}),e.createElement(we,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jo.Z,null)}),e.createElement(we,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_o.Z,null)})),e.createElement(Yo,{disabled:!0,id:"more",label:"More",icon:e.createElement(er.Z,null)})),!r&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"}))):e.createElement(F.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(tr,null,e.createElement(ze.P,{placeholder:m,label:m,size:"S",onChange:E=>a(E,o)},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Ko,null,e.createElement(we,{onClick:()=>a("Bold",o),id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xo.Z,null)}),e.createElement(we,{onClick:()=>a("Italic",o),id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jo.Z,null)}),e.createElement(we,{onClick:()=>a("Underline",o),id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_o.Z,null)})),e.createElement(Yo,{ref:f,onClick:p,id:"more",label:"More",icon:e.createElement(er.Z,null)}),c&&e.createElement(Wa.J2,{onDismiss:p,centered:!0,source:f,spacing:4,id:"popover"},e.createElement(F.k,null,e.createElement(La,null,e.createElement(we,{onClick:()=>a("Strikethrough",o,p),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:e.createElement(za.Z,null)}),e.createElement(we,{onClick:()=>a("BulletList",o,p),id:"BulletList",label:"BulletList",name:"BulletList",icon:e.createElement(Ua.Z,null)}),e.createElement(we,{onClick:()=>a("NumberList",o,p),id:"NumberList",label:"NumberList",name:"NumberList",icon:e.createElement(Va.Z,null)})),e.createElement(ye.o,null,e.createElement(we,{onClick:()=>a("Code",o,p),id:"Code",label:"Code",name:"Code",icon:e.createElement(Ha.Z,null)}),e.createElement(we,{onClick:()=>{p(),l()},id:"Image",label:"Image",name:"Image",icon:e.createElement(Qa.Z,null)}),e.createElement(Fa,{onClick:()=>a("Link",o,p),id:"Link",label:"Link",name:"Link",icon:e.createElement(Ga.Z,null)}),e.createElement(we,{onClick:()=>a("Quote",o,p),id:"Quote",label:"Quote",name:"Quote",icon:e.createElement(Ka.Z,null)}))))),i&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"})))};Rn.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},Rn.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};const Ya=Rn,tr=(0,j.ZP)(F.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;var Xa=d(19954);const Mn=({onToggleExpand:t})=>{const{formatMessage:o}=(0,H.Z)();return e.createElement($.x,{padding:2,background:"neutral100",hasRadius:!0},e.createElement(F.k,{justifyContent:"flex-end",alignItems:"flex-end"},e.createElement(Aa,{id:"expand",onClick:t},e.createElement(G.Z,null,o({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),e.createElement(Xa.Z,null))))};Mn.defaultProps={onToggleExpand(){}},Mn.propTypes={onToggleExpand:n().func};const Ja=Mn,Tn=({id:t,error:o,name:r,hint:s})=>s.length===0||o?null:e.createElement(G.Z,{as:"p",variant:"pi",id:`${t||r}-hint`,textColor:"neutral600"},s);Tn.defaultProps={id:void 0,error:void 0,hint:""},Tn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};const _a=Tn,nr=(t,o)=>{let r;switch(t){case"Strikethrough":r=`~~${o}~~`;break;case"Bold":r=`**${o}**`;break;case"Italic":r=`_${o}_`;break;case"Underline":r=`<u>${o}</u>`;break;case"Code":r=`\`\`\`
${o}
\`\`\``;break;case"Link":r=`[${o}](link)`;break;case"Quote":r=`>${o}`;break;default:r=o}return r},or=t=>{let o,r={start:t.length,end:0};switch(t){case"Strikethrough":o=`~~${t}~~`,r.end=2;break;case"Bold":o=`**${t}**`,r.end=2;break;case"Italic":o=`_${t}_`,r.end=1;break;case"alt":o=`[${t}]()`,r.end=3;break;case"Underline":o=`<u>${t}</u>`,r.end=4;break;case"Code":o=`\`\`\`
${t}
\`\`\``,r.end=3;break;case"Link":o=`[${t}](link)`,r.end=7;break;case"Quote":o=`>${t}`,r.end=0;break;default:o=""}return{editedText:o,selection:r}},rr=t=>{let o;switch(t){case"BulletList":o="- ";break;case"NumberList":o="1. ";break;case"h1":o="# ";break;case"h2":o="## ";break;case"h3":o="### ";break;case"h4":o="#### ";break;case"h5":o="##### ";break;case"h6":o="###### ";break;default:return""}return o},sr=(t,o)=>{const r=t.current.getSelection();let s;if(r){const a=nr(o,r);t.current.replaceSelection(a),t.current.focus()}else{s=or(o),t.current.replaceSelection(s.editedText),t.current.focus();const{line:a,ch:l}=t.current.getCursor(),i=l-s.selection.end,c=l-s.selection.end-s.selection.start;t.current.setSelection({line:a,ch:c},{line:a,ch:i})}},ei=(t,o)=>{const r=t.current.getDoc(),s=o==="BulletList"?"- ":"1. ";if(r.somethingSelected()){const a=r.listSelections();let l=null;t.current.operation(function(){a.forEach(function(i){const c=[i.head.line,i.anchor.line].sort();l==null&&(l=r.getLine(c[0]).startsWith(s));for(let g=c[0];g<=c[1];g++)if(l)r.getLine(g).startsWith(s)&&r.replaceRange("",{line:g,ch:0},{line:g,ch:s.length});else{const u=o==="BulletList"?"- ":`${g+1}. `;r.replaceRange(u,{line:g,ch:0})}})})}else{let{line:a}=r.getCursor();const l=rr(o),i=t.current.getLine(a),c=l+i;t.current.setSelection({line:a,ch:0},{line:a,ch:i.length}),t.current.replaceSelection(c)}t.current.focus()},ti=(t,o)=>{let{line:r}=t.current.getCursor();const s=rr(o),a=t.current.getLine(r),l=a.replace(/#{1,6}\s/g,"").trim(),i=s+l;t.current.setSelection({line:r,ch:0},{line:r,ch:a.length}),t.current.replaceSelection(i),setTimeout(()=>{const c=t.current.getLine(r).length;t.current.focus(),t.current.setCursor({line:r,ch:c})},0)},ni=(t,o)=>{let{line:r,ch:s}=t.current.getCursor();o.forEach((a,l)=>{let i=t.current.getLine(r).length;t.current.setCursor({line:r,ch:i}),(l>0||l===0&&s!==0)&&(i=t.current.getLine(r).length,t.current.setCursor({line:r,ch:i}),r++,t.current.replaceSelection(`
`)),a.mime.includes("image")?t.current.replaceSelection(`![${a.alt}](${a.url})`):t.current.replaceSelection(`[${a.alt}](${a.url})`)}),setTimeout(()=>t.current.focus(),0)},oi=(t,o,r,s,a)=>{const l=nr(o,a),i=t.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),t.current.replaceSelection(""),t.current.setCursor({line:r,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(l),o==="Code"){let{line:c}=t.current.getCursor();t.current.setCursor({line:c-1,ch:a.length})}t.current.replaceRange(i,{line:r+4,ch:0},{line:1/0,ch:1/0}),t.current.focus()},ri=(t,o,r,s)=>{const a=or(o),l=t.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),t.current.setCursor({line:r,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(a.editedText),o==="Code")r+=2,t.current.setSelection({line:r,ch:0},{line:r,ch:4});else{r+=1;let{ch:i}=t.current.getCursor(),c=i-a.selection.end,g=i-a.selection.end-a.selection.start;t.current.setSelection({line:r,ch:g},{line:r,ch:c})}t.current.replaceRange(l,{line:r+2,ch:0},{line:1/0,ch:1/0}),t.current.focus()},si=(t,o)=>{const r=t.current.getSelection();let{line:s}=t.current.getCursor(),a=t.current.getLine(s).length;r?oi(t,o,s,a,r):ri(t,o,s,a)};var ai=d(44034),ii=d(25896),li=d(5240);const ci=(t,o)=>`${t}${Math.floor(o*255).toString(16).padStart(2,0)}`,di=(0,j.ZP)(F.k)`
  background: ${({theme:t})=>ci(t.colors.neutral800,.2)};
`,ui=(0,j.ZP)($.x)`
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,mi=(0,j.ZP)(Cn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};

    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Dn=({children:t,isExpandMode:o,error:r,previewContent:s,onCollapse:a})=>{const{formatMessage:l}=(0,H.Z)();return(0,h.F5)(o),o?e.createElement(ai.h,{role:"dialog","aria-modal":!1},e.createElement(ii.i,{onEscape:a},e.createElement(di,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:a},e.createElement($.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:i=>i.stopPropagation()},e.createElement(F.k,{height:"100%",alignItems:"flex-start"},e.createElement(ui,{flex:"1",height:"100%"},t),e.createElement(F.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},e.createElement(F.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},e.createElement(mi,{onClick:a},e.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),e.createElement(li.Z,null))),e.createElement($.x,{position:"relative",height:"100%",width:"100%"},e.createElement(Go,{data:s})))))))):e.createElement($.x,{borderColor:r?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},t)};Dn.defaultProps={error:void 0,previewContent:""},Dn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const pi=(0,j.ZP)($.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,gi=(0,j.ZP)(G.Z)`
  line-height: 0;
`,In=({hint:t,disabled:o,error:r,intlLabel:s,labelAction:a,name:l,onChange:i,placeholder:c,value:g,required:u})=>{const{formatMessage:m}=(0,H.Z)(),f=(0,e.useRef)(null),p=(0,e.useRef)(null),[E,b]=(0,e.useState)(!1),[C,R]=(0,e.useState)(!1),[D,T]=(0,e.useState)(!1),{components:L}=(0,h.yX)(),I=L["media-library"],v=()=>R(P=>!P),M=()=>b(P=>!P),S=()=>{b(!1),T(P=>!P)},Z=(P,K,N)=>{switch(P){case"Link":case"Strikethrough":{sr(K,P),N();break}case"Code":case"Quote":{si(K,P),N();break}case"Bold":case"Italic":case"Underline":{sr(K,P);break}case"BulletList":case"NumberList":{ei(K,P),N();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{ti(K,P);break}default:}},V=P=>{const K=P.map(N=>({alt:N.alternativeText||N.name,url:(0,h.CR)(N.url),mime:N.mime}));ni(p,K),R(!1)},A=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",Q=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return e.createElement(e.Fragment,null,e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(F.k,{gap:1},e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},Q,u&&e.createElement(gi,{textColor:"danger600"},"*")),a&&e.createElement(pi,{paddingLeft:1},a)),e.createElement(Dn,{isExpandMode:D,error:r,previewContent:g,onCollapse:S},e.createElement(Ya,{isExpandMode:D,editorRef:p,isPreviewMode:E,onActionClick:Z,onToggleMediaLib:v,onTogglePreviewMode:D?void 0:M,disabled:o}),e.createElement(ja,{disabled:o,isExpandMode:D,editorRef:p,error:r,isPreviewMode:E,name:l,onChange:i,placeholder:A,textareaRef:f,value:g}),!D&&e.createElement(Ja,{onToggleExpand:S})),e.createElement(_a,{hint:t,name:l,error:r})),r&&e.createElement($.x,{paddingTop:1},e.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},r)),C&&e.createElement(I,{onClose:v,onSelectAssets:V}))};In.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},In.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};const fi=In;var kn=d(16364),hi=d(86783),Lt=d(51277),yi=d(86647),ar=d(30815),ir=d(9226);const bi=/^[A-Za-z0-9-_.~]*$/;var Ei=d(25752);const Ci=(0,j.ZP)(Ei.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:t})=>t.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,lr=(0,j.ZP)(F.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:t,available:o})=>o?t.colors.success600:t.colors.danger600};
    }
  }
`,vi=j.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ri=(0,j.ZP)(F.k)`
  animation: ${vi} 2s infinite linear;
`,On=({attribute:t,contentTypeUID:o,hint:r,disabled:s,error:a,intlLabel:l,labelAction:i,name:c,onChange:g,value:u,placeholder:m,required:f})=>{const{modifiedData:p,initialData:E,layout:b}=(0,h.Wq)(),[C,R]=(0,e.useState)(!1),[D,T]=(0,e.useState)(null),L=(0,ir.Z)(u,300),I=(0,e.useRef)(),v=(0,h.lm)(),{formatAPIError:M}=(0,h.So)(),S=E[c],{formatMessage:Z}=(0,H.Z)(),V=b?.options?.timestamps??0,A=!E[V],Q=(0,ir.Z)(p[t.targetField],300),[P,K]=(0,e.useState)(!1),[N,Y]=(0,e.useState)(null),{post:q}=(0,h.kY)(),U=l.id?Z({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,O=m?Z({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";I.current=async(B=!1)=>{R(!0);try{const{data:{data:te}}=await q((0,y.IF)("uid/generate"),{contentTypeUID:o,field:c,data:p});g({target:{name:c,value:te,type:"text"}},B),R(!1)}catch(te){R(!1),v({type:"warning",message:M(te)})}};const w=async()=>{if(u){R(!0);try{const{data:B}=await q((0,y.IF)("uid/check-availability"),{contentTypeUID:o,field:c,value:u?u.trim():""});R(!1),T(B)}catch(B){R(!1),v({type:"warning",message:M(B)})}}};(0,e.useEffect)(()=>{!u&&t.required&&I.current(!0)},[t.required,I,u]),(0,e.useEffect)(()=>{L?.trim().match(bi)&&L!==S&&w(),L||T(null)},[S,L]),(0,e.useEffect)(()=>{let B;return D?.isAvailable&&(B=setTimeout(()=>{T(null)},4e3)),()=>{B&&clearTimeout(B)}},[D]),(0,e.useEffect)(()=>{!P&&A&&Q&&p[t.targetField]&&!u&&I.current(!0)},[Q,P,A]);const W=()=>{Y(Z({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},J=()=>{Y(null)},k=B=>{B.target.value&&A&&K(!0),g(B)};return e.createElement(kn.o,{disabled:s,error:a,endAction:e.createElement(F.k,{position:"relative",gap:1},D&&!N&&e.createElement(lr,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!D?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},D?.isAvailable?e.createElement(hi.Z,null):e.createElement(Lt.Z,null),e.createElement(G.Z,{textColor:D.isAvailable?"success600":"danger600",variant:"pi"},Z(D.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&e.createElement(e.Fragment,null,N&&e.createElement(lr,{alignItems:"center",justifyContent:"flex-end",gap:1},e.createElement(G.Z,{textColor:"primary600",variant:"pi"},N)),e.createElement(Ci,{onClick:()=>I.current(),label:Z({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:W,onMouseLeave:J},C?e.createElement(Ri,{"data-testid":"loading-wrapper"},e.createElement(yi.Z,null)):e.createElement(ar.Z,null)))),hint:r,label:U,labelAction:i,name:c,onChange:k,placeholder:O,value:u||"",required:f})};On.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},On.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};const Mi=On;var Ti=d(78718),xn=d.n(Ti),Di=d(8748),Ii=d(23620),ki=d(54574),Oi=d(19270),cr=d(39785),xi=d(63428),Pi=d(96404),dr=d(52624),Qt=d(84495),Pn=d(37856),Gt=d(70968);const wn=({children:t,loadMore:o,search:r,totalNumberOfRelations:s,size:a,...l})=>e.createElement(e.Fragment,null,e.createElement(F.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},e.createElement(F.k,{direction:"column",alignItems:"stretch",basis:a<=6?"100%":"70%",gap:1,...l},r),o),t);wn.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},wn.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};var ur=d(15699);const Kt=50,bt=4,mr=(0,j.ZP)(F.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,pr=(0,j.ZP)(F.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,Fn=({ariaDescribedBy:t,children:o,displayValue:r,canDrag:s,disabled:a,endAction:l,iconButtonAriaLabel:i,style:c,id:g,index:u,name:m,onCancel:f,onDropItem:p,onGrabItem:E,status:b,updatePositionOfRelation:C,...R})=>{const[{handlerId:D,isDragging:T,handleKeyDown:L},I,v,M,S]=(0,ur.Y)(s&&!a,{type:`${y._Q.RELATION}_${m}`,index:u,item:{displayedValue:r,status:b,id:g},onGrabItem:E,onDropItem:p,onCancel:f,onMoveItem:C,dropSensitivity:"immediate"}),Z=(0,y.FE)(I,M);return(0,e.useEffect)(()=>{S((0,wt.rX)())},[S]),e.createElement($.x,{style:c,as:"li",ref:v,"aria-describedby":t,cursor:s?"all-scroll":"default"},T?e.createElement(wi,null):e.createElement(F.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:a?"neutral150":"neutral0",justifyContent:"space-between",ref:s?Z:void 0,"data-handler-id":D,...R},e.createElement(mr,{gap:1},s?e.createElement(ye.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":i,noBorder:!0,onKeyDown:L,disabled:a},e.createElement(Je.Z,null)):null,e.createElement(pr,{justifyContent:"space-between"},o)),l&&e.createElement($.x,{paddingLeft:4},l)))},wi=()=>e.createElement($.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${bt}px)`});Fn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},Fn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};const Fi=(0,j.ZP)($.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,Ln=({children:t,overflow:o,...r})=>e.createElement(Fi,{overflowDirection:o,...r},t);Ln.defaultProps={overflow:""},Ln.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var Li=d(5079);const Si=j.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:t})=>t.spaces[2]};
  background-color: ${({theme:t,isDraft:o})=>t.colors[o?"secondary600":"success600"]};
  border-radius: 50%;
`,gr=t=>{const{formatMessage:o}=(0,H.Z)(),r=Li.c.Option,{publicationState:s,mainField:a,id:l}=t.data;if(s){const i=s==="draft",c={id:(0,y.OB)("components.Select.draft-info-title"),defaultMessage:"State: Draft"},g={id:(0,y.OB)("components.Select.publish-info-title"),defaultMessage:"State: Published"},u=o(i?c:g);return e.createElement(r,{...t},e.createElement(F.k,null,e.createElement(Si,{title:u,isDraft:i}),e.createElement(G.Z,{ellipsis:!0},a??l)))}return e.createElement(r,{...t},a??l)};gr.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};const fr=(0,j.ZP)(Ii.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,hr=j.ZP.button`
  svg path {
    fill: ${({theme:t,disabled:o})=>o?t.colors.neutral600:t.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:t,disabled:o})=>!o&&t.colors.neutral600};
  }
`,Sn=({canReorder:t,description:o,disabled:r,error:s,iconButtonAriaLabel:a,id:l,name:i,numberOfRelationsToDisplay:c,label:g,labelAction:u,labelLoadMore:m,labelDisconnectRelation:f,listAriaDescription:p,liveText:E,loadingMessage:b,onCancel:C,onDropItem:R,onGrabItem:D,noRelationsMessage:T,onRelationConnect:L,onRelationLoadMore:I,onRelationDisconnect:v,onRelationReorder:M,onSearchNextPage:S,onSearch:Z,placeholder:V,publicationStateTranslations:A,required:Q,relations:P,searchResults:K,size:N})=>{const[Y,q]=(0,e.useState)(null),[U,O]=(0,e.useState)(""),w=(0,e.useRef)(),W=(0,e.useRef)(),{data:J}=K,k=P.data,B=k.length??0,te=(0,e.useMemo)(()=>B>c?Math.min(B,c)*(Kt+bt)+Kt/2:Math.min(B,c)*(Kt+bt),[B,c]),X=!!m&&P.hasNextPage,se=(0,e.useMemo)(()=>J.flat().filter(Boolean).map(ne=>({...ne,value:ne.id,label:ne.mainField})),[J]);(0,e.useEffect)(()=>{if(B<=c)return O("");const ne=Ne=>{const jo=Ne.target.parentNode.scrollHeight,nt=Ne.target.scrollHeight-Ne.target.scrollTop;return Ne.target.scrollTop===0?O("bottom"):O(nt===jo?"top":"top-bottom")},ge=W?.current;return!P.isLoading&&k.length>0&&ge&&W.current.addEventListener("scroll",ne),()=>{ge&&ge.removeEventListener("scroll",ne)}},[P,k,c,B]);const[z,ae]=(0,e.useState)(!1),Re=(0,e.useRef)(),Be=(0,e.useRef)([]);(0,e.useEffect)(()=>(se.length>0&&Be.current.length===0&&ae(ne=>(ne&&(Re.current=setTimeout(()=>{ae(!0)},10)),!1)),()=>{Be.current=se||[]}),[se]),(0,e.useEffect)(()=>()=>{Re.current&&clearTimeout(Re.current)},[]);const ct=()=>{ae(!1)},dt=()=>{ae(!0),Z()},ut=(ne,ge)=>{M&&ne>=0&&ne<k.length&&M(ge,ne)},xe=(0,de.zH)(k.length),qe=(0,e.useRef)(),Wt=()=>{qe.current="loadMore",I()};(0,e.useEffect)(()=>{qe.current==="onChange"&&k.length!==xe?w.current.scrollToItem(k.length,"end"):qe.current==="loadMore"&&k.length!==xe&&w.current.scrollToItem(0,"start"),qe.current=void 0},[xe,k]);const tt=`${i}-item-instructions`;return e.createElement(ki.g,{error:s,name:i,hint:o,id:l,required:Q},e.createElement(wn,{totalNumberOfRelations:B,size:N,search:e.createElement(e.Fragment,null,e.createElement(Oi.Q,{action:u},g),e.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:gr},options:se,isDisabled:r,isLoading:K.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:ne=>{q(null),L(ne),qe.current="onChange"},onInputChange:ne=>{q(ne),Z(ne)},onMenuClose:ct,onMenuOpen:dt,menuIsOpen:z,noOptionsMessage:()=>T,onMenuScrollToBottom:()=>{K.hasNextPage&&S()},placeholder:V,name:i,value:Y})),loadMore:X&&e.createElement(cr.A,{disabled:P.isLoading||P.isFetchingNextPage,onClick:Wt,loading:P.isLoading||P.isFetchingNextPage,startIcon:e.createElement(ar.Z,null)},m)},k.length>0&&e.createElement(Ln,{overflow:U},e.createElement(ht.T,{id:tt},p),e.createElement(ht.T,{"aria-live":"assertive"},E),e.createElement(Di.t7,{height:te,ref:w,outerRef:W,itemCount:B,itemSize:Kt+bt,itemData:{name:i,ariaDescribedBy:tt,canDrag:t,disabled:r,handleCancel:C,handleDropItem:R,handleGrabItem:D,iconButtonAriaLabel:a,labelDisconnectRelation:f,onRelationDisconnect:v,publicationStateTranslations:A,relations:k,updatePositionOfRelation:ut},itemKey:ne=>`${k[ne].mainField}_${k[ne].id}`,innerElementType:"ol"},An)),(o||s)&&e.createElement($.x,{paddingTop:2},e.createElement(xi.J,null),e.createElement(Pi.c,null))))},Ai=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),$i=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});Sn.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},Sn.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:$i,size:n().number.isRequired,relations:Ai};const An=({data:t,index:o,style:r})=>{const{ariaDescribedBy:s,canDrag:a,disabled:l,handleCancel:i,handleDropItem:c,handleGrabItem:g,iconButtonAriaLabel:u,name:m,labelDisconnectRelation:f,onRelationDisconnect:p,publicationStateTranslations:E,relations:b,updatePositionOfRelation:C}=t,{publicationState:R,href:D,mainField:T,id:L}=b[o],I=R==="draft"?"secondary":"success";return e.createElement(Fn,{ariaDescribedBy:s,canDrag:a,disabled:l,displayValue:String(T??L),iconButtonAriaLabel:u,id:L,index:o,name:m,endAction:e.createElement(hr,{"data-testid":`remove-relation-${L}`,disabled:l,type:"button",onClick:()=>p(b[o]),"aria-label":f},e.createElement(dr.J,{width:"12px",as:Gt.Z})),onCancel:i,onDropItem:c,onGrabItem:g,status:R||void 0,style:{...r,bottom:r.bottom??0+bt,height:r.height??0-bt},updatePositionOfRelation:C},e.createElement($.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(Qt.u,{description:T??`${L}`},D?e.createElement(fr,{to:D},T??L):e.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},T??L))),R&&e.createElement(Pn.q,{variant:I,showBullet:!1,size:"S"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${I}700`},E[R])))};An.defaultProps={data:{}},An.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};const Zi=Sn;var st=d(88767);function Bi(t,o){return r=>{const s=o(r);return e.createElement(t,{...r,...s})}}const qi=Bi;function Ni({componentUid:t,isUserAllowedToEditField:o,isUserAllowedToReadField:r,name:s,queryInfos:a}){const{isCreatingEntry:l,createActionAllowedFields:i,readActionAllowedFields:c,updateActionAllowedFields:g,slug:u,modifiedData:m}=(0,h.Wq)(),f=(0,e.useMemo)(()=>o===!0?!0:(l?i:g).includes(s),[l,i,s,o,g]),p=(0,e.useMemo)(()=>r?!0:(l?[]:c).includes(s),[l,r,s,c]),E=s.split(".");let b;t&&(b=x()(m,E.slice(0,-1))?.id);const C=(0,e.useMemo)(()=>l?null:t?b?(0,y.IF)(`relations/${t}/${b}/${E.at(-1)}`):null:(0,y.IF)(`relations/${u}/${m.id}/${s.split(".").at(-1)}`),[l,t,u,m.id,s,b,E]),R=(0,e.useMemo)(()=>t?(0,y.IF)(`relations/${t}/${s.split(".").at(-1)}`):(0,y.IF)(`relations/${u}/${s.split(".").at(-1)}`),[t,u,s]);return{componentId:b,isComponentRelation:Boolean(t),queryInfos:{...a,endpoints:{search:R,relation:C}},isCreatingEntry:l,isFieldAllowed:f,isFieldReadable:p}}const ji=Ni;function Wi(t,o){return`${(0,y.IF)(`collectionType/${t}/${o??""}`)}`}const at={DRAFT:"draft",PUBLISHED:"published"},$n=5,zi=10,Zn=(t,{shouldAddLink:o,mainFieldName:r,targetModel:s})=>{const a={...t};return o&&(a.href=Wi(s,a.id)),a.publicationState=!1,a?.publishedAt!==void 0&&(a.publicationState=a.publishedAt?at.PUBLISHED:at.DRAFT),a.mainField=a[r],a},Ui=(t,{shouldAddLink:o=!1,mainFieldName:r,targetModel:s}={})=>[...t].map(a=>Zn(a,{shouldAddLink:o,mainFieldName:r,targetModel:s})),Vi=(t,{mainFieldName:o})=>{const{data:r}=t,{pages:s=[]}=r??{};return{...t,data:s.map(a=>a?.results.map(l=>Zn(l,{mainFieldName:o}))).filter(Boolean).flat()}},Hi=(t=[],o=[])=>{const r=t.reduce((a,l)=>o.find(i=>i.id===l.id)?a:[...a,l.id],[]),s=o.reduce((a,l)=>t.find(i=>i.id===l.id)?a:[...a,l.id],[]);return[r,s]},Qi=(t,{relation:o,search:r})=>{const[s,a]=(0,e.useState)({}),[l,i]=(0,e.useState)(0),{get:c}=(0,h.kY)(),g=async({pageParam:v=1})=>{try{const{data:M}=await c(o?.endpoint,{params:{...o.pageParams??{},page:v}});return i(v),M}catch{return null}},u=async({pageParam:v=1})=>{try{const{data:M}=await c(r.endpoint,{params:{...r.pageParams??{},...s,page:v}});return M}catch{return null}},{onLoad:m,normalizeArguments:f={}}=o,p=(0,st.useInfiniteQuery)(["relation",...t],g,{cacheTime:0,enabled:o.enabled,getNextPageParam(v){const M=!v?.pagination;if(!(!v||M||v?.pagination.page>=v?.pagination.pageCount))return v.pagination.page+1},select:v=>({...v,pages:v.pages.map(M=>{if(!M)return M;const{data:S,results:Z,pagination:V}=M,A=!!S;let Q=[];return A?Q=[S]:Z&&(Q=[...Z].reverse()),{pagination:V,results:Q}})})}),{pageGoal:E}=o,{status:b,data:C,fetchNextPage:R,hasNextPage:D}=p;(0,e.useEffect)(()=>{E>l&&D&&b==="success"&&R({pageParam:l+1})},[E,l,R,D,b]);const T=(0,h.W6)(m);(0,e.useEffect)(()=>{if(b==="success"&&C&&C.pages?.at(-1)?.results&&T){const v=Ui(C.pages.at(-1).results,f);T(v)}},[b,T,C]);const L=(0,st.useInfiniteQuery)(["relation",...t,"search",JSON.stringify(s)],u,{enabled:Object.keys(s).length>0,getNextPageParam(v){if(!(!v?.pagination||v.pagination.page>=v.pagination.pageCount))return v.pagination.page+1}});return{relations:p,search:L,searchFor:(v,M={})=>{a({...M,_q:v})}}},yr=(t,o)=>r=>{const s=r.split(".");return s.reduce((a,l,i)=>{const c=x()(t,a),g=x()(o,[...s.slice(0,i),l,"__temp_key__"]);if(Array.isArray(c)&&typeof g=="number"){const u=c.findIndex(m=>m.__temp_key__===g);return a.push(u.toString()),a}return a.push(l),a},[])},Bn=({error:t,componentId:o,isComponentRelation:r,editable:s,description:a,intlLabel:l,isCreatingEntry:i,isFieldAllowed:c,isFieldReadable:g,labelAction:u,mainField:m,name:f,queryInfos:{endpoints:p,defaultParams:E,shouldDisplayRelationLink:b},placeholder:C,required:R,relationType:D,size:T,targetModel:L})=>{const[I,v]=(0,e.useState)(""),{formatMessage:M}=(0,H.Z)(),{slug:S,initialData:Z,modifiedData:V,relationConnect:A,relationDisconnect:Q,relationLoad:P,relationReorder:K}=(0,h.Wq)(),N=f.split("."),Y=yr(Z,V)(f),q=x()(V,f,[]),U=Math.ceil(x()(Z,f,[]).length/$n),{relations:O,search:w,searchFor:W}=Qi([S,Y.join("."),V.id,E],{relation:{enabled:!!p.relation,endpoint:p.relation,pageGoal:U,pageParams:{...E,pageSize:$n},onLoad(ne){P({target:{initialDataPath:["initialData",...Y],modifiedDataPath:["modifiedData",...N],value:ne}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:L}},search:{endpoint:p.search,pageParams:{...E,entityId:i?void 0:r?o:Z.id,pageSize:zi}}}),J=(0,e.useMemo)(()=>D.toLowerCase().includes("morph"),[D]),k=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(D),B=(0,e.useMemo)(()=>J?!0:i?!s:!c&&g||!s,[J,i,s,c,g]),te=ne=>{const ge=Zn(ne,{mainFieldName:m.name,shouldAddLink:b,targetModel:L});A({name:f,value:ge,toOneRelation:k})},X=ne=>{Q({name:f,id:ne.id})},se=()=>{O.fetchNextPage()},z=(ne="")=>{const[ge,Ne]=Hi(q,x()(Z,f));W(ne,{idsToInclude:Ne,idsToOmit:ge})},ae=()=>{w.fetchNextPage()},Re=ne=>`${ne+1} of ${q.length}`,Be=(ne,ge)=>{const Ne=q[ne];v(M({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:Ne.mainField??Ne.id,position:Re(ge)})),K({name:f,newIndex:ge,oldIndex:ne})},ct=ne=>{const ge=q[ne];v(M({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:ge.mainField??ge.id,position:Re(ne)}))},dt=ne=>{const ge=q[ne];v(M({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:ge.mainField??ge.id,position:Re(ne)}))},ut=ne=>{const ge=q[ne];v(M({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:ge.mainField??ge.id}))};if(!c&&i||!i&&!c&&!g)return e.createElement(h.X0,{name:f,intlLabel:l,labelAction:u});const xe=q.length,qe=(x()(Z,Y)??[]).length,Wt=O.data?.pages[0]?.pagination?.total??0,tt=!O.data&&xe===qe?xe:xe-qe+Wt;return e.createElement(Zi,{error:t,canReorder:!k,description:a,disabled:B,iconButtonAriaLabel:M({id:(0,y.OB)("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:f,label:`${M({id:l.id,defaultMessage:l.defaultMessage})} ${tt>0?`(${tt})`:""}`,labelAction:u,labelLoadMore:i?null:M({id:(0,y.OB)("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:M({id:(0,y.OB)("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:M({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:I,loadingMessage:M({id:(0,y.OB)("relation.isLoading"),defaultMessage:"Relations are loading"}),name:f,noRelationsMessage:M({id:(0,y.OB)("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:$n,onDropItem:dt,onGrabItem:ct,onCancel:ut,onRelationConnect:te,onRelationDisconnect:X,onRelationLoadMore:se,onRelationReorder:Be,onSearch:ne=>z(ne),onSearchNextPage:()=>ae(),placeholder:M(C||{id:(0,y.OB)("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[at.DRAFT]:M({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:M({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},relations:xn()({...O,data:q},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:R,searchResults:Vi(w,{mainFieldName:m.name}),size:T})};Bn.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Bn.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const Gi=(0,e.memo)(Bn),Ki=qi(Gi,ji);function Yi(t,o){return r=>{const s=o(r.keys);return e.createElement(t,{...r,...s})}}const Xi=Yi,Ji=(t,o=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:o,hidden:o},key:"__enum_option_null",value:""},...t.map(r=>({metadatas:{intlLabel:{id:r,defaultMessage:r},hidden:!1,disabled:!1},key:r,value:r}))];var _i=d(7334),el=d.n(_i);const tl=(t="")=>{switch(el()(t)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return t;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return t||"text"}},nl=t=>{let o;return t==="float"||t==="decimal"?o=.01:o=1,o};function ol(t){const{createActionAllowedFields:o,formErrors:r,isCreatingEntry:s,modifiedData:a,onChange:l,readActionAllowedFields:i,shouldNotRunValidations:c,updateActionAllowedFields:g}=(0,h.Wq)(),u=(0,e.useMemo)(()=>s?o:g,[s,o,g]),m=(0,e.useMemo)(()=>s?[]:i,[s,i]),f=x()(a,t,null);return{allowedFields:u,formErrors:r,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:f}}const rl=ol,br=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function qn({allowedFields:t,componentUid:o,fieldSchema:r,formErrors:s,isCreatingEntry:a,keys:l,labelAction:i,metadatas:c,onChange:g,readableFields:u,shouldNotRunValidations:m,queryInfos:f,value:p,size:E,customFieldInputs:b}){const{fields:C}=(0,h.yX)(),{formatMessage:R}=(0,H.Z)(),{contentType:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>!x()(c,"editable",!0),[c]),{type:L,customField:I}=r,v=x()(s,[l],null),M=(0,e.useMemo)(()=>(0,y.Ts)(l),[l]),S=(0,e.useMemo)(()=>{const te=sa()(r,m?[...br,"required","minLength"]:br),X=r.regex||null;if(X){const se=new RegExp(X);se&&(te.regex=se)}return te},[r,m]),Z=(0,e.useMemo)(()=>x()(S,["required"],!1),[S]),V=(0,e.useMemo)(()=>{const te=x()(D,["attributes"],{});return x()(te,[M[0],"type"],null)==="dynamiczone"},[D,M]),A=(0,e.useMemo)(()=>tl(L),[L]),Q=(0,e.useMemo)(()=>L==="media"&&!p?[]:p,[L,p]),P=(0,e.useMemo)(()=>nl(L),[L]),K=(0,e.useMemo)(()=>{const te=M.join(".");if(t.includes(te))return!0;if(V)return t.includes(M[0]);if(M.length>1){const se=Ft()(M,M.length-1).join(".");return t.includes(se)}return!1},[t,M,V]),N=(0,e.useMemo)(()=>{const te=M.join(".");if(u.includes(te))return!0;if(V)return u.includes(M[0]);if(M.length>1){const se=Ft()(M,M.length-1).join(".");return u.includes(se)}return!1},[u,M,V]),Y=(0,e.useMemo)(()=>N||K,[K,N]),q=(0,e.useMemo)(()=>a?T:N&&!K?!0:T,[T,a,K,N]),U=(0,e.useMemo)(()=>Ji(r.enum||[],Z),[r,Z]),{label:O,description:w,placeholder:W,visible:J}=c,k=(0,e.useMemo)(()=>{if(!c.step||A!=="datetime"&&A!=="time")return P;if(!Q)return c.step;let te;return A==="datetime"?te=parseInt(Q.substr(14,2),10):A==="time"&&(te=parseInt(Q.slice(-2),10)),te%c.step===0?c.step:P},[A,Q,c.step,P]);if(J===!1)return null;if(!Y)return e.createElement(h.X0,{description:w?{id:w,defaultMessage:w}:null,intlLabel:{id:O,defaultMessage:O},labelAction:i,error:v&&R(v),name:l,required:Z});if(L==="relation")return e.createElement(Ki,{...c,...r,componentUid:o,description:c.description?R({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:i,isUserAllowedToEditField:K,isUserAllowedToReadField:N,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:f,size:E,value:p,error:v&&R(v)});const B={uid:Mi,media:C.media,wysiwyg:fi,...C,...b};return e.createElement(h.jm,{attribute:r,autoComplete:"new-password",intlLabel:{id:O,defaultMessage:O},isNullable:A==="bool"&&[null,void 0].includes(r.default),description:w?{id:w,defaultMessage:w}:null,disabled:q,error:v,labelAction:i,contentTypeUID:D.uid,customInputs:B,multiple:r.multiple||!1,name:l,onChange:g,options:U,placeholder:W?{id:W,defaultMessage:W}:null,required:r.required||!1,step:k,type:I||A,value:Q,withDefaultValue:!1})}qn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},qn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const sl=(0,e.memo)(qn,Ce()),Nn=Xi(sl,rl),St=new Map,jn=(t=[])=>{const[o,r]=(0,e.useState)(Object.fromEntries(St)),s=t.filter(g=>!St.get(g)),[a,l]=(0,e.useState)(()=>!!s.length),i=(0,h.mZ)();(0,e.useEffect)(()=>{const g=m=>{r(m),l(!1)},u=async(m,f)=>{const p=await Promise.all(f);m.forEach((E,b)=>{St.set(E,p[b].default)}),g(Object.fromEntries(St))};if(s.length>0){l(!0);const m=s.reduce((f,p)=>{const E=i.get(p);return E&&f.push(E.components.Input()),f},[]);m.length>0&&u(s,m)}},[s,i]);const c=(0,e.useCallback)(()=>{St.clear(),r({})},[]);return{isLazyLoading:a,lazyComponentStore:o,cleanup:c}},Wn=({componentUid:t,isFromDynamicZone:o,isNested:r,name:s})=>{const{getComponentLayout:a}=(0,de.PL)(),i=(0,e.useMemo)(()=>a(t),[t,a]).layouts.edit,{lazyComponentStore:c}=jn();return e.createElement($.x,{background:o?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:r,borderColor:r?"neutral200":""},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},i.map((g,u)=>e.createElement(De.r,{gap:4,key:u},g.map(({name:m,size:f,metadatas:p,fieldSchema:E,queryInfos:b})=>{const C=E.type==="component",R=`${s}.${m}`;if(C){const D=E.component;return e.createElement(ue.P,{col:f,s:12,xs:12,key:m},e.createElement(Yt,{componentUid:D,intlLabel:{id:p.label,defaultMessage:p.label},isNested:!0,isRepeatable:E.repeatable,max:E.max,min:E.min,name:R,required:E.required||!1}))}return e.createElement(ue.P,{col:f,key:m,s:12,xs:12},e.createElement(Nn,{componentUid:t,keys:R,fieldSchema:E,metadatas:p,queryInfos:b,size:f,customFieldInputs:c}))})))))};Wn.defaultProps={isFromDynamicZone:!1,isNested:!1},Wn.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};const al=Wn;var At=d(96315),il=d(79833),Er=d.n(il);const ll=j.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`,cl=()=>e.createElement(ll,{padding:6,background:"primary100"}),dl=(0,j.ZP)(ye.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:t,expanded:o})=>o?t.colors.primary600:t.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }
  }
`,ul=(0,j.ZP)(F.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:t,expanded:o})=>o?t.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,zn=({componentFieldName:t,componentUid:o,fields:r,index:s,isOpen:a,isReadOnly:l,mainField:i,moveComponentField:c,onClickToggle:g,toggleCollapses:u,onGrabItem:m,onDropItem:f,onCancel:p})=>{const{modifiedData:E,removeRepeatableField:b,triggerFormValidation:C}=(0,h.Wq)(),R=Er()(x()(E,[...t.split("."),i],"")),D=(0,e.useRef)(null),{formatMessage:T}=(0,H.Z)(),L=t.split(".").slice(0,-1).join("."),[{handlerId:I,isDragging:v,handleKeyDown:M},S,Z,V,A]=(0,ur.Y)(!l,{type:`${y._Q.COMPONENT}_${L}`,index:s,item:{displayedValue:R},onMoveItem:c,onStart(){u()},onEnd(){C()},onGrabItem:m,onDropItem:f,onCancel:p});(0,e.useEffect)(()=>{A((0,wt.rX)(),{captureDraggingState:!1})},[A,s]);const Q=(0,y.FE)(D,V),P=(0,y.FE)(S,Z),{lazyComponentStore:K}=jn();return e.createElement($.x,{ref:P},v?e.createElement(cl,null):e.createElement(mn.U,{expanded:a,onToggle:g,id:t,size:"S"},e.createElement(pn.B,{action:l?null:e.createElement(ul,{gap:0,expanded:a},e.createElement(dl,{expanded:a,noBorder:!0,onClick:()=>{b(t),u()},label:T({id:(0,y.OB)("containers.Edit.delete"),defaultMessage:"Delete"}),icon:e.createElement(Qe.Z,null)}),e.createElement(ye.h,{className:"drag-handle",ref:Q,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:N=>N.stopPropagation(),"data-handler-id":I,label:T({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:M},e.createElement(Je.Z,null))),title:R,togglePosition:"left"}),e.createElement(gn.v,null,e.createElement(F.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},r.map((N,Y)=>e.createElement(De.r,{gap:4,key:Y},N.map(({name:q,fieldSchema:U,metadatas:O,queryInfos:w,size:W})=>{const J=U.type==="component",k=`${t}.${q}`;if(J){const B=U.component;return e.createElement(ue.P,{col:W,s:12,xs:12,key:q},e.createElement(Yt,{componentUid:B,intlLabel:{id:O.label,defaultMessage:O.label},isRepeatable:U.repeatable,isNested:!0,name:k,max:U.max,min:U.min,required:U.required}))}return e.createElement(ue.P,{key:k,col:W,s:12,xs:12},e.createElement(Nn,{componentUid:o,fieldSchema:U,keys:k,metadatas:O,queryInfos:w,size:W,customFieldInputs:K}))})))))))};zn.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},zn.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};const ml=(0,e.memo)(zn);var Cr=d(17373);const pl=(0,j.ZP)($.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
`,gl=(0,j.ZP)($.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:t})=>t.colors.primary600};
  }
`,Un=({children:t,error:o})=>{const{formatMessage:r}=(0,H.Z)();return e.createElement(Cr.k,{attributeName:"data-strapi-accordion-toggle"},t,o&&e.createElement($.x,{paddingTop:1},e.createElement(G.Z,{variant:"pi",textColor:"danger600"},r({id:o.id,defaultMessage:o.defaultMessage},{...o.values}))))};Un.defaultProps={error:void 0},Un.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function fl(t,o={}){return Object.keys(o).filter(r=>r.startsWith(t)).map(r=>r.split(".").slice(0,t.split(".").length+1).join("."))}const hl=(0,j.ZP)(cr.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,Vn=({componentUid:t,componentValue:o,componentValueLength:r,isReadOnly:s,max:a,min:l,name:i})=>{const{addRepeatableComponentToField:c,formErrors:g,moveComponentField:u}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:f}=(0,H.Z)(),[p,E]=(0,e.useState)(""),[b,C]=(0,e.useState)(""),{getComponentLayout:R,components:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>R(t),[t,R]),L=(0,e.useMemo)(()=>(0,y.Uo)(o||[])+1,[o]),I=fl(i,g),v=l-r,M=x()(g,i,{id:""}).id.includes("min"),S=()=>{E("")},Z=()=>{s||(r<a?(c(i,T,D,M),E(L)):r>=a&&m({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}}))},V=(O,w)=>{C(f({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${i}.${w}`,position:P(O)})),u({name:i,newIndex:O,currentIndex:w})},A=x()(T,["settings","mainField"],"id"),Q=O=>()=>{E(p===O?"":O)},P=O=>`${O+1} of ${r}`,K=O=>{C(f({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${i}.${O}`}))},N=O=>{C(f({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${i}.${O}`,position:P(O)}))},Y=O=>{C(f({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${i}.${O}`,position:P(O)}))};let q=g[i];if(M?q={id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:v}}:I.some(O=>O.split(".").length>1)&&!M&&(q={id:(0,y.OB)("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),r===0)return e.createElement(Vo,{error:q,isReadOnly:s,onClick:Z});const U=`${i}-item-instructions`;return e.createElement($.x,{hasRadius:!0},e.createElement(ht.T,{id:U},f({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(ht.T,{"aria-live":"assertive"},b),e.createElement(Un,{error:q,ariaDescribedBy:U},e.createElement(gl,{"aria-describedby":U},o.map(({__temp_key__:O},w)=>e.createElement(ml,{componentFieldName:`${i}.${w}`,componentUid:t,fields:T.layouts.edit,key:O,index:w,isOpen:p===O,isReadOnly:s,mainField:A,moveComponentField:V,onClickToggle:Q(O),toggleCollapses:S,onCancel:K,onDropItem:Y,onGrabItem:N}))),e.createElement(pl,null,e.createElement(F.k,{justifyContent:"center",height:"48px",background:"neutral0"},e.createElement(hl,{disabled:s,onClick:Z,startIcon:e.createElement(At.Z,null)},f({id:(0,y.OB)("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};Vn.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},Vn.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};const yl=(0,e.memo)(Vn),Hn=({addNonRepeatableComponentToField:t,componentUid:o,intlLabel:r,isCreatingEntry:s,isFromDynamicZone:a,isRepeatable:l,isNested:i,labelAction:c,max:g,min:u,name:m,hasChildrenAllowedFields:f,hasChildrenReadableFields:p,isReadOnly:E,componentValue:b,removeComponentFromField:C,required:R})=>{const{formatMessage:D}=(0,H.Z)(),T=Ks()(b),L=b!==null||a,I=!l&&L&&!a&&f,{getComponentLayout:v,components:M}=(0,de.PL)(),S=(0,e.useMemo)(()=>v(o),[o,v]);if(!f&&s)return e.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});if(!f&&!s&&!p)return e.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});const Z=()=>{t(m,S,M)};return e.createElement($.x,null,e.createElement(F.k,{justifyContent:"space-between"},r&&e.createElement(na,{intlLabel:r,labelAction:c,name:m,numberOfEntries:T,showNumberOfEntries:l,required:R}),I&&e.createElement(ye.h,{label:D({id:(0,y.OB)("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:e.createElement(Qe.Z,null),noBorder:!0,onClick:()=>{C(m,o)}})),e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!L&&e.createElement(Vo,{isReadOnly:E,onClick:Z}),!l&&L&&e.createElement(al,{componentUid:o,isFromDynamicZone:a,isNested:i,name:m}),l&&e.createElement(yl,{componentValue:b,componentValueLength:T,componentUid:o,isReadOnly:E,max:g,min:u,name:m})))};Hn.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},Hn.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const bl=(0,e.memo)(Hn,Ce()),Yt=Xs(bl,ea),El=(0,j.ZP)(F.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,Cl=(0,j.ZP)(ye.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:t,expanded:o})=>o?t.colors.primary600:t.colors.neutral600};
  }
`,vl=(0,j.ZP)($.x)`
  > div:first-child {
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  }
`,Rl=(0,j.ZP)($.x)`
  border-radius: 0 0 ${({theme:t})=>t.spaces[1]} ${({theme:t})=>t.spaces[1]};
`,Ml=(0,j.ZP)($.x)`
  width: ${({theme:t})=>t.spaces[2]};
  height: ${({theme:t})=>t.spaces[4]};
`,Tl=j.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`,Dl=(0,j.ZP)($.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Qn=({componentUid:t,formErrors:o,index:r,isFieldAllowed:s,name:a,onRemoveComponentClick:l,onMoveComponent:i,onGrabItem:c,onDropItem:g,onCancel:u})=>{const[m,f]=(0,e.useState)(!0),{formatMessage:p}=(0,H.Z)(),{getComponentLayout:E}=(0,de.PL)(),{modifiedData:b}=(0,h.Wq)(),{icon:C,friendlyName:R,mainValue:D}=(0,e.useMemo)(()=>{const N=E(t),{info:{icon:Y,displayName:q}}=N,U=x()(N,["settings","mainField"],"id"),O=x()(b,[a,r,U])??"",w=U==="id"?"":String(O).trim(),W=w.length>0?` - ${w}`:w;return{friendlyName:q,icon:Y,mainValue:W}},[t,E,b,a,r]),T=Object.keys(o).filter(N=>{const Y=N.split(".");return`${Y[0]}.${Y[1]}`==`${a}.${r}`});let L;T.length>0&&(L=p({id:(0,y.OB)("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const I=()=>{f(N=>!N)},[{handlerId:v,isDragging:M,handleKeyDown:S},Z,V,A,Q]=(0,de.Y9)(s,{type:`${y._Q.DYNAMIC_ZONE}_${a}`,index:r,item:{displayedValue:`${R}${D}`,icon:C},onMoveItem:i,onGrabItem:c,onDropItem:g,onCancel:u});(0,e.useEffect)(()=>{Q((0,wt.rX)(),{captureDraggingState:!1})},[Q,r]);const P=(0,y.FE)(Z,V),K=s?e.createElement(El,{gap:0,expanded:m},e.createElement(Cl,{noBorder:!0,label:p({id:(0,y.OB)("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:R}),onClick:l},e.createElement(Qe.Z,null)),e.createElement(ye.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:N=>N.stopPropagation(),"data-handler-id":v,ref:A,label:p({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:S},e.createElement(Je.Z,null))):null;return e.createElement(Dl,{as:"li"},e.createElement(F.k,{justifyContent:"center"},e.createElement(Ml,{background:"neutral200"})),e.createElement(vl,{ref:P,hasRadius:!0},M?e.createElement(Tl,{padding:6,background:"primary100"}):e.createElement(mn.U,{expanded:m,onToggle:I,size:"S",error:L},e.createElement(pn.B,{action:K,title:`${R}${D}`,togglePosition:"left"}),e.createElement(gn.v,null,e.createElement(Rl,{background:"neutral0"},e.createElement(Yt,{componentUid:t,icon:C,name:`${a}.${r}`,isFromDynamicZone:!0}))))))};Qn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Qn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};const Il=Qn,Gn=(0,j.ZP)(Uo.Z)`
  transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:t,$hasError:o})=>o?t.colors.danger200:t.colors.neutral150};
  }
  > path {
    fill: ${({theme:t,$hasError:o})=>o?t.colors.danger600:t.colors.neutral600};
  }
`,kl=(0,j.ZP)(Cn.Y)`
  border-radius: 26px;
  border-color: ${({theme:t})=>t.colors.neutral150};
  background: ${({theme:t})=>t.colors.neutral0};
  padding-top: ${({theme:t})=>t.spaces[3]};
  padding-right: ${({theme:t})=>t.spaces[4]};
  padding-bottom: ${({theme:t})=>t.spaces[3]};
  padding-left: ${({theme:t})=>t.spaces[4]};

  box-shadow: ${({theme:t})=>t.shadows.filterShadow};

  svg {
    height: ${({theme:t})=>t.spaces[6]};
    width: ${({theme:t})=>t.spaces[6]};
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:t})=>t.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600} !important;
    }

    ${Gn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }
    ${Gn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
`,Ol=(0,j.ZP)($.x)`
  height: 100%;
`,Kn=({hasError:t,hasMaxError:o,hasMinError:r,isDisabled:s,isOpen:a,label:l,missingComponentNumber:i,name:c,onClick:g})=>{const{formatMessage:u}=(0,H.Z)(),m=u({id:(0,y.OB)("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),f=u({id:"app.utils.close-label",defaultMessage:"Close"});let p=a?f:m;return o&&!a&&(p=u({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),r&&!a&&(p=u({id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:i})),e.createElement(F.k,{justifyContent:"center"},e.createElement($.x,{style:{cursor:s?"not-allowed":"pointer"}},e.createElement(kl,{type:"button",onClick:g,disabled:s,hasError:t},e.createElement(F.k,null,e.createElement(Ol,{"aria-hidden":!0,paddingRight:2},e.createElement(Gn,{$isOpen:a,$hasError:t&&!a})),e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:t&&!a?"danger600":"neutral500"},p)))))};Kn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Kn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};const xl=Kn,Pl=(0,j.ZP)($.x)`
  border-radius: ${(0,h.Q1)(26)};
`,Yn=({label:t,labelAction:o,name:r,numberOfComponents:s,required:a,intlDescription:l})=>{const{formatMessage:i}=(0,H.Z)(),c=i({id:t||r,defaultMessage:t||r});return e.createElement(F.k,{justifyContent:"center"},e.createElement($.x,null,e.createElement(Pl,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},e.createElement(F.k,{direction:"column",justifyContent:"center"},e.createElement(F.k,{maxWidth:(0,h.Q1)(356)},e.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),e.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),a&&e.createElement(G.Z,{textColor:"danger600"},"*"),o&&e.createElement($.x,{paddingLeft:1},o)),l&&e.createElement($.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},e.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},i(l)))))))};Yn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},Yn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};const wl=Yn;var Fl=d(7739),vr=d.n(Fl);const Xt=5,Jt=8,Ll=(0,j.ZP)(F.k)`
  border-radius: ${({showBackground:t})=>t?"50%":0};
  color: ${({theme:t})=>t.colors.neutral600};
  height: ${({theme:t,size:o})=>t.spaces[o==="S"?Xt:Jt]};
  width: ${({theme:t,size:o})=>t.spaces[o==="S"?Xt:Jt]};

  svg {
    height: ${({theme:t,size:o})=>t.spaces[o==="S"?Xt-2:Jt-3]};
    width: ${({theme:t,size:o})=>t.spaces[o==="S"?Xt-2:Jt-3]};
  }
`;function _t({showBackground:t=!0,size:o="M"}){return e.createElement(Ll,{alignItems:"center",background:t?"neutral200":null,justifyContent:"center",size:o,showBackground:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}_t.defaultProps={showBackground:!0,size:"M"},_t.propTypes={showBackground:n().bool,size:n().string};const Sl=(0,j.ZP)($.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function Xn({children:t,onClick:o}){return e.createElement(Sl,{as:"button",type:"button",onClick:o,hasRadius:!0},e.createElement(F.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},e.createElement(_t,null),e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},t)))}Xn.defaultProps={onClick(){}},Xn.propTypes={children:n().node.isRequired,onClick:n().func};const Al=j.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:t})=>t.spaces[1]};
`,Jn=({category:t,components:o,variant:r,isOpen:s,onAddComponent:a,onToggle:l})=>{const{formatMessage:i}=(0,H.Z)(),c=()=>{l(t)};return e.createElement(mn.U,{expanded:s,onToggle:c,size:"S"},e.createElement(pn.B,{variant:r,title:i({id:t,defaultMessage:t}),togglePosition:"left"}),e.createElement(gn.v,null,e.createElement($.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},e.createElement(Al,null,o.map(({componentUid:g,info:{displayName:u}})=>e.createElement(Xn,{key:g,onClick:a(g)},i({id:u,defaultMessage:u})))))))};Jn.defaultProps={components:[],isOpen:!1,variant:"primary"},Jn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};const $l=Jn,_n=({components:t,isOpen:o,onClickAddComponent:r})=>{const{formatMessage:s}=(0,H.Z)(),{getComponentLayout:a}=(0,de.PL)(),[l,i]=(0,e.useState)(""),c=(0,e.useMemo)(()=>{const m=t.map(p=>{const{category:E,info:b}=a(p);return{componentUid:p,category:E,info:b}}),f=vr()(m,"category");return Object.keys(f).reduce((p,E)=>(p.push({category:E,components:f[E]}),p),[])},[t,a]);(0,e.useEffect)(()=>{o&&c.length>0&&i(c[0].category)},[o,c]);const g=m=>()=>{r(m),i("")},u=m=>{i(f=>f===m?"":m)};return o?e.createElement($.x,{paddingBottom:6},e.createElement($.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},e.createElement(F.k,{justifyContent:"center"},e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:(0,y.OB)("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),e.createElement($.x,{paddingTop:2},e.createElement(Cr.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:f},p)=>e.createElement($l,{key:m,category:m,components:f,onAddComponent:g,isOpen:m===l,onToggle:u,variant:p%2===1?"primary":"secondary"})))))):null};_n.defaultProps={components:[],isOpen:!1},_n.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};const Zl=_n,eo=({name:t,addComponentToDynamicZone:o,formErrors:r,isCreatingEntry:s,isFieldAllowed:a,isFieldReadable:l,labelAction:i,moveComponentField:c,removeComponentFromDynamicZone:g,dynamicDisplayedComponents:u,fieldSchema:m,metadatas:f})=>{const[p,E]=(0,e.useState)(!1),[b,C]=(0,e.useState)(""),{formatMessage:R}=(0,H.Z)(),D=(0,h.lm)(),{getComponentLayout:T,components:L}=(0,de.PL)(),I=u.length,v=f.description?{id:f.description,defaultMessage:f.description}:null,{max:M=1/0,min:S=-1/0}=m,Z=(0,e.useMemo)(()=>Object.keys(r).filter(k=>k===t).map(k=>r[k]),[r,t]),V=S-I,A=Z.length>0,Q=Z.length>0&&x()(Z,[0,"id"],"").includes("min"),P=A&&x()(Z,[0,"id"],"")==="components.Input.error.validation.max",K=k=>{E(!1);const B=T(k);o(t,B,L,A)},N=()=>{I<M?E(k=>!k):D({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}})},Y=(k,B)=>{C(R({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${t}.${B}`,position:q(k)})),c({name:t,newIndex:k,currentIndex:B})},q=k=>`${k+1} of ${u.length}`,U=k=>{C(R({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${t}.${k}`}))},O=k=>{C(R({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${t}.${k}`,position:q(k)}))},w=k=>{C(R({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${t}.${k}`,position:q(k)}))},W=(k,B)=>()=>{g(k,B)};if(!a&&(s||!l&&!s))return e.createElement(h.X0,{description:v,intlLabel:{id:f.label,defaultMessage:f.label},labelAction:i,name:t});const J=`${t}-item-instructions`;return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},I>0&&e.createElement($.x,null,e.createElement(wl,{intlDescription:v,label:f.label,labelAction:i,name:t,numberOfComponents:I,required:m.required||!1}),e.createElement(ht.T,{id:J},R({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(ht.T,{"aria-live":"assertive"},b),e.createElement("ol",{"aria-describedby":J},u.map(({componentUid:k,id:B},te)=>e.createElement(Il,{componentUid:k,formErrors:r,key:`${k}-${B}`,index:te,isFieldAllowed:a,name:t,onMoveComponent:Y,onRemoveComponentClick:W(t,te),onCancel:U,onDropItem:w,onGrabItem:O})))),e.createElement(xl,{hasError:A,hasMaxError:P,hasMinError:Q,isDisabled:!a,label:f.label,missingComponentNumber:V,isOpen:p,name:t,onClick:N}),e.createElement(Zl,{isOpen:p,components:m.components??[],onClickAddComponent:K}))};eo.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},eo.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const Bl=(0,e.memo)(eo,Ce()),ql=Vs(Bl,Qs);var Nl=d(9669),Ue=d.n(Nl),_e=d(46781);const en=()=>({type:_e.ZA}),to=t=>({type:_e.Id,data:t}),no=(t,o=!1)=>({type:_e.TP,rawQuery:t,isSingleType:o}),Rr=()=>({type:_e.c2}),Mr=(t,o)=>({type:_e.w7,componentsDataStructure:t,contentTypeDataStructure:o}),ce=t=>({type:_e.d0,status:t}),et=t=>({type:_e.t9,data:t}),jl=()=>({type:_e.tE}),oo=t=>t["content-manager_editViewCrudReducer"],ro=({allLayoutData:t,children:o,slug:r,id:s,origin:a})=>{const l=(0,st.useQueryClient)(),i=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:g}=(0,h.rS)(),{push:u,replace:m}=(0,re.k6)(),[{rawQuery:f}]=(0,h.Kx)(),p=(0,_.I0)(),{componentsDataStructure:E,contentTypeDataStructure:b,data:C,isLoading:R,status:D}=(0,_.v9)(oo),T=(0,de.Ky)(r),{formatAPIError:L}=(0,h.So)(y.OB),I=(0,e.useRef)(!0),v=(0,e.useRef)(g),M=(0,e.useRef)(t),S=(0,h.kY)(),{put:Z,post:V,del:A}=S,Q=s===null,P=(0,e.useMemo)(()=>Q&&!a?null:(0,y.IF)(`collection-types/${r}/${a||s}`),[r,s,Q,a]),K=(0,e.useCallback)(k=>a?(0,h.w6)(k,M.current.contentType,M.current.components):k,[a]),N=(0,e.useCallback)(k=>{const B=(0,y.kc)(k,M.current.contentType,M.current.components);return(0,h.dU)(B,M.current.contentType,M.current.components)},[]);(0,e.useEffect)(()=>{const k=Object.keys(t.components).reduce((X,se)=>{const z=(0,y.Di)(x()(t,["components",se,"attributes"],{}),t.components);return X[se]=(0,h.dU)(z,t.components[se],t.components),X},{}),B=(0,y.Di)(t.contentType.attributes,t.components),te=(0,h.dU)(B,t.contentType,t.components);p(Mr(k,te))},[t,p]),(0,e.useEffect)(()=>()=>{p(Rr())},[p]),(0,e.useEffect)(()=>{const B=Ue().CancelToken.source(),te=async se=>{p(en());try{const{data:z}=await S.get(P,{cancelToken:se.token});p(to(N(K(z))))}catch(z){if(Ue().isCancel(z))return;const ae=x()(z,"response.status",null);if(ae===404){u(T);return}ae===403&&(i({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),u(T))}},X=async()=>{await p(en()),await p(no(f))};return I.current?(P?te(B):X(),()=>{B.cancel("Operation canceled by the user.")}):()=>{}},[S,K,N,u,P,p,f,T,i]);const Y=(0,e.useCallback)(k=>{i({type:"warning",message:L(k)})},[i,L]),q=(0,e.useCallback)(async k=>{try{v.current("willDeleteEntry",k);const{data:B}=await A((0,y.IF)(`collection-types/${r}/${s}`));return i({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),v.current("didDeleteEntry",k),m(T),Promise.resolve(B)}catch(B){return v.current("didNotDeleteEntry",{error:B,...k}),Promise.reject(B)}},[s,r,i,A,T,m]),U=(0,e.useCallback)(async(k,B)=>{const te=`${(0,y.IF)(`collection-types/${r}`)}${f}`;try{p(ce("submit-pending"));const{data:X}=await V(te,k);return v.current("didCreateEntry",B),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),p(et(N(X))),p(ce("resolved")),m(`/content-manager/collectionType/${r}/${X.id}${f}`),Promise.resolve(X)}catch(X){return Y(X),v.current("didNotCreateEntry",{error:X,trackerProperty:B}),p(ce("resolved")),Promise.reject(X)}},[N,Y,m,r,p,f,i,c,l,V]),O=(0,e.useCallback)(async()=>{try{v.current("willCheckDraftRelations");const k=(0,y.IF)(`collection-types/${r}/${s}/actions/numberOfDraftRelations`);p(ce("draft-relation-check-pending"));const B=await S.get(k);return v.current("didCheckDraftRelations"),p(ce("resolved")),B.data.data}catch(k){return Y(k),p(ce("resolved")),Promise.reject(k)}},[Y,s,r,p,S]),w=(0,e.useCallback)(async()=>{try{v.current("willPublishEntry");const k=(0,y.IF)(`collection-types/${r}/${s}/actions/publish`);p(ce("publish-pending"));const{data:B}=await V(k);return v.current("didPublishEntry"),p(et(N(B))),p(ce("resolved")),i({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),Promise.resolve(B)}catch(k){return Y(k),p(ce("resolved")),Promise.reject(k)}},[N,Y,s,r,p,i,V]),W=(0,e.useCallback)(async(k,B)=>{const te=(0,y.IF)(`collection-types/${r}/${s}`);try{v.current("willEditEntry",B),p(ce("submit-pending"));const{data:X}=await Z(te,k);return v.current("didEditEntry",{trackerProperty:B}),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),l.invalidateQueries(["relation"]),p(et(N(X))),p(ce("resolved")),Promise.resolve(X)}catch(X){return v.current("didNotEditEntry",{error:X,trackerProperty:B}),Y(X),p(ce("resolved")),Promise.reject(X)}},[N,Y,r,s,p,i,l,Z]),J=(0,e.useCallback)(async()=>{const k=(0,y.IF)(`collection-types/${r}/${s}/actions/unpublish`);p(ce("unpublish-pending"));try{v.current("willUnpublishEntry");const{data:B}=await V(k);return v.current("didUnpublishEntry"),i({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),p(et(N(B))),p(ce("resolved")),Promise.resolve(B)}catch(B){return p(ce("resolved")),Y(B),Promise.reject(B)}},[N,Y,s,r,p,i,V]);return o({componentsDataStructure:E,contentTypeDataStructure:b,data:C,isCreatingEntry:Q,isLoadingForData:R,onDelete:q,onPost:U,onPublish:w,onDraftRelationCheck:O,onPut:W,onUnpublish:J,status:D,redirectionLink:T})};ro.defaultProps={id:null,origin:null},ro.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};const Wl=(0,e.memo)(ro,Ce());var zl=d(41609),Me=d.n(zl),Ul=d(50361),Ge=d.n(Ul),Vl=d(36968),ie=d.n(Vl),so=d(18172),Hl=d(98601),Ql=d.n(Hl),Gl=d(45578),Tr=d.n(Gl),ao=d(38190);const Dr=(t,o,r,s)=>{const a=t.slice();return a.splice(o,1),a.splice(r,0,s),a};var Kl=d(1469),Yl=d.n(Kl),Xl=d(13218),Jl=d.n(Xl);const _l=({browserState:t,serverState:o},r,s)=>{const a=o,l=t,i=(u,m)=>x()(u,["attributes",m,"type"],""),c=(u,m)=>x()(u,["attributes",...m],""),g=(u,m,f,p)=>Object.keys(u).reduce((E,b)=>{const C=p?`${p}.${b}`:b,R=i(f,b),D=x()(u,b),T=x()(m,b),L=c(f,[b,"component"]),I=c(f,[b,"repeatable"]);let v;switch(R){case"json":v=JSON.parse(D);break;case"time":{v=D,D&&D.split(":").length<3&&(v=`${D}:00`);break}case"media":c(f,[b,"multiple"])===!0?v=D?D.filter(M=>!(M instanceof File)):null:v=x()(D,0)instanceof File?null:x()(D,"id",null);break;case"component":I?v=D&&D.map((M,S)=>g(M,(T??[])[S],s[L],`${C}.${S}`)):v=D&&g(D,T,s[L],C);break;case"relation":{const M=yr(a,l)(C).join(".");let S=x()(a,M,[]);const Z=D.reduce((A,Q,P,K)=>{const N=S.find(q=>q.id===Q.id),Y=K[P+1];if(!N||N.__temp_key__!==Q.__temp_key__){const q=Y?{before:Y.id}:{end:!0};return[...A,{id:Q.id,position:q}]}return A},[]);v={disconnect:S.reduce((A,Q)=>D.find(P=>P.id===Q.id)?A:[...A,{id:Q.id}],[]),connect:Z.reverse()};break}case"dynamiczone":v=D.map((M,S)=>g(M,(T??[])[S],s[M.__component],`${C}.${S}`));break;default:v=ec(D,"id")}return E[b]=v,E},{});return g(t,o,r,"")},ec=(t,o)=>Yl()(t)?t.map(r=>r[o]?r[o]:r):Jl()(t)?t[o]:t,tc=_l;var nc=d(51584),oc=d.n(nc),rc=d(7654),sc=d.n(rc),ac=d(14841),Et=d.n(ac),pe=d(87561);function $t(t){return["integer","biginteger","decimal","float","number"].includes(t)}pe.kM(pe.nK,"defined",function(){return this.test("defined",h.I0.required,t=>t!==void 0)}),pe.kM(pe.IX,"notEmptyMin",function(t){return this.test("notEmptyMin",h.I0.min,o=>Me()(o)?!0:o.length>=t)}),pe.kM(pe.Z_,"isInferior",function(t,o){return this.test("isInferior",t,function(r){return!r||Number.isNaN(Et()(r))?!0:Et()(o)>=Et()(r)})}),pe.kM(pe.Z_,"isSuperior",function(t,o){return this.test("isSuperior",t,function(r){return!r||Number.isNaN(Et()(r))?!0:Et()(r)>=Et()(o)})});const ic=t=>x()(t,["attributes"],{}),io=(t,{components:o},r={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=ic(t);return pe.Ry().shape(Object.keys(s).reduce((a,l)=>{const i=s[l];if(i.type!=="relation"&&i.type!=="component"&&i.type!=="dynamiczone"){const c=lc(i.type,i,r);a[l]=c}if(i.type==="relation"&&(a[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(i.relationType)?pe.Ry().nullable():pe.IX().nullable()),i.type==="component"){const c=io(o[i.component],{components:o},{...r,isFromComponent:!0});if(i.repeatable===!0){const{min:u,max:m,required:f}=i;let p=pe.Vo(E=>{let b=pe.IX().of(c);return u?f?b=b.min(u,h.I0.min):f!==!0&&Me()(E)?b=b.nullable():b=b.min(u,h.I0.min):f&&!r.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return a[l]=p,a}const g=pe.Vo(u=>u!==void 0?i.required===!0&&!r.isDraft?c.defined():c.nullable():i.required===!0?pe.Ry().defined():pe.Ry().nullable());return a[l]=g,a}if(i.type==="dynamiczone"){let c=pe.IX().of(pe.Vo(({__component:m})=>io(o[m],{components:o},{...r,isFromComponent:!0})));const{max:g,min:u}=i;u?i.required?c=c.test("min",h.I0.min,m=>r.isCreatingEntry?m&&m.length>=u:m===void 0?!0:m!==null&&m.length>=u).test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(u):i.required&&!r.isDraft&&(c=c.test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),g&&(c=c.max(g,h.I0.max)),a[l]=c}return a},{}))},lc=(t,o,r)=>{let s=pe.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(t)&&(s=pe.Z_()),t==="json"&&(s=pe.nK(h.I0.json).test("isJSON",h.I0.json,a=>{if(!a||!a.length)return!0;try{return JSON.parse(a),!0}catch{return!1}}).nullable().test("required",h.I0.required,a=>!(o.required&&(!a||!a.length)))),t==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(t)&&(s=pe.Rx().transform(a=>sc()(a)?void 0:a).typeError()),t==="biginteger"&&(s=pe.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(t)&&(s=pe.hT()),Object.keys(o).forEach(a=>{const l=o[a];if(l||!oc()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(a){case"required":{r.isDraft||(t==="password"&&r.isCreatingEntry&&(s=s.required(h.I0.required)),t!=="password"&&(r.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,i=>i===void 0&&!r.isFromComponent?!0:$t(t)?i===0?!0:!!i:t==="boolean"?i!=null:t==="date"||t==="datetime"?typeof i=="string"?!Me()(i):!Me()(i?.toString()):!Me()(i))));break}case"max":{t==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{t==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{r.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!o.required});break;case"lowercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().uppercase());break;case"positive":$t(t)&&(s=s.positive());break;case"negative":$t(t)&&(s=s.negative());break;default:s=s.nullable()}}),s},Ir=io,tn=(t,o=()=>!1,r=void 0)=>{const s=(a,l,{ignoreFalseyValues:i=!1,path:c=[],parent:g=l}={})=>Object.entries(l).reduce((u,[m,f])=>{if(i&&(u==null||u[m]===void 0||u[m]===null))return u;if(o(f,{path:[...c,m],parent:g})&&(u[m]=typeof r=="function"?r(u[m],{path:[...c,m],parent:u}):r),f.type==="component"){const p=t[f.component].attributes;!f.repeatable&&u[m]&&typeof u[m]=="object"?u[m]=s(u[m],p,{ignoreFalseyValues:i,path:[...c,m],parent:l[m]}):f.repeatable&&Array.isArray(u[m])&&(u[m]=u[m].map((E,b)=>s(E,p,{ignoreFalseyValues:i,path:[...c,m,b],parent:l[m]})))}else f.type==="dynamiczone"&&Array.isArray(u[m])&&(u[m]=u[m].map((p,E)=>{const b=t[p.__component].attributes;return s(p,b,{ignoreFalseyValues:i,path:[...c,m,E],parent:l[m]})}));return u},{...a});return s},cc={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}},dc=(t,o)=>(0,so.ZP)(t,r=>{switch(o.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:a}=o,l={...t.componentsDataStructure[s.uid]},c=tn(a,g=>g.type==="relation",[])(l,s.attributes);ie()(r,["modifiedData",...o.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:a,componentLayoutData:l,shouldCheckErrors:i}=o;i&&(r.shouldCheckErrors=!t.shouldCheckErrors),o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(r.modifiedDZName=s[0]);const c=x()(t,["modifiedData",...s],[]),g=o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...t.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:(0,y.Uo)(c)+1}:{...t.componentsDataStructure[l.uid],__temp_key__:(0,y.Uo)(c)+1},m=tn(a,p=>p.type==="relation",[])(g,l.attributes),f=Array.isArray(c)?[...c,m]:[m];ie()(r,["modifiedData",...s],f);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:a,value:l}=o,i=x()(t,s),c=x()(t,a),g=i?l.filter(f=>!i.some(p=>p.id===f.id)):l,u=(0,ao.zJ)(null,c[0]?.__temp_key__,g.length),m=g.map((f,p)=>({...f,__temp_key__:u[p]}));ie()(r,s,Tr()([...m,...i],"id")),ie()(r,a,Tr()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...o.keys],{value:a,toOneRelation:l}=o;if(l)ie()(r,s,[a]);else{const i=x()(t,s),[c]=(0,ao.zJ)(i.at(-1)?.__temp_key__,null,1),g=[...i,{...a,__temp_key__:c}];ie()(r,s,g)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...o.keys],{id:a}=o,i=x()(t,[...s]).filter(c=>c.id!==a);ie()(r,s,i);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:a,keys:l}=o,i=["modifiedData",...l],c=x()(t,[...i]),g=c[s],u=[...c];if(o.type==="REORDER_RELATION"){const m=s>a?c[a-1]?.__temp_key__:c[a]?.__temp_key__,f=s>a?c[a]?.__temp_key__:c[a+1]?.__temp_key__,[p]=(0,ao.zJ)(m,f,1);u.splice(s,1),u.splice(a,0,{...g,__temp_key__:p})}else u.splice(s,1),u.splice(a,0,g);ie()(r,i,u);break}case"INIT_FORM":{const{initialValues:s,components:a={},attributes:l={},setModifiedDataOnly:i}=o,c=Ge()(s),u=tn(a,p=>p.type==="relation",(p,{path:E})=>t.modifiedData?.id===c.id&&x()(t.modifiedData,E)?x()(t.modifiedData,E):[])(c,l),f=tn(a,p=>p.type==="dynamiczone"||p.type==="component"&&!p.repeatable,p=>Array.isArray(p)?p.map((E,b)=>({...E,__temp_key__:b})):{...p,__temp_key__:0})(u,l,{ignoreFalseyValues:!0});i||(r.initialData=f),r.modifiedData=f,r.formErrors={},r.modifiedDZName=null,r.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:a,shouldCheckErrors:l}=o;l&&(r.shouldCheckErrors=!t.shouldCheckErrors);const i=t.modifiedData[a],c=o.type==="MOVE_COMPONENT_UP"?s-1:s+1,g=t.modifiedData[a][s],u=Dr(i,s,c,g);ie()(r,["modifiedData",o.dynamicZoneName],u);break}case"MOVE_FIELD":{const s=x()(t,["modifiedData",...o.keys],[]).slice(),a=x()(t,["modifiedData",...o.keys,o.dragIndex]),l=Dr(s,o.dragIndex,o.overIndex,a);ie()(r,["modifiedData",...o.keys],l);break}case"ON_CHANGE":{const[s]=o.keys;if(o.shouldSetInitialValue&&ie()(r,["initialData",...o.keys],o.value),o.keys.length===2&&x()(t,["modifiedData",s])===null){ie()(r,["modifiedData",s],{[o.keys[1]]:o.value});break}ie()(r,["modifiedData",...o.keys],o.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{o.shouldCheckErrors&&(r.shouldCheckErrors=!t.shouldCheckErrors),r.modifiedData[o.dynamicZoneName].splice(o.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...o.keys];ie()(r,s,null);break}case"REMOVE_PASSWORD_FIELD":{Ql()(r,["modifiedData",...o.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=o.keys.length-1,a=["modifiedData",...Ft()(o.keys,s)];Object.keys(t.formErrors).length>0&&(r.shouldCheckErrors=!t.shouldCheckErrors);const i=x()(t,a).slice();i.splice(parseInt(o.keys[s],10),1),ie()(r,a,i);break}case"SET_DEFAULT_DATA_STRUCTURES":{r.componentsDataStructure=o.componentsDataStructure,r.contentTypeDataStructure=o.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{r.modifiedDZName=null,r.formErrors=o.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(t.formErrors).length>0&&(r.shouldCheckErrors=!t.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...o.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...t.publishConfirmation,show:!1};break}default:return r}}),lo=({allLayoutData:t,allowedActions:{canRead:o,canUpdate:r},children:s,componentsDataStructure:a,contentTypeDataStructure:l,createActionAllowedFields:i,from:c,initialValues:g,isCreatingEntry:u,isLoadingForData:m,isSingleType:f,onPost:p,onPublish:E,onDraftRelationCheck:b,onPut:C,onUnpublish:R,readActionAllowedFields:D,redirectToPreviousPage:T,slug:L,status:I,updateActionAllowedFields:v})=>{const[M,S]=(0,e.useReducer)(dc,cc),{formErrors:Z,initialData:V,modifiedData:A,modifiedDZName:Q,shouldCheckErrors:P,publishConfirmation:K}=M,{setModifiedDataOnly:N}=(0,_.v9)(oo),Y=(0,_.I0)(),q=(0,h.lm)(),{lockApp:U,unlockApp:O}=(0,h.o1)(),w=x()(t,["contentType"],{}),W=(0,e.useMemo)(()=>x()(w,["options","draftAndPublish"],!1),[w]),J=(0,e.useMemo)(()=>W&&!V.publishedAt,[W,V.publishedAt]),{trackUsage:k}=(0,h.rS)(),{formatMessage:B}=(0,H.Z)(),te=(0,e.useRef)(k),X=(0,e.useMemo)(()=>m||u?!1:o===!1&&r===!1,[m,u,o,r]);(0,e.useEffect)(()=>{I==="resolved"?O():U()},[U,O,I]),(0,e.useEffect)(()=>{m||qe()},[P]),(0,e.useEffect)(()=>{const oe=Object.keys(Z);if(oe.length>0){const ee=oe[0],le=document.getElementById(ee);le&&le.focus()}},[Z]),(0,e.useEffect)(()=>{X&&q({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}})},[X,q]),(0,e.useEffect)(()=>{S({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:a,contentTypeDataStructure:l})},[a,l]);const{components:se}=t,z=(0,de.zH)(g);(0,e.useEffect)(()=>{g&&w?.attributes&&!Ce()(z,g)&&(S({type:"INIT_FORM",initialValues:g,components:se,attributes:w.attributes,setModifiedDataOnly:N}),N&&Y(jl()))},[g,w,se,N,Y,z]);const ae=(0,e.useCallback)(oe=>(ee,le,je,mt=!1)=>{te.current("didAddComponentToDynamicZone"),S({type:oe,keys:ee.split("."),componentLayoutData:le,allComponents:je,shouldCheckErrors:mt})},[]),Re=ae("ADD_COMPONENT_TO_DYNAMIC_ZONE"),Be=(0,e.useCallback)((oe,ee,le)=>{S({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:oe.split("."),componentLayoutData:ee,allComponents:le})},[]),ct=(0,e.useCallback)(({name:oe,value:ee,toOneRelation:le})=>{S({type:"CONNECT_RELATION",keys:oe.split("."),value:ee,toOneRelation:le})},[]),dt=(0,e.useCallback)(({target:{initialDataPath:oe,modifiedDataPath:ee,value:le}})=>{S({type:"LOAD_RELATION",modifiedDataPath:ee,initialDataPath:oe,value:le})},[]),ut=ae("ADD_REPEATABLE_COMPONENT_TO_FIELD"),xe=(0,e.useMemo)(()=>{const oe={isCreatingEntry:u,isDraft:J,isFromComponent:!1};return Ir(w,{components:t.components||{}},oe)},[t.components,w,u,J]),qe=(0,e.useCallback)(async(oe={})=>{let ee={};const le=Ge()(A);Me()(le)||ie()(le,oe.path,oe.value);try{await xe.validate(le,{abortEarly:!1})}catch(je){ee=(0,h.CJ)(je),Q&&(ee=Object.keys(ee).reduce((mt,Wo)=>(Wo.split(".")[0]!==Q&&(mt[Wo]=ee[Wo]),mt),{}))}S({type:"SET_FORM_ERRORS",errors:ee})},[Q,A,xe]),Wt=(0,e.useCallback)(({target:{name:oe,value:ee,type:le}},je=!1)=>{let mt=ee;if(["text","textarea","string","email","uid","select","select-one","number"].includes(le)&&!ee&&ee!==0&&(mt=null),le==="password"&&!ee){S({type:"REMOVE_PASSWORD_FIELD",keys:oe.split(".")});return}S({type:"ON_CHANGE",keys:oe.split("."),value:mt,shouldSetInitialValue:je})},[]),tt=(0,e.useCallback)((oe,ee)=>tc({browserState:oe,serverState:ee},w,t.components),[t.components,w]),ne=(0,e.useMemo)(()=>W?J?{status:"draft"}:{}:{},[W,J]),ge=(0,e.useCallback)(async oe=>(oe.preventDefault(),S({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Ne=(0,e.useCallback)(async oe=>{oe.preventDefault();let ee={};try{await xe.validate(A,{abortEarly:!1})}catch(le){ee=(0,h.CJ)(le)}try{if(Me()(ee)){const le=tt(A,V);u?await p(le,ne):await C(le,ne)}}catch(le){ee={...ee,...(0,h.nn)(le,{getTrad:y.OB})}}S({type:"SET_FORM_ERRORS",errors:ee})},[tt,u,A,V,p,C,ne,xe]),jo=(0,e.useCallback)(async()=>{const oe=Ir(w,{components:x()(t,"components",{})},{isCreatingEntry:u,isDraft:!1,isFromComponent:!1}),ee=await b();if(!K.show&&ee>0){S({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:ee}});return}S({type:"RESET_PUBLISH_CONFIRMATION"});let le={};try{await oe.validate(A,{abortEarly:!1})}catch(je){le=(0,h.CJ)(je)}try{Me()(le)&&await E()}catch(je){le={...le,...(0,h.nn)(je,{getTrad:y.OB})}}S({type:"SET_FORM_ERRORS",errors:le})},[t,w,u,A,K.show,E,b]),nt=(0,e.useCallback)(oe=>{const ee=Object.keys(Z).some(je=>je.split(".")[0]===oe);return!Me()(Z)&&ee},[Z]),vm=(0,e.useCallback)((oe,ee)=>{te.current("changeComponentsOrder"),S({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:oe,currentIndex:ee,shouldCheckErrors:nt(oe)})},[nt]),Rm=(0,e.useCallback)((oe,ee)=>{te.current("changeComponentsOrder"),S({type:"MOVE_COMPONENT_UP",dynamicZoneName:oe,currentIndex:ee,shouldCheckErrors:nt(oe)})},[nt]),Mm=(0,e.useCallback)(({name:oe,newIndex:ee,currentIndex:le})=>{S({type:"MOVE_COMPONENT_FIELD",keys:oe.split("."),newIndex:ee,oldIndex:le})},[]),Tm=(0,e.useCallback)(({name:oe,id:ee})=>{S({type:"DISCONNECT_RELATION",keys:oe.split("."),id:ee})},[]),Dm=(0,e.useCallback)(({name:oe,oldIndex:ee,newIndex:le})=>{S({type:"REORDER_RELATION",keys:oe.split("."),oldIndex:ee,newIndex:le})},[]),Im=(0,e.useCallback)((oe,ee)=>{te.current("removeComponentFromDynamicZone"),S({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:oe,index:ee,shouldCheckErrors:nt(oe)})},[nt]),km=(0,e.useCallback)((oe,ee)=>{S({type:"REMOVE_COMPONENT_FROM_FIELD",keys:oe.split("."),componentUid:ee})},[]),Om=(0,e.useCallback)((oe,ee)=>{S({type:"REMOVE_REPEATABLE_FIELD",keys:oe.split("."),componentUid:ee})},[]),xm=(0,e.useCallback)(()=>{S({type:"TRIGGER_FORM_VALIDATION"})},[]);return X?e.createElement(re.l_,{to:c}):A?e.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:Re,addNonRepeatableComponentToField:Be,addRepeatableComponentToField:ut,allLayoutData:t,checkFormErrors:qe,createActionAllowedFields:i,formErrors:Z,hasDraftAndPublish:W,initialData:V,isCreatingEntry:u,isSingleType:f,shouldNotRunValidations:J,status:I,layout:w,modifiedData:A,moveComponentField:Mm,moveComponentDown:vm,moveComponentUp:Rm,onChange:Wt,onPublish:jo,onUnpublish:R,readActionAllowedFields:D,redirectToPreviousPage:T,removeComponentFromDynamicZone:Im,removeComponentFromField:km,removeRepeatableField:Om,relationConnect:ct,relationDisconnect:Tm,relationLoad:dt,relationReorder:Dm,slug:L,triggerFormValidation:xm,updateActionAllowedFields:v,onPublishPromptDismissal:ge,publishConfirmation:K}},m||!u&&!V.id?e.createElement(ve.o,{"aria-busy":"true"},e.createElement(h.dO,null)):e.createElement(e.Fragment,null,e.createElement(re.NL,{when:!Ce()(A,V),message:B({id:"global.prompt.unsaved"})}),e.createElement("form",{noValidate:!0,onSubmit:Ne},s))):null};lo.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},lo.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};const uc=lo,it=t=>(0,y.IF)(`single-types/${t}`);var nn=d(80129);const mc=t=>Object.values(t||{}).reduce((o,r)=>Object.assign(o,r),{}),kr=(t={})=>{const{plugins:o,_q:r,...s}={...t,...mc(t.plugins)};return r&&ie()(s,"_q",encodeURIComponent(r)),`${(0,nn.stringify)(s,{encode:!1,addQueryPrefix:!0})}`},Or=({allLayoutData:t,children:o,slug:r})=>{const s=(0,st.useQueryClient)(),{trackUsage:a}=(0,h.rS)(),{push:l}=(0,re.k6)(),{setCurrentStep:i}=(0,h.c1)(),c=(0,e.useRef)(a),[g,u]=(0,e.useState)(!0),[{query:m,rawQuery:f}]=(0,h.Kx)(),p=kr(m),E=(0,h.lm)(),b=(0,_.I0)(),{formatAPIError:C}=(0,h.So)(y.OB),R=(0,h.kY)(),{post:D,put:T,del:L}=R,{componentsDataStructure:I,contentTypeDataStructure:v,data:M,isLoading:S,status:Z}=(0,_.v9)(oo),V=(0,e.useCallback)(U=>{const O=(0,y.kc)(U,t.contentType,t.components);return(0,h.dU)(O,t.contentType,t.components)},[t]);(0,e.useEffect)(()=>()=>{b(Rr())},[b]),(0,e.useEffect)(()=>{const U=Object.keys(t.components).reduce((W,J)=>{const k=(0,y.Di)(x()(t,["components",J,"attributes"],{}),t.components);return W[J]=(0,h.dU)(k,t.components[J],t.components),W},{}),O=(0,y.Di)(t.contentType.attributes,t.components),w=(0,h.dU)(O,t.contentType,t.components);b(Mr(U,w))},[t,b]),(0,e.useEffect)(()=>{const O=Ue().CancelToken.source();return(async W=>{b(en()),u(!0);try{const{data:J}=await R.get(it(`${r}${p}`),{cancelToken:W.token});b(to(V(J))),u(!1)}catch(J){if(Ue().isCancel(J))return;const k=x()(J,"response.status",null);k===404&&b(no(f,!0)),k===403&&(E({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),l("/"))}})(O),()=>O.cancel("Operation canceled by the user.")},[R,V,l,r,b,p,f,E]);const A=(0,e.useCallback)(U=>{E({type:"warning",message:C(U)})},[E,C]),Q=(0,e.useCallback)(async U=>{try{c.current("willDeleteEntry",U);const{data:O}=await L(it(`${r}${p}`));return E({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),c.current("didDeleteEntry",U),u(!0),b(no(f,!0)),Promise.resolve(O)}catch(O){return c.current("didNotDeleteEntry",{error:O,...U}),A(O),Promise.reject(O)}},[L,r,A,E,p,b,f]),P=(0,e.useCallback)(async(U,O)=>{const w=it(`${r}${f}`);try{b(ce("submit-pending"));const{data:W}=await T(w,U);return c.current("didCreateEntry",O),E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),i("contentManager.success"),s.invalidateQueries(["relation"]),b(et(V(W))),u(!1),b(ce("resolved")),Promise.resolve(W)}catch(W){return c.current("didNotCreateEntry",{error:W,trackerProperty:O}),A(W),b(ce("resolved")),Promise.reject(W)}},[T,V,A,r,b,f,E,i,s]),K=(0,e.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const U=it(`${r}/actions/numberOfDraftRelations`);b(ce("draft-relation-check-pending"));const O=await R.get(U);return c.current("didCheckDraftRelations"),b(ce("resolved")),O.data.data}catch(U){return A(U),b(ce("resolved")),Promise.reject(U)}},[R,A,r,b]),N=(0,e.useCallback)(async()=>{try{c.current("willPublishEntry");const U=it(`${r}/actions/publish${p}`);b(ce("publish-pending"));const{data:O}=await D(U);return c.current("didPublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),b(et(V(O))),b(ce("resolved")),Promise.resolve(O)}catch(U){return A(U),b(ce("resolved")),Promise.reject(U)}},[D,V,A,r,p,b,E]),Y=(0,e.useCallback)(async(U,O)=>{const w=it(`${r}${f}`);try{c.current("willEditEntry",O),b(ce("submit-pending"));const{data:W}=await T(w,U);return E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c.current("didEditEntry",{trackerProperty:O}),s.invalidateQueries(["relation"]),b(et(V(W))),b(ce("resolved")),Promise.resolve(W)}catch(W){return A(W),c.current("didNotEditEntry",{error:W,trackerProperty:O}),b(ce("resolved")),Promise.reject(W)}},[T,V,A,r,b,f,E,s]),q=(0,e.useCallback)(async()=>{const U=it(`${r}/actions/unpublish${p}`);b(ce("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:O}=await D(U);c.current("didUnpublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),b(et(V(O))),b(ce("resolved"))}catch(O){b(ce("resolved")),A(O)}},[D,V,E,A,r,b,p]);return o({componentsDataStructure:I,contentTypeDataStructure:v,data:M,isCreatingEntry:g,isLoadingForData:S,onDelete:Q,onPost:P,onDraftRelationCheck:K,onPublish:N,onPut:Y,onUnpublish:q,redirectionLink:"/",status:Z})};Or.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};const pc=(0,e.memo)(Or);var gc=d(71818);function fc(t,o){return r=>{const s=o();return e.createElement(t,{...r,...s})}}const hc=fc;function yc(){const{initialData:t,hasDraftAndPublish:o}=(0,h.Wq)(),r=t.publishedAt!==void 0&&t.publishedAt!==null;return{hasDraftAndPublish:o,isPublished:r}}const bc=yc,Ec=(0,j.ZP)(gc.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:t,$bulletColor:o})=>t.colors[o]};
  }
`,xr=({hasDraftAndPublish:t,isPublished:o})=>{const{formatMessage:r}=(0,H.Z)();if(!t)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},a=o?s.published:s.draft;return e.createElement($.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...a.box},e.createElement($.x,{as:F.k},e.createElement(Ec,{$bulletColor:a.bulletColor}),e.createElement($.x,{paddingLeft:3},e.createElement(G.Z,{textColor:a.textColor},r({id:(0,y.OB)("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),e.createElement(G.Z,{fontWeight:"bold",textColor:a.textColor},o&&r({id:(0,y.OB)("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!o&&r({id:(0,y.OB)("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};xr.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};const Cc=hc(xr,bc);var Ct=d(85018),on=d(67109),rn=d(47149),sn=d(47824),an=d(98426);function vc(t,o){return r=>{const s=o();return e.createElement(t,{...r,...s})}}const Rc=vc;function Mc(){const{initialData:t,isCreatingEntry:o,isSingleType:r,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:g,publishConfirmation:u,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:t,isCreatingEntry:o,isSingleType:r,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:g,publishConfirmation:u,onPublishPromptDismissal:m}}const Tc=Mc,Pr=(0,j.ZP)(F.k)`
  text-align: center;
`,wr=({allowedActions:{canUpdate:t,canCreate:o,canPublish:r},initialData:s,isCreatingEntry:a,isSingleType:l,hasDraftAndPublish:i,layout:c,modifiedData:g,onPublish:u,onUnpublish:m,status:f,publishConfirmation:{show:p,draftCount:E},onPublishPromptDismissal:b})=>{const{goBack:C}=(0,re.k6)(),[R,D]=(0,e.useState)(!1),{formatMessage:T}=(0,H.Z)(),L=x()(c,["settings","mainField"],"id"),I=x()(c,["info","displayName"],"NOT FOUND"),v=!Ce()(s,g)||a&&!Me()(g);let S=T({id:(0,y.OB)("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!a&&!l&&(S=s[L]||I),l&&(S=I);let Z=null;if(a&&o&&(Z=e.createElement(F.k,{gap:2},i&&e.createElement(me.z,{disabled:!0,startIcon:e.createElement(Ct.Z,null),variant:"secondary"},T({id:"app.utils.publish",defaultMessage:"Publish"})),e.createElement(me.z,{disabled:!v,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"})))),!a&&t){const P=i&&r,K=!Me()(s.publishedAt),N=K?f==="unpublish-pending":f==="publish-pending",Y=K?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},q=K?()=>D(!0):()=>u();Z=e.createElement(F.k,null,P&&e.createElement(me.z,{disabled:v,loading:N,onClick:q,startIcon:e.createElement(Ct.Z,null),variant:"secondary"},T(Y)),e.createElement($.x,{paddingLeft:P?2:0},e.createElement(me.z,{disabled:!v,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"}))))}const V=()=>D(P=>!P),A=()=>{V(),m()},Q=`${T({id:(0,y.OB)("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return e.createElement(e.Fragment,null,e.createElement(fe.T,{title:S.toString(),primaryAction:Z,subtitle:Q,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),onClick:P=>{P.preventDefault(),C()},to:"/"},T({id:"global.back",defaultMessage:"Back"}))}),e.createElement(rn.V,{onClose:V,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:R},e.createElement(sn.a,{icon:e.createElement(Lt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>e.createElement("br",null)}))),e.createElement(F.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:V,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"danger-light",onClick:A},T({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),e.createElement(rn.V,{onClose:b,title:T({id:(0,y.OB)("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:p},e.createElement(sn.a,{icon:e.createElement(Lt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Pr,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},E,T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:P=>e.createElement(G.Z,{fontWeight:"bold"},P),count:E}))),e.createElement(Pr,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:b,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"success",onClick:u},T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};wr.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const Dc=(0,e.memo)(wr,Ce()),Ic=Rc(Dc,Tc),kc=t=>{if(!t.layouts)return[];const o=t.layouts.edit,r=t.attributes,s=i=>x()(r,[i,"type"],"");let a=0;const l=[];return o.forEach(i=>{const c=i.some(({name:g})=>s(g)==="dynamiczone");l[a]||(l[a]=[]),c?(a=a===0&&Me()(l[0])?0:a+1,l[a]||(l[a]=[]),l[a].push(i),a+=1):l[a].push(i)}),l.filter(i=>i.length>0)};var Oc=d(44908),xc=d.n(Oc),Pc=d(94654),Fr=d.n(Pc);const wc=(t,o)=>{const r=s=>{const a=(0,h.ZT)(t,[{action:`plugin::content-manager.explorer.${s}`,subject:o}]);return xc()(Fr()(a,"properties.fields"))};return{createActionAllowedFields:r("create"),readActionAllowedFields:r("read"),updateActionAllowedFields:r("update")}},Fc=t=>{if(!t)return[];const r=[...t.contentType.layouts.edit,...Object.values(t.components).flatMap(a=>a.layouts.edit)].flat().filter(a=>a.fieldSchema.customField).map(a=>a.fieldSchema.customField);return[...new Set(r)]};function Lc(t,o){return r=>{const s=o();return e.createElement(t,{...r,...s})}}const Sc=Lc;function Ac(){const{hasDraftAndPublish:t,modifiedData:o}=(0,h.Wq)();let r={};return t&&(r=Me()(o.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:t,trackerProperty:r}}const $c=Ac,Lr=({onDelete:t,trackerProperty:o})=>{const[r,s]=(0,e.useState)(!1),[a,l]=(0,e.useState)(!1),{formatMessage:i}=(0,H.Z)(),{formatAPIError:c}=(0,h.So)(y.OB),g=(0,h.lm)(),u=()=>s(f=>!f),m=async()=>{try{l(!0),await t(o),l(!1),u()}catch(f){l(!1),u(),g({type:"warning",message:c(f)})}};return e.createElement(e.Fragment,null,e.createElement(me.z,{onClick:u,size:"S",startIcon:e.createElement(Qe.Z,null),variant:"danger-light"},i({id:(0,y.OB)("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),e.createElement(h.QH,{isConfirmButtonLoading:a,isOpen:r,onConfirm:m,onToggleDialog:u}))};Lr.propTypes={onDelete:n().func.isRequired,trackerProperty:n().object.isRequired};const Zc=(0,e.memo)(Lr,Ce()),Bc=Sc(Zc,$c),co=({columns:t,customFieldInputs:o})=>e.createElement(De.r,{gap:4},t.map(({fieldSchema:r,labelAction:s,metadatas:a,name:l,size:i,queryInfos:c})=>{if(r.type==="component"){const{component:u,max:m,min:f,repeatable:p=!1,required:E=!1}=r;return e.createElement(ue.P,{col:i,s:12,xs:12,key:u},e.createElement(Yt,{componentUid:u,labelAction:s,isRepeatable:p,intlLabel:{id:a.label,defaultMessage:a.label},max:m,min:f,name:l,required:E}))}return e.createElement(ue.P,{col:i,key:l,s:12,xs:12},e.createElement(Nn,{size:i,fieldSchema:r,keys:l,labelAction:s,metadatas:a,queryInfos:c,customFieldInputs:o}))}));co.defaultProps={customFieldInputs:{}},co.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};const qc=co;var uo=d(20573);const mo=t=>t["content-manager_editViewLayoutManager"].currentLayout,Nc=(0,uo.P1)(mo,t=>kc(t?.contentType??{})),jc=(0,uo.P1)(mo,t=>Fc(t));var Wc=function(){return window&&window.strapi&&window.strapi.isEE?d(18274).Z:d(13164).Z}(),Sr=ke.Z.contentManager,zc=[{action:"plugin::content-type-builder.read",subject:null}],po=function(o){var r=o.allowedActions,s=o.isSingleType,a=o.goBack,l=o.slug,i=o.id,c=o.origin,g=o.userPermissions,u=(0,h.rS)(),m=u.trackUsage,f=(0,H.Z)(),p=f.formatMessage,E=(0,_.v9)(function(P){return{layout:mo(P),formattedContentTypeLayout:Nc(P),customFieldUids:jc(P)}}),b=E.layout,C=E.formattedContentTypeLayout,R=E.customFieldUids,D=jn(R),T=D.isLazyLoading,L=D.lazyComponentStore,I=wc(g,l),v=I.createActionAllowedFields,M=I.readActionAllowedFields,S=I.updateActionAllowedFields,Z=s?Sr.singleTypesConfigurations:Sr.collectionTypesConfigurations,V="/content-manager/".concat(s?"singleType":"collectionType","/").concat(l,"/configurations/edit"),A=s?pc:Wl,Q=function(K){return K.every(function(N){return N.every(function(Y){return Y.fieldSchema.type==="dynamiczone"})})};return T?e.createElement(h.dO,null):e.createElement(A,{allLayoutData:b,slug:l,id:i,origin:c},function(P){var K=P.componentsDataStructure,N=P.contentTypeDataStructure,Y=P.data,q=P.isCreatingEntry,U=P.isLoadingForData,O=P.onDelete,w=P.onPost,W=P.onPublish,J=P.onDraftRelationCheck,k=P.onPut,B=P.onUnpublish,te=P.redirectionLink,X=P.status;return e.createElement(uc,{allowedActions:r,allLayoutData:b,createActionAllowedFields:v,componentsDataStructure:K,contentTypeDataStructure:N,from:te,initialValues:Y,isCreatingEntry:q,isLoadingForData:U,isSingleType:s,onPost:w,onPublish:W,onDraftRelationCheck:J,onPut:k,onUnpublish:B,readActionAllowedFields:M,redirectToPreviousPage:a,slug:l,status:X,updateActionAllowedFields:S},e.createElement(ve.o,{"aria-busy":X!=="resolved"},e.createElement(Ic,{allowedActions:r}),e.createElement(Ze.D,null,e.createElement(De.r,{gap:4},e.createElement(ue.P,{col:9,s:12},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},C.map(function(se,z){if(Q(se)){var ae=se[0][0],Re=ae.name,Be=ae.fieldSchema,ct=ae.metadatas,dt=ae.labelAction;return e.createElement($.x,{key:z},e.createElement(De.r,{gap:4},e.createElement(ue.P,{col:12,s:12,xs:12},e.createElement(ql,{name:Re,fieldSchema:Be,labelAction:dt,metadatas:ct}))))}return e.createElement($.x,{key:z,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},se.map(function(ut,xe){return e.createElement(qc,{columns:ut,customFieldInputs:L,key:xe})})))}))),e.createElement(ue.P,{col:3,s:12},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Cc,null),e.createElement($.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},e.createElement(Wc,null),e.createElement(Vt,{area:"contentManager.editView.informations"})),e.createElement($.x,{as:"aside","aria-labelledby":"links"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Vt,{area:"contentManager.editView.right-links",slug:l}),l!=="strapi::administrator"&&e.createElement(h.jW,{permissions:zc},e.createElement(h.Qj,{onClick:function(){m("willEditEditLayout")},size:"S",startIcon:e.createElement(We.Z,null),style:{width:"100%"},to:"/plugins/content-type-builder/content-types/".concat(l),variant:"secondary"},p({id:(0,y.OB)("link-to-ctb"),defaultMessage:"Edit the model"}))),e.createElement(h.jW,{permissions:Z},e.createElement(h.Qj,{size:"S",startIcon:e.createElement(He.Z,null),style:{width:"100%"},to:V,variant:"secondary"},p({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),r.canDelete&&!q&&e.createElement(Bc,{onDelete:O})))))))))})};po.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},po.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};const Uc=(0,e.memo)(po),go=t=>{const o=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,t.userPermissions);return r?e.createElement(h.dO,null):e.createElement(Uc,{...t,allowedActions:s})};go.defaultProps={permissions:[]},go.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};const Vc=(0,e.memo)(go,Ce()),Ar=({layout:t,...o})=>{const r=(0,_.v9)(ft.Z),s=(0,_.I0)(),[{query:a}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),i=(0,de.r5)(a,o.slug,"editView");return(0,e.useEffect)(()=>{const c=l($e.Eo,{layout:t,query:a});return s(kt(c.layout,a)),()=>{s(It())}},[t,s,a,l]),!r||!i?e.createElement(h.dO,null):e.createElement(Vc,{...o,userPermissions:i})};Ar.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};const ln=Ar;var Hc=d(11700),Zt=d.n(Hc),$r=d(70004);const fo=t=>t.reduce((o,r)=>o+r.size,0),Qc=t=>t.reduce((o,r,s)=>{const a={rowId:s,rowContent:r};return o.concat(a)},[]),vt=t=>t.reduce((o,r)=>{let s=[];const a=r.rowContent.reduce((c,g)=>{const u=fo(c);return g.name==="_TEMP_"||(u+g.size<=12?c.push(g):s.push(g)),c},[]),l=o.length===0?0:Math.max.apply(Math,o.map(c=>c.rowId))+1,i=fo(a);if(i<12&&a.push({name:"_TEMP_",size:12-i}),o.push({rowId:l,rowContent:a}),s.length>0){const c=fo(s);c<12&&s.push({name:"_TEMP_",size:12-c}),o.push({rowId:l+1,rowContent:s}),s=[]}return o},[]).filter(o=>o.rowContent.length>0).filter(o=>o.rowContent.length===1?o.rowContent[0].name!=="_TEMP_":!0),Gc=t=>t.reduce((o,r)=>{const s=r.rowContent.filter(a=>a.name!=="_TEMP_");return o.concat([s])},[]),Kc=(t,o=[])=>o.reduce((r,{rowContent:s})=>{const a=s.find(l=>l.name===t)?.size??null;return a&&(r=a),r},null),Yc=(t,o,r=[])=>r.map(s=>(s.rowContent=s.rowContent.map(a=>a.name===t?{...a,size:o}:a),s)),Zr=6,ho={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}},Xc=(t=ho,o)=>(0,so.ZP)(t,r=>{const s=["modifiedData","layouts","edit"];switch(o.type){case"MOVE_ROW":{const a=x()(t,s,[]),{fromIndex:l,toIndex:i}=o;ie()(r,s,(0,y.W3)(a,l,i));break}case"ON_ADD_FIELD":{const a=Ge()(t),l=x()(a,["modifiedData","attributes",o.name],{}),i=o.fieldSizes[l?.customField]?.default??o.fieldSizes[l?.type]?.default??Zr,c=x()(a,s,[]).length,g=[...s,c-1,"rowContent"],u=x()(a,g,[]);let m=x()(a,s,[]);Array.isArray(u)?ie()(m,[c>0?c-1:0,"rowContent"],[...u,{name:o.name,size:i}]):ie()(m,[c>0?c-1:0,"rowContent"],[{name:o.name,size:i}]);const f=vt(m);ie()(r,s,f);break}case"ON_CHANGE":{ie()(r,["modifiedData",...o.keys],o.value);break}case"ON_CHANGE_META":{ie()(r,["metaForm","metadata",...o.keys],o.value);break}case"ON_CHANGE_SIZE":{ie()(r,["metaForm","size"],o.value);break}case"ON_RESET":{r.modifiedData=t.initialData;break}case"REMOVE_FIELD":{const a=x()(t,[...s,o.rowIndex,"rowContent"],[]);let l=Ge()(t);if(a.length===1||a.length===2&&x()(a,[1,"name"],"")==="_TEMP_"){const c=x()(t,s,[]);ie()(l,s,c.filter((g,u)=>o.rowIndex!==u))}else ie()(l,[...s,o.rowIndex,"rowContent"],a.filter((c,g)=>g!==o.fieldIndex));const i=vt(x()(l,s,[]));ie()(r,s,i);break}case"REORDER_DIFF_ROW":{const a=x()(t,[...s,o.dragRowIndex,"rowContent"],[]),l=x()(t,[...s,o.hoverRowIndex,"rowContent"],[]),i=x()(t,[...s,o.dragRowIndex,"rowContent",o.dragIndex],{}),c=[...l,i];let g=Ge()(t);ie()(g,[...s,o.dragRowIndex,"rowContent"],a.filter((m,f)=>o.dragIndex!==f)),ie()(g,[...s,o.hoverRowIndex,"rowContent"],(0,y.W3)(c,c.length-1,o.hoverIndex));const u=vt(x()(g,s,[]));ie()(r,s,u);break}case"REORDER_ROW":{const a=Ge()(t),l=x()(a,[...s,o.dragRowIndex,"rowContent"],[]);ie()(a,[...s,o.dragRowIndex,"rowContent"],(0,y.W3)(l,o.dragIndex,o.hoverIndex));const i=vt(x()(a,s,[]));ie()(r,s,i);break}case"SET_FIELD_TO_EDIT":{r.metaToEdit=o.name,r.metaForm={metadata:x()(t,["modifiedData","metadatas",o.name,"edit"],{}),size:Kc(o.name,t.modifiedData?.layouts?.edit)??Zr};break}case"SUBMIT_META_FORM":{ie()(r,["modifiedData","metadatas",t.metaToEdit,"edit"],t.metaForm.metadata);const a=Ge()(x()(t,s,[])),l=Yc(t.metaToEdit,t.metaForm.size,a);l.length>0&&ie()(r,s,vt(l));break}case"SUBMIT_SUCCEEDED":{r.initialData=t.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{r.metaToEdit="",r.metaForm={};break}default:return r}}),Jc=(t,o,r)=>{let s=Ge()(o);return ie()(s,["layouts","edit"],vt(Qc(o.layouts.edit))),{...t,initialData:s,modifiedData:s,componentLayouts:r}};var Ve=d(17205);const Br=e.createContext();function yo({attributes:t,buttonData:o,children:r,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:g,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...E}){return e.createElement(Br.Provider,{value:{attributes:t,buttonData:o,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:g,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...E}},r)}yo.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},yo.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};function lt(){return e.useContext(Br)}var cn=d(99168),qr=d(78114);const Nr=({componentUid:t})=>{const{componentLayouts:o}=lt(),{formatMessage:r}=(0,H.Z)(),s=x()(o,[t],{}),a=x()(s,["layouts","edit"],[]);return e.createElement($.x,{padding:3},a.map((l,i)=>e.createElement(De.r,{gap:4,key:i},l.map(c=>e.createElement(ue.P,{key:c.name,col:c.size},e.createElement($.x,{paddingTop:2},e.createElement(F.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},e.createElement(G.Z,{textColor:"neutral800"},c.name))))))),e.createElement($.x,{paddingTop:2},e.createElement(h.rU,{startIcon:e.createElement(qr.Z,null),to:`/content-manager/components/${t}/configurations/edit`},r({id:(0,Ee.Z)("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};Nr.propTypes={componentUid:n().string.isRequired};const _c=Nr;var Rt=d(73727);const ed=(0,j.ZP)(F.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:t})=>`
      background-color: ${t.colors.primary100};
      border-color: ${t.colors.primary200};

      ${G.Z} {
          color: ${t.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,jr=({components:t})=>{const{componentLayouts:o}=lt();return e.createElement(F.k,{gap:2,overflow:"scroll hidden",padding:3},t.map(r=>e.createElement(ed,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:r,padding:2,direction:"column",borderColor:"neutral200",as:Rt.rU,to:`/content-manager/components/${r}/configurations/edit`},e.createElement(_t,null),e.createElement($.x,{paddingTop:1},e.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},o?.[r]?.info?.displayName??"")))))};jr.propTypes={components:n().arrayOf(n().string).isRequired};const td=jr,Wr=(0,j.ZP)(ye.h)`
  background-color: transparent;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,bo=({attribute:t,onEditField:o,onDeleteField:r,children:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement($.x,{overflow:"hidden",width:"100%"},e.createElement(F.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},e.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),e.createElement(F.k,null,e.createElement(Wr,{label:a({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:o,icon:e.createElement(We.Z,null),noBorder:!0}),e.createElement(Wr,{label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:r,icon:e.createElement(Qe.Z,null),noBorder:!0}))),t?.type==="component"&&e.createElement(_c,{componentUid:t.component}),t?.type==="dynamiczone"&&e.createElement(td,{components:t.components}))};bo.defaultProps={attribute:void 0},bo.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};const nd=bo,od=(0,j.ZP)(F.k)`
  position: relative;
  ${({isFirst:t,isLast:o,hasHorizontalPadding:r})=>t?`
        padding-right: 4px;
      `:o?`
        padding-left: 4px;
      `:r?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:t,showLeftCarret:o,theme:r})=>t?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:o?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,rd=(0,j.ZP)(Je.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,sd=(0,j.ZP)(F.k)`
  display: ${({dragStart:t})=>t?"none":"flex"};
  opacity: ${({isDragging:t,isFullSize:o,isHidden:r})=>t&&!o?.2:t&&o||r?0:1};
`,ad=(0,j.ZP)(F.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,Eo=({attribute:t,children:o,index:r,lastIndex:s,moveItem:a,moveRow:l,name:i,onDeleteField:c,onEditField:g,rowIndex:u,size:m})=>{const[f,p]=(0,e.useState)(!1),E=i==="_TEMP_",{setIsDraggingSibling:b}=lt(),C=m===12,R=(0,e.useRef)(null),D=(0,e.useRef)(null),[{clientOffset:T,isOver:L},I]=(0,cn.useDrop)({accept:y._Q.EDIT_FIELD,hover(q,U){if(!D.current||q.size!==12)return;const O=U.getItem().index,w=r,W=U.getItem().rowIndex,J=u;if(O===w&&W===J)return;const k=D.current.getBoundingClientRect(),B=(k.bottom-k.top)/2,X=U.getClientOffset().y-k.top;W<J&&X<B||W>J&&X>B||(l(W,J),q.rowIndex=J,q.itemIndex=w)},drop(q,U){if(!D.current)return;const O=U.getItem().index,w=r,W=U.getItem().rowIndex,J=u;if(q.size===12||O===w&&W===J)return;const k=D.current.getBoundingClientRect();if(Math.abs(U.getClientOffset().x-k.left)>k.width/1.8){a(O,w+1,W,J),q.itemIndex=w+1,q.rowIndex=J;return}a(O,w,W,J),q.itemIndex=w,q.rowIndex=J},collect:q=>({canDrop:q.canDrop(),clientOffset:q.getClientOffset(),isOver:q.isOver(),isOverCurrent:q.isOver({shallow:!0}),itemType:q.getItemType()})}),[{isDragging:v,getItem:M},S,Z]=(0,cn.useDrag)({type:y._Q.EDIT_FIELD,item(){return b(!0),{index:r,labelField:o,rowIndex:u,name:i,size:m}},canDrag(){return i!=="_TEMP_"},collect:q=>({isDragging:q.isDragging(),getItem:q.getItem()}),end(){b(!1)}});(0,e.useEffect)(()=>{Z((0,wt.rX)(),{captureDraggingState:!0})},[Z]);const V={dragRef:S(R),dropRef:I(D)};let A=!1,Q=!1;if(D.current&&T){const q=D.current.getBoundingClientRect();A=L&&M.size!==12&&Math.abs(T.x-q.left)<q.width/2,Q=L&&M.size!==12&&Math.abs(T.x-q.left)>q.width/2,i==="_TEMP_"&&(A=L&&M.size!==12,Q=!1)}const P=()=>t&&C?`${74/16}rem`:`${32/16}rem`,K=r===0&&!C,N=r===s&&!C,Y=r!==0&&!C;return e.createElement(ue.P,{col:m},e.createElement(od,{ref:V.dropRef,showLeftCarret:A,showRightCarret:Q,isFirst:K,isLast:N,hasHorizontalPadding:Y,onDrag:()=>{C&&!f&&p(!0)},onDragEnd:()=>{C&&p(!1)}},f&&C&&e.createElement($.x,{width:"100%",height:"2px",background:"primary600"}),e.createElement(sd,{width:C&&f?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:P(),alignItems:"stretch",isDragging:v,dragStart:f,isFullSize:C,isHidden:E},e.createElement(ad,{as:"span",type:"button",ref:V.dragRef,onClick:q=>q.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},e.createElement(rd,null)),!E&&e.createElement(nd,{attribute:t,onEditField:g,onDeleteField:c},o))))};Eo.defaultProps={attribute:void 0},Eo.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};const id=Eo,zr=({rowItem:t,onRemoveField:o,rowId:r,rowIndex:s,index:a,lastIndex:l})=>{const{setEditFieldToSelect:i,attributes:c,modifiedData:g,moveRow:u,moveItem:m}=lt(),f=x()(c,[t.name],{}),p=x()(g,["metadatas",t.name,"edit","label"],"");return e.createElement(id,{onEditField:()=>i(t.name),onDeleteField:()=>o(r,a),attribute:f,index:a,lastIndex:l,rowIndex:s,name:t.name,size:t.size,moveRow:u,moveItem:m},p||t.name)};zr.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};const ld=zr,Ur=({row:t,onRemoveField:o,rowIndex:r})=>e.createElement(De.r,null,t.rowContent.map((s,a)=>e.createElement(ld,{key:s.name,rowItem:s,index:a,rowId:t.rowId,onRemoveField:o,rowIndex:r,lastIndex:t.rowContent.length-1})));Ur.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};const cd=Ur,dd=[{action:"plugin::content-type-builder.read",subject:null}],ud=()=>{const{trackUsage:t}=(0,h.rS)(),{formatMessage:o}=(0,H.Z)(),{slug:r,modifiedData:s,isContentTypeView:a}=lt(),l=a?"content-types":"components",i=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=x()(s,"category",""),g=l==="content-types"?r:`${c}/${r}`,u=()=>{t("willEditEditLayout")};return r==="strapi::administrator"?null:e.createElement(h.jW,{permissions:dd},e.createElement(h.Qj,{to:`${i}/${g}`,onClick:u,size:"S",startIcon:e.createElement(We.Z,null),variant:"secondary"},o({id:(0,Ee.Z)(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))},Vr=({editLayout:t,fields:o,onRemoveField:r,onAddField:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(F.k,{justifyContent:"space-between"},e.createElement("div",null,e.createElement($.x,null,e.createElement(G.Z,{fontWeight:"bold"},a({id:(0,y.OB)("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),e.createElement($.x,null,e.createElement(G.Z,{variant:"pi",textColor:"neutral600"},a({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),e.createElement(ud,null)),e.createElement($.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},t.map((l,i)=>e.createElement(cd,{key:l.rowId,row:l,rowIndex:i,onRemoveField:r})),e.createElement(Ve.O,{id:"label",label:a({id:(0,y.OB)("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:me.z,"data-testid":"add-field",fullWidth:!0,startIcon:e.createElement(At.Z,null),endIcon:null,variant:"secondary",disabled:o.length===0},o.map(l=>e.createElement(Ve.s,{key:l,onClick:()=>s(l)},l))))))};Vr.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};const md=Vr;var Hr=d(42866),Qr=d(24969),Gr=d(59946),Kr=d(36856),Bt=d(31666),pd=d(14484),dn=d(34668),gd=d(73145),Yr=d(82574),Co=d(74525),fd=d(48394),vo=d(21210),hd=d(60133),yd=d(55884),bd=d(85038),Ed=d(65531);const Xr={biginteger:e.createElement(Bt.Z,null),boolean:e.createElement(pd.Z,null),date:e.createElement(dn.Z,null),datetime:e.createElement(dn.Z,null),decimal:e.createElement(Bt.Z,null),email:e.createElement(gd.Z,null),enum:e.createElement(Yr.Z,null),enumeration:e.createElement(Yr.Z,null),file:e.createElement(Co.Z,null),files:e.createElement(Co.Z,null),float:e.createElement(Bt.Z,null),integer:e.createElement(Bt.Z,null),media:e.createElement(Co.Z,null),number:e.createElement(Bt.Z,null),relation:e.createElement(fd.Z,null),string:e.createElement(vo.Z,null),text:e.createElement(vo.Z,null),richtext:e.createElement(vo.Z,null),time:e.createElement(dn.Z,null),timestamp:e.createElement(dn.Z,null),json:e.createElement(hd.Z,null),uid:e.createElement(yd.Z,null),component:e.createElement(bd.Z,null),dynamiczone:e.createElement(Ed.Z,null)},Ro=({type:t,customFieldUid:o})=>{const r=(0,h.mZ)();let s=Xr[t];if(o){const l=r.get(o).icon;l&&(s=e.createElement($.x,{marginRight:3,width:7,height:6},e.createElement(l,null)))}return Xr[t]?s:null};Ro.defaultProps={customFieldUid:null},Ro.propTypes={type:n().string.isRequired,customFieldUid:n().string};const Jr=Ro,Cd=t=>t.reduce((o,r)=>{const s=r?.attributes??{},a=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return o[r.uid]=a,o},{}),_r=t=>{let o;switch(t){case"description":case"label":case"placeholder":o="text";break;case"mainField":o="select";break;case"editable":o="bool";break;default:o=""}const r=t==="mainField"?(0,y.OB)("containers.SettingPage.editSettings.entry.title"):(0,y.OB)(`form.Input.${t}`);return{type:o,label:{id:r}}};var Mt=d(84668),qt=d(20707);const Mo=({type:t,options:o,onChange:r,value:s,name:a,...l})=>{const{formatMessage:i}=(0,H.Z)();switch(t){case"text":return e.createElement(kn.o,{onChange:r,value:s,name:a,...l});case"bool":return e.createElement(qt.s,{onChange:c=>{r({target:{name:a,value:c.target.checked}})},checked:s,name:a,onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return e.createElement(ze.P,{value:s,name:a,onChange:c=>r({target:{name:a,value:c}}),...l},o.map(c=>e.createElement(be.W,{key:c,value:c},c)));default:return null}};Mo.defaultProps={options:void 0},Mo.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};const vd=Mo,Rd=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Md=[1,5,10,15,30,60],Td=["datetime","time"],es=({onMetaChange:t,onSizeChange:o})=>{const{formatMessage:r}=(0,H.Z)(),{modifiedData:s,selectedField:a,attributes:l,fieldForm:i}=lt(),c=(0,e.useMemo)(Mt.Vo,[]),{schemas:g}=(0,_.v9)(I=>c(I),_.wU),u=(0,_.v9)(Mt.Jg),m=(0,e.useMemo)(()=>{if(!a)return[];const I=x()(s,["metadatas",a,"edit"],{});return Object.keys(I).filter(v=>v!=="visible")},[a,s]),f=(0,e.useMemo)(()=>Cd(g),[g]),p=(0,e.useCallback)(I=>{if(I!=="relation"&&I!=="component")return[];const v=I==="component"?"component":"targetModel",M=x()(s,["attributes",a,v],"");return x()(f,[M],[])},[a,f,s]),E=m.map(I=>{const v=x()(l,[a,"type"]);return["component","dynamiczone"].includes(v)&&!["label","description"].includes(I)||v==="component"&&I!=="label"||["media","json","boolean"].includes(v)&&I==="placeholder"||I==="step"?null:e.createElement(ue.P,{col:6,key:I},e.createElement(vd,{type:_r(I).type,hint:I==="mainField"?r({id:(0,Ee.Z)("containers.SettingPage.editSettings.relation-field.description")}):"",label:r({id:x()(_r(I),"label.id","app.utils.defaultMessage")}),name:I,onChange:t,value:x()(i,["metadata",I],""),options:p(v)}))}),{type:b,customField:C}=l[a],{isResizable:R}=u[C]??u[b],D=e.createElement(ue.P,{col:6,key:"size"},e.createElement(ze.P,{value:i?.size,name:"size",onChange:I=>{o({name:a,value:I})},label:r({id:(0,Ee.Z)("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},Rd.map(([I,v])=>e.createElement(be.W,{key:I,value:I},v)))),T=Td.includes(l[a].type),L=e.createElement(ue.P,{col:6,key:"step"},e.createElement(ze.P,{value:x()(i,["metadata","step"],1),name:"step",onChange:I=>t({target:{name:"step",value:I}}),label:r({id:(0,Ee.Z)("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Md.map(I=>e.createElement(be.W,{key:I,value:I},I))));return e.createElement(e.Fragment,null,E,R&&D,T&&L)};es.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};const Dd=es,Id=(0,j.ZP)(F.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,To=({onToggle:t,onMetaChange:o,onSizeChange:r,onSubmit:s,type:a,customFieldUid:l})=>{const{selectedField:i}=lt(),{formatMessage:c}=(0,H.Z)(),g=()=>a==="timestamp"?"date":["decimal","float","integer","biginter"].includes(a)?"number":a;return e.createElement(Hr.P,{onClose:t,labelledBy:"title"},e.createElement("form",{onSubmit:s},e.createElement(Qr.x,null,e.createElement(Id,null,e.createElement(Jr,{type:g(),customFieldUid:l}),e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:Zt()(i)})))),e.createElement(Gr.f,null,e.createElement(De.r,{gap:4},e.createElement(Dd,{onMetaChange:o,onSizeChange:r}))),e.createElement(Kr.m,{startActions:e.createElement(me.z,{onClick:t,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};To.defaultProps={customFieldUid:null},To.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};const kd=To,Od=(t,o,r)=>{const{put:s}=(0,h.tg)();return s((0,y.IF)(r?`content-types/${o}/configuration`:`components/${o}/configuration`),t)},Do=({mainLayout:t,components:o,isContentTypeView:r,slug:s,updateLayout:a})=>{const[l,i]=(0,e.useReducer)(Xc,ho,()=>Jc(ho,t,o)),[c,g]=(0,e.useState)(!1),{trackUsage:u}=(0,h.rS)(),m=(0,h.lm)(),{goBack:f}=(0,re.k6)(),[p,E]=(0,e.useState)(!1),[b,C]=(0,e.useState)(!1),{componentLayouts:R,initialData:D,modifiedData:T,metaToEdit:L,metaForm:I}=l,{formatMessage:v}=(0,H.Z)(),M=x()(t,["info","displayName"],""),S=x()(T,["attributes"],{}),Z=(0,_.v9)(Mt.Jg),V=Object.keys(S).filter(z=>{const ae=x()(S,[z,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(ae)&&!!ae}),A=x()(T,["layouts","edit"],[]),Q=Fr()(A,"rowContent"),P=Object.keys(T.attributes).filter(z=>x()(T,["metadatas",z,"edit","visible"],!1)===!0).filter(z=>Q.findIndex(ae=>ae.name===z)===-1).sort(),K=({target:{name:z,value:ae}})=>{i({type:"ON_CHANGE",keys:z.split("."),value:ae})},N=()=>{E(z=>!z)},Y=()=>{C(z=>!z)},q=({target:{name:z,value:ae}})=>{i({type:"ON_CHANGE_META",keys:z.split("."),value:ae})},U=({name:z,value:ae})=>{i({type:"ON_CHANGE_SIZE",name:z,value:ae})},O=z=>{z.preventDefault(),i({type:"SUBMIT_META_FORM"}),N()},w=z=>{z.preventDefault(),Y()},W=(0,st.useMutation)(z=>Od(z,s,r),{onSuccess({data:z}){a&&a(z.data),i({type:"SUBMIT_SUCCEEDED"}),Y(),u("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:J}=W,k=()=>{const z=xn()(Ge()(T),["layouts","metadatas","settings"]);ie()(z,"layouts.edit",Gc(z.layouts.edit)),W.mutate(z)},B=(z,ae)=>{i({type:"MOVE_RELATION",fromIndex:z,toIndex:ae})},te=(z,ae)=>{i({type:"MOVE_FIELD",fromIndex:z,toIndex:ae})},X=(z,ae,Re,Be)=>{i(Re===Be?{type:"REORDER_ROW",dragRowIndex:Re,dragIndex:z,hoverIndex:ae}:{type:"REORDER_DIFF_ROW",dragIndex:z,hoverIndex:ae,dragRowIndex:Re,hoverRowIndex:Be})},se=(z,ae)=>{i({type:"MOVE_ROW",fromIndex:z,toIndex:ae})};return e.createElement(yo,{isContentTypeView:r,attributes:S,modifiedData:T,slug:s,componentLayouts:R,selectedField:L,fieldForm:I,onMoveRelation:B,onMoveField:te,moveRow:se,moveItem:X,setEditFieldToSelect:z=>{i({type:"SET_FIELD_TO_EDIT",name:z}),N()},isDraggingSibling:c,setIsDraggingSibling:g},e.createElement(ve.o,null,e.createElement("form",{onSubmit:w},e.createElement(fe.T,{title:v({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${Zt()(M)}`},{name:Zt()(M)}),subtitle:v({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),onClick:z=>{z.preventDefault(),f()},to:"/"},v({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{disabled:Ce()(D,T),startIcon:e.createElement(Ct.Z,null),type:"submit"},v({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Ze.D,null,e.createElement($.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(G.Z,{variant:"delta",as:"h2"},v({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(De.r,null,e.createElement(ue.P,{col:6,s:12},e.createElement(ze.P,{label:v({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:v({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:z=>{K({target:{name:"settings.mainField",value:z===""?null:z}})},value:T.settings.mainField},V.map(z=>e.createElement(be.W,{key:z,value:z},z))))),e.createElement($.x,{paddingTop:2,paddingBottom:2},e.createElement($r.i,null)),e.createElement(G.Z,{variant:"delta",as:"h3"},v({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"})),e.createElement(md,{attributes:S,editLayout:A,fields:P,onAddField:z=>{i({type:"ON_ADD_FIELD",name:z,fieldSizes:Z})},onRemoveField:(z,ae)=>{i({type:"REMOVE_FIELD",rowIndex:z,fieldIndex:ae})}})))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(Ct.Z,null),isConfirmButtonLoading:J,isOpen:b,onToggleDialog:Y,onConfirm:k,variantRightButton:"success-light"})),p&&e.createElement(kd,{onSubmit:O,onToggle:N,onMetaChange:q,onSizeChange:U,type:x()(S,[L,"type"],""),customFieldUid:x()(S,[L,"customField"],"")})))};Do.defaultProps={isContentTypeView:!1,updateLayout:null},Do.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};const Io=Do;var Tt=d(28933);const xd=()=>({type:Tt.ZA}),Pd=(t,o)=>({type:Tt.Id,pagination:t,data:o}),wd=()=>({type:Tt.MP});function Fd(){return{type:Tt.c2}}const Ld=({components:t,contentType:o})=>{const{layouts:r}=o;return{contentType:o,components:t,displayedHeaders:r.list,type:Tt.Zz}},ko=t=>({type:Tt.Rp,target:t});var ts=d(14890),Oo=d(14087),ns=d(36989),Sd=d(4942),Ad=d(37562);const $d=()=>t=>t["content-manager_listView"]||Ad.E,Zd=()=>(0,uo.P1)($d(),t=>t),os=t=>{const{displayedHeaders:o}=t["content-manager_listView"];return o},Bd=Zd;var qd=d(15234),Nd=d(79031),xo=d(37909),jd=d(92155),Wd=d(65186),zd=d(19631),Ud=d(42274);const Vd=(0,j.ZP)(F.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,rs=({children:t,...o})=>e.createElement(Vd,{justifyContent:"center",alignItems:"center",as:"span",...o},e.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},t));rs.propTypes={children:n().string.isRequired};const ss=rs,Po=({url:t,mime:o,alternativeText:r,name:s,ext:a,formats:l})=>{const i=(0,h.CR)(t);if(o.includes("image")){const u=l?.thumbnail?.url||null,m=(0,h.CR)(u)||i;return e.createElement(Ud.q,{src:m,alt:r||s,preview:!0})}const c=(0,h.mD)(a),g=s.length>100?`${s.substring(0,100)}...`:s;return e.createElement(Qt.u,{description:g},e.createElement(ss,null,c))};Po.defaultProps={alternativeText:null,formats:null},Po.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};const as=Po;var Hd=d(56704);const is=({value:t})=>e.createElement(Hd.H,null,t.map((o,r)=>{const s=`${o.id}${r}`;if(r===3){const a=`+${t.length-3}`;return e.createElement(ss,{key:s,preview:!1},a)}return r>3?null:e.createElement(as,{key:s,...o})}));is.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};const Qd=is;var ls=d(30190),Gd=d(77197),Kd=d(23855);const cs=({type:t,value:o})=>{const{formatDate:r,formatTime:s,formatNumber:a}=(0,H.Z)();let l=o;if(t==="date"&&(l=r((0,Kd.Z)(o),{dateStyle:"full"})),t==="datetime"&&(l=r(o,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[i,c,g]=o.split(":"),u=new Date;u.setHours(i),u.setMinutes(c),u.setSeconds(g),l=s(u,{numeric:"auto",style:"short"})}return["float","decimal"].includes(t)&&(l=a(o,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=a(o,{maximumFractionDigits:0})),Er()(l)};cs.propTypes={type:n().string.isRequired,value:n().any.isRequired};const Dt=cs,Yd=(0,j.ZP)(G.Z)`
  max-width: 500px;
`,Xd=async(t,o,r)=>{const{data:{results:s,pagination:a}}=await r(t);return o(),{results:s,pagination:a}},ds=({fieldSchema:t,metadatas:o,name:r,entityId:s,value:a,contentType:l})=>{const{formatMessage:i}=(0,H.Z)(),{notifyStatus:c}=(0,Oo.G)(),g=(0,e.useMemo)(()=>(0,y.IF)(`relations/${l.uid}/${s}/${r.split(".")[0]}`),[s,r,l]),[u,m]=(0,e.useState)(!1),{get:f}=(0,h.kY)(),p=e.createElement(F.k,{gap:1,wrap:"nowrap"},e.createElement(ls.C,null,a.count),i({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:a.count})),E=()=>{const R=i({id:(0,y.OB)("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(R)},{data:b,status:C}=(0,st.useQuery)([t.targetModel,s],()=>Xd(g,E,f),{enabled:u,staleTime:0,select:R=>({...R,results:[...R.results].reverse()})});return e.createElement($.x,{...h.UW},e.createElement(Ve.O,{label:p,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},C!=="success"&&e.createElement(Ve.s,{"aria-disabled":!0},e.createElement(Gd.a,{small:!0},i({id:(0,y.OB)("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),C==="success"&&e.createElement(e.Fragment,null,b?.results.map(R=>e.createElement(Ve.s,{key:R.id,"aria-disabled":!0},e.createElement(Yd,{ellipsis:!0},e.createElement(Dt,{type:o.mainField.schema.type,value:R[o.mainField.name]||R.id})))),b?.pagination.total>10&&e.createElement(Ve.s,{"aria-disabled":!0,"aria-label":i({id:(0,y.OB)("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},e.createElement(G.Z,null,"\u2026")))))};ds.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};const Jd=ds,_d=(0,j.ZP)(G.Z)`
  max-width: 500px;
`,us=({metadatas:t,value:o})=>e.createElement(_d,{textColor:"neutral800",ellipsis:!0},e.createElement(Dt,{type:t.mainField.schema.type,value:o[t.mainField.name]??o.id}));us.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};const eu=us,tu=(0,j.ZP)(G.Z)`
  max-width: 500px;
`,ms=({value:t,metadatas:o})=>{const{formatMessage:r}=(0,H.Z)(),{mainField:{type:s,name:a}}=o,l=e.createElement(e.Fragment,null,e.createElement(ls.C,null,t.length)," ",r({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length}));return e.createElement($.x,{...h.UW},e.createElement(Ve.O,{label:l,size:"S"},t.map(i=>e.createElement(Ve.s,{key:i.id,"aria-disabled":!0},e.createElement(tu,{ellipsis:!0},e.createElement(Dt,{type:s,value:i[a]||i.id}))))))};ms.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};const nu=ms,ou=(0,j.ZP)(G.Z)`
  max-width: 250px;
`,ps=({value:t,metadatas:o})=>{const{mainField:r}=o,s=t[r.name];return e.createElement(Qt.u,{label:s},e.createElement(ou,{textColor:"neutral800",ellipsis:!0},e.createElement(Dt,{type:r.type,value:s})))};ps.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};const ru=ps;var su=d(81763),gs=d.n(su);function fs(t){return["oneToOne","manyToOne","oneToOneMorph"].includes(t)}function au(t,o,r,s){if(t==="component"){const{mainField:{name:a,type:l}}=r;if(s?.repeatable)return o.length>0;const i=o?.[a];return a==="id"&&![void 0,null].includes(i)?!0:$t(l)&&l!=="biginteger"&&a!=="id"?gs()(i):!Me()(i)}return t==="relation"?fs(s.relation)?!Me()(o):o?.count>0:$t(t)&&t!=="biginteger"?gs()(o):t==="boolean"?o!==null:!Me()(o)}const hs=(0,j.ZP)(G.Z)`
  max-width: 300px;
`,wo=({content:t,fieldSchema:o,metadatas:r,name:s,rowId:a,contentType:l})=>{const{type:i}=o;if(!au(i,t,r,o))return e.createElement(G.Z,{textColor:"neutral800"},"-");switch(i){case"media":return o.multiple?e.createElement(Qd,{value:t}):e.createElement(as,{...t});case"relation":return fs(o.relation)?e.createElement(eu,{metadatas:r,value:t}):e.createElement(Jd,{fieldSchema:o,metadatas:r,value:t,name:s,entityId:a,contentType:l});case"component":return o.repeatable===!0?e.createElement(nu,{value:t,metadatas:r}):e.createElement(ru,{value:t,metadatas:r});case"string":return e.createElement(Qt.u,{description:t},e.createElement(hs,{ellipsis:!0,textColor:"neutral800"},e.createElement(Dt,{type:i,value:t})));default:return e.createElement(hs,{ellipsis:!0,textColor:"neutral800"},e.createElement(Dt,{type:i,value:t}))}};wo.defaultProps={content:void 0},wo.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};const iu=wo,Fo=({canCreate:t,canDelete:o,contentType:r,headers:s,entriesToDelete:a,onClickDelete:l,onSelectRow:i,withMainAction:c,withBulkActions:g,rows:u})=>{const{push:m,location:{pathname:f}}=(0,re.k6)(),{formatMessage:p}=(0,H.Z)(),{trackUsage:E}=(0,h.rS)(),b=(0,de.fi)();return e.createElement(qd.p,null,u.map((C,R)=>{const D=a.findIndex(L=>L===C.id)!==-1,T=p({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:R});return e.createElement(Nd.Tr,{key:C.id,...(0,h.X7)({fn(){E("willEditEntryFromList"),m({pathname:`${f}/${C.id}`,state:{from:f},search:b})},condition:g})},c&&e.createElement(xo.Td,{...h.UW},e.createElement(jd.C,{"aria-label":p({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,zd.Pp)(C.firstname,C.lastname)}),checked:D,onChange:()=>{i({name:C.id,value:!D})}})),s.map(({key:L,cellFormatter:I,name:v,...M})=>e.createElement(xo.Td,{key:L},typeof I=="function"?I(C,{key:L,name:v,...M}):e.createElement(iu,{content:C[v.split(".")[0]],name:v,contentType:r,...M,rowId:C.id}))),g&&e.createElement(xo.Td,null,e.createElement(F.k,{justifyContent:"end",...h.UW},e.createElement(ye.h,{forwardedAs:Rt.rU,onClick:()=>{E("willEditEntryFromButton")},to:{pathname:`${f}/${C.id}`,state:{from:f},search:b},label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:T}),noBorder:!0,icon:e.createElement(We.Z,null)}),t&&e.createElement($.x,{paddingLeft:1},e.createElement(ye.h,{forwardedAs:Rt.rU,to:{pathname:`${f}/create/clone/${C.id}`,state:{from:f},search:b},label:p({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:T}),noBorder:!0,icon:e.createElement(Wd.Z,null)})),o&&e.createElement($.x,{paddingLeft:1},e.createElement(ye.h,{onClick:()=>{E("willDeleteEntryFromList"),l(C.id)},label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:T}),noBorder:!0,icon:e.createElement(Qe.Z,null)})))))}))};Fo.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},Fo.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};const lu=Fo,ys=({area:t,...o})=>{const r=Ut(t);return r?e.createElement("ul",null,r.map(s=>s.Component(o)?e.createElement($.x,{key:s.name,padding:3,style:{textAlign:"center"}},e.createElement(s.Component,{...o})):null)):null};ys.propTypes={area:n().string.isRequired};const bs=ys,Es=({isConfirmButtonLoading:t,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(rn.V,{onClose:r,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},e.createElement(sn.a,{icon:e.createElement(Lt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},a({id:(0,y.OB)("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),e.createElement(F.k,null,e.createElement(bs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:r,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(Qe.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Es.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const cu=Es,Cs=({isConfirmButtonLoading:t,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(rn.V,{onClose:r,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},e.createElement(sn.a,{icon:e.createElement(Lt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},a({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),e.createElement(F.k,null,e.createElement(bs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:r,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(Qe.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Cs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const du=Cs;function vs({isPublished:t}){const{formatMessage:o}=(0,H.Z)(),r=t?"success":"secondary";return e.createElement(Pn.q,{showBullet:!1,variant:r,size:"S",width:"min-content"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${r}700`},o({id:(0,y.OB)(`containers.List.${t?"published":"draft"}`),defaultMessage:t?"Published":"Draft"})))}vs.propTypes={isPublished:n().bool.isRequired};function Rs(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);o&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,s)}return r}function un(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?Rs(Object(r),!0).forEach(function(s){(0,Sd.Z)(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Rs(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}var uu=function(){return window&&window.strapi&&window.strapi.isEE?d(49179).Z:d(43973).Z}(),Lo=function(o){var r,s,a=o.canCreate,l=o.canDelete,i=o.contentTypeName,c=o.action,g=o.isBulkable,u=o.isLoading,m=o.onConfirmDelete,f=o.onConfirmDeleteAll,p=o.layout,E=o.rows,b=(0,h.j1)(),C=b.runHookWaterfall,R=(r=(s=p.contentType.options)===null||s===void 0?void 0:s.draftAndPublish)!==null&&r!==void 0?r:!1,D=(0,H.Z)(),T=D.formatMessage,L=(0,_.v9)(os),I=(0,e.useMemo)(function(){var v=C($e.No,{displayedHeaders:L,layout:p}),M=v.displayedHeaders.map(function(Z){var V=Z.fieldSchema,A=Z.metadatas,Q=Z.name;return un(un({},Z),{},{metadatas:un(un({},A),{},{label:T({id:(0,y.OB)("containers.ListPage.table-headers.".concat(Q)),defaultMessage:A.label})}),name:V.type==="relation"?"".concat(Q,".").concat(A.mainField.name):Q})});R&&M.push({key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:T({id:(0,y.OB)("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter:function(V){var A=V.publishedAt;return e.createElement(vs,{isPublished:!!A})}});var S=uu(p);return S&&M.push(S),M},[C,L,p,R,T]);return e.createElement(h.tM,{components:{ConfirmDialogDelete:du,ConfirmDialogDeleteAll:cu},contentType:i,action:c,isLoading:u,headers:I,onConfirmDelete:m,onConfirmDeleteAll:f,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:E,withBulkActions:!0,withMainAction:l&&g},e.createElement(lu,{canCreate:a,canDelete:l,contentType:p.contentType,headers:I,rows:E,withBulkActions:!0,withMainAction:l&&g}))};Lo.defaultProps={action:void 0},Lo.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};const mu=Lo,pu=["json","component","media","richtext","dynamiczone","password"],gu=["createdAt","updatedAt"],fu=(t,o)=>{const{allPermissions:r}=(0,h.vn)(),s=(0,h.ZT)(r,[{action:"plugin::content-manager.explorer.read",subject:o}]),a=x()(s,["0","properties","fields"],[]);return Object.keys(x()(t,["attributes"]),{}).filter(c=>{const g=x()(t,["attributes",c],{});return!(!g.type||pu.includes(g.type)||!a.includes(c)&&c!=="id"&&!gu.includes(c))}).sort()};var hu=d(89597);const Ms=({displayedFilters:t})=>{const[o,r]=(0,e.useState)(!1),{formatMessage:s}=(0,H.Z)(),a=(0,e.useRef)(),{trackUsage:l}=(0,h.rS)(),i=()=>{o||l("willFilterEntries"),r(c=>!c)};return e.createElement(e.Fragment,null,e.createElement($.x,{paddingTop:1,paddingBottom:1},e.createElement(me.z,{variant:"tertiary",ref:a,startIcon:e.createElement(hu.Z,null),onClick:i,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),o&&e.createElement(h.J5,{displayedFilters:t,isVisible:o,onToggle:i,source:a})),e.createElement(h.W$,{filtersSchema:t}))};Ms.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};const yu=Ms,Ts=({contentType:t,slug:o,metadatas:r})=>{const{formatMessage:s}=(0,H.Z)(),l=fu(t,o).map(i=>{const c=t.attributes[i],{type:g,enum:u}=c,m={name:"didFilterEntries",properties:{useRelation:g==="relation"}},{mainField:f,label:p}=r[i].list;return{name:i,metadatas:{label:s({id:p,defaultMessage:p})},fieldSchema:{type:g,options:u,mainField:f},trackedEvent:m}});return e.createElement(yu,{displayedFilters:l})};Ts.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};const bu=Ts,Eu=t=>Object.keys(t).reduce((r,s)=>{const a=t[s];return(0,y.ko)(a)&&r.push(s),r},[]).sort(),Ds=({layout:t})=>{const o=(0,_.I0)(),r=(0,_.v9)(os),{trackUsage:s}=(0,h.rS)(),{formatMessage:a}=(0,H.Z)(),l=Eu(t.contentType.attributes).map(g=>{const u=t.contentType.metadatas[g].list;return{name:g,intlLabel:{id:u.label,defaultMessage:u.label}}}),i=r.map(({name:g})=>g),c=g=>{if(s("didChangeDisplayedFields"),g.length<i.length){const u=i.filter(m=>g.indexOf(m)===-1);o(ko({name:u[0],value:!0}))}else{const u=g.filter(m=>i.indexOf(m)===-1);o(ko({name:u[0],value:!1}))}};return e.createElement($.x,{paddingTop:1,paddingBottom:1},e.createElement(ze.P,{"aria-label":"change displayed fields",value:i,onChange:c,customizeContent:g=>a({id:(0,Ee.Z)("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:g.length}),multi:!0,size:"S"},l.map(g=>e.createElement(be.W,{key:g.name,value:g.name},a({id:g.intlLabel.id||g.name,defaultMessage:g.intlLabel.defaultMessage||g.name})))))};Ds.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};const Cu=(0,e.memo)(Ds),So=({pagination:t})=>e.createElement($.x,{paddingTop:4},e.createElement(F.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),e.createElement(h.tU,{pagination:t})));So.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},So.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const vu=So,Ru=ke.Z.contentManager,Mu=(0,j.ZP)($.x)`
  svg {
    path {
      fill: ${({theme:t})=>t.colors.neutral900};
    }
  }
`;function Is({canCreate:t,canDelete:o,canRead:r,data:s,getData:a,getDataSucceeded:l,isLoading:i,layout:c,pagination:g,slug:u}){const{total:m}=g,{contentType:f}=c,{metadatas:p,settings:{bulkable:E,filterable:b,searchable:C}}=f,R=(0,h.lm)(),{trackUsage:D}=(0,h.rS)(),{refetchPermissions:T}=(0,h.vn)(),L=(0,e.useRef)(D),I=(0,e.useRef)(T),{notifyStatus:v}=(0,Oo.G)(),{formatAPIError:M}=(0,h.So)(y.OB);(0,h.go)();const[{query:S}]=(0,h.Kx)(),Z=kr(S),V=(0,nn.stringify)({plugins:S.plugins},{encode:!1}),{pathname:A}=(0,re.TH)(),{push:Q}=(0,re.k6)(),{formatMessage:P}=(0,H.Z)(),K=f.options?.draftAndPublish??!1,N=(0,h.kY)(),{post:Y,del:q}=N,U=(0,e.useRef)(""),O=(0,e.useCallback)(async(X,se)=>{a();try{const z=se?{cancelToken:se.token}:null,{data:{results:ae,pagination:Re}}=await N.get(X,z);v(P({id:(0,y.OB)("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:Re.count})),l(Re,ae)}catch(z){if(Ue().isCancel(z))return;if((z?.response?.status??null)===403){await I.current(),R({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),Q("/");return}R({type:"warning",message:{id:(0,y.OB)("error.model.fetch")}})}},[P,a,l,v,Q,R,N]),w=(0,e.useCallback)(async X=>{try{await Y((0,y.IF)(`collection-types/${u}/actions/bulkDelete`),{ids:X});const se=(0,y.IF)(`collection-types/${u}${Z}`);O(se),L.current("didBulkDeleteEntries")}catch(se){R({type:"warning",message:M(se)})}},[O,Z,u,R,M,Y]),W=(0,e.useCallback)(async X=>{try{await q((0,y.IF)(`collection-types/${u}/${X}`));const se=(0,y.IF)(`collection-types/${u}${Z}`);O(se),R({type:"success",message:{id:(0,y.OB)("success.record.delete")}})}catch(se){R({type:"warning",message:M(se)})}},[u,Z,O,R,M,q]);(0,e.useEffect)(()=>{const se=Ue().CancelToken.source(),z=r,ae=(0,y.IF)(`collection-types/${u}${Z}`);return z&&ae.includes(U.current)&&O(ae,se),()=>{U.current=u,se.cancel("Operation canceled by the user.")}},[r,a,u,Z,l,O]);const J=P({id:(0,y.OB)("header.name"),defaultMessage:"Content"}),k=P({id:f.info.displayName,defaultMessage:f.info.displayName||J}),B=r?P({id:(0,y.OB)("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,te=X=>t?e.createElement(me.z,{...X,forwardedAs:Rt.rU,onClick:()=>{const se=K?{status:"draft"}:{};L.current("willCreateEntry",se)},to:{pathname:`${A}/create`,search:S.plugins?V:""},startIcon:e.createElement(At.Z,null),style:{textDecoration:"none"}},P({id:(0,y.OB)("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return e.createElement(ve.o,{"aria-busy":i},e.createElement(fe.T,{primaryAction:te(),subtitle:B,title:k,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),to:"/content-manager/"},P({id:"global.back",defaultMessage:"Back"}))}),!r&&e.createElement(ns.Z,{endActions:e.createElement(Vt,{area:"contentManager.listView.actions"})}),r&&e.createElement(ns.Z,{endActions:e.createElement(e.Fragment,null,e.createElement(Vt,{area:"contentManager.listView.actions"}),e.createElement(Cu,{layout:c}),e.createElement(h.jW,{permissions:Ru.collectionTypesConfigurations},e.createElement(Mu,{paddingTop:1,paddingBottom:1},e.createElement(ye.h,{onClick:()=>{D("willEditListLayout")},forwardedAs:Rt.rU,to:{pathname:`${u}/configurations/list`,search:V},icon:e.createElement(qr.Z,null),label:P({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:e.createElement(e.Fragment,null,C&&e.createElement(h.m,{label:P({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:k}),placeholder:P({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),b&&e.createElement(bu,{contentType:f,slug:u,metadatas:p}))}),e.createElement(Ze.D,null,r?e.createElement(e.Fragment,null,e.createElement(mu,{canCreate:t,canDelete:o,contentTypeName:k,onConfirmDeleteAll:w,onConfirmDelete:W,isBulkable:E,isLoading:i,layout:c,rows:s,action:te({variant:"secondary"})}),e.createElement(vu,{pagination:{pageCount:g?.pageCount||1}})):e.createElement(h.ZF,null)))}Is.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Tu=Bd();function Du(t){return(0,ts.bindActionCreators)({getData:xd,getDataSucceeded:Pd,onChangeListHeaders:ko,onResetListHeaders:wd},t)}const Iu=(0,_.$j)(Tu,Du),ku=(0,ts.compose)(Iu)((0,e.memo)(Is,Ce())),Ao=t=>{const o=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,t.permissions);return r?e.createElement(h.dO,null):e.createElement(ku,{...t,...s})};Ao.defaultProps={permissions:[]},Ao.propTypes={permissions:n().array,slug:n().string.isRequired};const Ou=(0,e.memo)(Ao,(t,o)=>{const r=(0,h.e5)(t,o);return Object.keys(r).filter(a=>a!=="state").length>0}),ks=({layout:t,...o})=>{const r=(0,_.I0)(),{replace:s}=(0,re.k6)(),[{query:a,rawQuery:l}]=(0,h.Kx)(),i=(0,de.r5)(a,o.slug,"listView"),c=(0,de.Ky)(o.slug);return(0,e.useEffect)(()=>{l||s(c)},[l,s,c]),(0,e.useEffect)(()=>{r(Ld(t))},[r,t]),(0,e.useEffect)(()=>()=>{r(Fd())},[r]),i?e.createElement(Ou,{...o,layout:t,permissions:i}):null};ks.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};const xu=ks,$o=({modifiedData:t,onChange:o,sortOptions:r})=>{const{formatMessage:s}=(0,H.Z)(),{settings:a,metadatas:l}=t;return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(G.Z,{variant:"delta",as:"h2"},s({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(F.k,{justifyContent:"space-between",gap:4},e.createElement($.x,{width:"100%"},e.createElement(qt.s,{label:s({id:(0,y.OB)("form.Input.search"),defaultMessage:"Enable search"}),onChange:i=>{o({target:{name:"settings.searchable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:a.searchable})),e.createElement($.x,{width:"100%"},e.createElement(qt.s,{label:s({id:(0,y.OB)("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:i=>{o({target:{name:"settings.filterable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:a.filterable})),e.createElement($.x,{width:"100%"},e.createElement(qt.s,{label:s({id:(0,y.OB)("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:i=>{o({target:{name:"settings.bulkable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:a.bulkable}))),e.createElement(De.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(ze.P,{label:s({id:(0,y.OB)("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:(0,y.OB)("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:i=>o({target:{name:"settings.pageSize",value:i}}),name:"settings.pageSize",value:t.settings.pageSize||""},[10,20,50,100].map(i=>e.createElement(be.W,{key:i,value:i},i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(ze.P,{label:s({id:(0,y.OB)("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:i=>o({target:{name:"settings.defaultSortBy",value:i}}),name:"settings.defaultSortBy",value:t.settings.defaultSortBy||""},r.map(i=>e.createElement(be.W,{key:i,value:i},l[i].list.label||i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(ze.P,{label:s({id:(0,y.OB)("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:i=>o({target:{name:"settings.defaultSortOrder",value:i}}),name:"settings.defaultSortOrder",value:t.settings.defaultSortOrder||""},["ASC","DESC"].map(i=>e.createElement(be.W,{key:i,value:i},i))))))};$o.defaultProps={modifiedData:{},sortOptions:[]},$o.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};const Pu=$o,Zo=(0,j.ZP)(F.k)`
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,wu=(0,j.ZP)(Zo)`
  border-right: 1px solid
    ${({theme:t,isSibling:o})=>o?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Fu=(0,j.ZP)(F.k)`
  border: 1px solid
    ${({theme:t,isSibling:o})=>o?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t,isSibling:o})=>o?void 0:t.colors.primary600};
    }
  }
`,Lu=(0,j.ZP)(G.Z)`
  max-width: ${72/16}rem;
`;function Nt({labelField:t,transparent:o,isSibling:r}){return e.createElement(Fu,{background:r?"neutral100":"primary100",display:"inline-flex",gap:3,hasRadius:!0,justifyContent:"space-between",transparent:o,isSibling:r,"max-height":(0,h.Q1)(32),maxWidth:"min-content",opacity:o?0:1},e.createElement(F.k,{gap:3},e.createElement(wu,{alignItems:"center",cursor:"all-scroll",padding:3},e.createElement(Je.Z,null)),e.createElement(Lu,{textColor:r?void 0:"primary600",fontWeight:"bold",ellipsis:!0},t)),e.createElement(F.k,null,e.createElement(Zo,{alignItems:"center"},e.createElement(We.Z,null)),e.createElement(Zo,{alignItems:"center"},e.createElement(Gt.Z,null))))}Nt.defaultProps={isSibling:!1,transparent:!1},Nt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};const Bo=j.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Os=(0,j.ZP)(Bo)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Su=(0,j.ZP)(F.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:t})=>t.colors.primary100};
    border-color: ${({theme:t})=>t.colors.primary200};

    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    ${Os} {
      border-right: 1px solid ${({theme:t})=>t.colors.primary200};
    }
  }
`,Au=(0,j.ZP)($.x)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,xs=({index:t,isDraggingSibling:o,labelField:r,onClickEditField:s,onMoveField:a,onRemoveField:l,name:i,setIsDraggingSibling:c})=>{const{formatMessage:g}=(0,H.Z)(),u=(0,e.useRef)(null),m=(0,e.useRef)(null),[,f]=(0,e.useState)(!1),p=(0,e.useRef)(),E=()=>{p.current&&p.current.click()},[,b]=(0,cn.useDrop)({accept:y._Q.FIELD,hover(L,I){if(!m.current)return;const v=L.index,M=t;if(v===M)return;const S=m.current.getBoundingClientRect(),Z=(S.right-S.left)/2,A=I.getClientOffset().x-S.left;v>M&&A>Z||v<M&&A<Z||(a(v,M),L.index=M)}}),[{isDragging:C},R,D]=(0,cn.useDrag)({type:y._Q.FIELD,item(){return{index:t,labelField:r,name:i}},collect:L=>({isDragging:L.isDragging()}),end(){c(!1)}});(0,e.useEffect)(()=>{D((0,wt.rX)(),{captureDraggingState:!1})},[D]),(0,e.useEffect)(()=>{C&&c(!0)},[C,c]),(0,e.useEffect)(()=>{o||f(L=>!L)},[o]);const T={dragRef:R(u),dropRef:b(m)};return e.createElement(Au,{ref:T?T.dropRef:null},C&&e.createElement(Nt,{transparent:!0,labelField:r}),!C&&o&&e.createElement(Nt,{isSibling:!0,labelField:r}),!C&&!o&&e.createElement(Su,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:E,isDragging:C},e.createElement(F.k,{gap:3},e.createElement(Os,{as:"span","aria-label":g({id:(0,y.OB)("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:r}),onClick:L=>L.stopPropagation(),ref:T.dragRef,type:"button"},e.createElement(Je.Z,null)),e.createElement(G.Z,{fontWeight:"bold"},r)),e.createElement(F.k,{paddingLeft:3},e.createElement(Bo,{ref:p,onClick:L=>{L.stopPropagation(),s(i)},"aria-label":g({id:(0,y.OB)("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:r}),type:"button"},e.createElement(We.Z,null)),e.createElement(Bo,{onClick:l,"data-testid":`delete-${i}`,"aria-label":g({id:(0,y.OB)("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:r}),type:"button"},e.createElement(Gt.Z,null)))))};xs.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};const $u=xs,Ps=(0,j.ZP)($.x)`
  flex: ${({size:t})=>t};
`,Zu=(0,j.ZP)(Ps)`
  overflow-x: scroll;
  overflow-y: hidden;
`,Bu=(0,j.ZP)(Ps)`
  max-width: ${32/16}rem;
`,ws=({displayedFields:t,listRemainingFields:o,metadatas:r,onAddField:s,onClickEditField:a,onMoveField:l,onRemoveField:i})=>{const{formatMessage:c}=(0,H.Z)(),[g,u]=(0,e.useState)(!1),[m,f]=(0,e.useState)(null),p=(0,e.useRef)();function E(...C){f("add"),s(...C)}function b(...C){f("remove"),i(...C)}return(0,e.useEffect)(()=>{m==="add"&&p?.current&&(p.current.scrollLeft=p.current.scrollWidth)},[t,m]),e.createElement(e.Fragment,null,e.createElement($.x,{paddingBottom:4},e.createElement(G.Z,{variant:"delta",as:"h2"},c({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"}))),e.createElement(F.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},e.createElement(Zu,{size:"1",paddingBottom:4,ref:p},e.createElement(F.k,{gap:3},t.map((C,R)=>e.createElement($u,{key:C,index:R,isDraggingSibling:g,onMoveField:l,onClickEditField:a,onRemoveField:D=>b(D,R),name:C,labelField:r[C].list.label||C,setIsDraggingSibling:u})))),e.createElement(Bu,{size:"auto",paddingBottom:4},e.createElement(Ve.O,{label:c({id:(0,y.OB)("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ye.h,icon:e.createElement(At.Z,null),disabled:o.length<=0,"data-testid":"add-field"},o.map(C=>e.createElement(Ve.s,{key:C,onClick:()=>E(C)},r[C].list.label||C))))))};ws.propTypes={displayedFields:he.PropTypes.array.isRequired,listRemainingFields:he.PropTypes.array.isRequired,metadatas:he.PropTypes.objectOf(he.PropTypes.shape({list:he.PropTypes.shape({label:he.PropTypes.string})})).isRequired,onAddField:he.PropTypes.func.isRequired,onClickEditField:he.PropTypes.func.isRequired,onMoveField:he.PropTypes.func.isRequired,onRemoveField:he.PropTypes.func.isRequired};const qu=ws,Nu=(0,j.ZP)(F.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Fs=({attributes:t,fieldForm:o,fieldToEdit:r,onCloseModal:s,onChangeEditLabel:a,onSubmit:l,type:i})=>{const{formatMessage:c}=(0,H.Z)(),g=t[r].relationType;let u=!["media","relation"].includes(i);return["oneWay","oneToOne","manyToOne"].includes(g)&&(u=!0),e.createElement(Hr.P,{onClose:s,labelledBy:"title"},e.createElement("form",{onSubmit:l},e.createElement(Qr.x,null,e.createElement(Nu,null,e.createElement(Jr,{type:i}),e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:Zt()(r)})))),e.createElement(Gr.f,null,e.createElement(De.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(kn.o,{id:"label-input",label:c({id:(0,y.OB)("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>a(m),value:o.label,hint:c({id:(0,y.OB)("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),u&&e.createElement(ue.P,{s:12,col:6},e.createElement(qt.s,{"data-testid":"Enable sort on this field",checked:o.sortable,label:c({id:(0,y.OB)("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>a({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),e.createElement(Kr.m,{startActions:e.createElement(me.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};Fs.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};const ju=Fs,Wu=(t,o)=>({...t,initialData:o,modifiedData:o}),qo={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}},zu=(t=qo,o)=>(0,so.ZP)(t,r=>{const s=["modifiedData","layouts","list"];switch(o.type){case"ADD_FIELD":{const a=x()(t,s,[]);ie()(r,s,[...a,o.item]);break}case"MOVE_FIELD":{const a=x()(t,s,[]),{originalIndex:l,atIndex:i}=o;ie()(r,s,(0,y.W3)(a,l,i));break}case"ON_CHANGE":{ie()(r,["modifiedData",...o.keys.split(".")],o.value);break}case"ON_CHANGE_FIELD_METAS":{ie()(r,["fieldForm",o.name],o.value);break}case"REMOVE_FIELD":{const a=x()(t,s,[]);ie()(r,s,a.filter((l,i)=>o.index!==i));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:a}=o;r.fieldToEdit=a,r.fieldForm.label=x()(r,["modifiedData","metadatas",a,"list","label"],""),r.fieldForm.sortable=x()(r,["modifiedData","metadatas",a,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{r.fieldForm={},r.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const a=["modifiedData","metadatas",t.fieldToEdit,"list"];ie()(r,[...a,"label"],t.fieldForm.label),ie()(r,[...a,"sortable"],t.fieldForm.sortable);break}default:return r}}),Uu=["media","richtext","dynamiczone","relation","component","json"],Ls=({layout:t,slug:o})=>{const{put:r}=(0,h.kY)(),{formatMessage:s}=(0,H.Z)(),{trackUsage:a}=(0,h.rS)(),l=(0,de.fi)(),i=(0,h.lm)(),{refetchData:c}=(0,e.useContext)(Se),[g,u]=(0,e.useState)(!1),m=()=>u(w=>!w),[f,p]=(0,e.useReducer)(zu,qo,()=>Wu(qo,t)),{fieldToEdit:E,fieldForm:b,initialData:C,modifiedData:R}=f,D=!Me()(b),{attributes:T}=t,L=R.layouts.list,I=()=>{const{settings:{pageSize:w,defaultSortBy:W,defaultSortOrder:J},kind:k,uid:B}=C,te=`${W}:${J}`,X=`${(0,nn.stringify)({page:1,pageSize:w,sort:te},{encode:!1})}${l?`&${l}`:""}`;return`/content-manager/${k}/${B}?${X}`},v=({target:{name:w,value:W}})=>{p({type:"ON_CHANGE",keys:w,value:w==="settings.pageSize"?parseInt(W,10):W})},M=async()=>{const w=xn()(R,["layouts","settings","metadatas"]);K.mutate(w)},S=w=>{p({type:"ADD_FIELD",item:w})},Z=(w,W)=>{w.stopPropagation(),L.length===1?i({type:"info",message:{id:(0,y.OB)("notification.info.minimumFields")}}):p({type:"REMOVE_FIELD",index:W})},V=w=>{w.preventDefault(),m(),a("willSaveContentTypeLayout")},A=w=>{p({type:"SET_FIELD_TO_EDIT",fieldToEdit:w})},Q=()=>{p({type:"UNSET_FIELD_TO_EDIT"})},P=w=>{w.preventDefault(),p({type:"SUBMIT_FIELD_FORM"}),Q()},K=(0,st.useMutation)(w=>r(`/content-manager/content-types/${o}/configuration`,w),{onSuccess(){a("didEditListSettings"),c()},onError(){i({type:"warning",message:{id:"notification.error"}})}}),{isLoading:N}=K,Y=({target:{name:w,value:W}})=>{p({type:"ON_CHANGE_FIELD_METAS",name:w,value:W})},q=Object.entries(T).filter(([w,W])=>(0,y.ko)(W)&&!L.includes(w)).map(([w])=>w).sort(),U=Object.entries(T).filter(([,w])=>!Uu.includes(w.type)).map(([w])=>w),O=(w,W)=>{p({type:"MOVE_FIELD",originalIndex:w,atIndex:W})};return e.createElement(Fe.A,null,e.createElement(ve.o,{"aria-busy":N},e.createElement("form",{onSubmit:V},e.createElement(fe.T,{navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),to:I,id:"go-back"},s({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{size:"S",startIcon:e.createElement(Ct.Z,null),disabled:Ce()(R,C),type:"submit"},s({id:"global.save",defaultMessage:"Save"})),subtitle:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:Zt()(R.info.displayName)})}),e.createElement(Ze.D,null,e.createElement($.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(Pu,{modifiedData:R,onChange:v,sortOptions:U}),e.createElement($.x,{paddingTop:6,paddingBottom:6},e.createElement($r.i,null)),e.createElement(qu,{listRemainingFields:q,displayedFields:L,onAddField:S,onClickEditField:A,onMoveField:O,onRemoveField:Z,metadatas:R.metadatas}))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(Ct.Z,null),isConfirmButtonLoading:N,isOpen:g,onToggleDialog:m,onConfirm:M,variantRightButton:"success-light"})),D&&e.createElement(ju,{attributes:T,fieldForm:b,fieldToEdit:E,onChangeEditLabel:Y,onCloseModal:Q,onSubmit:P,type:x()(T,[E,"type"],"text")})))};Ls.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};const Vu=(0,e.memo)(Ls),Hu=()=>e.createElement($.x,{padding:8},e.createElement(h.Hn,null)),Ss=ke.Z.contentManager,As=({match:{params:{slug:t},url:o}})=>{const{isLoading:r,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let m={},f={};return s.contentType&&(m=(0,y.du)(s.contentType)),s.components&&(f=Object.keys(s.components).reduce((p,E)=>(p[E]=(0,y.du)(s.components[E]),p),{})),{rawContentTypeLayout:m,rawComponentsLayouts:f}},[s]);if((s?.contentType?.uid??null)!==t||r)return e.createElement(h.dO,null);const g=({location:{state:m},history:{goBack:f},match:{params:{id:p,origin:E}}},b)=>e.createElement(b,{slug:t,layout:s,state:m,goBack:f,id:p,origin:E}),u=[{path:"create/clone/:origin",comp:ln},{path:"create",comp:ln},{path:":id",comp:ln},{path:"",comp:xu}].map(({path:m,comp:f})=>e.createElement(re.AW,{key:m,path:`${o}/${m}`,render:p=>g(p,f)}));return e.createElement(Ke.ErrorBoundary,{FallbackComponent:Hu},e.createElement(Ae.Provider,{value:s},e.createElement(re.rs,null,e.createElement(re.AW,{path:`${o}/configurations/list`},e.createElement(h.O4,{permissions:Ss.collectionTypesConfigurations},e.createElement(Vu,{layout:l,slug:t,updateLayout:a}))),e.createElement(re.AW,{path:`${o}/configurations/edit`},e.createElement(h.O4,{permissions:Ss.collectionTypesConfigurations},e.createElement(Io,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),u)))};As.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const Qu=(0,e.memo)(As);var $s=d(23089);const Gu=ke.Z.contentManager,Ku=()=>{const[{isLoading:t,data:o},r]=(0,e.useReducer)($s.Z,$s.q),s=(0,e.useMemo)(Mt.Vo,[]),{schemas:a}=(0,_.v9)(c=>s(c),_.wU),{uid:l}=(0,re.UO)(),{get:i}=(0,h.kY)();return(0,e.useEffect)(()=>{const g=Ue().CancelToken.source();return(async m=>{try{r(en());const{data:{data:f}}=await i(`/content-manager/components/${l}/configuration`,{cancelToken:m.token});r(to((0,y.w8)(f,a,"component")))}catch(f){if(Ue().isCancel(f))return;console.error(f)}})(g),()=>{g.cancel("Operation canceled by the user.")}},[l,a,i]),t?e.createElement(h.dO,null):e.createElement(h.O4,{permissions:Gu.componentsConfigurations},e.createElement(Io,{components:o.components,mainLayout:o.component,slug:l}))},Yu=(0,e.memo)(Ku);var Xu=d(89722),Ju=d(86031);const _u=()=>{const{formatMessage:t}=(0,H.Z)();return(0,h.go)(),e.createElement(ve.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(Xu.x,{action:e.createElement(h.Qj,{variant:"secondary",startIcon:e.createElement(At.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},t({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:t({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:e.createElement(Ju.Z,{width:"10rem"}),shadow:"tableShadow"})))},em=()=>{const{formatMessage:t}=(0,H.Z)();return(0,h.go)(),e.createElement(ve.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(h.ZF,null)))},tm=ke.Z.contentManager,Zs=({match:{params:{slug:t},url:o}})=>{const{isLoading:r,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let c={},g={};return s.contentType&&(g=(0,y.du)(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((u,m)=>(u[m]=(0,y.du)(s.components[m]),u),{})),{rawContentTypeLayout:g,rawComponentsLayouts:c}},[s]);return r?e.createElement(h.dO,null):e.createElement(Ae.Provider,{value:s},e.createElement(re.rs,null,e.createElement(re.AW,{path:`${o}/configurations/edit`},e.createElement(h.O4,{permissions:tm.singleTypesConfigurations},e.createElement(Io,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),e.createElement(re.AW,{path:o,render:({location:{state:c},history:{goBack:g}})=>e.createElement(ln,{layout:s,slug:t,isSingleType:!0,state:c,goBack:g})})))};Zs.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const nm=(0,e.memo)(Zs);var om=d(53192),rm=d(60984),sm=d(34446),am=d(29489),im=d(52305);const lm=()=>{const[t,o]=(0,e.useState)(""),{formatMessage:r,locale:s}=(0,H.Z)(),a=(0,e.useMemo)(Mt.KQ,[]),{collectionTypeLinks:l,singleTypeLinks:i}=(0,_.v9)(a,_.wU),{startsWith:c}=(0,h.L0)(s,{sensitivity:"base"}),g=(0,h.Xe)(s,{sensitivity:"base"}),u=(0,e.useMemo)(()=>[{id:"collectionTypes",title:{id:(0,Ee.Z)("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:l},{id:"singleTypes",title:{id:(0,Ee.Z)("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:i}].map(E=>({...E,links:E.links.filter(b=>c(b.title,t)).sort((b,C)=>g.compare(b.title,C.title)).map(b=>({...b,title:r({id:b.title,defaultMessage:b.title})}))})),[l,t,i,c,r,g]),m=()=>{o("")},f=({target:{value:E}})=>{o(E)},p=r({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"});return e.createElement(om.m,{ariaLabel:p},e.createElement(rm.p,{label:p,searchable:!0,value:t,onChange:f,onClear:m,searchLabel:r({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.createElement(sm.Z,null,u.map(E=>{const b=r({id:E.title.id,defaultMessage:E.title.defaultMessage},E.title.values);return e.createElement(am.D,{key:E.id,label:b,badgeLabel:E.links.length.toString()},E.links.map(C=>{const R=C.search?`?${C.search}`:"";return e.createElement(im.E,{as:Rt.OL,key:C.uid,to:`${C.to}${R}`},C.title)}))})))};var No=d(21358);const cm=()=>({type:No.fn}),dm=()=>({type:No.sZ}),um=({authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:o,contentTypeSchemas:r,components:s,fieldSizes:a})=>({type:No.IX,data:{authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:o,components:s,contentTypeSchemas:r,fieldSizes:a}}),Bs=(t,o,r=[])=>t.filter(s=>s.isDisplayed).map(s=>{const a=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],i=o==="collectionTypes"?a:l,c=r.find(({uid:u})=>u===s.uid);let g=null;if(c){const u={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};g=(0,nn.stringify)(u,{encode:!1})}return{permissions:i,search:g,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}}),mm=(t,o)=>{const r=Object.entries(vr()(t,"kind")).map(([l,i])=>({name:l,links:i})),[s,a]=Pe()(r,"name");return{collectionTypeSectionLinks:Bs(s?.links||[],"collectionTypes",o),singleTypeSectionLinks:Bs(a?.links??[],"singleTypes")}},qs=(t,o)=>o.map(({permissions:r})=>(0,h.qX)(t,r)),pm=async({models:t,userPermissions:o,toggleNotification:r})=>{const{get:s}=(0,h.tg)();try{const{data:{data:a}}=await s((0,y.IF)("content-types-settings")),{collectionTypeSectionLinks:l,singleTypeSectionLinks:i}=mm(t,a),c=await Promise.all(qs(o,l)),g=l.filter((f,p)=>c[p]),u=await Promise.all(qs(o,i)),m=i.filter((f,p)=>u[p]);return{authorizedCollectionTypeLinks:g,authorizedSingleTypeLinks:m}}catch(a){return console.error(a),r({type:"warning",message:{id:"notification.error"}}),{authorizedCollectionTypeLinks:[],authorizedSingleTypeLinks:[]}}},gm=()=>{const t=(0,_.I0)(),o=(0,h.lm)(),r=(0,_.v9)((0,Mt.Yg)()),s=(0,e.useRef)(),{allPermissions:a}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=Ue().CancelToken.source(),{notifyStatus:g}=(0,Oo.G)(),{formatMessage:u}=(0,H.Z)(),{get:m}=(0,h.kY)(),f=async()=>{t(cm());try{const{data:{data:{components:p,contentTypes:E,fieldSizes:b}}}=await m("/content-manager/init",{cancelToken:c.token});g(u({id:(0,y.OB)("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const C=await pm({models:E,userPermissions:a,toggleNotification:o}),{ctLinks:R}=l($e.LK,{ctLinks:C.authorizedCollectionTypeLinks,models:E}),{stLinks:D}=l($e.dV,{stLinks:C.authorizedSingleTypeLinks,models:E}),T=um({authorizedCollectionTypeLinks:R,authorizedSingleTypeLinks:D,contentTypeSchemas:E,components:p,fieldSizes:b});t(T)}catch(p){if(Ue().isCancel(p))return;console.error(p),o({type:"warning",message:{id:"notification.error"}})}};return s.current=f,(0,e.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),t(dm())}),[t,o]),{...r,refetchData:s.current}};var jt=d(56723),fm=d(12645);const hm=(0,j.ZP)(F.k)`
  border-radius: 50%;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,ym=j.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;function Ns({displayedValue:t}){return e.createElement(F.k,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:(0,h.Q1)(300)},e.createElement(ym,{type:"button"},e.createElement(F.k,{gap:6},e.createElement(hm,{alignItems:"center",justifyContent:"center",background:"neutral200",height:(0,h.Q1)(32),width:(0,h.Q1)(32)},e.createElement(fm.Z,null)),e.createElement(F.k,{maxWidth:(0,h.Q1)(150)},e.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},t)))),e.createElement(F.k,{gap:2},e.createElement(ye.h,{noBorder:!0},e.createElement(Qe.Z,null)),e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null))))}Ns.propTypes={displayedValue:n().string.isRequired};const js=({status:t,displayedValue:o,width:r})=>{const{formatMessage:s}=(0,H.Z)(),a={[at.DRAFT]:s({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:s({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},l=t===at.DRAFT?"secondary":"success";return e.createElement($.x,{style:{width:r}},e.createElement(F.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},e.createElement(mr,{gap:1},e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null)),e.createElement(pr,{maxWidth:"100%",justifyContent:"space-between"},e.createElement($.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(fr,null,e.createElement(G.Z,{textColor:"primary600",ellipsis:!0},o))),t&&e.createElement(Pn.q,{variant:l,showBullet:!1,size:"S"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},a[t])))),e.createElement($.x,{paddingLeft:4},e.createElement(hr,{type:"button"},e.createElement(dr.J,{width:"12px",as:Gt.Z})))))};js.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const bm=ke.Z.contentManager;function Em({type:t,item:o}){if([jt.Z.EDIT_FIELD,jt.Z.FIELD].includes(t))return e.createElement(Nt,{labelField:o.labelField});const[r]=t.split("_");switch(r){case jt.Z.COMPONENT:case jt.Z.DYNAMIC_ZONE:return e.createElement(Ns,{displayedValue:o.displayedValue});case jt.Z.RELATION:return e.createElement(js,{displayedValue:o.displayedValue,status:o.status,width:o.width});default:return null}}const Ws=()=>{const t=(0,re.$B)("/content-manager/:kind/:uid"),{status:o,collectionTypeLinks:r,singleTypeLinks:s,models:a,refetchData:l}=gm(),i=Pe()([...r,...s],p=>p.title.toLowerCase()),{pathname:c}=(0,re.TH)(),{formatMessage:g}=(0,H.Z)(),{startSection:u}=(0,h.c1)(),m=(0,e.useRef)(u);if((0,e.useEffect)(()=>{m.current&&m.current("contentManager")},[]),o==="loading")return e.createElement(ve.o,{"aria-busy":"true"},e.createElement(fe.T,{title:g({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"})}),e.createElement(h.dO,null));const f=a.filter(({isDisplayed:p})=>p);return i.length===0&&f.length>0&&c!=="/content-manager/403"?e.createElement(re.l_,{to:"/content-manager/403"}):f.length===0&&c!=="/content-manager/no-content-types"?e.createElement(re.l_,{to:"/content-manager/no-content-types"}):!t&&i.length>0?e.createElement(re.l_,{to:`${i[0].to}${i[0].search?`?${i[0].search}`:""}`}):e.createElement(Fe.A,{sideNav:e.createElement(lm,null)},e.createElement(Le.r,{renderItem:Em}),e.createElement(Se.Provider,{value:{refetchData:l}},e.createElement(re.rs,null,e.createElement(re.AW,{path:"/content-manager/components/:uid/configurations/edit"},e.createElement(h.O4,{permissions:bm.componentsConfigurations},e.createElement(Yu,null))),e.createElement(re.AW,{path:"/content-manager/collectionType/:slug",component:Qu}),e.createElement(re.AW,{path:"/content-manager/singleType/:slug",component:nm}),e.createElement(re.AW,{path:"/content-manager/403"},e.createElement(em,null)),e.createElement(re.AW,{path:"/content-manager/no-content-types"},e.createElement(_u,null)),e.createElement(re.AW,{path:"",component:h.Hn}))))};function Cm(){const{formatMessage:t}=(0,H.Z)();return e.createElement(e.Fragment,null,e.createElement(Te.q,{title:t({id:(0,Ee.Z)("plugin.name"),defaultMessage:"Content Manager"})}),e.createElement(Ws,null))}},55542:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>y});var e=d(67294),Te=d(45697),re=d.n(Te),h=d(86896),ve=d(31799),fe=d(11047),Fe=d(75515),H=d(41580),ot=d(70004),Pe=d(47815);const ke=60*1e3,Ee=ke*60,Le=Ee*24,Oe=Le*30,Se=Le*365,he=_=>_<ke?{unit:"second",value:-Math.round(_/1e3)}:_<Ee?{unit:"minute",value:-Math.round(_/ke)}:_<Le?{unit:"hour",value:-Math.round(_/Ee)}:_<Oe?{unit:"day",value:-Math.round(_/Le)}:_<Se?{unit:"month",value:-Math.round(_/Oe)}:{unit:"year",value:-Math.round(_/Se)};var n=d(19631);const gt=()=>{const{formatMessage:_}=(0,h.Z)();return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Fe.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},_({id:(0,Pe.OB)("containers.Edit.information"),defaultMessage:"Information"})),e.createElement(H.x,null,e.createElement(ot.i,null)))},Ae=({label:_,value:$e})=>e.createElement(fe.k,{justifyContent:"space-between"},e.createElement(Fe.Z,{as:"dt",fontWeight:"bold",textColor:"neutral800",variant:"pi"},_),e.createElement(Fe.Z,{as:"dd",variant:"pi",textColor:"neutral600"},$e));Ae.propTypes={label:re().string.isRequired,value:re().string.isRequired};const zt=()=>{const{formatMessage:_,formatRelativeTime:$e}=(0,h.Z)(),{initialData:Ye,isCreatingEntry:It}=(0,ve.Wq)(),kt=(0,e.useRef)(Date.now()),ft=(Ze,De)=>{const{firstname:ue,lastname:F,username:$}=Ye[De]??{},We=ue??"",He=F??"",Xe=$??(0,n.Pp)(We,He),xt=(Ye[Ze]?new Date(Ye[Ze]).getTime():Date.now())-kt.current,{unit:Pt,value:Ut}=he(-xt);return{at:$e(Ut,Pt,{numeric:"auto"}),by:It?"-":Xe}},rt=ft("updatedAt","updatedBy"),Ce=ft("createdAt","createdBy");return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Ae,{label:_({id:(0,Pe.OB)("containers.Edit.information.created"),defaultMessage:"Created"}),value:Ce.at}),e.createElement(Ae,{label:_({id:(0,Pe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:Ce.by})),e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Ae,{label:_({id:(0,Pe.OB)("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:rt.at}),e.createElement(Ae,{label:_({id:(0,Pe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:rt.by})))},de=({children:_})=>e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},_);de.propTypes={children:re().oneOfType([re().arrayOf(re().node),re().node]).isRequired};const y={Root:de,Title:gt,Body:zt}},13164:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>h});var e=d(67294),Te=d(55542);function re(){return e.createElement(Te.Z.Root,null,e.createElement(Te.Z.Title,null),e.createElement(Te.Z.Body,null))}const h=re},9226:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>re});var e=d(67294);const re=(h,ve)=>{const[fe,Fe]=(0,e.useState)(h);return(0,e.useEffect)(()=>{const H=setTimeout(()=>{Fe(h)},ve);return()=>{clearTimeout(H)}},[h,ve]),fe}},49179:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>Oe});var e=d(67294),Te=d(86896),re=d(75515),h=d(45697),ve=d.n(h),fe=d(11047),Fe=d(41580),H=d(31799),ot=d(13037);function Pe({color:Se,name:Ke}){const{themeColorName:he}=(0,ot.k)(Se);return e.createElement(fe.k,{alignItems:"center",gap:2,maxWidth:(0,H.Q1)(300)},e.createElement(Fe.x,{height:2,background:Se,borderColor:he==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),e.createElement(re.Z,{fontWeight:"regular",textColor:"neutral700",ellipsis:!0},Ke))}Pe.propTypes={color:ve().string.isRequired,name:ve().string.isRequired};const ke=Pe;var Ee=d(69881),Le=d(53616);const Oe=Se=>{const{formatMessage:Ke}=(0,Te.Z)();return(window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)&&Se.contentType.options?.reviewWorkflows)??!1?{key:"__strapi_reviewWorkflows_stage_temp_key__",name:"strapi_reviewWorkflows_stage",fieldSchema:{type:"relation"},metadatas:{label:Ke({id:(0,Ee.Z)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}),searchable:!1,sortable:!0,mainField:{name:"name",schema:{type:"string"}}},cellFormatter({strapi_reviewWorkflows_stage:n}){if(!n)return e.createElement(re.Z,{textColor:"neutral800"},"-");const{color:gt,name:Ae}=n;return e.createElement(ke,{color:gt??Le.FT,name:Ae})}}:null}},18274:(pt,Ie,d)=>{"use strict";d.d(Ie,{Z:()=>Ke});var e=d(67294),Te=d(31799),re=d(54574),h=d(11047),ve=d(19270),fe=d(77197),Fe=d(96404),H=d(86896),ot=d(88767),Pe=d(53752),ke=d(75194),Ee=d(54878),Le=d(55542);const Oe="strapi_reviewWorkflows_stage";function Se(){const{initialData:he,isCreatingEntry:n,layout:{uid:gt},isSingleType:Ae,onChange:zt}=(0,Te.Wq)(),{put:de}=(0,Te.kY)(),y=he?.[Oe]??null,_=Object.prototype.hasOwnProperty.call(he,Oe),{formatMessage:$e}=(0,H.Z)(),{formatAPIError:Ye}=(0,Te.So)(),It=(0,Te.lm)(),{workflows:kt,isLoading:ft}=(0,Pe.n)(),rt=kt?.[0]??null,{error:Ce,isLoading:Ze,mutateAsync:De}=(0,ot.useMutation)(async({entityId:He,stageId:Xe,uid:Ot})=>{const xt=Ae?"single-types":"collection-types",{data:{data:Pt}}=await de(`/admin/content-manager/${xt}/${Ot}/${He}/stage`,{data:{id:Xe}});return zt({target:{name:Oe,value:Pt[Oe]}},!0),Pt},{onSuccess(){It({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Success: Review stage updated"}})}}),ue=y===null&&!ft&&!n&&$e({id:"content-manager.reviewWorkflows.stage.select.placeholder",defaultMessage:"Select a stage"}),$=Ce&&Ye(Ce)||ue||null,We=async({value:He})=>{try{await De({entityId:he.id,stageId:He,uid:gt})}catch{}};return e.createElement(Le.Z.Root,null,e.createElement(Le.Z.Title,null),_&&!n&&e.createElement(re.g,{error:$,name:Oe,id:Oe},e.createElement(h.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(ve.Q,null,$e({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"})),e.createElement(Te.JV,{components:{LoadingIndicator:()=>e.createElement(fe.a,{small:!0}),Option:ke.K,SingleValue:Ee.R},error:$,inputId:Oe,isLoading:Ze,isSearchable:!1,isClearable:!1,name:Oe,onChange:We,options:rt?rt.stages.map(({id:He,color:Xe,name:Ot})=>({value:He,label:Ot,color:Xe})):[],value:{value:y?.id,label:y?.name,color:y?.color}}),e.createElement(Fe.c,null))),e.createElement(Le.Z.Body,null))}const Ke=Se},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
