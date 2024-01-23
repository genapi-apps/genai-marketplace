
"use client"
import React,{FC,useState, useEffect} from "react";
import NcImage from "@/shared/NcImage/NcImage"; 
import CardNFT from "@/components/CardNFT";
import TabFilters from "@/components/TabFilters"; 
import { useParams } from 'next/navigation'
import axios from "axios";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
 
export interface CardListingProps {
  
  name:string
}
const PageCollection:FC<CardListingProps> = ({name}) => { 
  
  const params = useParams<{ name: string; }>()
   const {  trendingList  } = useAppSelector((state) => state.auth);

    
    const [categoryList, setCategoryList] = useState([])
    
   
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
            src={"https://c1.wallpaperflare.com/path/652/531/737/wood-aerial-background-beverage-1f3a98ab1a7d84e3d9fde190733d4c1c.jpg"}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </div>
        
      </div>
   
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
      {categoryList ?  <main>
          <TabFilters moduleList={categoryList}/>
           
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
            {categoryList &&  categoryList!== undefined && categoryList.length>0 ? categoryList.map((item:any, index:any) => (
              <CardNFT key={index} item={item}/>
            )):
            "No result found"}
          </div>

         
        </main>:

         <main>
          
          

          <div className="grid  w-full grid-cols-1 gap-2  mt-8 lg:mt-10">
           No result found ! 
           <Link href={"/"} className="text-blue-600">Go Home</Link>
          </div>

         
        </main>
        }
 
        <div className="relative  ">
          <SectionTrending title="Trending Prompt" moduleList={trendingList} />
       {/* <SectionSliderCardNftVideo title="Newest Prompt" /> */}
       </div>

        {/* <SectionBecomeAnAuthor /> */}
      </div>
    </div>
  );
};

export default PageCollection;
