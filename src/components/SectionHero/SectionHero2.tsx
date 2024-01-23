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
        <div className="flex-shrink-0 lg:w-4/6 flex flex-col items-start space-y-20 sm:space-y-20 pb-14 lg:pb-12 xl:pb-24 xl:pr-14 lg:mr-14 xl:mr-0 ml-4">
          <h2 className="font-semibold pt-14 lg:pt-12 xl:pt-24  text-white text-3xl md:text-3xl xl:text-4xl !leading-[114%] flex flex-col gap-4">
         {title}

          <span className="text-sm text-white md:text-lg font-normal dark:text-neutral-400">
        {desc}
          </span>
          </h2>
          
          <div className="flex gap-3">
          <Link href="/collection" className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" //onClick={()=> getButtonData()}
          >
            <span>Explore More</span>
            <span className="ml-2">
               <RightArrowIcon/>
            </span>
          </Link>
          </div>
        </div>
        
      
      </div>
    
    </div>
  );
};

export default SectionHero2;
