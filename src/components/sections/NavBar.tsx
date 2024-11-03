"use client";
import { MouseEvent } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  animated?: boolean;
}

const navItems = [
  { name: "Inicio", to: "/" },
  { name: "Nosotros", to: "#whoarewe" },
  { name: "Contacto", to: "/contacto" },
];

function NavBar({ animated = false }: NavBarProps) {
  const { scrollY } = useScroll();
  const yPosition = animated ? useTransform(scrollY, [50, 550], [-100, 0]) : 0;

  const handleScrollToSection = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 90;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const NavContent = (
    <div className="max-w-screen-2xl px-8 py-3 m-auto space-y-16 leading-3">
      <ul className="items-center flex justify-between">
        <Link href="/" className="max-sm:hidden cursor-pointer flex space-x-3">
          <div className="px-2 bg-gbBlack h-max rounded-md flex items-center space-x-2 font-serif font-bold">
            <Image
              src="/images/logo.jpg"
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
          {navItems.map((item, index) => {
            const isInternalSection = item.to.startsWith("#");
            const targetId = item.name === "Nosotros" ? "whoarewe" : item.to.replace("/", "");
            
            return (
              <Link
                href={isInternalSection ? "/" : item.to}
                key={index}
                className="relative uppercase cursor-pointer text-gbWhite font-bold group"
                onClick={(e) => isInternalSection && handleScrollToSection(e, targetId)}
              >
                {item.name}
                {animated && (
                  <span className="absolute left-0 bottom-0 translate-y-1 w-full h-[2px] bg-darkBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                )}
              </Link>
            );
          })}
        </div>
      </ul>
    </div>
  );

  return animated ? (
    <motion.nav
      className="max-sm:text-sm fixed w-full top-0 z-50 font-serif bg-white border-2 border-darkBlue"
      style={{ y: yPosition }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {NavContent}
    </motion.nav>
  ) : (
    <nav className="max-sm:text-sm fixed w-full top-0 z-50 font-serif bg-white border-2 border-darkBlue">
      {NavContent}
    </nav>
  );
}

export default NavBar;
