"use client"
import React, { FC, useEffect, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode/SwitchDarkMode";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Navigation from "@/shared/Navigation/Navigation";
import Link from "next/link";
import SearchBoxList from "./SearchBoxList";
import axios from "axios";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
   const [openSearchBox, setOpenSearchBox] = useState(false)
   const [searchQuery, setSearchQuery] = useState("Search here...");
   const [searchList, setSearchList] = useState([]);
// let handleSearchSubmit:any;
 const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // handleSearchSubmit(event.target.value)
  };

 

useEffect(()=>{
 const handleSearchSubmit = async() => {
  // Assuming you have an array of items
 // const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  //  console.log(value)

   if(searchQuery ==="text"){
    setOpenSearchBox(false)
    setSearchList([])
   }else{ 
  //  setOpenSearchBox(false) 
   setOpenSearchBox(true)
    try {
    
      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/${searchQuery}`;
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      }); 

  
    setSearchList(response.data.data)
     
    } catch (error) {
      console.error("Error making API call:", error);
    }
     
   }
 
  
   
  
};

handleSearchSubmit()
},[searchQuery])

console.log(typeof searchQuery ,"searchQuery")

  return (
    <>
    <div className={`nc-MainNav2Logged relative z-10`}>
      <div className="container">
        <div className="h-20 flex justify-between space-x-4 xl:space-x-8">
          <div className="self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
            <div className="hidden sm:block flex-grow max-w-xs">
              <div className="relative">   
               <Input
                  type="search"
                  placeholder="Search items"
                  className="pr-10 w-full"
                  sizeClass="h-[42px] pl-4 py-3"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />{/** this is my input for search item how to do this */}
                <Link href={"/search"} className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500" 
                // onClick={()=> { 
                //                handleSearchSubmit()}}
                               >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <input type="submit" hidden value="" />
                 {openSearchBox &&
                   <SearchBoxList setOpenSearchBox={setOpenSearchBox} searchList={searchList} />
                    
                }
                </div> 
            </div>
          </div>
          <div className="flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden xl:flex space-x-2">
                  <Link
                href={"/module-list"}
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 self-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              >
               All Module
              </Link>
               <Link
                href={"/create-category"}
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 self-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              >
                Create
              </Link>
              <div></div>
              <AvatarDropdown />
            </div>
            <div className="flex items-center space-x-1 xl:hidden">
               <AvatarDropdown />
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
        
    </div>  
     {openSearchBox && 
          <div
            className="absolute top-0 w-full h-[100vh] left-0  bottom-0 z-[9] bg-sky-900 bg-opacity-30   flex items-center justify-center"
            onClick={() => setOpenSearchBox(false)}
          ></div>
        
    }
    </>
  );
};

export default MainNav2Logged;
