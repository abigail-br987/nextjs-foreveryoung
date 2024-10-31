const joinus = [
  {
    title: "🤝 Como Alianza",
    description:
      "Si eres una empresa u organización interesada en colaborar, contáctanos para explorar posibles alianzas y proyectos conjuntos. Estamos abiertos a trabajar en equipo. Correo: @abigailbrionesaranda@gmail.com",
    image: "/images/photo13.jpg",
  },
  {
    title: "🌟 Como Miembro",
    description:
      "Sé parte activa de nuestras iniciativas. Para participar, debes pasar por Servicio de Medicina del Adolescente y preguntar a la Lic. Katty Rojas de Consejería de Salud Sexual y Reproductiva sobre la posibilidad de unirse.",
    image: "/images/photo14.jpg",
  },
];

function JoinUs() {
  return (
    <div className="my-7">
      <h1 className="mb-2">Únete a ForeverYoung</h1>
      <div className="flex flex-wrap justify-center">
        {joinus.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 p-4 rounded-lg">
            <div className="w-full h-96 border-2 border-darkBlue rounded-lg">
              <img
                src={item.image}
                alt={`Image for ${item.title}`}
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <div className="p-3">
              <h2 className="mt-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinUs;