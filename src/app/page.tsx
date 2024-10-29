"use client";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollY } = useViewportScroll();
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    setScrollDistance(window.innerHeight * 2);
    const handleResize = () => setScrollDistance(window.innerHeight * 2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y1 = useTransform(scrollY, [0, scrollDistance], [0, 100]);
  const y2 = useTransform(scrollY, [0, scrollDistance], [0, 200]);
  const y3 = useTransform(scrollY, [0, scrollDistance], [0, 300]);

  const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const logoY = useTransform(scrollY, [scrollDistance, scrollDistance], [0, -scrollDistance]);

  return (
    <>
      <div className="w-screen h-[200vh] relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-0">
          <motion.div style={{ y: logoY }}>
            <Image
              src="/images/logo.png"
              alt="logo"
              layout="intrinsic"
              width={500}
              height={500}
              className="object-contain w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </motion.div>
        </motion.div>

        <motion.div className="w-full h-full absolute top-0 left-0 z-10" style={{ y: y1 }}>
          <motion.div className="absolute bg-green-500 -left-2 top-24 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80" {...animationProps} />
          <motion.div className="absolute bg-blue-500 top-5 right-5 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60" {...animationProps} />
        </motion.div>

        <motion.div className="w-full h-full absolute top-0 left-0 z-20" style={{ y: y2 }}>
          <motion.div className="absolute bg-red-500 top-1/4 right-0 w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72" {...animationProps} />
          <motion.div className="absolute bg-pink-500 top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" {...animationProps} />
          <motion.div className="absolute bg-yellow-500 bottom-5 left-5 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80" {...animationProps} />
        </motion.div>

        <motion.div className="w-full h-full absolute top-0 left-0 z-30" style={{ y: y3 }}>
          <motion.div className="absolute bg-purple-500 border-black border-8 top-48 left-12 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80" {...animationProps} />
          <motion.div className="absolute bg-black border-8 border-black bottom-1/3 left-1/4 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96" {...animationProps} />
          <motion.div className="absolute bg-pink-500 bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80" {...animationProps} />
        </motion.div>
      </div>

      <div className="h-screen w-screen bg-red-500"></div>
      <div className="h-screen w-screen"></div> 
    </>
  );
}