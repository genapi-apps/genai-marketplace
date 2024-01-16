import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

export interface NcImageProps extends Omit<ImageProps, "alt"> {
  containerClassName?: string;
  alt?: string;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "relative",
  alt = "nc-imgs",
  src,
  fill,
  className = "object-cover w-full h-full",
  sizes = "(max-width: 600px) 480px, 800px",
  ...args
}) => {
  return (
    <div className={containerClassName}>
      {src ? (
        <img
          className={className}
          alt={alt}
          sizes={sizes}
          {...args}
          src={src}
          fill={fill}
          style={{height:"100%"}}
        />
      ) : null}
    </div>
  );
};

export default NcImage;
