
"use client"
import React,{useState, useEffect} from "react";
import NcImage from "@/shared/NcImage/NcImage";
 
import Card from "@/components/Card";
import TabFilters from "@/components/TabFilters"; 

import { useAppSelector } from "@/redux/hooks";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
//  import authFetch from "@/utils/interceptor"


const PageCollection = () => { 
  const { moduleList } = useAppSelector((state) => state.auth);
   const {  trendingList  } = useAppSelector((state) => state.auth);
    // const response = await authFetch.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/get-model-and-engine-list`,
    // )
 
  return (
    <div className={`PageCollection`}>
     
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={"https://c0.wallpaperflare.com/path/550/573/147/business-concept-consulting-illustration-2b6ed282d9d4614883589321d2666a7f.jpg"}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </div>
        
      </div>
   
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
        <main>
          <TabFilters moduleList={moduleList} />
           <div className="w-full border-b border-neutral-200/70 dark:border-neutral-700 my-5"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4  mt-8 lg:mt-10">
            {moduleList && moduleList!== undefined && moduleList.length>0 ? moduleList.map((item:any, index:any) => (
              <Card key={index} item={item} />
            )):"NO result found"}
          </div>

         
        </main>
 
        <div className="relative  ">
        <SectionTrending title="Trending Prompt" type="trending" moduleList={trendingList} />
       </div>

        {/* <SectionBecomeAnAuthor /> */}
      </div>
    </div>
  );
};

export default PageCollection;
