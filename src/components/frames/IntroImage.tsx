import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import React from "react";

interface IntroImageProps {
  img: string;
  className?: string;
  animationProps?: MotionProps;
  imageClass: string;
}

export const IntroImage: React.FC<IntroImageProps> = ({
  img,
  className,
  animationProps,
  imageClass,
}) => {
  return (
    <motion.div
      className={`${className} bg-darkBlue rounded-lg`}
      {...animationProps}
    >
      <div
        className={`border-2 rounded-xl bg-darkBlue border-darkBlue ${imageClass}`}
      >
        <Image
          src={img}
          alt="ForeverYoung images"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};
