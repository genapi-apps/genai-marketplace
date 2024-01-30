import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import images1 from "@/images/nfts/cat1.webp";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface CardCategory5Props {
  className?: string;
  
  index: number;
  item:any
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

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  
  index,
  item
}) => { 
  return (
    <Link
      href={`/collection/${item.name}`}
      className={`CardCategory5 flex flex-col ${className}`}
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0         bg-gray-100 shadow rounded overflow-hidden group`}
      >
        {/* <NcImage
          containerClassName=""
          src={"https://assets.promptbase.com/DALLE_IMAGES%2FeG1AhVWVTJOX4SqxE1AUFLv1bC73%2Fresized%2F1705680233343_500x500.webp?alt=media&token=c029a218-7e31-4682-8acd-224e5b3c9193"}
          className="object-cover rounded z-0"
          fill
        /> */}
                <NcImage
          containerClassName=""
           src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.imageUrl}`}
            className="object-cover rounded z-0 bg-gray-100"
          fill
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-2 flex items-center">
        {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
        <div className="w-[200px]">
          <h2
            className={`text-sm text-neutral-900 capitalize dark:text-neutral-100 font-medium truncate`}
          >
            {item.name}
          </h2>
         
        </div>
      </div>
    </Link>
  );
};

export default CardCategory5;
