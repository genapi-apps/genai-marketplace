"use client";

import React, { FC, useEffect, useState } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";
import useGetRandomData from "@/hooks/useGetRandomData";
import { EditIcon } from "@/icons";
import ModuleEditPopup from "./ModuleEditPopup";

import { useRouter } from "next/navigation"
export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  item: any
}

const ModuleCard: FC<CardNFTProps> = ({ className = "", isLiked, item }) => {
  const [open, setOpen] = useState(false)
  const [ids, setID] = useState(0)
  const router = useRouter()
  const handleEdit = (id: any) => {

    setOpen(true)
    router.push(`/edit-item/${id}`)


  }
 
  return (
    <div className={`nc-CardNFT relative flex flex-col group ${className}`}>
      <div className="relative flex-shrink-0 ">
        <div className="flex w-full h-52 rounded overflow-hidden z-0">

          {item && item.imageUrls ? item.imageUrls.map((ite: any, i: any) => {

            return ite.type === "thumbnail" && <NcImage
              containerClassName="flex w-full h-56 rounded overflow-hidden z-0"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
              className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
            />
          }) :
            <NcImage
              containerClassName="flex w-full h-56 rounded-3xl overflow-hidden z-0"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${item.thumbnail}`}
              className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
            />
          }
        </div>



        <h2 className=" absolute top-3 left-3 z-10 text-xs p-1 bg-white border rounded-xl ">{item && item.category_name}</h2>
        <div className="absolute top-3 inset-x-3 flex"></div>
      </div>

      <div className="px-2 py-5 space-y-1  relative">


        <h2 className={`text-sm font-medium truncate`}>{item && item.name}</h2>
        <h2 className={`text-xs font-normal m-0 p-0 truncate`}>{item && item.short_description}</h2>

       {!item.is_verified && <div onClick={() => handleEdit(item.id)} className="absolute right-0 top-2 cursor-pointer"><EditIcon /></div>}
      </div>
    </div>
  );
};

export default ModuleCard;
