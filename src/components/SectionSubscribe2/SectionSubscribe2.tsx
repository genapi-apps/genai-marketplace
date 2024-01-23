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
          <Link
            href="/contact"
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
          >
           Go   <ArrowSmallRightIcon className="w-5 h-5" />
          </Link>
          </form>
      </div>
      <div className="flex-grow">
        <NcImage src={"/letconnect.png"} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
