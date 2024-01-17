"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardNFTVideo from "./CardNFTVideo";
import MySlider from "./MySlider";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export interface SectionSliderCardNftVideoProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  title?:string;
  moduleList:any
}

const SectionSliderCardNftVideo: FC<SectionSliderCardNftVideoProps> = ({
  className = "",
  title, moduleList
}) => {
  return (
    <div className={`nc-SectionSliderCardNftVideo ${className}`}>
      <MySlider
        itemPerRow={5}
        hideNextPrev
        renderSectionHeading={({
          onClickPrev,
          onClickNext,
          showNext,
          showPrev,
        }) => {
          return (
            <Heading
              hasNextPrev
              desc=""
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
              disableNext={!showNext}
              disablePrev={!showPrev}
            >
            {title} 
               <Link href="/collection"><span className="text-sm mt-1 font-normal bg-blue-100 p-1 rounded" >Show me more</span></Link> 
            </Heading>
          );
        }}
        data={moduleList}
        renderItem={(item, index) => {
        
          return <CardNFTVideo key={index} featuredImage={item} />;
        }}
      />
    </div>
  );
};

export default SectionSliderCardNftVideo;


 