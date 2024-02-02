import React, { FC } from "react";
import ButtonCircle from "@/shared/Button/ButtonCircle";
import rightImg from "@/images/SVG-subcribe2.png";
import NcImage from "@/shared/NcImage/NcImage";
import Badge from "@/shared/Badge/Badge";
import Input from "@/shared/Input/Input";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Let's Connect!</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Subcribe to our super-exclusive drop list and be the first to know
          abour upcoming drops
        </span>
        {/* <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
           
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          
        </ul> */}
        {/* <form className="mt-10 relative max-w-sm">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
            rounded="rounded-full"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-1"
          >
            <ArrowSmallRightIcon className="w-5 h-5" />
          </ButtonCircle>
        </form> */}
         <form className="mt-10 relative max-w-sm">
          <ButtonPrimary
            href="/contact"
            onClick={console.log("hello")}
          >
           Go   <ArrowSmallRightIcon className="w-5 h-5" />
          </ButtonPrimary>
          </form>
      </div>
      <div className="flex-grow">
        <NcImage src={"/contact.png"} className="rounded-xl contect"/>
      </div>
    </div>
  );
};

export default SectionSubscribe2;
