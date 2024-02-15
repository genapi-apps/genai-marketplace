"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{3428:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},4927:function(e,t,n){let r,o;n.d(t,{V:function(){return ec}});var l,a,i,u,c,s=n(2265),d=n.t(s,2),f=n(597),p=n(1931),m=n(6618),g=n(3850),v=n(5863),h=n(5606),E=n(8957),w=n(8227),b=n(5410),T=n(2950),y=n(9376),L=n(634),C=n(9888),O=n(6890),D=n(5195);function P(e,t){let n=(0,s.useRef)([]),r=(0,T.z)(e);(0,s.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var M=n(2769),k=n(3051);function R(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var S=((l=S||{})[l.None=1]="None",l[l.InitialFocus=2]="InitialFocus",l[l.TabLock=4]="TabLock",l[l.FocusLock=8]="FocusLock",l[l.RestoreFocus=16]="RestoreFocus",l[l.All=30]="All",l);let A=Object.assign((0,p.yV)(function(e,t){let n=(0,s.useRef)(null),r=(0,m.T)(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;(0,E.H)()||(a=1);let u=(0,C.i)(n);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,s.useRef)(F.slice());return P(([e],[n])=>{!0===n&&!1===e&&(0,D.Y)(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=F.slice())},[e,F,t]),(0,T.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);P(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,b.C5)(n())},[t]),(0,k.L)(()=>{t&&(0,b.C5)(n())})}({ownerDocument:u},!!(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,s.useRef)(null),l=(0,L.t)();return P(()=>{if(!r)return;let a=t.current;a&&(0,D.Y)(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(a.contains(t)){o.current=t;return}null!=n&&n.current?(0,b.C5)(n.current):(0,b.jA)(a,b.TO.First)===b.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:u,container:n,initialFocus:o},!!(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,L.t)();(0,O.O)(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let a=R(n);t.current instanceof HTMLElement&&a.add(t.current);let i=r.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?N(a,u)?(r.current=u,(0,b.C5)(u)):(e.preventDefault(),e.stopPropagation(),(0,b.C5)(i)):(0,b.C5)(r.current)},!0)}({ownerDocument:u,container:n,containers:l,previousActiveElement:c},!!(8&a));let d=(0,y.l)(),g=(0,T.z)(e=>{let t=n.current;t&&(0,f.E)(d.current,{[y.N.Forwards]:()=>{(0,b.jA)(t,b.TO.First,{skipElements:[e.relatedTarget]})},[y.N.Backwards]:()=>{(0,b.jA)(t,b.TO.Last,{skipElements:[e.relatedTarget]})}})}),v=(0,M.G)(),h=(0,s.useRef)(!1);return s.createElement(s.Fragment,null,!!(4&a)&&s.createElement(w._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:w.A.Focusable}),(0,p.sY)({ourProps:{ref:r,onKeyDown(e){"Tab"==e.key&&(h.current=!0,v.requestAnimationFrame(()=>{h.current=!1}))},onBlur(e){let t=R(l);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(N(t,r)||(h.current?(0,b.jA)(n.current,(0,f.E)(d.current,{[y.N.Forwards]:()=>b.TO.Next,[y.N.Backwards]:()=>b.TO.Previous})|b.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,b.C5)(e.target)))}},theirProps:i,defaultTag:"div",name:"FocusTrap"}),!!(4&a)&&s.createElement(w._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:w.A.Focusable}))}),{features:S}),F=[];function N(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&F[0]!==e.target&&(F.unshift(e.target),(F=F.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var x=n(7250),Y=n(4705),H=n(2600);let V=(0,s.createContext)(null),j=Object.assign((0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,s.useContext)(V);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),a=(0,m.T)(t);(0,H.e)(()=>l.register(r),[r,l.register]);let i={ref:a,...l.props,id:r};return(0,p.sY)({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{});var z=n(5306);let I=(0,s.createContext)(()=>{});I.displayName="StackContext";var _=((a=_||{})[a.Add=0]="Add",a[a.Remove=1]="Remove",a);function $({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,s.useContext)(I),a=(0,T.z)((...e)=>{null==t||t(...e),l(...e)});return(0,H.e)(()=>{let e=void 0===o||!0===o;return e&&a(0,n,r),()=>{e&&a(1,n,r)}},[a,n,r,o]),s.createElement(I.Provider,{value:a},e)}var B=n(583);let{useState:W,useEffect:Z,useLayoutEffect:U,useDebugValue:q}=d;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let G=d.useSyncExternalStore;var J=n(5390);let K=(i={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,J.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},a=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.microTask(()=>{if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=(0,J.k)();n.style(e.documentElement,"scroll-behavior","auto"),t.add(()=>t.microTask(()=>n.dispose()))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let n=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let r=t.target.closest("a");if(!r)return;let{hash:l}=new URL(r.href),a=e.querySelector(l);a&&!o(a)&&(n=a)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=n.clientWidth-n.offsetWidth,l=o-r;t.style(n,"paddingRight",`${l}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];a.forEach(({before:e})=>null==e?void 0:e(l)),a.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=i[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});K.subscribe(()=>{let e=K.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&K.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&K.dispatch("TEARDOWN",n)}});let Q=new Map,X=new Map;function ee(e,t=!0){(0,H.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=X.get(r))?n:0;return X.set(r,o+1),0!==o||(Q.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=X.get(r))?e:1;if(1===t?X.delete(r):X.set(r,t-1),1!==t)return;let n=Q.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,Q.delete(r))}},[e,t])}var et=n(9985),en=((u=en||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),er=((c=er||{})[c.SetTitleId=0]="SetTitleId",c);let eo={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},el=(0,s.createContext)(null);function ea(e){let t=(0,s.useContext)(el);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ea),t}return t}function ei(e,t){return(0,f.E)(t.type,eo,e,t)}el.displayName="DialogContext";let eu=p.AN.RenderStrategy|p.AN.Static,ec=Object.assign((0,p.yV)(function(e,t){var n;let r=(0,h.M)(),{id:o=`headlessui-dialog-${r}`,open:l,onClose:a,initialFocus:i,__demoMode:u=!1,...c}=e,[d,v]=(0,s.useState)(0),w=(0,z.oJ)();void 0===l&&null!==w&&(l=(w&z.ZM.Open)===z.ZM.Open);let b=(0,s.useRef)(null),y=(0,m.T)(b,t),L=(0,C.i)(b),D=e.hasOwnProperty("open")||null!==w,P=e.hasOwnProperty("onClose");if(!D&&!P)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!P)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof l)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if("function"!=typeof a)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let M=l?0:1,[k,R]=(0,s.useReducer)(ei,{titleId:null,descriptionId:null,panelRef:(0,s.createRef)()}),S=(0,T.z)(()=>a(!1)),F=(0,T.z)(e=>R({type:0,id:e})),N=!!(0,E.H)()&&!u&&0===M,j=d>1,I=null!==(0,s.useContext)(el),[W,Z]=(0,x.k)(),{resolveContainers:U,mainTreeNodeRef:q,MainTreeNode:J}=(0,et.v)({portals:W,defaultContainers:[null!=(n=k.panelRef.current)?n:b.current]}),Q=null!==w&&(w&z.ZM.Closing)===z.ZM.Closing,X=!I&&!Q&&N;ee((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==L?void 0:L.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(q.current)&&e instanceof HTMLElement))?t:null},[q]),X);let en=!!j||N;ee((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==L?void 0:L.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(q.current)&&e instanceof HTMLElement))?t:null},[q]),en);let er=!(!N||j);(0,B.O)(U,S,er);let eo=!(j||0!==M);(0,O.O)(null==L?void 0:L.defaultView,"keydown",e=>{eo&&(e.defaultPrevented||e.key===g.R.Escape&&(e.preventDefault(),e.stopPropagation(),S()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=G(K.subscribe,K.getSnapshot,K.getSnapshot),(l=e?o.get(e):void 0)&&l.count,(0,H.e)(()=>{if(!(!e||!t))return K.dispatch("PUSH",e,r),()=>K.dispatch("POP",e,r)},[t,e])}(L,!(Q||0!==M||I),U),(0,s.useEffect)(()=>{if(0!==M||!b.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&S()}});return e.observe(b.current),()=>e.disconnect()},[M,b,S]);let[ea,ec]=function(){let[e,t]=(0,s.useState)([]);return[e.length>0?e.join(" "):void 0,(0,s.useMemo)(()=>function(e){let n=(0,T.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,s.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return s.createElement(V.Provider,{value:r},e.children)},[t])]}(),es=(0,s.useMemo)(()=>[{dialogState:M,close:S,setTitleId:F},k],[M,k,S,F]),ed=(0,s.useMemo)(()=>({open:0===M}),[M]),ef={ref:y,id:o,role:"dialog","aria-modal":0===M||void 0,"aria-labelledby":k.titleId,"aria-describedby":ea};return s.createElement($,{type:"Dialog",enabled:0===M,element:b,onUpdate:(0,T.z)((e,t)=>{"Dialog"===t&&(0,f.E)(e,{[_.Add]:()=>v(e=>e+1),[_.Remove]:()=>v(e=>e-1)})})},s.createElement(Y.O,{force:!0},s.createElement(x.h,null,s.createElement(el.Provider,{value:es},s.createElement(x.h.Group,{target:b},s.createElement(Y.O,{force:!1},s.createElement(ec,{slot:ed,name:"Dialog.Description"},s.createElement(A,{initialFocus:i,containers:U,features:N?(0,f.E)(j?"parent":"leaf",{parent:A.features.RestoreFocus,leaf:A.features.All&~A.features.FocusLock}):A.features.None},s.createElement(Z,null,(0,p.sY)({ourProps:ef,theirProps:c,slot:ed,defaultTag:"div",features:eu,visible:0===M,name:"Dialog"}))))))))),s.createElement(J,null))}),{Backdrop:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=ea("Dialog.Backdrop"),i=(0,m.T)(t);(0,s.useEffect)(()=>{if(null===a.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return s.createElement(Y.O,{force:!0},s.createElement(x.h,null,(0,p.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=ea("Dialog.Panel"),i=(0,m.T)(t,a.panelRef),u=(0,s.useMemo)(()=>({open:0===l}),[l]),c=(0,T.z)(e=>{e.stopPropagation()});return(0,p.sY)({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=ea("Dialog.Overlay"),i=(0,m.T)(t),u=(0,T.z)(e=>{if(e.target===e.currentTarget){if((0,v.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}}),c=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,p.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:c,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,p.yV)(function(e,t){let n=(0,h.M)(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=ea("Dialog.Title"),i=(0,m.T)(t);(0,s.useEffect)(()=>(a(r),()=>a(null)),[r,a]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,p.sY)({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:j})},4027:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))});t.Z=o}}]);