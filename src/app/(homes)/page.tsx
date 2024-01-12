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
import { useDispatch } from "react-redux"
import { setModuleList } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

function PageHome() {
  
  // const [moduleList, setModuleList] = useState()
  const dispatch = useDispatch()
  const { moduleList } = useAppSelector((state) => state.auth);
  
 

  useEffect(() => {
    const getModule = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-modules`,
        //https://ibprocess.intellibooks.io/api/get-sample
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
 
      console.log("@@@@@@@@@@@@",response)
      dispatch(setModuleList(response.data.data))
   
    }
      
    getModule()
  }, [])

//   console.log(Homedata)
  return (
   moduleList && <div className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container relative mt-5 mb-20 sm:mb-24 lg:mt-20 lg:mb-32">
      {Homedata.map((item,i)=> {
        // console.log(item)
        return item.type === "mark_p_Sectionhero" && <SectionHero2 item={item.data} />
      })}  

  {Homedata.map((item,i)=> {
       
        return item.type === "mark_p_Sectionhowitwork" &&   <SectionHowItWork className="mt-24 lg:mt-40 xl:mt-48" item={item} />
      })}  
       
      </div>

      <div className="bg-neutral-100/70 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider moduleList={moduleList} />
        </div>
      </div>
 

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* <SectionMagazine8  moduleList={moduleList} /> */}

        {/* <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionGridAuthorBox
            sectionStyle="style2"
            data={Array.from("11111111")}
            boxCard="box4"
             moduleList={moduleList} 
          />
        </div> */}

        {/* <SectionSliderCardNftVideo  moduleList={moduleList}  /> */}
{/* 
        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionSliderCollections2 cardStyle="style2" />
        </div> */}

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

        {/* <SectionVideos /> */}
      </div>
    </div>
  );
}

export default PageHome;


const Homedata =
   [
        {
            "type": "mark_p_Sectionhero",
            "data": 
                {
                    "id": 1,
                    "heading": "Lorem ipsum is placeholder text",
                    "subheading": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                    "section_hero_image": "1704978384593-logo.jpeg",
                    "imageUrls": [
                        {
                            "type": "mark_p_Sectionhero",
                            "url": "/controller/market_place/images/1704978384593-logo.jpeg"
                        }
                    ]
                },
              
            
        },
        {
            "type": "mark_p_Sectionhowitwork",
            "data": [
                {
                    "id": 1,
                    "title": " sell NFTs",
                    "descp": "the most outstanding NTFs in all topics of life.\nCreative your NTFs and sell them",
                    "work_img": "1705042794614-logo.jpeg",
                    "imgdark": "1705042794616-Screenshot from 2023-10-20 16-59-02.png",
                    "imageUrls": [
                        {
                            "type": "mark_p_Sectionhowitwork",
                            "url": "/controller/market_place/images/1705042794614-logo.jpeg"
                        },
                        {
                            "type": "mark_p_Sectionhowitwork",
                            "url": "/controller/market_place/images/1705042794616-Screenshot from 2023-10-20 16-59-02.png"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": " sell NFTs",
                    "descp": "the most outstanding NTFs in all topics of life.\nCreative your NTFs and sell them",
                    "work_img": "controller/market_place/images/1705042825911-logo.jpeg",
                    "imgdark": "controller/market_place/images/1705042825912-Screenshot from 2023-10-20 16-59-02.png",
                    "imageUrls": [
                        {
                            "type": "mark_p_Sectionhowitwork",
                            "url": "/controller/market_place/images/controller/market_place/images/1705042825911-logo.jpeg"
                        },
                        {
                            "type": "mark_p_Sectionhowitwork",
                            "url": "/controller/market_place/images/controller/market_place/images/1705042825912-Screenshot from 2023-10-20 16-59-02.png"
                        }
                    ]
                }
            ]
        },
        {
            "type": "mark_p_Sectionmagazine",
            "data": [
                {
                    "id": 1,
                    "heading_magazine": null,
                    "subheading_magazine": null,
                    "imageUrls": []
                }
            ]
        },
        {
            "type": "mark_p_Sectiongridauthor",
            "data": [
                {
                    "id": 1,
                    "heading_sectiongrid": null,
                    "name_sectiongrid": null,
                    "imageUrls": []
                }
            ]
        },
        {
            "type": "mark_p_sectionbecomeanauthor",
            "data": [
                {
                    "id": 1,
                    "heading_author_props": "Createing Chatboat",
                    "subheading_author_props": "All topics of life.\nCreative your NTFs and sell them",
                    "images_author_props": "1705043155176-logo.jpeg",
                    "imageUrls": [
                        {
                            "type": "mark_p_sectionbecomeanauthor",
                            "url": "/controller/market_place/images/1705043155176-logo.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "type": "mark_p_headerfiltersection",
            "data": [
                {
                    "id": 1,
                    "heading_headerfilter": "What is True",
                    "subheading_headerfilter": "Topics of life.\nCreative your NTFs and sell them",
                    "images_headerfilter": "1705043367678-logo.jpeg",
                    "filter": "[arrary1,array2,arra3,arra4]",
                    "imageUrls": [
                        {
                            "type": "mark_p_headerfiltersection",
                            "url": "/controller/market_place/images/1705043367678-logo.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "type": "mark_p_sectioncategories",
            "data": [
                {
                    "id": 1,
                    "heading_categories": null,
                    "subheading_categories": null,
                    "imageUrls": []
                }
            ]
        },
        {
            "type": "mark_p_sectionsubscribe",
            "data": [
                {
                    "id": 1,
                    "heading_subscribe": "Category",
                    "subheading_subscribe": "Creative your NTFs and sell them",
                    "image_subscribe": "1705043479032-Screenshot from 2023-10-20 16-59-02.png",
                    "pointheading": "[list1,array2,list2,arra3,arra4]",
                    "imageUrls": [
                        {
                            "type": "mark_p_sectionsubscribe",
                            "url": "/controller/market_place/images/1705043479032-Screenshot from 2023-10-20 16-59-02.png"
                        }
                    ]
                }
            ]
        }
    ]
