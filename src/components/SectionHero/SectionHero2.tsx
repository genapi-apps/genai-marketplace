import React, { FC } from "react";
import imagePng from "@/images/hero-right-3.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
// import HeroSearchForm from "@/components/HeroSearchForm/HeroSearchForm";
import Image from "next/image";
import HeroSearchForm from "../HeroSearchForm/HeroSearchForm";
import { RightArrowIcon } from "@/icons";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  return (
    <div
      className={`nc-SectionHero2 bannerHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
    <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-4/6 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-12 xl:pb-24 xl:pr-14 lg:mr-14 xl:mr-0 ml-4">
          <h2 className="font-semibold pt-14 lg:pt-12 xl:pt-24  text-white text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
          Prompt Marketplace
          </h2>
          <span className="text-base text-white md:text-lg dark:text-neutral-400">
         Search 100,000+ AI prompts from the world best AI creators Midjourney, ChatGPT, DALL·E, Stable Diffusion & more
          </span>
          <div className="flex gap-3">
          <ButtonPrimary href="/collection">
            <span>Explore More</span>
            <span className="ml-2">
               <RightArrowIcon/>
            </span>
          </ButtonPrimary>
            <ButtonPrimary href="/collection">
            <span>Sell Prompt</span>
           
          </ButtonPrimary></div>
        </div>
        
      
      </div>
    
    </div>
  );
};

export default SectionHero2;
