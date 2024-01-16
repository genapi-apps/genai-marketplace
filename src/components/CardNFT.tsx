"use client";

import React, { FC, useEffect, useState } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import NcImage from "@/shared/NcImage/NcImage";
import ItemTypeImageIcon from "./ItemTypeImageIcon";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import { ClockIcon } from "@heroicons/react/24/outline";
import ItemTypeVideoIcon from "./ItemTypeVideoIcon";
import Link from "next/link";
import useGetRandomData from "@/hooks/useGetRandomData";

export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  item:any
}

const CardNFT: FC<CardNFTProps> = ({ className = "", isLiked,item }) => {
  const { nftImageRd, titleRd } = useGetRandomData();

  const [itemType, setItemType] = useState<"video" | "audio" | "default">(
    "default"
  );

  useEffect(() => {
    if (Math.random() > 0.5) {
      setItemType("video");
    } else {
      setItemType("audio");
    }
  }, []);

  const renderAvatars = () => {
    return (
      <div className="flex -space-x-1 ">
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
      </div>
    );
  }; 
  return (
    <div className={`nc-CardNFT relative flex flex-col group ${className}`}>
      <div className="relative flex-shrink-0 ">
        <div className="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0">
         
            {item && item.imageUrls ? item.imageUrls.map((ite:any, i:any)=>{
         
          return ite.type === "thumbnail" &&       <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
             src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        }) : 
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
             src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${item.thumbnail}`}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        }  
        </div>
        {/* {itemType === "video" && (
          <ItemTypeVideoIcon className="absolute top-3 left-3 !w-9 !h-9" />
        )}

        {itemType === "audio" && (
          <ItemTypeImageIcon className="absolute top-3 left-3 !w-9 !h-9" />
        )}

        <LikeButton
          liked={isLiked}
          className="absolute top-3 right-3 z-10 !h-9"
        /> */}
          <h2 className=" absolute top-3 left-3 z-10 text-xs p-1 bg-white border rounded-xl ">{item && item.category_name}</h2>
        <div className="absolute top-3 inset-x-3 flex"></div>
      </div>

      <div className="px-2 py-5 space-y-3">
        {/* <div className="flex justify-between">
          {renderAvatars()}
          <span className="text-neutral-700 dark:text-neutral-400 text-xs">
            99 in stock
          </span>
        </div> */}
       
          <h2 className={`text-lg font-medium`}>{item && item.name}</h2>
             <h2 className={`text-sm font-medium m-0 p-0`}>{item && item.short_description}</h2>

        {/* <div className="w-full border-b border-neutral-200/70 dark:border-neutral-700"></div> */}

        {/* <div className="flex justify-between items-end">
          <Prices labelTextClassName="bg-white dark:bg-neutral-900" />
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <ClockIcon className="w-4 h-4" />
            <span className="ml-1 mt-0.5">14 hours left</span>
          </div>
        </div> */}
      </div>

    {item &&  <Link href={`/collection/${item.name}/${item.id}`} className="absolute inset-0"></Link>}
    </div>
  );
};

export default CardNFT;
