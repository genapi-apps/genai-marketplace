"use client"

import React, { FC, useState, useEffect } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link"; 
import { useRouter } from "next/navigation"
import axios from "axios";
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setEmailAuth } from "@/redux/auth/authSlice";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageForgotPassword = () => {
  const [inputs, setInputs] = useState({ })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [companyLogoSrc, setCompanyLogoSrc] = useState('/logo.png'); // Default image source
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const dispatch = useDispatch()
  const { push } = useRouter()
  const handleChange = (e: any) => {
    setMsg("")
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }

 
  const handleSubmit = async(e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const forgot_password = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-forgot-email`,
        inputs
      )

      if (forgot_password.data.status === true) {
       
          dispatch(setEmailAuth(forgot_password.data.email))
          push('/otp-authentication');
      
      } else if (forgot_password.data.status === false) {
        setMsg(forgot_password.data.message)
        setLoading(false)
      } 
      // Handle successful signup
    } catch (error) {
      console.error("Error during forgot password:", error)
      // Handle error, update state, show user-friendly error message, etc.
    }
  }
  return (
    <div className={`nc-PageLogin`} data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
         Forgot Password
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                  sizes="40px"
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* OR */}
          {/* <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div> */}
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                      name="email" 
                value={inputs.email || ""}
                onChange={handleChange}
                className={`mt-1 `}
              />
            </label>
            
            <ButtonPrimary type="submit"   disabled={loading && true} onClick={(e:any) => handleSubmit(e)}>Continue</ButtonPrimary>
          </form>
  {msg && (
            <div className="text-sm bg-red-200 absolute p-2 -bottom-[31px]  text-center w-[80%] rounded">
              {msg}
            </div>
          )}
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            
            <Link className="text-green-600" href="/signup">
              login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageForgotPassword;
