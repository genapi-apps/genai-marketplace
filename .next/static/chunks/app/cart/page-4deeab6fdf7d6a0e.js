(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{903:function(e,s,a){Promise.resolve().then(a.bind(a,2689))},2689:function(e,s,a){"use strict";a.r(s);var l=a(7437),t=a(7651),r=a(2173),c=a(2265);s.default=e=>{let{}=e,[s,a]=(0,c.useState)(!1),[i,n]=(0,c.useState)([]),o=async()=>{try{let e=localStorage.getItem("id"),s=await r.Z.post("".concat("https://ibprocess.intellibooks.io","/api/cart"),{userId:e},{headers:{"Content-Type":"application/json"}});n(s.data.data)}catch(e){console.error("Error fetching data:",e)}};return(0,c.useEffect)(()=>{o()},[]),(0,l.jsx)("div",{className:"PageCart",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"my-12 sm:lg:my-16 lg:my-24    space-y-8 sm:space-y-10",children:[(0,l.jsx)("div",{className:" ",children:(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-semibold",children:"Cart Page"})}),(0,l.jsx)("hr",{className:"w-full border-t-2 border-neutral-100 dark:border-neutral-700"}),(0,l.jsx)("div",{className:"mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8",children:(0,l.jsx)("div",{className:"space-y-3",children:i&&i.map((e,s)=>(0,l.jsx)("div",{className:"Cart relative flex w-full flex-col group ",children:(0,l.jsxs)("div",{className:"relative flex-shrink-0 flex gap-5",children:[(0,l.jsx)("div",{className:"flex w-36 h-20 rounded overflow-hidden z-0",children:e&&e.imageUrls?e.imageUrls.map((e,s)=>"thumbnail"===e.type&&(0,l.jsx)(t.Z,{containerClassName:"flex w-36 h-20 rounded overflow-hidden z-0",src:"".concat("https://ibprocess.intellibooks.io").concat(e.url),className:"object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"})):(0,l.jsx)(t.Z,{containerClassName:"flex  w-36 h-20 rounded-3xl overflow-hidden z-0",src:"".concat("https://ibprocess.intellibooks.io","/api/thumbnail/").concat(e.thumbnail),className:"object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h2",{className:" z-10 text-xs p-1 text-black   ",children:e&&e.name}),(0,l.jsx)("div",{className:" inset-x-3 flex text-black",children:e.price})]})]})},s))})})]})})})}},7651:function(e,s,a){"use strict";var l=a(7437);a(2265),s.Z=e=>{let{containerClassName:s="relative",alt:a="nc-imgs",src:t,fill:r,className:c="object-cover w-full h-full",sizes:i="(max-width: 600px) 480px, 800px",...n}=e;return(0,l.jsx)("div",{className:s,children:"string"==typeof t?(0,l.jsx)("img",{className:c,alt:a,sizes:i,...n,src:t,style:{height:"100%",width:"100%"}}):null})}}},function(e){e.O(0,[580,971,472,744],function(){return e(e.s=903)}),_N_E=e.O()}]);