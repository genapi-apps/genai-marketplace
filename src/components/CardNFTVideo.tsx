import React, { FC, useId } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import NcImage from "@/shared/NcImage/NcImage";
import { nftsImgs } from "@/contains/fakeData";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import VideoForNft from "./VideoForNft";
import Link from "next/link";
import ItemTypeImageIcon from "./ItemTypeImageIcon";
import Image from "next/image";

export interface CardNFTVideoProps {
  className?: string;
  featuredImage?: any;
  isLiked?: boolean;
}

const CardNFTVideo: FC<CardNFTVideoProps> = ({
  className = "",
  isLiked,
  featuredImage ,
}) => {  
  const renderAvatars = () => {
    return (
      <div className="hidden sm:flex -space-x-1 ">
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
    <div
      className={`nc-CardNFTVideo relative flex flex-col group cursor-pointer ${className}`}
    >
      <div className="relative flex-shrink-0 ">
        <div className="relative aspect-w-16 aspect-h-9 w-full h-0 rounded-3xl overflow-hidden z-0">
           <div className="absolute inset-0 z-10">
          
               {featuredImage.imageUrls && featuredImage.imageUrls.map((ite:any, i:any)=>{
         
          return ite.type === "thumbnail" &&    <NcImage
              containerClassName="aspect-w-1 aspect-h-1 relative"
              className="absolute inset-0 object-cover   border-4 sm:border-[14px] border-white dark:border-neutral-800"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
              alt={"title"}
              sizes="(max-width: 768px) 100vw, 840px"
            />
        })}  
            {/* <img  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`} alt={featuredImage.image} height={"100%"} width={"100%"} style={{height:"100%"}} /> */}
          </div>
        </div>

        {/* <LikeButton
          liked={isLiked}
          className="absolute top-3 right-3 z-10 !h-9"
        /> */}
          <div className=" absolute top-5 left-5 z-10 text-xs p-1 bg-white border rounded-xl">
            {featuredImage.category_name}
          </div>
      </div>

      <div className="p-3 relative">
        <Link href={`/collection/${featuredImage.category_name}/${featuredImage.id}`} className="absolute inset-0"></Link>
        <div className="flex justify-between items-center">
          <h2 className={`sm:text-lg font-semibold hover:text-primary-6000 flex flex-col`}>
           {featuredImage.name}
           <span className="text-sm font-normal mt-0">   {featuredImage.short_description}</span>
          </h2> 
         
        </div>

       
      </div>
    </div>
  );
};

export default CardNFTVideo;
