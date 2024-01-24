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
import { CloseEye, OpenEye } from "@/icons";

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

const PageSignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [msg, setMsg] = useState("")
  const router = useRouter()

  const handleChange = (e: any) => {
    setMsg("")
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
    setErrors((prevState) => ({ ...prevState, [name]: "" }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Validate email
    if (!emailRegex.test(inputs.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address"
      }))
    }

    // Validate password
    if (inputs.password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password must be at least 6 characters"
      }))
    }

    // Validate confirm password
    if (inputs.password !== inputs.confirmpassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmpassword: "Passwords do not match"
      }))
    }

    // If there are errors, stop the submission
    if (Object.values(errors).some((error) => error !== "")) {
      return
    }

    setLoading(true)
// console.log(inputs, errors)
    try {
      const signup = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create_user`,
        inputs
      )
      // Show success toast with dynamic message

      if (signup.data.status === true) {
        setMsg("Signup Successful")
        toast("Signup Successful!")
        // Reset form fields and clear errors on success
        setInputs({ email: "", password: "", confirmpassword: "" })
        setErrors({ email: "", password: "", confirmpassword: "" })

        setTimeout(() => {
          setLoading(false)
          router.push(`/login`)
        }, 2000)
      } else {
        setMsg(signup.data.message)
        setLoading(false)
      }

      // Handle successful signup
    } catch (error) {
      console.error("Error during signup:", error)
      // Handle error, update state, show user-friendly error message, etc.
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
// console.log(errors)
  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  sizes="40px"
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
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
                name="email"
                placeholder="example@example.com"
                 className={`mt-1 ${  errors.email && "border-red-600"}`}
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
            <label className="block relative">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type={showPassword ? "text" : "password"}
                 className={`mt-1 ${  errors.password && "border-red-600"}`}
                  name="password"
                placeholder="Password"
                value={inputs.password || ""}
                onChange={handleChange} />
              <span
                onClick={toggleShowPassword}
                className="absolute right-3 top-[50px] transform  -translate-y-1/2 cursor-pointer"
              >
                {!showPassword ? (
                  <OpenEye className="text-gray-500" />
                ) : (
                  <CloseEye className="text-gray-500" />
                )}
              </span>
            </label>
            <label className="block relative">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Confirm Password
              </span>
              <Input type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                placeholder="Confirm Password"
                value={inputs.confirmpassword || ""}
                onChange={handleChange}
                  className={`mt-1 ${  errors.confirmpassword && "border-red-600"}`} />
               <span
                onClick={toggleShowConfirmPassword}
                className="absolute right-3 top-[50px] transform  -translate-y-1/2 cursor-pointer"
              >
                {!showConfirmPassword ? (
                  <OpenEye className="text-gray-500" />
                ) : (
                  <CloseEye className="text-gray-500" />
                )}
              </span>
          
            </label>
               {msg && (
            <div className="text-sm bg-red-200 absolute p-2 -bottom-[38px] text-center w-[80%] rounded">
              {msg}
              </div>)}
            <ButtonPrimary type="submit"   disabled={loading && true} onClick={(e:any) => handleSubmit(e)}>Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
