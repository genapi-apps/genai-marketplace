import React from "react";
import logoImg from "@/images/logo.svg";
import logoLightImg from "@/images/logo-light.svg";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
    
     
        <Image
          className={`block h-8 sm:h-10 w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={"/logo.png"}
          alt="Logo"
          sizes="200px"
          priority
          width={400}
          height={400}
        />
     
     
    </Link>
  );
};

export default Logo;
