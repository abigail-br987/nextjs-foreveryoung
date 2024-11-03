import NavBar from "@/components/sections/NavBar";
import Contact from "@/components/sections/ContactForm";

const Contacto = () => {
  return (
    <div className="bg-deepGreen"> 
    <div className="min-h-screen m-auto flex justify-center items-center
      text-white max-w-screen-lg">
        <Contact />
    </div>
    </div>
  );
};

export default Contacto;
