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
      <div className="absolute -top-5 -left-5 flex items-center justify-center bg-white text-3xl border-2 p-1 aspect-square border-darkBlue w-min rounded-full">
        {emoji}
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

function WhatDoWeDo() {
  return (
    <div className="my-16">
      <h1>¿Qué hacemos?</h1>
      <p className="text-center">
        Nuestro objetivo es apoyar a los adolescentes y promover su salud
        sexual, integral, mental y física.
      </p>
      <div className="grid grid-cols-4 w-full max-w-full gap-2 bg-darkBlue rounded-lg">
        {/*TALLERES */}

        <InfoCard
          emoji="🌟"
          title="Talleres y Charlas Interactivas"
          content="En la sala de espera, se ofrecen talleres y charlas dinámicas que informan e inspiran a los jóvenes sobre su salud y bienestar."
          className="col-span-1"
        />

        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/p/DBCgx7bB-cB/?img_index=1"
          backgroundImage="/images/taller1.PNG"
        />
        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/p/C-GiFPOBM8c/?img_index=3"
          backgroundImage="/images/taller2.PNG"
        />
        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/p/DBCdcXvhJff/?img_index=1"
          backgroundImage="/images/taller3.PNG"
        />

        {/*CONCIENTIZACION */}

        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/forever_young_voluntariado/"
          backgroundImage="/images/screenshot2.png"
        />

        <InfoCard
          emoji="📱"
          title="Concientización en Redes Sociales"
          content="Se realizan campañas de concientización en días especiales, promoviendo mensajes de salud y bienestar para los adolescentes."
          className="col-span-1"
        />

        <HoverImageCard
          className="col-span-2"
          link="https://www.instagram.com/forever_young_voluntariado/"
          backgroundImage="/images/screenshot1.png"
        />

        {/*PROYECTOS */}

        <HoverImageCard
          className="col-span-2"
          link="https://www.instagram.com/p/C98hzqzNGyy/?img_index=1"
          backgroundImage="/images/proyectos1.PNG"
        />

        <InfoCard
          emoji="🚀"
          title="Proyectos Creativos"
          content="Se desarrollan proyectos nuevos que incluyen concursos y grupos, fomentando la creatividad y el compromiso en la comunidad."
          className="col-span-1"
        />

        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/p/DAOf6iBx2Sf/?img_index=1"
          backgroundImage="/images/proyectos2.PNG"
        />

        {/*AFICHES */}

        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche3.jfif"
        />
        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche2.jfif"
        />
        <HoverImageCard
          className="col-span-1"
          link="https://www.instagram.com/stories/highlights/17842835370287172/"
          backgroundImage="/images/afiche1.jfif"
        />

        <InfoCard
          emoji="📰"
          title="Afiches y Difusión"
          content="Se crea y distribuye información importante mediante afiches en las paredes del hospital y en las redes sociales, asegurando mayor impacto."
          className="col-span-1"
        />
      </div>
    </div>
  );
}

export default WhatDoWeDo;
