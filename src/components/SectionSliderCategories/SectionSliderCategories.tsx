"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardCategory5 from "@/components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "@/contains/fakeData";
import MySlider from "../MySlider";
import Link from "next/link";

export interface SectionSliderCategoriesProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  categoryList:any
}

 

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Collection",
  subHeading = "",
  className = "",
  categoryList
}) => {
  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <MySlider
        itemPerRow={4}
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
              {heading}       <Link href="/collection"><span className="text-sm mt-1 font-normal bg-blue-100 p-1 rounded cursor-pointer" >explore more</span></Link> 
          
            </Heading>
          );
        }}
        data={categoryList}
        renderItem={(item, index) => {
          return (
            <CardCategory5
              key={index}
              index={index}
             
              item={item}
            />
          );
        }}
      />
    </div>
  );
};

export default SectionSliderCategories;




 