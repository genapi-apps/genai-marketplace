(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{5978:function(e,t,n){Promise.resolve().then(n.bind(n,3388))},3388:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(2265),r=n(6305),o=n(8687),l=n(5979),i=n(2173),c=n(7415);t.default=e=>{let{}=e,[t,n]=(0,s.useState)({name:"",description:""}),[d,u]=(0,s.useState)({name:""}),p=e=>{let{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))},m=async e=>{e.preventDefault();let n=new FormData;d&&n.append("logo",d.name),n.append("name",t.name),n.append("description",t.description);let a=await i.Z.post("".concat("https://ibprocess.intellibooks.io","/api/admin/create-category"),n,{headers:{"Content-Type":"multipart/form-data"}});a.data.success&&(0,c.Am)("Item Created Successfully!")};return(0,a.jsx)("div",{className:"PageTypeItem",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10",children:[(0,a.jsx)("div",{className:"max-w-2xl",children:(0,a.jsx)("h2",{className:"text-3xl sm:text-4xl font-semibold",children:"Create Category"})}),(0,a.jsx)("hr",{className:"w-full border-t-2 border-neutral-100 dark:border-neutral-700"}),(0,a.jsxs)("div",{className:"mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8",children:[(0,a.jsx)(l.Z,{label:"Name",children:(0,a.jsx)(r.Z,{defaultValue:"Name",id:"name",name:"name",type:"text",value:t.name,onChange:p})}),(0,a.jsx)(l.Z,{label:"Description",desc:(0,a.jsxs)("div",{children:["The description will be included on the item's detail page\n                  underneath its image."," ",(0,a.jsx)("span",{className:"text-green-500",children:"Markdown"})," syntax is supported."]}),children:(0,a.jsx)(o.Z,{rows:6,className:"mt-1.5",placeholder:"...",id:"description",name:"description",value:t.description,onChange:p})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:"Logo"}),(0,a.jsxs)("span",{className:"text-neutral-500 dark:text-neutral-400 text-sm",children:["File types supported: JPG, PNG,","Max size: 100 MB"]}),(0,a.jsx)("div",{className:"mt-5 ",children:(0,a.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-neutral-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-neutral-6000 dark:text-neutral-300",children:[(0,a.jsxs)("label",{htmlFor:"logo",className:"relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",{type:"file",className:"sr-only",name:"logo",id:"logo",onChange:e=>{u(e.target.files[0])}})]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:d?d.name:" PNG, JPG, GIF up to 10MB"})]})})})]}),(0,a.jsx)("div",{className:"pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ",children:(0,a.jsx)("button",{onClick:e=>m(e),className:"nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0",children:"Create"})})]})]})})})}},5979:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7437);n(2265);var s=e=>{let{className:t="",children:n}=e;return(0,a.jsx)("label",{className:"nc-Label text-base font-medium text-neutral-600 dark:text-neutral-200 ".concat(t),"data-nc-id":"Label",children:n})},r=e=>{let{children:t,className:n="",label:r,desc:o}=e;return(0,a.jsxs)("div",{className:n,children:[r&&(0,a.jsx)(s,{children:r}),(0,a.jsx)("div",{className:"mt-1.5",children:t}),o&&(0,a.jsx)("div",{className:"block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ",children:o})]})}},6305:function(e,t,n){"use strict";var a=n(7437),s=n(2265);let r=s.forwardRef((e,t)=>{let{className:n="",sizeClass:s="h-11 px-4 py-3",fontClass:r="text-sm font-normal",rounded:o="rounded",children:l,type:i="text",...c}=e;return(0,a.jsx)("input",{ref:t,type:i,className:"block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 ".concat(o," ").concat(r," ").concat(s," ").concat(n),...c})});t.Z=r},8687:function(e,t,n){"use strict";var a=n(7437),s=n(2265);let r=s.forwardRef((e,t)=>{let{className:n="",children:s,rows:r=4,...o}=e;return(0,a.jsx)("textarea",{ref:t,className:"block w-full text-sm rounded border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ".concat(n),rows:r,...o,children:s})});t.Z=r},7042:function(e,t,n){"use strict";function a(){for(var e,t,n=0,a="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=function e(t){var n,a,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var r=t.length;for(n=0;n<r;n++)t[n]&&(a=e(t[n]))&&(s&&(s+=" "),s+=a)}else for(a in t)t[a]&&(s&&(s+=" "),s+=a)}return s}(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{W:function(){return a}}),t.Z=a},7415:function(e,t,n){"use strict";n.d(t,{Am:function(){return k},Ix:function(){return A}});var a=n(2265),s=n(7042);let r=e=>"number"==typeof e&&!isNaN(e),o=e=>"string"==typeof e,l=e=>"function"==typeof e,i=e=>o(e)||l(e)?e:null,c=e=>(0,a.isValidElement)(e)||o(e)||l(e)||r(e);function d(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:r=!0,collapseDuration:o=300}=e;return function(e){let{children:l,position:i,preventExitTransition:c,done:d,nodeRef:u,isIn:p,playToast:m}=e,f=s?`${t}--${i}`:t,g=s?`${n}--${i}`:n,y=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let e=u.current,t=f.split(" "),n=a=>{a.target===u.current&&(m(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,a.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),r?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:a,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=a+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}(e,d,o):d()};p||(c?t():(y.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[p]),a.createElement(a.Fragment,null,l)}}function u(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let p=new Map,m=[],f=new Set,g=e=>f.forEach(t=>t(e)),y=()=>p.size>0;function h(e,t){var n;if(t)return!(null==(n=p.get(t))||!n.isToastActive(e));let a=!1;return p.forEach(t=>{t.isToastActive(e)&&(a=!0)}),a}function v(e,t){c(e)&&(y()||m.push({content:e,options:t}),p.forEach(n=>{n.buildToast(e,t)}))}function x(e,t){p.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function b(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:c,style:d,controlledProgress:u,progress:p,rtl:m,isIn:f,theme:g}=e,y=i||u&&0===p,h={...d,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(h.transform=`scaleX(${p})`);let v=(0,s.Z)("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":m}),x=l(c)?c({rtl:m,type:o,defaultClassName:v}):(0,s.Z)(v,c);return a.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},a.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`}),a.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:x,style:h,[u&&p>=1?"onTransitionEnd":"onAnimationEnd"]:u&&p<1?null:()=>{f&&r()}}))}let E=1,T=()=>""+E++;function N(e,t){return v(e,t),t.toastId}function _(e,t){return{...t,type:t&&t.type||e,toastId:t&&(o(t.toastId)||r(t.toastId))?t.toastId:T()}}function I(e){return(t,n)=>N(t,_(e,n))}function k(e,t){return N(e,_("default",t))}k.loading=(e,t)=>N(e,_("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),k.promise=function(e,t,n){let a,{pending:s,error:r,success:i}=t;s&&(a=o(s)?k.loading(s,n):k.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,s)=>{if(null==t)return void k.dismiss(a);let r={type:e,...c,...n,data:s},l=o(t)?{render:t}:t;return a?k.update(a,{...r,...l}):k(l.render,{...r,...l}),s},u=l(e)?e():e;return u.then(e=>d("success",i,e)).catch(e=>d("error",r,e)),u},k.success=I("success"),k.info=I("info"),k.error=I("error"),k.warning=I("warning"),k.warn=k.warning,k.dark=(e,t)=>N(e,_("default",{theme:"dark",...t})),k.dismiss=function(e){var t,n;y()?null==e||o(t=e)||r(t)?p.forEach(t=>{t.removeToast(e)}):e&&("containerId"in e||"id"in e)&&((null==(n=p.get(e.containerId))?void 0:n.removeToast(e.id))||p.forEach(t=>{t.removeToast(e.id)})):m=m.filter(t=>null!=e&&t.options.toastId!==e)},k.clearWaitingQueue=function(e){void 0===e&&(e={}),p.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},k.isActive=h,k.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:a}=t;return null==(n=p.get(a||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:a,content:s}=n,r={delay:100,...a,...t,toastId:t.toastId||e,updateId:T()};r.toastId!==e&&(r.staleId=e);let o=r.render||s;delete r.render,N(o,r)}},k.done=e=>{k.update(e,{progress:1})},k.onChange=function(e){return f.add(e),()=>{f.delete(e)}},k.play=e=>x(!0,e),k.pause=e=>x(!1,e);let C="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,w=e=>{let{theme:t,type:n,isLoading:s,...r}=e;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},L={info:function(e){return a.createElement(w,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(w,{...e},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(w,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(w,{...e},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}},j=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=function(e){var t,n;let[s,r]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!1),i=(0,a.useRef)(null),c=(0,a.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:m,onClick:f,closeOnClick:g}=e;function y(){r(!0)}function h(){r(!1)}function v(t){let n=i.current;c.canDrag&&n&&(c.didMove=!0,s&&h(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),n.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function x(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",x);let t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return l(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=p.get((t={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))||n.setToggle(t.id,t.fn),(0,a.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",y),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",h)}},[e.pauseOnFocusLoss]);let b={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",x);let n=i.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:a,left:s,right:r}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=r&&t.clientY>=n&&t.clientY<=a?h():y()}};return d&&u&&(b.onMouseEnter=h,e.stacked||(b.onMouseLeave=y)),g&&(b.onClick=e=>{f&&f(e),c.canCloseOnClick&&m()}),{playToast:y,pauseToast:h,isRunning:s,preventExitTransition:o,toastRef:i,eventHandlers:b}}(e),{closeButton:c,children:d,autoClose:u,onClick:m,type:f,hideProgressBar:g,closeToast:y,transition:h,position:v,className:x,style:E,bodyClassName:T,bodyStyle:N,progressClassName:_,progressStyle:I,updateId:k,role:C,progress:w,rtl:j,toastId:P,deleteToast:$,isIn:M,isLoading:A,closeOnClick:B,theme:D}=e,O=(0,s.Z)("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":B}),R=l(x)?x({rtl:j,position:v,type:f,defaultClassName:O}):(0,s.Z)(O,x),S=function(e){let{theme:t,type:n,isLoading:s,icon:r}=e,o=null,i={theme:t,type:n,isLoading:s};return!1===r||(l(r)?o=r(i):(0,a.isValidElement)(r)?o=(0,a.cloneElement)(r,i):s?o=L.spinner():n in L&&(o=L[n](i))),o}(e),Z=!!w||!u,z={closeToast:y,type:f,theme:D},F=null;return!1===c||(F=l(c)?c(z):(0,a.isValidElement)(c)?(0,a.cloneElement)(c,z):function(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),a.createElement(h,{isIn:M,done:$,position:v,preventExitTransition:n,nodeRef:r,playToast:i},a.createElement("div",{id:P,onClick:m,"data-in":M,className:R,...o,style:E,ref:r},a.createElement("div",{...M&&{role:C},className:l(T)?T({type:f}):(0,s.Z)("Toastify__toast-body",T),style:N},null!=S&&a.createElement("div",{className:(0,s.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},S),a.createElement("div",null,d)),F,a.createElement(b,{...k&&!Z?{key:`pb-${k}`}:{},rtl:j,theme:D,delay:u,isRunning:t,isIn:M,closeToast:y,hide:g,type:f,style:I,className:_,controlledProgress:Z,progress:w||0})))},P=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},$=d(P("bounce",!0)),M=(d(P("slide",!0)),d(P("zoom")),d(P("flip")),{position:"top-right",transition:$,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function A(e){let t={...M,...e},n=e.stacked,[d,f]=(0,a.useState)(!0),y=(0,a.useRef)(null),{getToastToRender:x,isToastActive:b,count:E}=function(e){let{subscribe:t,getSnapshot:n,setProps:s}=(0,a.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let s=function(e,t,n){let s=1,d=0,p=[],m=[],f=[],g=t,y=new Map,h=new Set,v=()=>{f=Array.from(y.values()),h.forEach(e=>e())},x=e=>{m=null==e?[]:m.filter(t=>t!==e),v()},b=e=>{let{toastId:t,onOpen:s,updateId:r,children:o}=e.props,i=null==r;e.staleId&&y.delete(e.staleId),y.set(t,e),m=[...m,e.props.toastId].filter(t=>t!==e.staleId),v(),n(u(e,i?"added":"updated")),i&&l(s)&&s((0,a.isValidElement)(o)&&o.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{y.forEach(n=>{null!=t&&t!==n.props.toastId||l(n.toggle)&&n.toggle(e)})},removeToast:x,toasts:y,clearQueue:()=>{d-=p.length,p=[]},buildToast:(t,m)=>{var f,h;if((t=>{let{containerId:n,toastId:a,updateId:s}=t,r=y.has(a)&&null==s;return(n?n!==e:1!==e)||r})(m))return;let{toastId:E,updateId:T,data:N,staleId:_,delay:I}=m,k=()=>{x(E)},C=null==T;C&&d++;let w={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(m).filter(e=>{let[t,n]=e;return null!=n})),toastId:E,updateId:T,data:N,closeToast:k,isIn:!1,className:i(m.className||g.toastClassName),bodyClassName:i(m.bodyClassName||g.bodyClassName),progressClassName:i(m.progressClassName||g.progressClassName),autoClose:!m.isLoading&&(f=m.autoClose,h=g.autoClose,!1===f||r(f)&&f>0?f:h),deleteToast(){let e=y.get(E),{onClose:t,children:s}=e.props;l(t)&&t((0,a.isValidElement)(s)&&s.props),n(u(e,"removed")),y.delete(E),--d<0&&(d=0),p.length>0?b(p.shift()):v()}};w.closeButton=g.closeButton,!1===m.closeButton||c(m.closeButton)?w.closeButton=m.closeButton:!0===m.closeButton&&(w.closeButton=!c(g.closeButton)||g.closeButton);let L=t;(0,a.isValidElement)(t)&&!o(t.type)?L=(0,a.cloneElement)(t,{closeToast:k,toastProps:w,data:N}):l(t)&&(L=t({closeToast:k,toastProps:w,data:N}));let j={content:L,props:w,staleId:_};g.limit&&g.limit>0&&d>g.limit&&C?p.push(j):r(I)?setTimeout(()=>{b(j)},I):b(j)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>m.some(t=>t===e),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(t,e,g);p.set(t,s);let d=s.observe(n);return m.forEach(e=>v(e.content,e.options)),m=[],()=>{d(),p.delete(t)}},setProps(e){var n;null==(n=p.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=p.get(t))?void 0:e.getSnapshot()}}}(e)).current;s(e);let d=(0,a.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!d)return[];let t=new Map;return d.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:h,count:null==d?void 0:d.length}}(t),{className:T,style:N,rtl:_,containerId:I}=t;function w(){n&&(f(!0),k.play())}return C(()=>{if(n){var e;let n=y.current.querySelectorAll('[data-in="true"]'),a=null==(e=t.position)?void 0:e.includes("top"),s=0,r=0;Array.from(n).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${d}`),e.dataset.pos||(e.dataset.pos=a?"top":"bot");let n=s*(d?.2:1)+(d?0:12*t);e.style.setProperty("--y",`${a?n:-1*n}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",""+(1-(d?r:0))),s+=e.offsetHeight,r+=.025})}},[d,E,n]),a.createElement("div",{ref:y,className:"Toastify",id:I,onMouseEnter:()=>{n&&(f(!1),k.pause())},onMouseLeave:w},x((e,t)=>{let r=t.length?{...N}:{...N,pointerEvents:"none"};return a.createElement("div",{className:function(e){let t=(0,s.Z)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":_});return l(T)?T({position:e,rtl:_,defaultClassName:t}):(0,s.Z)(t,i(T))}(e),style:r,key:`container-${e}`},t.map(e=>{let{content:t,props:s}=e;return a.createElement(j,{...s,stacked:n,collapseAll:w,isIn:b(s.toastId,s.containerId),style:s.style,key:`toast-${s.key}`},t)}))}))}}},function(e){e.O(0,[580,971,472,744],function(){return e(e.s=5978)}),_N_E=e.O()}]);