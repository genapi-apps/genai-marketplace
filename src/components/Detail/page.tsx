"use client"
import React, { FC, useState, useEffect } from "react";
import ItemTypeVideoIcon from "@/components/ItemTypeVideoIcon";
import LikeButton from "@/components/LikeButton";
import { nftsLargeImgs, personNames } from "@/contains/fakeData";
import NcImage from "@/shared/NcImage/NcImage";
import AccordionInfo from "@/components/AccordionInfo";
import Badge from "@/shared/Badge/Badge";
import LikeSaveBtns from "./LikeSaveBtns";
import Avatar from "@/shared/Avatar/Avatar";
import collectionPng from "@/images/nfts/collection.png";
import VerifyIcon from "@/components/VerifyIcon";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import TabDetail from "./TabDetail";
import TimeCountDown from "./TimeCountDown";
import Link from "next/link";
import { CartIcon, CloseEye, OpenEye } from "@/icons";
import { HeartIcon } from "@heroicons/react/24/solid";
import SectionTrending from "../SectionSliderCategories/SectionTrending";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCarts } from "@/redux/cart/cartSlice";
import { toast } from "react-toastify";

export interface SectionLargeSliderProps {

  moduleDetail: any
}

const DetailPage: FC<SectionLargeSliderProps> = ({ moduleDetail }) => {
  const { trendingList } = useAppSelector((state) => state.auth);
  
  const dispatch = useDispatch()
  const renderSection1 = (moduleDetail: any) => {

    return (
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">

        <div className={`pb-9 space-y-5  ${moduleDetail[0].type_name === ("text" || "code") && "border-2 border-gray-200 rounded p-5 "}`}>
          {moduleDetail[0].type_name ==="Images" && <div className="imageslist h-[700px] overflow-y-auto overflow-x-hidden  ">
            <div className="flex flex-col gap-3">
              {moduleDetail[0].imageUrls && moduleDetail[0].imageUrls.map((item: any, i: any) => {
                return item.type === "images_gallery" && item.url.length > 0 && item.url.map((image: any, index: any) => {
                  return <NcImage key={i}
                    containerClassName="aspect-w-1 aspect-h-1 relative"
                    className="absolute inset-0 object-cover  rounded  "
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
                    alt={"title"}
                    sizes="(max-width: 768px) 100vw, 840px"
                  />
                })
              })}
            </div>
          </div>}
          {moduleDetail[0].type_name === "Text" && <div className="text-xs flex flex-col gap-4 texttt">

            <div className="text-neutral-900 dark:text-neutral-200 font-semibold flex text-base items-center">
              Prompt Details
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Model
              </label>
              <span className="text-slate-600">
                {moduleDetail[0].model}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Token size
              </label>
              <span className="text-slate-600">
                {moduleDetail[0].token_size}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Example input
              </label>
              <pre className="text-xs text-slate-600" style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                fontFamily: "Roboto, sans-serif"
              }}>

                {moduleDetail[0].example_input}
              </pre>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Example output
              </label>
              <pre className="text-slate-600" style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                fontFamily: "Roboto, sans-serif"
              }}>
                {moduleDetail[0].example_output
                }


              </pre>
            </div>






          </div>}

          {moduleDetail[0].type_name === "Code" && <div className="text-xs flex flex-col gap-4 texttt">

            <div className="text-neutral-900 dark:text-neutral-200 font-semibold flex text-base items-center">
              Prompt Details
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Model
              </label>
              <span className="text-slate-600">
                {moduleDetail[0].model}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Token size
              </label>
              <span className="text-slate-600">
                {moduleDetail[0].token_size}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Example input
              </label>
              <pre className="text-xs text-slate-600" style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                fontFamily: "Roboto, sans-serif"
              }}>

                {moduleDetail[0].example_input}
              </pre>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Example output
              </label>
              <pre className="text-slate-600" style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                fontFamily: "Roboto, sans-serif"
              }}>
                {moduleDetail[0].example_output}


              </pre>
            </div>






          </div>}

        </div>



      </div>
    );
  };

  const addToCart=async(moduleDetail:any)=>{
    //add-to-cart
     
      const userId = localStorage.getItem("id")
        const moduleId = moduleDetail[0].id
       
       

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/add-to-cart`,
        {userId:userId && userId, moduleId:moduleId},
        { 
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
 
       toast(response.data.message)
      console.log(response) 


  dispatch(addToCarts(moduleId))
    

  }

  const addFavorite =async(data:any)=>{
   const userId = localStorage.getItem("id")
        const moduleId = data[0].id
        const quanity = true

        const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/like_module`,
                        {user_id:userId && userId, module_id:moduleId, favorite :quanity},
                        {   
                          headers: {
                            "Content-Type": "application/json",
                            // Authorization: `Bearer ${getToken()}`
                          }
                        }
       
      )  
       console.log(response)
  }
  console.log(moduleDetail)
  return (
    <div className={`nc-NftDetailPage`}>
      {/* MAIn */}
      <main className="container mt-11 mb-20 flex flex-col gap-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            {/* HEADING */}
            <div className="relative bggradient">


              {moduleDetail && moduleDetail[0].imageUrls && moduleDetail[0].imageUrls.map((ite: any, i: any) => {

                return ite.type === "thumbnail" && <NcImage
                  containerClassName="aspect-w-1 aspect-h-1 rounded relative"
                  className="absolute inset-0 object-cover  rounded  "
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
                  alt={"title"}
                  sizes="(max-width: 768px) 100vw, 840px"
                />
              })}
              <span onClick={()=> addFavorite(moduleDetail)}>
                <LikeButton className="absolute right-3 top-3 z-10" />
              </span>
              {moduleDetail && moduleDetail[0].category_name && <span className=" absolute top-3 left-3 z-10 text-[10px] p-2 h-[18px] flex items-center w-fit truncate bg-white text-gray-700 rounded  capitalize  ">
                {moduleDetail[0].category_name}
              </span>}
              <div className="absolute bottom-0 p-2 z-10 flex flex-col gap-4">
                <div className="text-2xl text-white">
                  {moduleDetail && moduleDetail[0].name}
                </div>
                <div className="text-xs text-white">
                  {moduleDetail && moduleDetail[0].short_description}
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1 items-center text-white text-xs"> 9 words
                  </div>
                  <span className="text-white w-2">| </span>
                  <div>
                    <svg className="h-5 w-5 text-white" viewBox="0 0 17 17" fill="none">
                      <path
                        d="M7.66691 2.62178C8.12691 2.22845 8.88025 2.22845 9.34691 2.62178L10.4002 3.52845C10.6002 3.70178 10.9736 3.84178 11.2402 3.84178H12.3736C13.0802 3.84178 13.6602 4.42178 13.6602 5.12845V6.26178C13.6602 6.52178 13.8002 6.90178 13.9736 7.10178L14.8802 8.15512C15.2736 8.61512 15.2736 9.36845 14.8802 9.83512L13.9736 10.8884C13.8002 11.0884 13.6602 11.4618 13.6602 11.7284V12.8618C13.6602 13.5684 13.0802 14.1484 12.3736 14.1484H11.2402C10.9802 14.1484 10.6002 14.2884 10.4002 14.4618L9.34691 15.3684C8.88691 15.7618 8.13358 15.7618 7.66691 15.3684L6.61358 14.4618C6.41358 14.2884 6.04025 14.1484 5.77358 14.1484H4.62025C3.91358 14.1484 3.33358 13.5684 3.33358 12.8618V11.7218C3.33358 11.4618 3.19358 11.0884 3.02691 10.8884L2.12691 9.82845C1.74025 9.36845 1.74025 8.62178 2.12691 8.16178L3.02691 7.10178C3.19358 6.90178 3.33358 6.52845 3.33358 6.26845V5.12178C3.33358 4.41512 3.91358 3.83512 4.62025 3.83512H5.77358C6.03358 3.83512 6.41358 3.69512 6.61358 3.52178L7.66691 2.62178Z"
                        fill="#38BDF8"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.08691 8.98833L7.69358 10.6017L10.9136 7.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white w-2">| </span>

                  <div className="flex gap-1 items-center text-white text-xs"> 3
                    <HeartIcon className="w-5 h-5 text-white m-0" /> </div>
                  <span className="text-white w-2">|</span>
                  <div className="flex gap-1 items-center text-white text-xs">2 <CloseEye className="w-5 h-5 text-white m-0" /></div>
                </div>

              </div>

            

              {/* 
                 <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <Link href={"/author"} className="flex items-center ">
              <Avatar sizeClass="h-9 w-9" radius="rounded-full" />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Creator</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>{personNames[1]}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </Link>
            <div className="hidden sm:block h-6 border-l border-neutral-200 dark:border-neutral-700"></div>
            <Link href={"/author"} className="flex items-center">
              <Avatar
                imgUrl={collectionPng}
                sizeClass="h-9 w-9"
                radius="rounded-full"
              />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Collection</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>{"The Moon Ape"}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </Link>
          </div> */}

            </div>
                <div className="flex flex-col gap-5 text-xs">
                  <span className="text-3xl text-primary-6000 flex items-center  "> <span className="text-sm">$</span>{moduleDetail && moduleDetail[0].price}</span> 
                  <div className="flex gap-6">
                    <ButtonPrimary href="/buy" onClick={console.log("send on buy page")}>Get Model</ButtonPrimary>
                    <ButtonPrimary   onClick={()=>addToCart(moduleDetail)}  > Add to <CartIcon/> </ButtonPrimary>
                  </div>
               </div>
            <div className="flex flex-col gap-5 text-xs">
              <i>After purchasing, you will gain access to the prompt file, which you can use with {moduleDetail && moduleDetail[0].category_name}. You must already have access to {moduleDetail && moduleDetail[0].category_name} to use this.</i>
              <i>   By purchasing this prompt, you agree to our terms of service.</i>
              <i>  1 year ago</i>
            </div>
            {moduleDetail && <AccordionInfo moduleDetail={moduleDetail} />}


          </div>

          {/* SIDEBAR */}
          <div className=" xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            {moduleDetail && renderSection1(moduleDetail)}
          </div>
        </div>

        <SectionTrending title="Trending Prompt" moduleList={trendingList} />
      </main>

    </div>
  );
};

export default DetailPage;
