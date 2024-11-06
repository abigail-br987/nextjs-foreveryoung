"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer({ className = "" }) {
  return (
    <div className={` w-full text-white bg-darkBlue -z-30 ${className}`}>
      <div
        className={`max-w-screen-2xl w-full sm:grid sm:grid-cols-3 sm:gap-3 m-auto p-8 `}
      >
        <div className="max-sm:hidden space-y-5">
          <h3>Contáctanos</h3>
          <p>Num +51 967111332</p>
          <p>forever.young.voluntariado@gmail.com</p>
        </div>

        <div className="space-y-5 flex flex-col text-center items-center max-sm:w-full justify-center">
          <div className="flex space-x-4 justify-center items-center cursor-pointer">
            <Link
              href="https://www.instagram.com/forever_young_voluntariado/"
              target="_blank"
            >
              <FaInstagram className="text-white text-4xl hover:text-gray-400 z-10" />
            </Link>
            <Link href="https://www.tiktok.com/@foreveryoung_insn" target="_blank">
              <FaTiktok className="text-white text-4xl hover:text-gray-400 z-10" />
            </Link>
            <Link
              href="https://wa.me/51967111332"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white text-4xl hover:text-gray-400 z-10" />
            </Link>
          </div>
          <h3 className="font-serif">FOREVERYOUNG VOLUNTARIADO</h3>
        </div>

        <div className="text-right max-sm:hidden space-y-5">
          <h3>Acreditados por la SENAJU, RENOJ</h3>
          <p>Instituto Nacional de Salud del Niño</p>

          <p>Av. Brasil 600, Breña 15083</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
