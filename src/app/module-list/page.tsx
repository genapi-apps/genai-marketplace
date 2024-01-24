
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
import ModuleCard from "@/components/CardNFT2";
 
 
const ModuleList = () => { 
  
      
  const [moduleList, setModuleList] = useState([]);
   
    const getModule = async () => {
    try {
         const userId = JSON.parse(localStorage.getItem("marketusername") as string)

           
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules`, { user_id: userId && userId.id },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          },
        }
      );
      
      setModuleList(response.data.data)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   useEffect(() => {
    getModule();
  }, []);
  
  return (
    <div className={`nc-PageCollection`}>
     
      
       
        <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
           <main>
             <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              All Module
            </h2>

          </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
            {moduleList && moduleList.map((item: any, index: any) => (
              <ModuleCard key={index} item={item} />
            ))}
          </div>
           </main>
        </div>
   
    
 
        
    </div>
  );
};

export default ModuleList;ModuleList