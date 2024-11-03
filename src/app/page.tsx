"use client";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import WhoAreWe from "@/components/parts/WhoAreWe";
import JoinUs from "@/components/parts/JoinUs";
import { AnimatedLanding } from "@/components/sections/AnimatedLanding";
import AnimatedDiv from "@/components/minicomponents/AnimatedDiv";
import NavBar from "@/components/sections/NavBar";
export default function Home() {
  return (
    <div className="z-10">
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



        <AnimatedDiv className="bg-deepGreen border-2 border-black z-30">
          <div className="max-w-screen-2xl px-8 py-12 m-auto">
            <JoinUs />
          </div>
        </AnimatedDiv>

      </div>
    </div>
  );
}
