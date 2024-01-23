"use client"
import React, { FC, useState } from "react"; 
import Link from "next/link";

export interface SearchBoxListProps {
    setOpenSearchBox: any;
    searchList:any
}

const SearchBoxList: FC<SearchBoxListProps> = ({ setOpenSearchBox ,searchList}) => {

    return (

        <>  
            <div className="absolute text-sm top-[45px] z-[99] rounded p-3 h-fit flex gap-3 flex-col  w-full bg-white shadow">
                {searchList && searchList.length>0 ? searchList.map((item:any, i:any) => {
                    return <div className={` relative flex gap-2 group items-center `} key={i}>
                        <div className="relative flex-shrink-0 ">
                            <div className="flex w-12 h-12  rounded  overflow-hidden z-0">
                                <img

                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/market/thumbnail/${item.thumbnail}`}
                                    className="flex w-12 h-12  rounded overflow-hidden z-0 object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1  w-[200px]">
                            <h2 className="   text-xs bg-white  text-gray-600 font-semibold  truncate">{item.name}</h2>
                            <h2 className={`text-xs  text-gray-600  `}>{item.category_name}</h2>
                        </div>

                        <Link href={`/collection/${item.name}/${item.id}`} className="absolute inset-0"></Link>
                    </div>
                }):
                "No result match!"}
            </div>
        </>


    );
};

export default SearchBoxList;
