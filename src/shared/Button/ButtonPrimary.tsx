import Button, { ButtonProps } from "@/shared/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {
  onClick:any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "", onClick,
  ...args
 
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary rounded disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
      onClick={onClick}
    />
  );
};

export default ButtonPrimary;
