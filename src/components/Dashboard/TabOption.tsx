"use client";

import React, { FC,Fragment, useEffect, useState } from "react";
 
 
export interface TabOptionsProps {
   selectedItem:any;
   setSelectedItem:any;
   item:any
}

 
const TabOptions: FC<TabOptionsProps>  = ({item,selectedItem, setSelectedItem  }) => {
 
   

  return (
    <div className="flex   flex-col gap-3">
     
    
     <div className="w-full space-y-6">
           <div className="flex gap-5 pt-16 m-0">
           {item.map((item:any,i:any)=> {
                 return <span key={i}  onClick={()=> setSelectedItem(item)}
                  className={`flex items-center !leading-none shadow font-medium whitespace-nowrap text-[13px] px-5 py-2.5  sm:px-6 sm:py-3 capitalize rounded-xl cursor-pointer  ${selectedItem !== item ? 'bg-gray-100 text-slate-800': 'bg-blue-500 text-white border-blue-500'} border border-sky-200  dark:bg-slate-100  dark:text-slate-900  focus:outline-none`} >
                  {item}
                 
           </span>
        })}
      </div>
    
    </div>
    </div>
  );
};

export default TabOptions;
