
"use client"
import React,{useState, useEffect} from "react";
import NcImage from "@/shared/NcImage/NcImage";
 
import CardNFT from "@/components/CardNFT";
import TabFilters from "@/components/TabFilters"; 

import { useAppSelector } from "@/redux/hooks";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
 

const PageCollection = () => { 
  const { moduleList } = useAppSelector((state) => state.auth);
   const {  trendingList  } = useAppSelector((state) => state.auth);

  ///modules/filter/:categories
 
  return (
    <div className={`nc-PageCollection`}>
     
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
          

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
            {moduleList && moduleList!== undefined && moduleList.length>0 ? moduleList.map((item:any, index:any) => (
              <CardNFT key={index} item={item} />
            )):"NO result found"}
          </div>

         
        </main>
 
        <div className="relative  ">
        <SectionTrending title="Trending Prompt" moduleList={trendingList} />
       </div>

        {/* <SectionBecomeAnAuthor /> */}
      </div>
    </div>
  );
};

export default PageCollection;
