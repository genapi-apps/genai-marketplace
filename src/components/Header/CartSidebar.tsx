"use client"
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { CloseEye } from '@/icons';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import NcImage from '@/shared/NcImage/NcImage';
import axios from 'axios';

export interface MainNav2LoggedProps { 
    setOpenCartSide:any
}

const CartSidebar: FC<MainNav2LoggedProps> = ({setOpenCartSide}) => {
    const [hoverIndex, setHoverIndex] = useState(null);
 

    const [moduleList, setModuleList] = useState([]);
   
    const getModule = async () => {
    try {
         const userId = JSON.parse(localStorage.getItem("marketusername") as string)
    
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart`, { userId: 7 },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          },
        }
      );
      
      setModuleList(response.data.data)
     
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   useEffect(() => {
    getModule();
  }, []);
  console.log(moduleList)

    return (
        <>
            <div className={`cartSidebar absolute right-0 w-[400px] top-0   bg-white shadow z-10 `}>
               
                    <div className=" flex justify-between w-full  ">
                        <div className="flex-shrink-0 w-full relative flex items-center justify-end text-neutral-700 dark:text-neutral-100 ">
                            <div className="flex flex-col w-full">
                               <div className='flex justify-between border-b pb-5 p-5'>
                                <h1>My Cart </h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" onClick={()=> setOpenCartSide(false)} />
                                </svg>
                                </div>
                                <div className='h-[100vh] overflow-y-auto flex flex-col gap-3 pt-5 p-5'>

                                    {moduleList && moduleList.map((cartItem,i)=>{
                                        return  <div className={`nc-CardNFT relative flex w-full flex-col group `} key={i}>
                                        <div className="relative flex-shrink-0 flex gap-2">
                                            <div className="flex w-36 h-20 rounded overflow-hidden z-0">
                                            
                                              
                                            {cartItem && cartItem.imageUrls ? cartItem.imageUrls.map((ite: any, i: any) => {

                                                return ite.type === "thumbnail" && <NcImage
                                                containerClassName="flex w-36 h-20 rounded overflow-hidden z-0"
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
                                                className="object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                                                />
                                            }) :
                                                <NcImage
                                                containerClassName="flex  w-36 h-20 rounded-3xl overflow-hidden z-0"
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${cartItem.thumbnail}`}
                                                className="object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                                                />
                                            }
                                            
                                            </div>
                                          <div className='flex flex-col'>
                                            <h2 className=" z-10 text-xs p-1 text-black font-medium  capitalize ">{cartItem && cartItem.name}</h2>
                                            <p className=" z-10 text-xs p-1 text-black truncate  w-[150px]">{cartItem && cartItem.short_description}</p>
                                            <div className=" inset-x-3 text-xs flex text-black">$ {cartItem.price}</div>
                                        </div>
                                        </div>
                                      
                                       <Link href={`/cart`} className="absolute inset-0"></Link>
                                        </div>
                                    })}
                                    
                                </div>
                                <div className='fixed bottom-5 flex justify-center items-center p-5 '>
                                <ButtonPrimary href='/checkout' onClick={console.log('checkout')}>Checkout</ButtonPrimary>
                               </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </>
    );
};

export default CartSidebar;



 