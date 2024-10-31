"use client";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import WhoAreWe from "@/components/parts/WhoAreWe";
import JoinUs from "@/components/parts/JoinUs";
import FollowUs from "@/components/parts/FollowUs";
import { AnimatedLanding } from "@/components/sections/AnimatedLanding";
import Footer from "@/components/sections/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedDiv from "@/components/minicomponents/AnimatedDiv";
import { useViewportScroll, useTransform } from "framer-motion";
import { StarIcon } from "@/components/figures/StarIcon";

export default function Home() {
  return (
    <>
      <AnimatedLanding />

      <div className="bg-darkBlue">
        <AnimatedDiv className="bg-deepGreen border-2 border-black z-30">
          <div className="max-w-screen-2xl p-8 m-auto space-y-16">
            <div className="text-center">
              <p className="text-2xl">
                Somos la <strong>organización de voluntariado</strong> del
                Servicio de Medicina del Adolescente del Hospital del Niño de
                Breña, Lima, Perú.
              </p>
            </div>
            <WhatDoWeDo />
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="bg-white border-2 border-black z-30">
          <div className="max-w-screen-2xl p-8 m-auto space-y-16">
            <WhoAreWe />
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="bg-deepOrange border-2 border-black z-30">
          <div className="max-w-screen-2xl p-8 m-auto space-y-16">
            <JoinUs />
          </div>
        </AnimatedDiv>

        <Footer />
      </div>
    </>
  );
}
