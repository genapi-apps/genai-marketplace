"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardCategory5 from "@/components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "@/contains/fakeData";
import MySlider from "../MySlider";
import Link from "next/link";
import CardTrending from "../CardCategory5/CardTrending";

export interface SectionTrendingProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  moduleList:any,
  title:string
}

 

const SectionTrending: FC<SectionTrendingProps> = ({
  heading = "Collection",
  subHeading = "",
  className = "",
  moduleList,
  title
}) => {
  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
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
              desc={subHeading}
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
              disableNext={!showNext}
              disablePrev={!showPrev}
            >
              {title}       <Link href={`/collection`}><span className="text-xs mt-1 font-normal bg-blue-100 p-1 rounded cursor-pointer" >explore more</span></Link> 
          
            </Heading>
          );
        }}
        data={moduleList}
        renderItem={(item, index) => {
          return (
            <CardTrending
              key={index}
              index={index}
              title={title}
              item={item}
            />
          );
        }}
      />
    </div>
  );
};

export default SectionTrending;




 