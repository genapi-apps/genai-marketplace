"use client"
import NcImage from '@/shared/NcImage/NcImage'
import Link from 'next/link'
import React, { FC, useState, useEffect } from 'react'

export interface CardCategory5Props {
  data: any

}

const WeekTrending: FC<CardCategory5Props> = ({ data }) => {
  console.log(data)

  return (
    <>

      <h2 className='text-xs text-gray-600 font-semibold  mb-3'>Top Prompt This Week</h2>
      <div className='flex flex-col gap-5'>

        {data && data.length > 0 ? data.slice(0, 5).map((item: any, i: any) => {
          return <div className={`nc-CardNFT relative flex gap-2 group `}>
            <div className="relative flex-shrink-0 ">
              <div className="flex w-36 h-18  rounded-xl  overflow-hidden z-0">
                {item && item.imageUrls ? item.imageUrls.map((ite: any, i: any) => {

                  return ite.type === "thumbnail" && <NcImage
                    containerClassName="flex w-36 h-18  rounded-xl overflow-hidden z-0"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
                    className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                  />
                }) :
                  <NcImage
                    containerClassName="flex w-36 h-18  rounded-3xl overflow-hidden z-0"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${item.thumbnail}`}
                    className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                  />
                }

              </div>

              <div className="absolute top-3 inset-x-3 flex"></div>
            </div>

            <div className="flex flex-col gap-1  w-[150px]">
              <h2 className="   text-xs bg-white  text-gray-600 font-semibold  truncate">{item.name}</h2>
              <h2 className={`text-xs  text-gray-600  `}>{item.category_name}</h2>
              <h2 className={`text-xs text-gray-600 m-0 p-0 flex items-center gap-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-4 h-4">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>

                5</h2>
            </div>

            <Link href={`/collection`} className="absolute inset-0"></Link>
          </div>

        }) :

          [1, 1, 1, 1, 1].map((item, indx) => (
            <div className={`nc-CardNFT relative flex gap-2 group `} key={indx}>
              <div className="relative flex-shrink-0 ">
                <div className="flex w-36 h-18  rounded-xl  overflow-hidden z-0">
                  <NcImage
                    containerClassName="flex w-36 h-18  rounded-xl overflow-hidden z-0"
                    src="https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png"
                    className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                  />


                </div>

                <div className="absolute top-3 inset-x-3 flex"></div>
              </div>

              <div className="flex flex-col gap-1 animate-fade  w-[150px]">
                <h2 className="   text-xs bg-white  text-gray-600 font-semibold animate-fade h-5 w-full truncate"> </h2>
                <h2 className={`text-xs  text-gray-600 animate-fade w-full h-5`}> </h2>
                <h2 className={`text-xs text-gray-600 m-0 p-0 h-5 w-full flex items-center gap-1 animate-fade`}>
                </h2>
              </div>

              <Link href={`/collection`} className="absolute inset-0"></Link>
            </div>

          ))
        }


      </div>
    </>
  )
}

export default WeekTrending