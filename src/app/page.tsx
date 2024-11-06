"use client";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import JoinUs from "@/components/parts/JoinUs";
import { StarIcon } from "@/components/figures/StarIcon";
import { AnimatedLanding } from "@/components/sections/AnimatedLanding";
import AnimatedDiv from "@/components/minicomponents/AnimatedDiv";
export default function Home() {
  return (
    <div className="z-10">
      <AnimatedLanding />
      <div className="bg-white">

      <div className="bg-white border-2 border-b-0 relative border-black">
              <div className="max-w-screen-2xl p-8 py-8 m-auto text-2xl text-center">
                <p className="text-2xl"> 
                Somos la <strong>organización de voluntariado</strong> del
                Servicio de Medicina del Adolescente del Hospital del Niño de
                Breña, Lima, Perú.</p>
              </div>

              <StarIcon className="-bottom-5 left-10 z-10 absolute text-deepOrange"/>
        </div>


        <div className="border-2 border-black border-b-0 relative">
        <AnimatedDiv className="max-w-screen-2xl px-8 py-20 m-auto">
            <WhatDoWeDo />
          </AnimatedDiv>

          <StarIcon className="-bottom-5 right-8 absolute text-deepGreen"/>

        </div>

        <div className="border-2 border-black">
          <AnimatedDiv className="max-w-screen-2xl px-8 py-20 m-auto">
            <JoinUs />
          </AnimatedDiv>
        </div>


      </div>
    </div>
  );
}
