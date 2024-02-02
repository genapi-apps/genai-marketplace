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
  banner: any
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children, banner }) => {

  return (banner && banner.result && banner.result.length > 0 && banner.result.map((item: any, i: any) => {
    const butn = JSON.parse(item.button_text)
    return <div
      className={`nc-SectionHero2 ${item.id === 0 && "bannerHero"}  ${item.id === 1 && "bannerHero2"} ${item.id === 2 && "bannerHero3"} flex flex-col-reverse lg:flex-col py-20 sm:py-8  relative ${className}`}
      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${item.imageUrl})` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center  ">
        <div key={i} className="flex-shrink-0 lg:w-4/6 flex flex-col z-[9] items-start gap-4  pt-14 lg:pt-12 xl:pt-24 xl:pr-14 lg:mr-14 xl:mr-0 ml-4">
          <h2 className="font-semibold pt-14 lg:pt-12 xl:pt-24   text-3xl md:text-3xl xl:text-4xl !leading-[114%] flex flex-col ">
            <span className={`text-white bg-opacity-50  text-2xl 
              // ${item.id === 1 && "text-4xl pb-5 xl:text-5xl"}
              `}> {item.title}</span>
            <span className="text-sm text-white bg-opacity-50   rounded-xl md:text-lg font-normal dark:text-neutral-400">
              {item.description}
            </span>
            <span className="text-2xl text-white bg-opacity-50  rounded-xl md:text-lg font-normal dark:text-neutral-400">  {item.subheading}</span>


          </h2>

          <div className="flex gap-3">
            {
              butn.map((button: any, index: any) => {
                return <ButtonPrimary href="/collection" onClick={getButtonData()} key={index}
                >
                  {button}
                  <span className="ml-2">
                    <RightArrowIcon />
                  </span>
                </ButtonPrimary>
              })
            }
          </div>
        </div>



      </div>

    </div>
  })
  );
};

export default SectionHero2;
