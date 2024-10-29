import PersonCard from "../minicomponents/ParticipantCard";

const participants = [
  {
    name: "Lic. Katty Rojas",
    title: "Supervisora",
    description: "",
    imageSrc: "/images/participantes-14.png",
  },
  {
    name: "Abigail Briones",
    title: "Presidenta",
    description: "Hola! IG: @abigail_br987",
    imageSrc: "/images/participantes-01.png",
  },
  {
    name: "Leonardo",
    title: "Tesorero",
    description: "",
    imageSrc: "/images/participantes-09.png",
  },
  {
    name: "Fabrizio",
    title: "Secretario",
    description: "",
    imageSrc: "/images/participantes-03.png",
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
    imageSrc: "/images/participantes-05.png",
  },
  {
    name: "María Gonzales",
    title: "Eventos",
    description: "",
    imageSrc: "/images/participantes-06.png",
  },
  {
    name: "Belén Euribe",
    title: "Eventos",
    description: "",
    imageSrc: "/images/participantes-07.png",
  },
  {
    name: "Mishell Veramendi",
    title: "Miembro",
    description: "",
    imageSrc: "/images/participantes-02.png",
  },
];

function WhoAreWe() {
  return (
    <div className="my-7 max-sm:block md:flex md:flex-row max-sm:flex-col max-sm:items-center">
      <h1 className="md:w-auto md:[writing-mode:vertical-lr] md:rotate-180 text-3xl font-bold md:mr-4 max-sm:mb-4">
        ¿QUIÉNES SOMOS?
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {participants.map((participant, index) => (
          <PersonCard
            key={index}
            name={participant.name}
            title={participant.title}
            description={participant.description}
            imageSrc={participant.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default WhoAreWe;
