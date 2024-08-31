import{g as De,i as B,u as F,j as l,P as O,d as A,k as mt,f as gt,c as pt,e as ie,S as Ne,l as yt,a as bt,b as Z,h as _}from"./utils.FU4RFXdx.js";import{r as i,a as Et}from"./index.mJGuBxlm.js";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=De("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function wt(e,t=globalThis?.document){const n=B(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var St="DismissableLayer",oe="dismissableLayer.update",Dt="dismissableLayer.pointerDownOutside",Nt="dismissableLayer.focusOutside",de,Pe=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Re=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:u,onDismiss:s,...p}=e,d=i.useContext(Pe),[f,h]=i.useState(null),m=f?.ownerDocument??globalThis?.document,[,y]=i.useState({}),S=F(t,b=>h(b)),c=Array.from(d.layers),[v]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),g=c.indexOf(v),w=f?c.indexOf(f):-1,E=d.layersWithOutsidePointerEventsDisabled.size>0,C=w>=g,x=Ot(b=>{const R=b.target,W=[...d.branches].some($=>$.contains(R));!C||W||(o?.(b),u?.(b),b.defaultPrevented||s?.())},m),P=Tt(b=>{const R=b.target;[...d.branches].some($=>$.contains(R))||(a?.(b),u?.(b),b.defaultPrevented||s?.())},m);return wt(b=>{w===d.layers.size-1&&(r?.(b),!b.defaultPrevented&&s&&(b.preventDefault(),s()))},m),i.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(de=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),fe(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=de)}},[f,m,n,d]),i.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),fe())},[f,d]),i.useEffect(()=>{const b=()=>y({});return document.addEventListener(oe,b),()=>document.removeEventListener(oe,b)},[]),l.jsx(O.div,{...p,ref:S,style:{pointerEvents:E?C?"auto":"none":void 0,...e.style},onFocusCapture:A(e.onFocusCapture,P.onFocusCapture),onBlurCapture:A(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:A(e.onPointerDownCapture,x.onPointerDownCapture)})});Re.displayName=St;var Pt="DismissableLayerBranch",Rt=i.forwardRef((e,t)=>{const n=i.useContext(Pe),r=i.useRef(null),o=F(t,r);return i.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),l.jsx(O.div,{...e,ref:o})});Rt.displayName=Pt;function Ot(e,t=globalThis?.document){const n=B(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let p=function(){Oe(Dt,n,d,{discrete:!0})};const d={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=p,t.addEventListener("click",o.current,{once:!0})):p()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Tt(e,t=globalThis?.document){const n=B(e),r=i.useRef(!1);return i.useEffect(()=>{const o=a=>{a.target&&!r.current&&Oe(Nt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function fe(){const e=new CustomEvent(oe);document.dispatchEvent(e)}function Oe(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?mt(o,a):o.dispatchEvent(a)}var q="focusScope.autoFocusOnMount",Q="focusScope.autoFocusOnUnmount",ve={bubbles:!1,cancelable:!0},At="FocusScope",Te=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[s,p]=i.useState(null),d=B(o),f=B(a),h=i.useRef(null),m=F(t,c=>p(c)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let c=function(E){if(y.paused||!s)return;const C=E.target;s.contains(C)?h.current=C:T(h.current,{select:!0})},v=function(E){if(y.paused||!s)return;const C=E.relatedTarget;C!==null&&(s.contains(C)||T(h.current,{select:!0}))},g=function(E){if(document.activeElement===document.body)for(const x of E)x.removedNodes.length>0&&T(s)};document.addEventListener("focusin",c),document.addEventListener("focusout",v);const w=new MutationObserver(g);return s&&w.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",v),w.disconnect()}}},[r,s,y.paused]),i.useEffect(()=>{if(s){me.add(y);const c=document.activeElement;if(!s.contains(c)){const g=new CustomEvent(q,ve);s.addEventListener(q,d),s.dispatchEvent(g),g.defaultPrevented||(kt(Ft(Ae(s)),{select:!0}),document.activeElement===c&&T(s))}return()=>{s.removeEventListener(q,d),setTimeout(()=>{const g=new CustomEvent(Q,ve);s.addEventListener(Q,f),s.dispatchEvent(g),g.defaultPrevented||T(c??document.body,{select:!0}),s.removeEventListener(Q,f),me.remove(y)},0)}}},[s,d,f,y]);const S=i.useCallback(c=>{if(!n&&!r||y.paused)return;const v=c.key==="Tab"&&!c.altKey&&!c.ctrlKey&&!c.metaKey,g=document.activeElement;if(v&&g){const w=c.currentTarget,[E,C]=It(w);E&&C?!c.shiftKey&&g===C?(c.preventDefault(),n&&T(E,{select:!0})):c.shiftKey&&g===E&&(c.preventDefault(),n&&T(C,{select:!0})):g===w&&c.preventDefault()}},[n,r,y.paused]);return l.jsx(O.div,{tabIndex:-1,...u,ref:m,onKeyDown:S})});Te.displayName=At;function kt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(T(r,{select:t}),document.activeElement!==n)return}function It(e){const t=Ae(e),n=he(t,e),r=he(t.reverse(),e);return[n,r]}function Ae(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function he(e,t){for(const n of e)if(!Lt(n,{upTo:t}))return n}function Lt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function jt(e){return e instanceof HTMLInputElement&&"select"in e}function T(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&jt(e)&&t&&e.select()}}var me=Mt();function Mt(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=ge(e,t),e.unshift(t)},remove(t){e=ge(e,t),e[0]?.resume()}}}function ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ft(e){return e.filter(t=>t.tagName!=="A")}var _t="Portal",ke=i.forwardRef((e,t)=>{const{container:n,...r}=e,[o,a]=i.useState(!1);gt(()=>a(!0),[]);const u=n||o&&globalThis?.document?.body;return u?Et.createPortal(l.jsx(O.div,{...r,ref:t}),u):null});ke.displayName=_t;var J=0;function Wt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??pe()),document.body.insertAdjacentElement("beforeend",e[1]??pe()),J++,()=>{J===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),J--}},[])}function pe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var N=function(){return N=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},N.apply(this,arguments)};function Ie(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Bt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var z="right-scroll-bar-position",G="width-before-scroll-bar",Vt="with-scroll-bars-hidden",Ut="--removed-body-scroll-bar-size";function ee(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ht(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Kt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ye=new WeakMap;function zt(e,t){var n=Ht(null,function(r){return e.forEach(function(o){return ee(o,r)})});return Kt(function(){var r=ye.get(n);if(r){var o=new Set(r),a=new Set(e),u=n.current;o.forEach(function(s){a.has(s)||ee(s,null)}),a.forEach(function(s){o.has(s)||ee(s,u)})}ye.set(n,e)},[e]),n}function Gt(e){return e}function Xt(e,t){t===void 0&&(t=Gt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var u=t(a,r);return n.push(u),function(){n=n.filter(function(s){return s!==u})}},assignSyncMedium:function(a){for(r=!0;n.length;){var u=n;n=[],u.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var u=[];if(n.length){var s=n;n=[],s.forEach(a),u=n}var p=function(){var f=u;u=[],f.forEach(a)},d=function(){return Promise.resolve().then(p)};d(),n={push:function(f){u.push(f),d()},filter:function(f){return u=u.filter(f),n}}}};return o}function Yt(e){e===void 0&&(e={});var t=Xt(null);return t.options=N({async:!0,ssr:!1},e),t}var Le=function(e){var t=e.sideCar,n=Ie(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,N({},n))};Le.isSideCarExport=!0;function $t(e,t){return e.useMedium(t),Le}var je=Yt(),te=function(){},Y=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:te,onWheelCapture:te,onTouchMoveCapture:te}),o=r[0],a=r[1],u=e.forwardProps,s=e.children,p=e.className,d=e.removeScrollBar,f=e.enabled,h=e.shards,m=e.sideCar,y=e.noIsolation,S=e.inert,c=e.allowPinchZoom,v=e.as,g=v===void 0?"div":v,w=e.gapMode,E=Ie(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,x=zt([n,t]),P=N(N({},E),o);return i.createElement(i.Fragment,null,f&&i.createElement(C,{sideCar:je,removeScrollBar:d,shards:h,noIsolation:y,inert:S,setCallbacks:a,allowPinchZoom:!!c,lockRef:n,gapMode:w}),u?i.cloneElement(i.Children.only(s),N(N({},P),{ref:x})):i.createElement(g,N({},P,{className:p,ref:x}),s))});Y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Y.classNames={fullWidth:G,zeroRight:z};var Zt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Zt();return t&&e.setAttribute("nonce",t),e}function Qt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Jt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var en=function(){var e=0,t=null;return{add:function(n){e==0&&(t=qt())&&(Qt(t,n),Jt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tn=function(){var e=en();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Me=function(){var e=tn(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},nn={left:0,top:0,right:0,gap:0},ne=function(e){return parseInt(e||"",10)||0},rn=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ne(n),ne(r),ne(o)]},on=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nn;var t=rn(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},an=Me(),M="data-scroll-locked",sn=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Vt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(M,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(z,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(z," .").concat(z,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(M,`] {
    `).concat(Ut,": ").concat(s,`px;
  }
`)},be=function(){var e=parseInt(document.body.getAttribute(M)||"0",10);return isFinite(e)?e:0},cn=function(){i.useEffect(function(){return document.body.setAttribute(M,(be()+1).toString()),function(){var e=be()-1;e<=0?document.body.removeAttribute(M):document.body.setAttribute(M,e.toString())}},[])},un=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;cn();var a=i.useMemo(function(){return on(o)},[o]);return i.createElement(an,{styles:sn(a,!t,o,n?"":"!important")})},ae=!1;if(typeof window<"u")try{var V=Object.defineProperty({},"passive",{get:function(){return ae=!0,!0}});window.addEventListener("test",V,V),window.removeEventListener("test",V,V)}catch{ae=!1}var I=ae?{passive:!1}:!1,ln=function(e){return e.tagName==="TEXTAREA"},Fe=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ln(e)&&n[t]==="visible")},dn=function(e){return Fe(e,"overflowY")},fn=function(e){return Fe(e,"overflowX")},Ee=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=_e(e,r);if(o){var a=We(e,r),u=a[1],s=a[2];if(u>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},vn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},hn=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},_e=function(e,t){return e==="v"?dn(t):fn(t)},We=function(e,t){return e==="v"?vn(t):hn(t)},mn=function(e,t){return e==="h"&&t==="rtl"?-1:1},gn=function(e,t,n,r,o){var a=mn(e,window.getComputedStyle(t).direction),u=a*r,s=n.target,p=t.contains(s),d=!1,f=u>0,h=0,m=0;do{var y=We(e,s),S=y[0],c=y[1],v=y[2],g=c-v-a*S;(S||g)&&_e(e,s)&&(h+=g,m+=S),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!p&&s!==document.body||p&&(t.contains(s)||t===s));return(f&&(Math.abs(h)<1||!o)||!f&&(Math.abs(m)<1||!o))&&(d=!0),d},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ce=function(e){return[e.deltaX,e.deltaY]},xe=function(e){return e&&"current"in e?e.current:e},pn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},yn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},bn=0,L=[];function En(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(bn++)[0],a=i.useState(Me)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var c=Bt([e.lockRef.current],(e.shards||[]).map(xe),!0).filter(Boolean);return c.forEach(function(v){return v.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),c.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=i.useCallback(function(c,v){if("touches"in c&&c.touches.length===2)return!u.current.allowPinchZoom;var g=U(c),w=n.current,E="deltaX"in c?c.deltaX:w[0]-g[0],C="deltaY"in c?c.deltaY:w[1]-g[1],x,P=c.target,b=Math.abs(E)>Math.abs(C)?"h":"v";if("touches"in c&&b==="h"&&P.type==="range")return!1;var R=Ee(b,P);if(!R)return!0;if(R?x=b:(x=b==="v"?"h":"v",R=Ee(b,P)),!R)return!1;if(!r.current&&"changedTouches"in c&&(E||C)&&(r.current=x),!x)return!0;var W=r.current||x;return gn(W,v,c,W==="h"?E:C,!0)},[]),p=i.useCallback(function(c){var v=c;if(!(!L.length||L[L.length-1]!==a)){var g="deltaY"in v?Ce(v):U(v),w=t.current.filter(function(x){return x.name===v.type&&(x.target===v.target||v.target===x.shadowParent)&&pn(x.delta,g)})[0];if(w&&w.should){v.cancelable&&v.preventDefault();return}if(!w){var E=(u.current.shards||[]).map(xe).filter(Boolean).filter(function(x){return x.contains(v.target)}),C=E.length>0?s(v,E[0]):!u.current.noIsolation;C&&v.cancelable&&v.preventDefault()}}},[]),d=i.useCallback(function(c,v,g,w){var E={name:c,delta:v,target:g,should:w,shadowParent:Cn(g)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(C){return C!==E})},1)},[]),f=i.useCallback(function(c){n.current=U(c),r.current=void 0},[]),h=i.useCallback(function(c){d(c.type,Ce(c),c.target,s(c,e.lockRef.current))},[]),m=i.useCallback(function(c){d(c.type,U(c),c.target,s(c,e.lockRef.current))},[]);i.useEffect(function(){return L.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:m}),document.addEventListener("wheel",p,I),document.addEventListener("touchmove",p,I),document.addEventListener("touchstart",f,I),function(){L=L.filter(function(c){return c!==a}),document.removeEventListener("wheel",p,I),document.removeEventListener("touchmove",p,I),document.removeEventListener("touchstart",f,I)}},[]);var y=e.removeScrollBar,S=e.inert;return i.createElement(i.Fragment,null,S?i.createElement(a,{styles:yn(o)}):null,y?i.createElement(un,{gapMode:e.gapMode}):null)}function Cn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const xn=$t(je,En);var Be=i.forwardRef(function(e,t){return i.createElement(Y,N({},e,{ref:t,sideCar:xn}))});Be.classNames=Y.classNames;var wn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},j=new WeakMap,H=new WeakMap,K={},re=0,Ve=function(e){return e&&(e.host||Ve(e.parentNode))},Sn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ve(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Dn=function(e,t,n,r){var o=Sn(t,Array.isArray(e)?e:[e]);K[n]||(K[n]=new WeakMap);var a=K[n],u=[],s=new Set,p=new Set(o),d=function(h){!h||s.has(h)||(s.add(h),d(h.parentNode))};o.forEach(d);var f=function(h){!h||p.has(h)||Array.prototype.forEach.call(h.children,function(m){if(s.has(m))f(m);else try{var y=m.getAttribute(r),S=y!==null&&y!=="false",c=(j.get(m)||0)+1,v=(a.get(m)||0)+1;j.set(m,c),a.set(m,v),u.push(m),c===1&&S&&H.set(m,!0),v===1&&m.setAttribute(n,"true"),S||m.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",m,g)}})};return f(t),s.clear(),re++,function(){u.forEach(function(h){var m=j.get(h)-1,y=a.get(h)-1;j.set(h,m),a.set(h,y),m||(H.has(h)||h.removeAttribute(r),H.delete(h)),y||h.removeAttribute(n)}),re--,re||(j=new WeakMap,j=new WeakMap,H=new WeakMap,K={})}},Nn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=wn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Dn(r,o,n,"aria-hidden")):function(){return null}},se="Dialog",[Ue,Yn]=pt(se),[Pn,D]=Ue(se),He=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,s=i.useRef(null),p=i.useRef(null),[d=!1,f]=bt({prop:r,defaultProp:o,onChange:a});return l.jsx(Pn,{scope:t,triggerRef:s,contentRef:p,contentId:Z(),titleId:Z(),descriptionId:Z(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(h=>!h),[f]),modal:u,children:n})};He.displayName=se;var Ke="DialogTrigger",ze=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=D(Ke,n),a=F(t,o.triggerRef);return l.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":le(o.open),...r,ref:a,onClick:A(e.onClick,o.onOpenToggle)})});ze.displayName=Ke;var ce="DialogPortal",[Rn,Ge]=Ue(ce,{forceMount:void 0}),Xe=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=D(ce,t);return l.jsx(Rn,{scope:t,forceMount:n,children:i.Children.map(r,u=>l.jsx(ie,{present:n||a.open,children:l.jsx(ke,{asChild:!0,container:o,children:u})}))})};Xe.displayName=ce;var X="DialogOverlay",Ye=i.forwardRef((e,t)=>{const n=Ge(X,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=D(X,e.__scopeDialog);return a.modal?l.jsx(ie,{present:r||a.open,children:l.jsx(On,{...o,ref:t})}):null});Ye.displayName=X;var On=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=D(X,n);return l.jsx(Be,{as:Ne,allowPinchZoom:!0,shards:[o.contentRef],children:l.jsx(O.div,{"data-state":le(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),k="DialogContent",$e=i.forwardRef((e,t)=>{const n=Ge(k,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=D(k,e.__scopeDialog);return l.jsx(ie,{present:r||a.open,children:a.modal?l.jsx(Tn,{...o,ref:t}):l.jsx(An,{...o,ref:t})})});$e.displayName=k;var Tn=i.forwardRef((e,t)=>{const n=D(k,e.__scopeDialog),r=i.useRef(null),o=F(t,n.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return Nn(a)},[]),l.jsx(Ze,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:A(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,a=>{const u=a.detail.originalEvent,s=u.button===0&&u.ctrlKey===!0;(u.button===2||s)&&a.preventDefault()}),onFocusOutside:A(e.onFocusOutside,a=>a.preventDefault())})}),An=i.forwardRef((e,t)=>{const n=D(k,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return l.jsx(Ze,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(r.current||n.triggerRef.current?.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=a.target;n.triggerRef.current?.contains(u)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Ze=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,s=D(k,n),p=i.useRef(null),d=F(t,p);return Wt(),l.jsxs(l.Fragment,{children:[l.jsx(Te,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:l.jsx(Re,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":le(s.open),...u,ref:d,onDismiss:()=>s.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(kn,{titleId:s.titleId}),l.jsx(Ln,{contentRef:p,descriptionId:s.descriptionId})]})]})}),ue="DialogTitle",qe=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=D(ue,n);return l.jsx(O.h2,{id:o.titleId,...r,ref:t})});qe.displayName=ue;var Qe="DialogDescription",Je=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=D(Qe,n);return l.jsx(O.p,{id:o.descriptionId,...r,ref:t})});Je.displayName=Qe;var et="DialogClose",tt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=D(et,n);return l.jsx(O.button,{type:"button",...r,ref:t,onClick:A(e.onClick,()=>o.onOpenChange(!1))})});tt.displayName=et;function le(e){return e?"open":"closed"}var nt="DialogTitleWarning",[$n,rt]=yt(nt,{contentName:k,titleName:ue,docsSlug:"dialog"}),kn=({titleId:e})=>{const t=rt(nt),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},In="DialogDescriptionWarning",Ln=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${rt(In).contentName}}.`;return i.useEffect(()=>{const o=e.current?.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},jn=He,Mn=ze,Fn=Xe,ot=Ye,at=$e,it=qe,st=Je,_n=tt;function ct(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ct(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Wn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ct(e))&&(r&&(r+=" "),r+=t);return r}const we=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Se=Wn,ut=(e,t)=>n=>{var r;if(t?.variants==null)return Se(e,n?.class,n?.className);const{variants:o,defaultVariants:a}=t,u=Object.keys(o).map(d=>{const f=n?.[d],h=a?.[d];if(f===null)return null;const m=we(f)||we(h);return o[d][m]}),s=n&&Object.entries(n).reduce((d,f)=>{let[h,m]=f;return m===void 0||(d[h]=m),d},{}),p=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,f)=>{let{class:h,className:m,...y}=f;return Object.entries(y).every(S=>{let[c,v]=S;return Array.isArray(v)?v.includes({...a,...s}[c]):{...a,...s}[c]===v})?[...d,h,m]:d},[]);return Se(e,u,p,n?.class,n?.className)},Bn=jn,Vn=Mn,Un=Fn,lt=i.forwardRef(({className:e,...t},n)=>l.jsx(ot,{className:_("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));lt.displayName=ot.displayName;const Hn=ut("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),dt=i.forwardRef(({side:e="right",className:t,children:n,...r},o)=>l.jsxs(Un,{children:[l.jsx(lt,{}),l.jsxs(at,{ref:o,className:_(Hn({side:e}),t),...r,children:[n,l.jsxs(_n,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[l.jsx(xt,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));dt.displayName=at.displayName;const ft=({className:e,...t})=>l.jsx("div",{className:_("flex flex-col space-y-2 text-center sm:text-left",e),...t});ft.displayName="SheetHeader";const vt=i.forwardRef(({className:e,...t},n)=>l.jsx(it,{ref:n,className:_("text-lg font-semibold text-foreground",e),...t}));vt.displayName=it.displayName;const Kn=i.forwardRef(({className:e,...t},n)=>l.jsx(st,{ref:n,className:_("text-sm text-muted-foreground",e),...t}));Kn.displayName=st.displayName;const zn=ut("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ht=i.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},a)=>{const u=r?Ne:"button";return l.jsx(u,{className:_(zn({variant:t,size:n,className:e})),ref:a,...o})});ht.displayName="Button";function Zn(){return l.jsxs(Bn,{children:[l.jsx(Vn,{asChild:!0,children:l.jsx(ht,{variant:"outline",size:"icon",children:l.jsx(Ct,{className:"w-4 h-4"})})}),l.jsxs(dt,{side:"left",children:[l.jsx(ft,{children:l.jsx(vt,{children:"Chemical"})}),l.jsxs("div",{class:"mt-4 flex flex-col gap-2",children:[l.jsx("a",{href:"/",children:"Home"}),l.jsx("a",{href:"/docs/introduction/get-started",children:"Documentation"}),l.jsx("a",{href:"/showcase",children:"Showcase"}),l.jsx("a",{href:"/credits",children:"Credits"}),l.jsx("a",{href:"https://github.com/chemicaljs/chemical",children:"GitHub"})]})]})]})}export{Zn as MobileNav};
