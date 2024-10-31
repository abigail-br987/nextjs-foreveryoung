"use client";
import WhatDoWeDo from "@/components/parts/WhatDoWeDo";
import WhoAreWe from "@/components/parts/WhoAreWe";
import JoinUs from "@/components/parts/JoinUs";
import FollowUs from "@/components/parts/FollowUs";
import { AnimatedLanding } from "@/components/sections/AnimatedLanding";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <>
    
      <AnimatedLanding />
      <section className="bg-deepGreen border-2 border-black z-40">
        <div className="max-w-screen-2xl p-8 m-auto space-y-16">
          <div className="text-center">
            <p className="text-2xl">
              Somos la <strong>organización de voluntariado</strong> del Servicio de Medicina del
              Adolescente del Hospital del Niño de Breña, Lima, Perú.
            </p>
          </div>
          <WhatDoWeDo />

        </div>
      </section>

      <section className="bg-white border-2 border-t-0 border-black z-40">
      <div className="max-w-screen-2xl p-8 m-auto space-y-16">

         <WhoAreWe />{/* 
          <JoinUs />
          <FollowUs />*/} 
      </div>

      </section>

      <section className="bg-deepOrange border-2 border-t-0 border-black z-40">
      <div className="max-w-screen-2xl p-8 m-auto space-y-16">
          <JoinUs />
      </div>

      </section>

      <section className="bg-white border-2 border-t-0 border-black z-40">
      <div className="max-w-screen-2xl p-8 m-auto space-y-16">
          <FollowUs />
      </div>

      <Footer/>

      </section>
    
    </>
  );
}
