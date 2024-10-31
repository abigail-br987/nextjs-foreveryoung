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
    imageSrc: "/images/abigailbriones.jpg",
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
    imageSrc: "/images/.png",
  },
];

function WhoAreWe() {
  return (
    <div className="space-y-4">
      <h1>¿QUIÉNES SOMOS?</h1>

      <div className="grid grid-cols-4 md:lg-grid-cols-5 lg:grid-cols-6 gap-2 w-full">
        {participants.map((participant, index) => {
          return (
            <div key={index}>
              <PersonCard
                name={participant.name}
                title={participant.title}
                description={participant.description}
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