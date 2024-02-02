"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardCategory5 from "@/components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "@/contains/fakeData";
import MySlider from "../MySlider";
import Link from "next/link";
import CardTrending from "../CardCategory5/CardTrending";
import NcImage from "@/shared/NcImage/NcImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface SectionTrendingProps {
    className?: string;
    heading?: string;
    subHeading?: string;
    moduleList: any,
    title: string
}



const SectionLargeTrending: FC<SectionTrendingProps> = ({
    heading = "Collection",
    subHeading = "",
    className = "",
    moduleList,
    title
}) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: false,
        verticalSwiping: false,
    };
    // console.log(moduleList)
    return (
        <div className={`nc-SectionSliderCategories ${className}`}>
            <h2 className="flex items-center  flex-wrap  text-2xl font-semibold gap-5">{title}</h2>

            <Slider {...settings}  >
                <div className="h-fit w-full flex flex-col gap-2">
                   <div  >   
                      <Link
                        href={`/collection`}
                        className={`nc-CardCategory5 flex flex-col p-5 ${className}`}
                      >
                        <div  className={`flex-shrink-0 relative  w-full  h-36 shadow rounded overflow-hidden group`} >

                       <NcImage
                                containerClassName=""
                                src={`https://assets.promptbase.com/DALLE_IMAGES%2FGkp5VTBnF8hCPj8vJcakF0ni0Uq1%2Fresized%2F1685728812128_150x150.webp?alt=media&token=94002a27-45b2-4ee6-a20c-edded2529a25`}
                                className="object-cover rounded z-0"
                                fill
                            /> 
                            <div className="w-[240px] absolute bottom-2 left-2 z-10 text-[10px] p-2   flex flex-col justify-start items-start truncate  text-white rounded  capitalize ">
                                <h2
                                    className={`text-sm text-white font-medium truncate overflow-hidden`}
                                >
                                    Chat
                                </h2>
                                <h2
                                    className={`text-xs text-white font-normal whitespace-nowrap truncate overflow-hidden overflow-ellipsis`}
                                >
                                    This is text
                                </h2>

 
                        </div> 
                            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                        </div>
                        
                    </Link>
                 </div>
                  


                </div>
             


            </Slider>
        </div>
    );
};

export default SectionLargeTrending;




