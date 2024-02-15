(()=>{var e={};e.id=461,e.ids=[461],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var a=r(7096),s=r(6132),i=r(7284),n=r.n(i),o=r(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["create-category",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3653)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/create-category/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9113)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,5188)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/create-category/page.tsx"],m="/create-category/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/create-category/page",pathname:"/create-category",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3808:(e,t,r)=>{Promise.resolve().then(r.bind(r,1110))},1110:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(3854),s=r(4218),i=r(1339),n=r(2201),o=r(6472),l=r(3847),c=r(472),d=r(1018);let m=({})=>{let[e,t]=(0,s.useState)({name:"",description:""}),r=(0,d.useRouter)(),[m,p]=(0,s.useState)(""),[u,x]=(0,s.useState)(!1),[h,f]=(0,s.useState)(void 0),g=e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},y=async t=>{if(t.preventDefault(),!h)return;let a=new FormData;h&&a.append("images",h),a.append("name",e.name),a.append("description",e.description);let s=await l.Z.post("https://ibprocess.intellibooks.io/api/admin/create-category",a,{headers:{"Content-Type":"multipart/form-data"}});s.data.success&&((0,c.Am)("Item Created Successfully!"),r.push("/create-item"))},j=async e=>{e.preventDefault();let t=await l.Z.post("https://ibprocess.intellibooks.io/api/admin/create-type",{type_name:m});console.log(t),t.data.success&&x(!0)};return a.jsx("div",{className:"PageCreateItem",children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10",children:[a.jsx("div",{className:"max-w-2xl",children:a.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold",children:"Create Category"})}),a.jsx("hr",{className:"w-full border-t-2 border-neutral-100 dark:border-neutral-700"}),u?(0,a.jsxs)("div",{className:"mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8",children:[a.jsx(o.Z,{label:"Name",children:a.jsx(i.Z,{defaultValue:"Name",id:"name",name:"name",placeholder:"Writing, Summerization",type:"text",value:e.name,onChange:g})}),a.jsx(o.Z,{label:"Description",children:a.jsx(n.Z,{rows:6,className:"mt-1.5",placeholder:"...",id:"description",name:"description",value:e.description,onChange:g})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"text-lg font-semibold",children:"Logo"}),(0,a.jsxs)("span",{className:"text-neutral-500 dark:text-neutral-400 text-sm",children:["File types supported: JPG, PNG,","Max size: 100 MB"]}),a.jsx("div",{className:"mt-5 ",children:a.jsx("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[a.jsx("svg",{className:"mx-auto h-12 w-12 text-neutral-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:a.jsx("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-neutral-6000 dark:text-neutral-300",children:[(0,a.jsxs)("label",{htmlFor:"images",className:"relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",children:[a.jsx("span",{children:"Upload a file"}),a.jsx("input",{type:"file",className:"sr-only",name:"images",id:"images",onChange:e=>{f(e.target.files[0])}})]}),a.jsx("p",{className:"pl-1",children:"or drag and drop"})]}),a.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:h?h.name:" PNG, JPG, GIF up to 10MB"})]})})})]}),a.jsx("div",{className:"pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ",children:a.jsx("button",{onClick:e=>y(e),className:"nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0",children:"Create"})})]}):(0,a.jsxs)("div",{className:"mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8",children:[a.jsx(o.Z,{label:"Type",children:a.jsx(i.Z,{defaultValue:"type_name",id:"type_name",placeholder:"text, code, image",name:"type_name",type:"text",value:m,onChange:e=>p(e.target.value)})}),a.jsx("div",{className:"pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ",children:a.jsx("button",{onClick:e=>j(e),className:"nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0",children:"Create"})})]})]})})})}},6472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(3854);r(4218);let s=({className:e="",children:t})=>a.jsx("label",{className:`nc-Label text-base font-medium text-neutral-600 dark:text-neutral-200 ${e}`,"data-nc-id":"Label",children:t}),i=({children:e,className:t="",label:r,desc:i})=>(0,a.jsxs)("div",{className:t,children:[r&&a.jsx(s,{children:r}),a.jsx("div",{className:"mt-1.5",children:e}),i&&a.jsx("div",{className:"block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ",children:i})]})},2201:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(3854),s=r(4218),i=r.n(s);let n=i().forwardRef(({className:e="",children:t,rows:r=4,...s},i)=>a.jsx("textarea",{ref:i,className:`block w-full text-sm rounded border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${e}`,rows:r,...s,children:t})),o=n},3653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var a=r(5153);let s=(0,a.createProxy)(String.raw`/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/create-category/page.tsx`),{__esModule:i,$$typeof:n}=s,o=s.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,837,298],()=>r(6824));module.exports=a})();