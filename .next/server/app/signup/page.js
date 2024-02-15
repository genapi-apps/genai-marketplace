(()=>{var e={};e.id=966,e.ids=[966],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7503:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=t(7096),a=t(6132),i=t(7284),l=t.n(i),n=t(2564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let c=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2856)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/signup/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9113)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,5188)),"/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/signup/page.tsx"],p="/signup/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9080:(e,s,t)=>{Promise.resolve().then(t.bind(t,3820))},3820:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var r=t(3854),a=t(4218),i=t(5548),l=t.n(i),n=t(1018),o=t(3847),c=t(472);t(5996);let d=()=>{let[e,s]=(0,a.useState)({email:"",password:"",confirmpassword:""}),[t,i]=(0,a.useState)({email:"",password:"",confirmpassword:""}),[d,p]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[h,f]=(0,a.useState)(""),[b,j]=(0,a.useState)("/logo.png"),{push:v}=(0,n.useRouter)(),[w,y]=(0,a.useState)(!1),P=async r=>{if(r.preventDefault(),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||i(e=>({...e,email:"Invalid email address"})),e.password.length<6&&i(e=>({...e,password:"Password must be at least 6 characters"})),e.password!==e.confirmpassword&&i(e=>({...e,confirmpassword:"Passwords do not match"})),!Object.values(t).some(e=>""!==e)){p(!0);try{let t=await o.Z.post("https://ibprocess.intellibooks.io/api/create_user",e);!0===t.data.status?(f("Signup successful! Please verify your email; we have sent an email. "),y(!0),(0,c.Am)("Signup successful! Please verify your email; we have sent an email. "),s({email:"",password:"",confirmpassword:""}),i({email:"",password:"",confirmpassword:""}),p(!1),setTimeout(()=>{v("/signin")},2e3)):(f(t.data.message),y(!1),p(!1))}catch(e){console.error("Error during signup:",e)}}};return(0,a.useEffect)(()=>{let e=async()=>{try{let e=await o.Z.get("https://ibprocess.intellibooks.io/api/get_organization");e.data.data.company_logo}catch(e){console.error("Error:",e)}};e()},[]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Ix,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row min-h-screen",children:[r.jsx("div",{className:"flex flex-col justify-center flex-grow xl:p-[60px] sm:p-[60px] p-[30px]  items-center",children:(0,r.jsxs)("div",{className:"rounded-lg mx-9 xl:mx-auto  sm:mx-6 bg-white p-8 xl:w-[580px] w-full border border-[#e5e7eb]",children:[(0,r.jsxs)("div",{className:"text-center pb-5",children:[r.jsx("div",{className:"mb-5",children:r.jsx(l(),{href:"/",className:"flex justify-center",children:r.jsx("img",{src:"/logoNew.png",alt:"zen ai",className:"h-[full] w-[100px]"})})}),r.jsx("h3",{className:"xl:text-3xl text-xl mb-2 text-col font-bold leading-[1.6] ",children:"Sign Up to your account"}),(0,r.jsxs)("p",{className:"pb-5 pt-2",children:["Already a member?"," ",r.jsx(l(),{href:"/signin",className:"text-blue-600 hover:text-blue-700",children:"Sign In"}),"."]})]}),(0,r.jsxs)("form",{className:"relative",children:[(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-base font-semibold text-gray-700 mb-[0.75rem]",children:"Email"}),r.jsx("div",{className:"mt-1",children:r.jsx("input",{id:"email",type:"email",className:`w-full border-gray-300 rounded-md py-3 px-4   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  ${t.email&&"border-red-600"}`,placeholder:"Enter your email",name:"email",value:e.email||"",onChange:e=>{f("");let t=e.target.name,r=e.target.value;s(e=>({...e,[t]:r})),i(e=>({...e,[t]:""}))}})})]}),r.jsx("div",{className:"",children:(0,r.jsxs)("button",{className:"w-full mt-4 mb-[40px] text-lg flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",disabled:d&&!0,onClick:e=>P(e),children:[d&&r.jsx("div",{className:"loader"})," Sign Up"]})})]}),r.jsx("div",{className:"absolute -bottom-[58px] w-full text-center",children:h&&r.jsx("div",{className:`text-sm ${w?"bg-green-200":"bg-red-200"}   p-3  text-center  rounded`,children:h})})]})]})}),r.jsx("div",{className:"flex flex-col bg-gradientlng  text-white xl:w-[660px] w-full flex-initial xl:p-[60px] sm:p-[60px] p-[30px] items-center",children:r.jsx("div",{className:"mx-0 xl:mx-auto xl:my-auto",children:(0,r.jsxs)("div",{className:"px-4 py-6",children:[r.jsx("div",{className:"flex items-center   justify-center mb-5 w-16 h-16 rounded-full bg-blue-400 text-white",children:r.jsx("span",{className:"text-[5rem] mt-8",children:" “"})}),r.jsx("h1",{className:"xl:text-5xl text-2xl font-bold  leading-[1.35] mb-[1.875rem]",children:"Your Gateway to a Smarter Experience!"}),r.jsx("div",{className:"ml-0 sm:ml-5",children:r.jsx("div",{children:r.jsx("p",{className:"text-sm  leading-[1.55]",children:"As you embark on a journey into the future, our AI-powered authentication ensures a seamless and secure entry into a world of innovation."})})})]})})})]})]})}},2856:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>l,__esModule:()=>i,default:()=>o});var r=t(5153);let a=(0,r.createProxy)(String.raw`/home/jipl3/Project/marketPlace/frontend/genai-marketplace/src/app/signup/page.tsx`),{__esModule:i,$$typeof:l}=a,n=a.default,o=n}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[271,837,298],()=>t(7503));module.exports=r})();