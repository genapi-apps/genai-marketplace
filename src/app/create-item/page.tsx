"use client";

import React, { FC, useEffect, useState } from "react";
import Label from "@/components/Label/Label";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import FormItem from "@/components/FormItem";
import { RadioGroup } from "@headlessui/react";
import { nftsImgs } from "@/contains/fakeData";
import MySwitch from "@/components/MySwitch";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import NcImage from "@/shared/NcImage/NcImage";
import axios from "axios";
import { toast } from "react-toastify";
 
interface FormData {
  name: string,
  description: string,
  category_module_id: number,
  short_description: string,
  full_description: string,
   tag: string,
  keyword: string,
  external_link: string,
  support_email: string,
  website: string,
   visibility_or_status: boolean,
   timeline: string,
  
}

const PageUploadItem = ({ }) => {
  // const [selected, setSelected] = useState(plans[1]);
  const [formData, setFormData] = useState<FormData>({

    name: "",
    description: "",
    category_module_id: 1,
    short_description: "",
    full_description: "",
    
    tag: "",
    keyword: "",
    external_link: "",
    support_email: "",
    website: "",
    
    visibility_or_status: false,
    
    timeline: "",
    
  });

  const [thumbnail, setThumbnail] = useState(null)

  const [logo, setLogo] = useState(null)

  const [screenShot, setScreenShot] = useState(null)
  const [homeList, setHomeList] = useState()
    
  const [video, setVideo] = useState(null)
  ///create-modules
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 const getCategoryList = async () => {

        try {

            const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-category-modules`;
            const response = await axios.get(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

           setHomeList(response.data.data)



        } catch (error) {
            console.error("Error making API call:", error);
        }
    }

    useEffect(() => {
        getCategoryList()
       
    }, [])

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const NewformData = new FormData()
    
    logo && NewformData.append('logo', logo);
    thumbnail && NewformData.append('thumbnail', thumbnail);
    video && NewformData.append('video', video);
    logo && NewformData.append('logo', logo);
     
  
   NewformData.append("name", formData.name)  
   NewformData.append("description",  formData.description)      
   NewformData.append("category_module_id", formData.category_module_id)  
   NewformData.append("short_description", formData.short_description)   
   NewformData.append("full_description", formData.full_description)   
   NewformData.append("external_link", formData.external_link)   
   NewformData.append("support_email", formData.support_email)   
   
       
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/create-modules`, NewformData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${getToken()}`
      }
    })
   if(response.data.success ){
    toast("Item Created Successfully!")
   }
  };
  const handleThumbnailChange = (e: any) => {

    setThumbnail(e.target.files[0])
  }
  const handleLogoChange = (e: any) => {
   
      setLogo(e.target.files[0]);
   
  

  }
  const handleScreenShotChange = (e: any) => {
    setScreenShot(e.target.files[0])
  }
  const handleVideoChange = (e: any) => {
    setVideo(e.target.files[0])
  }
  return (
    <div className={`nc-PageUploadItem`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Create New Item
            </h2>
           
          </div>

          <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">

              <FormItem label="Category">
                <select 
                  defaultValue="Category" 
                  id="category_module_id" 
                  name="category_module_id" 
                  value={formData.category_module_id} 
                  onChange={handleChange} 
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                > 
                {homeList && homeList.map((item:any,i:any)=>{
                  return <option value={item.id} key={i}>{item.name}</option>
                })} 
                  
                </select>
              </FormItem>
            {/* ---- */}
            <FormItem label="Name">
              <Input defaultValue="Name" id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
            </FormItem>
           
         
            <FormItem
              label="Description"
              desc={
                <div>
                  {`The description will be included on the item's detail page
                  underneath its image.`}{" "}
                  <span className="text-green-500">Markdown</span> syntax is
                  supported.
                </div>
              }

            >
              <Textarea rows={6} className="mt-1.5" placeholder="..." id="description" name="description" value={formData.description} onChange={handleChange} />
            </FormItem>
            <FormItem
              label="Short Description"
              desc={
                <div>
                  {`The description will be included on the item's detail page
                  underneath its image.`}{" "}
                  <span className="text-green-500">Markdown</span> syntax is
                  supported.
                </div>
              }

            >
              <Textarea rows={6} className="mt-1.5" placeholder="..." id="full_description" name="full_description" value={formData.full_description} onChange={handleChange} />
            </FormItem>
            <FormItem
              label="Full Description"
              desc={
                <div>
                  {`The description will be included on the item's detail page
                  underneath its image.`}{" "}
                  <span className="text-green-500">Markdown</span> syntax is
                  supported.
                </div>
              }

            >
              <Textarea rows={6} className="mt-1.5" placeholder="..." id="short_description" name="short_description" value={formData.short_description} onChange={handleChange} />
            </FormItem>


            {/* ---- */}
            <FormItem
              label="External link"
             // desc="Zen AI will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  https://
                </span>
                <Input className="!rounded-l-none" placeholder="abc.com" id="external_link" name="external_link" type="text" value={formData.external_link} onChange={handleChange} />
              </div>
            </FormItem>
            <FormItem
              label="Support Email"
           //   desc="Zen AI will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  https://
                </span>
                <Input className="!rounded-l-none" placeholder="abc.com" id="support_email" name="support_email" type="text" value={formData.support_email} onChange={handleChange} />
              </div>
            </FormItem>


            <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
            <div>
              <h3 className="text-lg font-semibold">
                Image
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG,
                {/* GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF.  */}
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="screenShot"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="screenShot" id="screenShot" onChange={handleScreenShotChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {screenShot ? screenShot.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                Logo
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG,
                {/* GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF.  */}
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="logo"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="logo" id="logo" onChange={handleLogoChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {logo ? logo.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Video
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: MP4, WEBM, MP3, WAV,
                OGG
                {/* GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF.  */}
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="video"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="video" id="video" onChange={handleVideoChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {video ? video.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Thumbnail
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG
                {/* GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF.  */}
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="thumbnail"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="thumbnail" id="thumbnail" onChange={handleThumbnailChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {thumbnail ? thumbnail.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">
              {/* <ButtonPrimary href="/nft-detail" className="flex-1">
                Upload item
              </ButtonPrimary>
              <ButtonSecondary href="/nft-detail" className="flex-1">
                Preview item
              </ButtonSecondary> */}
              <ButtonPrimary onClick={(e: any) => handleSubmit(e)}>Create</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PageUploadItem;
