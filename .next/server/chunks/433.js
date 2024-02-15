"use strict";exports.id=433,exports.ids=[433],exports.modules={5533:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(3854),s=t(4218);t(7648);var l=t(8964),n=t(5548),o=t.n(n);let i=({className:e="",isLiked:a,item:t})=>{let[n,i]=(0,s.useState)("default");return(0,s.useEffect)(()=>{Math.random()>.5?i("video"):i("audio")},[]),(0,r.jsxs)("div",{className:`Card relative flex flex-col group ${e}`,children:[(0,r.jsxs)("div",{className:"relative flex-shrink-0 ",children:[r.jsx("div",{className:"flex w-full h-52 rounded overflow-hidden z-0",children:t&&t.imageUrls?t.imageUrls.map((e,a)=>"thumbnail"===e.type&&r.jsx(l.Z,{containerClassName:"flex w-full h-56 rounded overflow-hidden z-0",src:`https://ibprocess.intellibooks.io${e.url}`,className:"object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"})):r.jsx(l.Z,{containerClassName:"flex w-full h-56 rounded-3xl overflow-hidden z-0",src:`https://ibprocess.intellibooks.io/api/thumbnail/${t.thumbnail}`,className:"object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"})}),r.jsx("h2",{className:" absolute top-3 left-3 z-10 text-xs p-1 bg-white border rounded-xl ",children:t&&t.category_name}),r.jsx("div",{className:"absolute top-3 inset-x-3 flex"})]}),(0,r.jsxs)("div",{className:"px-1 py-2 space-y-1 ",children:[r.jsx("h2",{className:"text-sm font-medium truncate capitalize",children:t&&t.name}),r.jsx("h2",{className:"text-xs font-normal m-0 p-0 truncate",children:t&&t.short_description})]}),t&&r.jsx(o(),{href:`/collection/${t.name}/${t.id}`,className:"absolute inset-0 hover:shadow  rounded"})]})}},4672:(e,a,t)=>{t.d(a,{Z:()=>b});var r=t(3854),s=t(4218),l=t(1615),n=t(9013);t(9835);var o=t(4360),i=t(3639);let d=({className:e="text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700",...a})=>r.jsx(i.default,{className:`ttnc-ButtonThird ${e}`,...a});t(4208);let c=({subLabel:e="",label:a="",name:t,className:s="",sizeClassName:l="w-6 h-6",labelClassName:n="",defaultChecked:o,onChange:i})=>(0,r.jsxs)("div",{className:`flex text-sm sm:text-base ${s}`,children:[r.jsx("input",{id:t,name:t,type:"checkbox",className:`focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 ${l}`,defaultChecked:o,onChange:e=>i&&i(e.target.checked)}),a&&(0,r.jsxs)("label",{htmlFor:t,className:"pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none",children:[r.jsx("span",{className:`text-slate-900 dark:text-slate-100 ${n} ${e?"-mt-0.5":""}`,children:a}),e&&r.jsx("p",{className:"mt-0.5 text-slate-500 dark:text-slate-400 text-sm font-light",children:e})]})]});t(5166);var u=t(8041),m=t(3847),x=t(8157),p=t(7069),h=t(5209);let b=({moduleList:e})=>{let[a,t]=(0,s.useState)(!1),[i,b]=(0,s.useState)(!0),[f,y]=(0,s.useState)([.01,10]),[j,g]=(0,s.useState)([]),[k,v]=(0,s.useState)(""),[N,w]=(0,s.useState)(""),C=(0,x.I0)(),[z,Z]=(0,s.useState)([]),[S,T]=(0,s.useState)([]),$=async()=>{try{let e=await h.Z.get("https://ibprocess.intellibooks.io/api/get-category-modules",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("marketplacegenaitoken")}});Z(e.data.data)}catch(e){console.error("Error making API call:",e)}},A=async()=>{try{let e=await h.Z.get("https://ibprocess.intellibooks.io/api/get-type-modules",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("marketplacegenaitoken")}});T(e.data.data)}catch(e){console.error("Error making API call:",e)}};(0,s.useEffect)(()=>{$(),A()},[]);let[F,I]=(0,s.useState)({categories:[],type:[],model:""}),J=(e,a,t)=>{I(r=>{let s=e?Array.from(new Set([...r[t],a])):r[t].filter(e=>e!==a);return{...r,[t]:s}})},P=async()=>{let e=F.categories.join(","),a=F.type.join(",");try{let t=await m.Z.post("https://ibprocess.intellibooks.io/api/modules/filter",{categories:e,type:a},{headers:{"Content-Type":"application/json"}});C((0,p.O4)(t.data.data))}catch(e){console.error("Error making API call:",e)}};return r.jsx("div",{className:"flex   flex-col gap-3",children:(0,r.jsxs)("div",{className:"lg:flex space-x-4",children:[r.jsx(l.J,{className:"relative",children:({open:e,close:a})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.J.Button,{className:`flex items-center justify-center px-4 py-2 text-sm  rounded-xl border focus:outline-none
               ${e?"!border-primary-500 ":"border-neutral-300 dark:border-neutral-700"}
               
                  "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
               
                `,children:[r.jsx("span",{className:"ml-2",children:"Category"}),r.jsx(u.Z,{className:"w-4 h-4 ml-3"})]}),r.jsx(n.u,{as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:r.jsx(l.J.Panel,{className:"absolute z-40 w-80 px-4 mt-3 left-0 sm:px-0 ",children:(0,r.jsxs)("div",{className:"overflow-hidden rounded shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",children:[r.jsx("div",{className:"relative flex text-xs flex-col px-5 py-6 space-y-2",children:z&&z.length>0&&z.map(e=>r.jsx("div",{className:"capitalize text-xs",children:r.jsx(c,{name:e.name,label:e.name,defaultChecked:F.categories.includes(e.name),onChange:a=>J(a,e.name,"categories"),className:"text-xs"})},e.name))}),r.jsx("div",{className:"w-full border-b border-neutral-200 dark:border-neutral-700"}),(0,r.jsxs)("div",{className:"p-3 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",children:[r.jsx(d,{onClick:()=>{a(),I({categories:[],type:[],model:""}),P()},sizeClass:"px-4 py-2 sm:px-5",children:"Clear"}),r.jsx(o.Z,{onClick:()=>{P(),a()},sizeClass:"px-4 py-2 sm:px-5",children:"Apply"})]})]})})})]})}),r.jsx(l.J,{className:"relative",children:({open:e,close:a})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.J.Button,{className:`flex items-center justify-center px-4 py-2 text-sm  rounded-xl border focus:outline-none
               ${e?"!border-primary-500 ":"border-neutral-300 dark:border-neutral-700"}
               "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                
                `,children:[r.jsx("span",{className:"ml-2",children:"Type"}),r.jsx(u.Z,{className:"w-4 h-4 ml-3"})]}),r.jsx(n.u,{as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:r.jsx(l.J.Panel,{className:"absolute z-40  w-80 px-4 mt-3 left-0 sm:px-0 ",children:(0,r.jsxs)("div",{className:"overflow-hidden rounded shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",children:[r.jsx("div",{className:"relative flex text-xs flex-col px-5 py-6 space-y-2",children:S&&S.length>0&&S.map(e=>r.jsx("div",{className:"capitalize text-xs",children:r.jsx(c,{name:e.type_name,label:e.type_name,defaultChecked:F.type.includes(e.type_name),onChange:a=>J(a,e.type_name,"type"),className:"text-xs"})},e.id))}),r.jsx("div",{className:"w-full border-b border-neutral-200 dark:border-neutral-700"}),(0,r.jsxs)("div",{className:"p-3 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between",children:[r.jsx(d,{onClick:()=>{a(),I({categories:[],type:[],model:""}),P()},sizeClass:"px-4 py-2 sm:px-5",children:"Clear"}),r.jsx(o.Z,{onClick:()=>{P(),a()},sizeClass:"px-4 py-2 sm:px-5",children:"Apply"})]})]})})})]})})]})})}},5209:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(3847),s=t(8318),l=t(1647);let n=r.Z.create({baseURL:"https://ibprocess.intellibooks.io",headers:{Authorization:`Bearer ${s.Z.get("accessToken")}`}}),o=async e=>{let a=await r.Z.post("https://ibprocess.intellibooks.io/api/auth/getNewAccessToken",{refreshToken:e});localStorage.setItem("user",JSON.stringify(a.data.user));let{accessToken:t}=a.data;t&&(0,l.d8)("accessToken",t,8e3,"/")};n.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${s.Z.get("accessToken")}`,e),e=>Promise.reject(e)),n.interceptors.response.use(e=>e,e=>(401===e.response.status&&o(s.Z.get("refreshToken")),e.response.status,Promise.reject(e)));let i=n}};