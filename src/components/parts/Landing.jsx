import Section from "../minicomponents/Section";
import logo from "/logo.png";
import { TbHealthRecognition } from "react-icons/tb";

function Landing() {
  return (
    <>
      <Section>
        <img
          src={logo}
          loading="lazy"
          alt="ForeverYoung Logo"
          className="w-full p-10"
        />
        <h2>
          ForeverYoung es la organización de voluntariado de Servicio de
          Medicina del Adolescente del Hospital del Niño de Breña, Lima, Perú.
        </h2>
      </Section>
    </>
  );
}

export default Landing;
