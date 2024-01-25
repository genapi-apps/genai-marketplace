import React, { FC } from "react";
import imagePng from "@/images/hero-right-3.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
// import HeroSearchForm from "@/components/HeroSearchForm/HeroSearchForm";
import Image from "next/image";
import HeroSearchForm from "../HeroSearchForm/HeroSearchForm";
import { RightArrowIcon } from "@/icons";
import { getButtonData } from "@/hooks/getVerifyToken";
import Link from "next/link";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
  title:string;
  desc:string;
  id:any
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children ,title,desc,id}) => {
  return (
    <div
      className={`nc-SectionHero2 ${id === "1" && "bannerHero"}  ${id==="2" && "bannerHero2"} ${id==="3" && "bannerHero3"} flex flex-col-reverse lg:flex-col py-20 sm:py-8  relative ${className}`}
    >
    <div className="flex flex-col lg:flex-row lg:items-center  ">
        <div className="flex-shrink-0 lg:w-4/6 flex flex-col z-[9] items-start gap-4  pt-14 lg:pt-12 xl:pt-24 xl:pr-14 lg:mr-14 xl:mr-0 ml-4">
          <h2 className="font-semibold pt-14 lg:pt-12 xl:pt-24   text-3xl md:text-3xl xl:text-4xl !leading-[114%] flex flex-col ">
              <span className={`text-white bg-opacity-50  text-2xl ${id === "1" && "text-4xl pb-5 xl:text-5xl"}`}> {title}</span>
             <span className="text-sm text-white bg-opacity-50   rounded-xl md:text-lg font-normal dark:text-neutral-400">
              {desc}
            </span>
         {id === "1" &&   <span className="text-2xl text-white bg-opacity-50  rounded-xl md:text-lg font-normal dark:text-neutral-400">   Midjourney, ChatGPT, DALL·E, Stable Diffusion & more</span>}

       
          </h2>
          
          <div className="flex gap-3">
          <ButtonPrimary href="/collection"  onClick={getButtonData()}
          >
            <span>{id === "1" && "Explore More"}
                  {id === "2" && "Sell Model"} 
                  {id === "3" && "Hire Creator"} 
             </span>
            <span className="ml-2">
               <RightArrowIcon/>
            </span>
          </ButtonPrimary>
          </div>
        </div>
        
      
      </div>
    
    </div>
  );
};

export default SectionHero2;
