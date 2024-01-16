"use client"
import React,{useState, useEffect} from "react";
import SectionSliderCardNftVideo from "@/components/SectionSliderCardNftVideo";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setModuleList, setCategoryList } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

function PageHome() {
   const [homeList, setHomeList] = useState()
    const dispatch = useDispatch()
    const { moduleList , categoryList} = useAppSelector((state) => state.auth);
   
     useEffect(() => {
        const getModule = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
           dispatch(setModuleList(response.data.data))

        }

        getModule()
    }, [])

    const getCategoryList = async () => {

        try {

            const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-category-modules`;
            const response = await axios.get(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            dispatch(setCategoryList(response.data.data))



        } catch (error) {
            console.error("Error making API call:", error);
        }
    }

    useEffect(() => {
        getCategoryList()
       
    }, [])

    
  return (
    <div className="nc-PageHome relative overflow-hidden">
     
      <div className="container   relative my-5">
        <SectionHero2 />

      </div>

        

      <div className="container relative space-y-12 my-12 lg:space-y-12 lg:my-12">
       <SectionSliderCategories categoryList={categoryList} />

        <SectionSliderCardNftVideo title="Trending Prompt"  moduleList={moduleList} />
       
        <SectionSliderCardNftVideo title="Newest Prompt" moduleList={moduleList} />

     {/* <div className="relative py-20 lg:py-24">
          <BackgroundSection />
          <SectionSubscribe2 />
        </div> */}

        {/* <SectionVideos /> */}
      </div>
    </div>
  );
}

export default PageHome;
