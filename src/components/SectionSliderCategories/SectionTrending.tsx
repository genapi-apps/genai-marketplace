"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardCategory5 from "@/components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "@/contains/fakeData";
import MySlider from "../MySlider";
import Link from "next/link";
import CardTrending from "../CardCategory5/CardTrending";
import NcImage from "@/shared/NcImage/NcImage";

export interface SectionTrendingProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  moduleList: any,
  title: string,
  type:any
}



const SectionTrending: FC<SectionTrendingProps> = ({
  heading = "Collection",
  subHeading = "",
  className = "",
  moduleList,
  title, type
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
              {title}       <Link href={`/collection/${type}`}><span className="text-[10px] mt-1 tracking-wide font-normal bg-primary-6000 hover:bg-primary-700 text-neutral-50 p-1 rounded cursor-pointer" >Explore More</span></Link>

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




