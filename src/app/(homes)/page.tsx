"use client"
import React, { useEffect, useState } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import SectionLargeSlider from "./SectionLargeSlider";
import SectionMagazine8 from "@/components/SectionMagazine8";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionSliderCardNftVideo from "@/components/SectionSliderCardNftVideo";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderCollections2 from "@/components/SectionSliderCollections2";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionGridFeatureNFT2 from "./SectionGridFeatureNFT2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import axios from 'axios'

function PageHome() {
  
  const [moduleList, setModuleList] = useState()


  useEffect(() => {
    const getModule = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-modules`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
      console.log("@@@@@@@@@@@@",response)
      setModuleList(response.data.data) 
    }
      
    getModule()
  }, [])

  
  return (
   moduleList && <div className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container relative mt-5 mb-20 sm:mb-24 lg:mt-20 lg:mb-32">
        <SectionHero2 />

        <SectionHowItWork className="mt-24 lg:mt-40 xl:mt-48" />
      </div>

      <div className="bg-neutral-100/70 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider moduleList={moduleList} />
        </div>
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionMagazine8  moduleList={moduleList} />

        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionGridAuthorBox
            sectionStyle="style2"
            data={Array.from("11111111")}
            boxCard="box4"
             moduleList={moduleList} 
          />
        </div>

        {/* <SectionSliderCardNftVideo  moduleList={moduleList}  /> */}

        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionSliderCollections2 cardStyle="style2" />
        </div>

        <SectionBecomeAnAuthor />

        <div className="relative py-20 lg:py-28">
          <BackgroundSection className="bg-neutral-100/70 dark:bg-black/20 " />
          <SectionGridFeatureNFT2  moduleList={moduleList}  />
        </div>

        <SectionSliderCategories />

        <div className="relative py-20 lg:py-24">
          <BackgroundSection />
          <SectionSubscribe2 />
        </div>

        <SectionVideos />
      </div>
    </div>
  );
}

export default PageHome;
