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
        <div className="max-w-screen-2xl p-8 m-auto">
          <div className="">
            <p>
              Somos la <strong>organización de voluntariado</strong> del Servicio de Medicina del
              Adolescente del Hospital del Niño de Breña, Lima, Perú. Estamos
              inscritos en el Registro Nacional de Organizaciones juveniles.
            </p>
            <p>
              Esta experiencia se desarrolla en el marco de los derechos que
              tienen los jóvenes a la <strong>SALUD, EDUCACIÓN Y PARTICIPACIÓN</strong> , con un
              enfoque de equidad, de derecho y diversidad. Trabajamos con los
              profesionales del equipo multidisciplinario en actividades
              preventivas de conductas de riesgo y de promoción de estilos de
              vida saludables con sus pares. Sistema organizado de adolescentes,
              que trabajan voluntariamente en el desarrollo de actividades
              dirigidos a adolescentes. Cada adolescente al formar parte de
              ForeverYoung, contribuye al desarrollo del servicio
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
