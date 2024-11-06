import PersonCard from "../minicomponents/ParticipantCard";

const participants = [
  {
    name: "Lic. Katty Rojas",
    title: "Supervisora",
    description: "",
    imageSrc: "/images/lickatty.enc",
  },
  {
    name: "Abigail Briones",
    title: "Presidenta",
    description: "",
    imageSrc: "/images/abigailbriones.png",
  },
  {
    name: "Leonardo",
    title: "Tesorero",
    description: "",
    imageSrc: "/images/leonardo.jfif",
  },
  {
    name: "Fabrizio",
    title: "Secretario",
    description: "",
    imageSrc: "/images/fabrizio.jpeg",
  },
  {
    name: "Camilo",
    title: "Miembro",
    description: "",
    imageSrc: "/images/participantes-10.png",
  },
  {
    name: "Camila",
    title: "Secretaria",
    description: "",
    imageSrc: "/images/camila.jpeg",
  },
  {
    name: "María Gonzales",
    title: "Eventos",
    description: "",
    imageSrc: "/images/maria.jpeg",
  },
  {
    name: "Belén Euribe",
    title: "Eventos",
    description: "",
    imageSrc: "/images/belen.jpg",
  },
  {
    name: "Mishell Veramendi",
    title: "Miembro",
    description: "",
    imageSrc: "/images/participantes-02.png",
  },
  {
    name: "Ruby",
    title: "Miembro",
    description: "",
    imageSrc: "/images/participantes-11.png",
  },
  {
    name: "Ana Lucía",
    title: "Miembro",
    description: "",
    imageSrc: "/images/analucia.jpg",
  },
];

function WhoAreWe() {
  return (
    <div className="space-y-6" id="whoarewe">
      <h1>¿QUIÉNES SOMOS?</h1>
      <p>
        ForeverYoung es un voluntariado comprometido con el empoderamiento de
        los adolescentes a través de la educación y la concienciación sobre
        salud y derechos. Nuestro equipo está formado por jóvenes apasionados
        que trabajan juntos para crear un espacio seguro donde se fomente la
        comunicación abierta y el aprendizaje activo. Nos enfocamos en abordar
        temas cruciales como la salud sexual y reproductiva, el bienestar
        emocional y los derechos de los adolescentes, proporcionando información
        accesible y confiable. A través de talleres, actividades interactivas y
        programas de sensibilización, buscamos inspirar a los jóvenes a tomar
        decisiones informadas que impacten positivamente en sus vidas y en su
        entorno. Nuestro objetivo es construir una comunidad donde el respeto,
        la comprensión y la tolerancia sean fundamentales.
      </p>

      <div className="grid text-white grid-cols-2 sm:grid-cols-3 md:lg-grid-cols-5 lg:grid-cols-6 gap-2 lg:gap-2 w-full">
        {participants.map((participant, index) => {
          return (
            <div key={index}>
              <PersonCard
                name={participant.name}
                title={participant.title}
                imageSrc={participant.imageSrc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhoAreWe;
