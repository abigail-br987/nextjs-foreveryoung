"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer({ className = '' }) {
  return (
    <motion.div
      className={`w-full text-white bg-darkBlue -z-30 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-2xl w-full sm:grid sm:grid-cols-3 sm:gap-3 m-auto p-8"> 
        <div className="max-sm:hidden space-y-5">
          <h3>Contáctanos</h3>
          <p>Num +51 967111332</p>
          <p>forever.young.voluntariado@gmail.com</p>
        </div>
        <div className="space-y-5 flex flex-col text-center items-center max-sm:w-full justify-center">
          <div className="flex space-x-4 justify-center items-center">
            <Link href="https://instagram.com/yourInstagram" target="_blank">
              <FaInstagram className="text-white text-4xl hover:text-gray-400" />
            </Link>
            <Link href="https://tiktok.com/@yourTiktok" target="_blank">
              <FaTiktok className="text-white text-4xl hover:text-gray-400" />
            </Link>
            <Link href="https://wa.me/51967111332" target="_blank">
              <FaWhatsapp className="text-white text-4xl hover:text-gray-400" />
            </Link>
          </div>
          <h3>FOREVERYOUNG VOLUNTARIADO</h3>
        </div>
        <div className="text-right max-sm:hidden space-y-5">
          <h3>Acreditados por la SENAJU, RENOJ</h3>
          <p>Num +51 967111332</p>
          <p>forever.young.voluntariado@gmail.com</p>
        </div>
        <div>
          FOREVERYOUNG VOLUNTARIADO © 2024. Todos los derechos reservados.
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
