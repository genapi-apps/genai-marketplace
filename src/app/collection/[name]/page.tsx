
"use client"
import React,{FC,useState, useEffect} from "react";
import NcImage from "@/shared/NcImage/NcImage";
import collectionBanner from "@/images/nfts/collectionBanner.png";
import { nftsImgs } from "@/contains/fakeData";
import ButtonDropDownShare from "@/components/ButtonDropDownShare";
import NftMoreDropdown from "@/components/NftMoreDropdown";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderCollections from "@/components/SectionSliderCollections";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Pagination from "@/shared/Pagination/Pagination";
import CardNFT from "@/components/CardNFT";
import TabFilters from "@/components/TabFilters";
import SectionSliderCardNftVideo from "@/components/SectionSliderCardNftVideo";

import { useParams } from 'next/navigation'
import axios from "axios";
 
export interface CardListingProps {
  
  name:string
}
const PageCollection:FC<CardListingProps> = ({name}) => { 
  
  const params = useParams<{ name: string; }>()
  
    const [categoryList, setCategoryList] = useState()
    
   
     useEffect(() => {
        const getModule = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/modules/${params.name}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
          setCategoryList(response.data.data) 
        }

        getModule()
    }, [])
  ///modules/filter/:categories
  return (
    <div className={`nc-PageCollection`}>
     
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={"https://ciscryp-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcollectionBanner.3dde3dd2.png&w=1920&q=75"}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </div>
        
      </div>
   
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
        <main>
          <TabFilters moduleList={categoryList}/>
          

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
            {categoryList && categoryList.length>0 && categoryList.map((item:any, index:any) => (
              <CardNFT key={index} item={item}/>
            ))}
          </div>

         
        </main>
 
        <div className="relative  ">
       {/* <SectionSliderCardNftVideo title="Newest Prompt" /> */}
       </div>

        {/* <SectionBecomeAnAuthor /> */}
      </div>
    </div>
  );
};

export default PageCollection;
