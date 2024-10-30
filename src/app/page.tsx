"use client";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import WhoAreWe from "@/components/parts/WhoAreWe";
import JoinUs from "@/components/parts/JoinUs";
import FollowUs from "@/components/parts/FollowUs";
import { AnimatedLanding } from "@/components/sections/AnimatedLanding";
export default function Home() {
  return (
    <>
      <AnimatedLanding />
      <section className="bg-deepGreen border-2 border-black z-40">
        <div className="max-w-screen-2xl p-8 m-auto space-y-10">
          <div className="text-center">
            <p className="text-2xl">
              Somos la <strong>organización de voluntariado</strong> del Servicio de Medicina del
              Adolescente del Hospital del Niño de Breña, Lima, Perú.
            </p>
          </div>
          <WhatDoWeDo />
          <WhoAreWe />
          <JoinUs />
          <FollowUs />
        </div>
      </section>
    
    </>
  );
}
