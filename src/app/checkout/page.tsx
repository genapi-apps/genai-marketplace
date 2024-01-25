"use client";

import React, { useState } from "react";
 

 
const PageCheckout = ({}) => {
  const [showModal, setShowModal] = useState(false);

   

  return (
    <div className={`nc-PageConnectWallet`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24    space-y-8 sm:space-y-10">
         
          <div className=" ">
            <h2 className="text-3xl sm:text-4xl font-semibold">
             Checkout Page
            </h2>
            
          </div>

          <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">
               
            </div>

         
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PageCheckout;
