import{r as l,b as ne,c as he}from"./index.mJGuBxlm.js";var se={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=l,xe=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),we=Object.prototype.hasOwnProperty,Ce=ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Se={key:!0,ref:!0,__self:!0,__source:!0};function ie(e,t,r){var o,s={},n=null,a=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)we.call(t,o)&&!Se.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:xe,type:e,key:n,ref:a,props:s,_owner:Ce.current}}$.Fragment=ve;$.jsx=ie;$.jsxs=ie;se.exports=$;var E=se.exports;function Ct(e,t){const r=l.createContext(t);function o(n){const{children:a,...i}=n,c=l.useMemo(()=>i,Object.values(i));return E.jsx(r.Provider,{value:c,children:a})}function s(n){const a=l.useContext(r);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${n}\` must be used within \`${e}\``)}return o.displayName=e+"Provider",[o,s]}function St(e,t=[]){let r=[];function o(n,a){const i=l.createContext(a),c=r.length;r=[...r,a];function d(f){const{scope:y,children:x,...v}=f,h=y?.[e][c]||i,g=l.useMemo(()=>v,Object.values(v));return E.jsx(h.Provider,{value:g,children:x})}function p(f,y){const x=y?.[e][c]||i,v=l.useContext(x);if(v)return v;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${n}\``)}return d.displayName=n+"Provider",[d,p]}const s=()=>{const n=r.map(a=>l.createContext(a));return function(i){const c=i?.[e]||n;return l.useMemo(()=>({[`__scope${e}`]:{...i,[e]:c}}),[i,c])}};return s.scopeName=e,[o,ke(s,...t)]}function ke(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(n){const a=o.reduce((i,{useScope:c,scopeName:d})=>{const f=c(n)[`__scope${d}`];return{...i,...f}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}function Ne(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ae(...e){return t=>e.forEach(r=>Ne(r,t))}function Ae(...e){return l.useCallback(ae(...e),e)}var le=l.forwardRef((e,t)=>{const{children:r,...o}=e,s=l.Children.toArray(r),n=s.find(Ee);if(n){const a=n.props.children,i=s.map(c=>c===n?l.Children.count(a)>1?l.Children.only(null):l.isValidElement(a)?a.props.children:null:c);return E.jsx(D,{...o,ref:t,children:l.isValidElement(a)?l.cloneElement(a,void 0,i):null})}return E.jsx(D,{...o,ref:t,children:r})});le.displayName="Slot";var D=l.forwardRef((e,t)=>{const{children:r,...o}=e;if(l.isValidElement(r)){const s=Me(r);return l.cloneElement(r,{...Pe(o,r.props),ref:t?ae(t,s):s})}return l.Children.count(r)>1?l.Children.only(null):null});D.displayName="SlotClone";var Re=({children:e})=>E.jsx(E.Fragment,{children:e});function Ee(e){return l.isValidElement(e)&&e.type===Re}function Pe(e,t){const r={...t};for(const o in t){const s=e[o],n=t[o];/^on[A-Z]/.test(o)?s&&n?r[o]=(...i)=>{n(...i),s(...i)}:s&&(r[o]=s):o==="style"?r[o]={...s,...n}:o==="className"&&(r[o]=[s,n].filter(Boolean).join(" "))}return{...e,...r}}function Me(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function kt(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return t?.(s)}}function ce(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...r)=>t.current?.(...r),[])}function Nt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[o,s]=ze({defaultProp:t,onChange:r}),n=e!==void 0,a=n?e:o,i=ce(r),c=l.useCallback(d=>{if(n){const f=typeof d=="function"?d(e):d;f!==e&&i(f)}else s(d)},[n,e,s,i]);return[a,c]}function ze({defaultProp:e,onChange:t}){const r=l.useState(e),[o]=r,s=l.useRef(o),n=ce(t);return l.useEffect(()=>{s.current!==o&&(n(o),s.current=o)},[o,s,n]),r}var Ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],At=Ie.reduce((e,t)=>{const r=l.forwardRef((o,s)=>{const{asChild:n,...a}=o,i=n?le:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),E.jsx(i,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Rt(e,t){e&&ne.flushSync(()=>e.dispatchEvent(t))}var H=globalThis?.document?l.useLayoutEffect:()=>{};function Oe(e,t){return l.useReducer((r,o)=>t[r][o]??r,e)}var je=e=>{const{present:t,children:r}=e,o=_e(t),s=typeof r=="function"?r({present:o.isPresent}):l.Children.only(r),n=Ae(o.ref,Te(s));return typeof r=="function"||o.isPresent?l.cloneElement(s,{ref:n}):null};je.displayName="Presence";function _e(e){const[t,r]=l.useState(),o=l.useRef({}),s=l.useRef(e),n=l.useRef("none"),a=e?"mounted":"unmounted",[i,c]=Oe(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const d=G(o.current);n.current=i==="mounted"?d:"none"},[i]),H(()=>{const d=o.current,p=s.current;if(p!==e){const y=n.current,x=G(d);e?c("MOUNT"):x==="none"||d?.display==="none"?c("UNMOUNT"):c(p&&y!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,c]),H(()=>{if(t){const d=f=>{const x=G(o.current).includes(f.animationName);f.target===t&&x&&ne.flushSync(()=>c("ANIMATION_END"))},p=f=>{f.target===t&&(n.current=G(o.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:l.useCallback(d=>{d&&(o.current=getComputedStyle(d)),r(d)},[])}}function G(e){return e?.animationName||"none"}function Te(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Le=he.useId||(()=>{}),Ge=0;function Et(e){const[t,r]=l.useState(Le());return H(()=>{r(o=>o??String(Ge++))},[e]),t?`radix-${t}`:""}/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),de=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var We={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:a,...i},c)=>l.createElement("svg",{ref:c,...We,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:de("lucide",s),...i},[...a.map(([d,p])=>l.createElement(d,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(e,t)=>{const r=l.forwardRef(({className:o,...s},n)=>l.createElement(Ue,{ref:n,iconNode:t,className:de(`lucide-${$e(e)}`,o),...s}));return r.displayName=`${e}`,r};function ue(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ue(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Ve(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ue(e))&&(o&&(o+=" "),o+=t);return o}const Z="-",Be=e=>{const t=De(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const i=a.split(Z);return i[0]===""&&i.length!==1&&i.shift(),pe(i,t)||Fe(a)},getConflictingClassGroupIds:(a,i)=>{const c=r[a]||[];return i&&o[a]?[...c,...o[a]]:c}}},pe=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),s=o?pe(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;const n=e.join(Z);return t.validators.find(({validator:a})=>a(n))?.classGroupId},re=/^\[(.+)\]$/,Fe=e=>{if(re.test(e)){const t=re.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},De=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return qe(Object.entries(e.classGroups),r).forEach(([n,a])=>{q(a,o,n,t)}),o},q=(e,t,r,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?t:oe(t,s);n.classGroupId=r;return}if(typeof s=="function"){if(He(s)){q(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,a])=>{q(a,oe(t,n),r,o)})})},oe=(e,t)=>{let r=e;return t.split(Z).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},He=e=>e.isThemeGetter,qe=(e,t)=>t?e.map(([r,o])=>{const s=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([a,i])=>[t+a,i])):n);return[r,s]}):e,Ze=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const s=(n,a)=>{r.set(n,a),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let a=r.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return s(n,a),a},set(n,a){r.has(n)?r.set(n,a):s(n,a)}}},fe="!",Je=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,s=t[0],n=t.length,a=i=>{const c=[];let d=0,p=0,f;for(let g=0;g<i.length;g++){let w=i[g];if(d===0){if(w===s&&(o||i.slice(g,g+n)===t)){c.push(i.slice(p,g)),p=g+n;continue}if(w==="/"){f=g;continue}}w==="["?d++:w==="]"&&d--}const y=c.length===0?i:i.substring(p),x=y.startsWith(fe),v=x?y.substring(1):y,h=f&&f>p?f-p:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:h}};return r?i=>r({className:i,parseClassName:a}):a},Ke=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},Xe=e=>({cache:Ze(e.cacheSize),parseClassName:Je(e),...Be(e)}),Ye=/\s+/,Qe=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,n=[],a=e.trim().split(Ye);let i="";for(let c=a.length-1;c>=0;c-=1){const d=a[c],{modifiers:p,hasImportantModifier:f,baseClassName:y,maybePostfixModifierPosition:x}=r(d);let v=!!x,h=o(v?y.substring(0,x):y);if(!h){if(!v){i=d+(i.length>0?" "+i:i);continue}if(h=o(y),!h){i=d+(i.length>0?" "+i:i);continue}v=!1}const g=Ke(p).join(":"),w=f?g+fe:g,C=w+h;if(n.includes(C))continue;n.push(C);const z=s(h,v);for(let R=0;R<z.length;++R){const _=z[R];n.push(w+_)}i=d+(i.length>0?" "+i:i)}return i};function et(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=me(t))&&(o&&(o+=" "),o+=r);return o}const me=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=me(e[o]))&&(r&&(r+=" "),r+=t);return r};function tt(e,...t){let r,o,s,n=a;function a(c){const d=t.reduce((p,f)=>f(p),e());return r=Xe(d),o=r.cache.get,s=r.cache.set,n=i,i(c)}function i(c){const d=o(c);if(d)return d;const p=Qe(c,r);return s(c,p),p}return function(){return n(et.apply(null,arguments))}}const m=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},be=/^\[(?:([a-z-]+):)?(.+)\]$/i,rt=/^\d+\/\d+$/,ot=new Set(["px","full","screen"]),nt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,st=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,it=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,at=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,lt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,k=e=>P(e)||ot.has(e)||rt.test(e),N=e=>M(e,"length",gt),P=e=>!!e&&!Number.isNaN(Number(e)),F=e=>M(e,"number",P),O=e=>!!e&&Number.isInteger(Number(e)),ct=e=>e.endsWith("%")&&P(e.slice(0,-1)),u=e=>be.test(e),A=e=>nt.test(e),dt=new Set(["length","size","percentage"]),ut=e=>M(e,dt,ge),pt=e=>M(e,"position",ge),ft=new Set(["image","url"]),mt=e=>M(e,ft,yt),bt=e=>M(e,"",ht),j=()=>!0,M=(e,t,r)=>{const o=be.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},gt=e=>st.test(e)&&!it.test(e),ge=()=>!1,ht=e=>at.test(e),yt=e=>lt.test(e),xt=()=>{const e=m("colors"),t=m("spacing"),r=m("blur"),o=m("brightness"),s=m("borderColor"),n=m("borderRadius"),a=m("borderSpacing"),i=m("borderWidth"),c=m("contrast"),d=m("grayscale"),p=m("hueRotate"),f=m("invert"),y=m("gap"),x=m("gradientColorStops"),v=m("gradientColorStopPositions"),h=m("inset"),g=m("margin"),w=m("opacity"),C=m("padding"),z=m("saturate"),R=m("scale"),_=m("sepia"),J=m("skew"),K=m("space"),X=m("translate"),W=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",u,t],b=()=>[u,t],Y=()=>["",k,N],T=()=>["auto",P,u],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",u],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[P,u];return{cacheSize:500,separator:":",theme:{colors:[j],spacing:[k,N],blur:["none","",A,u],brightness:S(),borderColor:[e],borderRadius:["none","","full",A,u],borderSpacing:b(),borderWidth:Y(),contrast:S(),grayscale:I(),hueRotate:S(),invert:I(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[ct,N],inset:V(),margin:V(),opacity:S(),padding:b(),saturate:S(),scale:S(),sepia:I(),skew:S(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",u]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),u]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",O,u]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",u]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",O,u]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",O,u]},u]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[O,u]},u]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",u]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",u]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",u,t]}],"min-w":[{"min-w":[u,t,"min","max","fit"]}],"max-w":[{"max-w":[u,t,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[u,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[u,t,"auto","min","max","fit"]}],"font-size":[{text:["base",A,N]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",u]}],"line-clamp":[{"line-clamp":["none",P,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,u]}],"list-image":[{"list-image":["none",u]}],"list-style-type":[{list:["none","disc","decimal",u]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",k,N]}],"underline-offset":[{"underline-offset":["auto",k,u]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",u]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",u]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),pt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ut]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...L(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...L()]}],"outline-offset":[{"outline-offset":[k,u]}],"outline-w":[{outline:[k,N]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[k,N]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,bt]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",A,u]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[f]}],saturate:[{saturate:[z]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[z]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",u]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",u]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",u]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[O,u]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",u]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",u]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",u]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[k,N,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vt=tt(xt);function Mt(...e){return vt(Ve(e))}export{At as P,le as S,Nt as a,Et as b,St as c,kt as d,je as e,H as f,Pt as g,Mt as h,ce as i,E as j,Rt as k,Ct as l,Ae as u};
