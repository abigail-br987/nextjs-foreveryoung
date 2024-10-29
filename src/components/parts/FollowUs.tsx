import Section from "../minicomponents/Section"
import { BsInstagram } from "react-icons/bs"

function FollowUs() { 
  return (
    <div className="flex flex-col items-center my-7 text-center"> 
      <h1>¡Síguenos!</h1>
      <p>¡Únete a nuestra comunidad y mantente al tanto de nuestros proyectos!</p>
      <div className="flex items-center space-x-2 justify-center bg-deep_orange w-fit px-3 border-2 border-dark_blue rounded-lg ">
        <BsInstagram className="w-4 h-4" />
        <a
          href="https://www.instagram.com/forever_young_voluntariado/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          <p>Instagram: @forever_young_voluntariado</p>
        </a>
      </div>
    </div>
  );
}

export default FollowUs;