import React from "react";

interface HoverImageCardProps {
  className?: string;
  link: string;
  backgroundImage: string;
}

const HoverImageCard: React.FC<HoverImageCardProps> = ({
  className = "",
  link,
  backgroundImage,
}) => {
  return (
    <div
      className={`relative flex items-start border-2 border-darkBlue rounded-lg ${className}`}
    >
      <div
        className="w-full h-full rounded-lg bg-cover bg-center cursor-pointer overflow-hidden transition-all relative"
        onClick={() => window.open(link, "_blank")}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  emoji: string;
  title: string;
  content: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  emoji,
  title,
  content,
  className = "",
}) => {
  return (
    <div
      className={`p-5 relative rounded-lg border-2 border-darkBlue bg-white flex flex-col ${className}`}
    >
      <div className="absolute -top-3 -left-3 flex
       items-center justify-center bg-white text-2xl border-2 aspect-square border-darkBlue rounded-full">
        {emoji}
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

function WhatDoWeDo() {
  return (
    <div className="space-y-4">
      <h1>¿Qué hacemos?</h1>
      <p className="text-center bg-white leading-4 w-fit p-1 px-3 rounded-lg pt-1.5 m-auto border-2 border-darkBlue">
        Nuestro objetivo es apoyar a los adolescentes y promover su salud
        sexual, integral, mental y física.
      </p>
      <p className="text-justify">
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
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 w-full max-w-full gap-2
        rounded-lg">
        {/*TALLERES */}

        <InfoCard
          emoji="🌟"
          title="Talleres y Charlas Interactivas"
          content="En la sala de espera, se ofrecen talleres y charlas dinámicas que informan e inspiran a los jóvenes sobre su salud y bienestar."
          className="row-start-1"
        />

        <HoverImageCard
          className="max-sm:hidden row-start-1"
          link="https://www.instagram.com/p/DBCgx7bB-cB/?img_index=1"
          backgroundImage="/images/taller1.PNG"
        />
        <HoverImageCard
          className=" max-md:hidden row-start-1"
          link="https://www.instagram.com/p/C-GiFPOBM8c/?img_index=3"
          backgroundImage="/images/taller2.PNG"
        />
        <HoverImageCard
          className="max-lg:hidden row-start-1"
          link="https://www.instagram.com/p/DBCdcXvhJff/?img_index=1"
          backgroundImage="/images/taller3.PNG"
        />

        {/*CONCIENTIZACION */}

        <HoverImageCard
          className="max-sm:hidden row-start-2"
          link="https://www.instagram.com/forever_young_voluntariado/"
          backgroundImage="/images/screenshot2.png"
        />

        <InfoCard
          emoji="📱"
          title="Concientización en Redes Sociales"
          content="Se realizan campañas de concientización en días especiales, promoviendo mensajes de salud y bienestar para los adolescentes."
          className="row-start-2"
        />

        <HoverImageCard
          className=" max-md:hidden lg:col-span-2 row-start-2"
          link="https://www.instagram.com/forever_young_voluntariado/"
          backgroundImage="/images/screenshot1.png"
        />

        {/*PROYECTOS */}

        <HoverImageCard
          className="max-sm:hidden md:col-span-2 sm:col-start-2 row-start-3 "
          link="https://www.instagram.com/p/C98hzqzNGyy/?img_index=1"
          backgroundImage="/images/proyectos1.PNG"
        />

        <InfoCard
          emoji="🚀"
          title="Proyectos Creativos"
          content="Se desarrollan proyectos nuevos que incluyen concursos y grupos, fomentando la creatividad y el compromiso en la comunidad."
          className="sm:col-start-1 md:col-start-3 row-start-3"
        />

        <HoverImageCard
          className="max-lg:hidden sm:col-span-1"
          link="https://www.instagram.com/p/DAOf6iBx2Sf/?img_index=1"
          backgroundImage="/images/proyectos2.PNG"
        />

        {/*AFICHES */}

        <HoverImageCard
          className="max-md:hidden sm:col-start-2 md:col-start-1 row-start-4 lg:col-start-1"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche3.jfif"
        />
       <HoverImageCard
          className="max-sm:hidden  md-col-start-3 md:row-start-4 lg:col-start-2"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche2.jfif"
        /> 
        <HoverImageCard
          className="md:col-start-2 max-md:hidden lg:col-start-3"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche1.jfif"
        />

        <InfoCard
          emoji="📰"
          title="Afiches y Difusión"
          content="Se crea y distribuye información importante mediante afiches en las paredes del hospital y en las redes sociales, asegurando mayor impacto."
          className="md:col-start-2 md:row-start-4 lg:col-start-4"
        />
      </div>
    </div>
  );
}

export default WhatDoWeDo;
