"use client";

import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import FormItem from "@/components/FormItem";
import axios from "axios"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Select from "@/shared/Select/Select";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

interface FormData {
  email: string,
  cardInfo: number,
  month:string,
  cvc:number,
  name:string,
  country:string
   

}

const PageCheckout = ({ }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    cardInfo: 1234,
    month:'',
    cvc:0,
    name:'',
    country:''
    
  });


    const router = useRouter()

   
  
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  


  const handleSubmit = async (e: any) => {
          e.preventDefault();
    
          toast("Congratulations, Payment Successfully!  ")
          router.push(`/purchase`)
  };
  
 
   
  return (
    <div className={`PageTypeItem`}>
      <div className="container  mx-auto px-4">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
           <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">Payment Details</h1>
                    </div> 
                    <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

                    <div className="m-7">
                        <form action="">
                            <div className="mb-6">
                               <FormItem label="Name">
                                <Input  id="name" placeholder="JHON DOE" required name="name" type="text"  />
                              </FormItem>
                            </div>
                            <div className="mb-6">
                                <FormItem label="Email">
                                <Input   id="email" placeholder="jhon.doe@gmail.com" required name="email" type="text"  />
                              </FormItem>
                            </div>
                            <div className="mb-6 flex flex-col gap-2">
                               <FormItem label="Card Holder Name">
                                <Input  id="cardInfo" placeholder="1234 1234 1234 1234" required name="cardInfo" type="text"  />
                              </FormItem> 
                              <div className="flex justify-between items-center gap-5">
                                <div className="flex flex-col">
                                   
                                <Input  id="month" placeholder="MM/YY" required name="month" type="text"  />
                             
                                </div>
                                 <div className="flex flex-col">
                                     
                                <Input  id="cvc" placeholder="CVC" required name="cvc" type="number"  />
                              
                               </div>
                                
                            </div>
                            </div>
                           
                           
                             <div className="flex flex-col mb-6">
                                    <label htmlFor="country" className=" text-base font-medium text-neutral-600 dark:text-neutral-200 ">Country</label>
                                 
                                    <Select  name="country" id="country" required>
                                       <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        
                                    </Select>
                              </div>
                            <div className="mb-6 text-center flex justify-center w-full">
                              <ButtonPrimary className="w-full" onClick={(e: any) => handleSubmit(e)}>Pay Now</ButtonPrimary>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

           
           

         


         
          </div>
        
      </div>
    </div>
  );
};

  


export default PageCheckout;
