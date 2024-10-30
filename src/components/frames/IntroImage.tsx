import { motion } from "framer-motion";
import Image from "next/image";
interface IntroImageProps {
  img: string;
  className?: string;
  animationProps?: any;
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
        className={`border-2 rounded-xl  bg-darkBlue border-darkBlue ${imageClass}`}
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
