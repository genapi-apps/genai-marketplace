"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link"; 
import MonthTrending from './MonthTrending'
import WeekTrending from "./WeekTrenging";
import CreatorTrending from "./CreatorTrending";
import axios from "axios";
export interface SectionTrendingProps {
  
}

 

const SectionNew: FC<SectionTrendingProps> = ({ }) => {
  const [weekData, setWeekData]= useState()
  const [monthData, setMonthData]= useState()
   useEffect(() => {
        const getTrendingData = async () => {
         
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-top-most` ,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            ) 
            setWeekData(response.data.week)
            setMonthData(response.data.month)
            // (setModuleList(response.data.data))

        }
       

     
        getTrendingData()
    }, [])
  return (
    <div className={`nc-SectionSliderCategories flex lg:flex-row flex-col gap-5 w-full py-8`}>
     <div className="lg:w-1/2 w-full border border-gray-50 shadow rounded-xl px-2 py-5 flex flex-col gap-2">  <WeekTrending data={weekData}/></div>
     <div className="lg:w-1/2 w-full border border-gray-50 shadow rounded-xl px-2 py-5 flex flex-col gap-2">  <MonthTrending data={monthData}/></div>
     <div className="lg:w-1/2 w-full border border-gray-50 shadow rounded-xl  px-2 py-5 flex flex-col gap-2">  <CreatorTrending/></div>
    </div>
  );
};

export default SectionNew;




 