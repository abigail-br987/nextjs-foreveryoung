"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv = ({ children, className = "" }: AnimatedDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.97, opacity:0.7 }}
      animate={{ 
        scale: isInView ? 1 : 0.97, 
        opacity: isInView? 1: 0.7,
      }}
      transition={{ 
        duration: 0.5,
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;