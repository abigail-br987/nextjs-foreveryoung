const actividades = [
    {
      icono: "🌟",
      titulo: "Talleres y Charlas Interactivas",
      descripcion:
        "En la sala de espera, se ofrecen talleres y charlas dinámicas que informan e inspiran a los jóvenes sobre su salud y bienestar.",
    },
    {
      icono: "📱",
      titulo: "Concientización en Redes Sociales",
      descripcion:
        "Se realizan campañas de concientización en días especiales, promoviendo mensajes de salud y bienestar para los adolescentes.",
    },
    {
      icono: "🚀",
      titulo: "Proyectos Creativos",
      descripcion:
        "Se desarrollan proyectos nuevos que incluyen concursos y grupos, fomentando la creatividad y el compromiso en la comunidad.",
    },
    {
      icono: "📰",
      titulo: "Afiches y Difusión",
      descripcion:
        "Se crea y distribuye información importante mediante afiches en las paredes del hospital y en las redes sociales, asegurando mayor impacto.",
    },
  ];


function WhatDoWeDo () {
    return (
        <div className="my-7">
        <h1>¿Qué hacemos?</h1>
        <p className="text-center mb-6">
          Nuestro objetivo es apoyar a los adolescentes y promover su salud
          sexual, integral, mental y física.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {actividades.map((actividad, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border-2 border-dark_blue bg-white"
            >
              <h2>
                {actividad.icono} {actividad.titulo}
              </h2>
              <p>{actividad.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    )
}
export default WhatDoWeDo