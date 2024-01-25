import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import images1 from "@/images/nfts/cat1.webp";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface CardTrendingProps {
  className?: string;
  
  index: number;
  item:any,
  title:string
}

const COLORS = [
  "bg-purple-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-gray-500",
];

const CardTrending: FC<CardTrendingProps> = ({
  className = "",
  
  index,
  item,
  title
}) => {  
  return (
    <Link
      href={`/collection/${item.name}/${item.id}`}
      className={`nc-CardCategory5 flex flex-col ${className}`}
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 shadow bg-blue-400 rounded overflow-hidden group`}
      >
        {/* <NcImage
             containerClassName=""
            src={`https://assets.promptbase.com/DALLE_IMAGES%2FVAXItKojEQXmXUs4prJNIftWE6T2%2Fresized%2F1704720519740_150x150.webp?alt=media&token=99aa9a1b-476c-40f3-8e7e-1e7b4a876a1c`}  className="object-cover rounded z-0"
          fill
            /> */}
 
           {item.imageUrls && item.imageUrls.map((ite:any, i:any)=>{
         
          return ite.type === "thumbnail" &&    
          <NcImage
             containerClassName=""
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}  className="object-cover rounded z-0"
          fill
            />
        })}  
             {item.category_name &&    <span className=" absolute top-2 left-2 z-10 text-[10px] p-2 h-[18px] flex items-center w-fit truncate bg-white text-gray-800 hover:bg-slate-100 rounded  capitalize  ">
            {item.category_name}
          </span>}
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-2 flex items-center">
        {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
        <div className="w-[200px]"> 
           <h2
            className={`text-sm text-neutral-900 dark:text-neutral-100 font-semibold whitespace-nowrap truncate overflow-hidden overflow-ellipsis`}
          >
            {item.short_description}
          </h2>
          <h2
            className={`text-xs capitalize text-neutral-900 dark:text-neutral-100  truncate overflow-hidden`}
          >
            {item.name}
          </h2>
         
         
         
        </div>
      </div>
    </Link>
  );
};

export default CardTrending;
