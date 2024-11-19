import React from "react";
import { BiUserVoice, BiWorld, BiSolidParty, BiBulb } from "react-icons/bi";

interface HoverImageCardProps {
  className?: string;
  link: string;
  backgroundImage: string;
}

export const HoverImageCard: React.FC<HoverImageCardProps> = ({
  className = "",
  link,
  backgroundImage,
}) => {
  return (
    <div
      className={`relative flex items-start border-2 border-darkBlue rounded-lg ${className}`}
    >
      <div
        className="w-full h-80 rounded-lg bg-cover bg-center cursor-pointer overflow-hidden transition-all relative"
        onClick={() => window.open(link, "_blank")}
      >
        <div
          className="absolute h-80 inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  content,
  className = "",
}) => {
  return (
    <div
      className={`p-5 relative rounded-lg border-2
         border-darkBlue bg-white flex flex-col ${className}`}
    >
      <div
        className="absolute -top-3 -left-3 flex items-center 
      justify-center bg-white p-1 text-2xl
       border-2 aspect-square border-darkBlue rounded-full"
      >
        {icon}
      </div>
      <h2 className="text-center">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

function WhatDoWeDo() {
  return (
    <div className="space-y-4">
      <h1 className="text-deepGreen">¿Qué hacemos?</h1>
      <p className="text-center leading-4 w-fit p-1 px-3 rounded-lg pt-1.5 m-auto border-2 border-darkBlue">
        Nuestro objetivo es apoyar a los adolescentes y promover su salud
        sexual, integral, mental y física.
      </p>
      <p className="text-justify">
        Esta experiencia se desarrolla en el marco de los derechos que tienen
        los jóvenes a la <strong>SALUD, EDUCACIÓN Y PARTICIPACIÓN</strong>, con
        un enfoque de equidad, de derecho y diversidad. Trabajamos con los
        profesionales del equipo multidisciplinario en actividades preventivas
        de conductas de riesgo y de promoción de estilos de vida saludables con
        sus pares. Sistema organizado de adolescentes, que trabajan
        voluntariamente en el desarrollo de actividades dirigidas a
        adolescentes. Cada adolescente al formar parte de ForeverYoung,
        contribuye al desarrollo del servicio.
      </p>
      <div className="sm:grid max-sm:space-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-full gap-2 rounded-lg">

        <InfoCard
          icon={<BiBulb />}
          title="Talleres y Charlas Interactivas"
          content="En la sala de espera, se ofrecen talleres y charlas dinámicas que informan e inspiran a los jóvenes sobre su salud y bienestar."
          className=""
        />
        <InfoCard
          icon={<BiSolidParty />}
          title="Proyectos Creativos"
          content="Se desarrollan proyectos nuevos que incluyen concursos y grupos, fomentando la creatividad y el compromiso en la comunidad."
          className=""
        />
        <InfoCard
          icon={<BiWorld />}
          title="Concientización en Redes Sociales"
          content="Se realizan campañas de concientización en días especiales, promoviendo mensajes de salud y bienestar para los adolescentes."
          className=""
        />
        <InfoCard
          icon={<BiUserVoice />}
          title="Afiches y Difusión"
          content="Se crea y distribuye información importante mediante afiches en las paredes del hospital y en las redes sociales, asegurando mayor impacto."
          className=""
        />

     </div>

     <div className="sm:grid max-sm:space-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full max-w-full gap-2 rounded-lg">

        <HoverImageCard
          className=""
          link="https://www.instagram.com/p/DBCgx7bB-cB/?img_index=1"
          backgroundImage="/images/taller1.PNG"
        />
        <HoverImageCard
          className=""
          link="https://www.instagram.com/p/C-GiFPOBM8c/?img_index=3"
          backgroundImage="/images/taller2.PNG"
        />
        <HoverImageCard
          className=""
          link="https://www.instagram.com/p/DBCdcXvhJff/?img_index=1"
          backgroundImage="/images/taller3.PNG"
        />
  
  <HoverImageCard
          className="max-lg:hidden"
          link="https://www.instagram.com/p/DAOf6iBx2Sf/?img_index=1"
          backgroundImage="/images/proyectos2.PNG"
        />


        <HoverImageCard
          className="max-sm:hidden md:col-span-2"
          link="https://www.instagram.com/p/C98hzqzNGyy/?img_index=1"
          backgroundImage="/images/proyectos1.PNG"
        />
 
        <HoverImageCard
          className="max-md:hidden"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche3.jfif"
        />

        <HoverImageCard
          className="max-md:hidden"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche1.jfif"
        />

      </div>
    </div>
  );
}

export default WhatDoWeDo;
