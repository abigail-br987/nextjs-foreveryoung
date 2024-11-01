"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", to: "/", style: "bg-gbGreen" },
  { name: "Programas", to: "/programas", style: "bg-gbBlue" },
  { name: "Nosotros", to: "/nosotros", style: "bg-gbRed" },
  { name: "Contacto", to: "/contacto", style: "bg-gbYellow" },
  { name: "Blog", to: "/blog", style: "" },
];

function NavBar() {
  const { scrollY } = useScroll();

  const yPosition = useTransform(scrollY, [50, 550], [-100, 0]); 

  return (
    <motion.nav
      className="max-sm:text-sm fixed w-full top-0 z-50 font-serif bg-white border-2 border-darkBlue"
      style={{
        y: yPosition,
      }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-screen-2xl px-8 py-3 m-auto space-y-16 leading-3">
        <ul className="items-center flex justify-between">
          <Link href={"/home"} className="max-sm:hidden cursor-pointer flex space-x-3">
            <div className="px-2 bg-gbBlack h-max rounded-md space-x-2 font-serif font-bold flex items-center">
              <Image
                src={"/images/logo.jpg"}
                alt="Home Logo"
                layout="responsive"
                width={70}
                height={70}
                className="max-w-8 max-h-8 p-0.5 rounded-full border-2 border-darkBlue"
              />
              <span>FOREVERYOUNG VOLUNTARIADO</span>
            </div>
          </Link>
          <div className="max-sm:w-full flex items-center space-x-2 md:space-x-4 z-0 rounded-md px-3">
            {navItems.map((item, index) => (
              <Link href={item.to} key={index} className="relative uppercase cursor-pointer text-gbWhite font-bold group">
                {item.name}
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
