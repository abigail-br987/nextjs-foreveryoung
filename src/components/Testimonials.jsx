import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { InfiniteMovingCards } from "./parts/InfiniteMovingCards";

const testimonials = [
    {
      quote:
        "Es un agrado que se puedan dar estos espacios de participación en Servicio de Medicina del Adolescente. Cada finalista en el concurso Trazos Creativos ha demostrado un gran talento",
      name: "Lic. Katty Rojas",
      title: "Consejera de Salud Sexual y Reproductiva, Licenciada en Obstetricia",
    },
    {
      quote:
      "Los jovenes de FOREVERYOUNG han sido pacientes antes y ahora desean retribuir lo que la vida les ha dado, contribuyendo a sus pares. El futuro está aquí, y por eso tengo confianza en nuestro país",
      name: "Dr. Raul Carbajal",
      title: "Pediatra y Doctor del Hospital del Niño",
    },
    {
      quote: "Estamos formando buenos ciudadanos. Felicitaciones por los 9 años del voluntariado. Estoy contento porque ustedes están aca en su trabajo solidario. Les agradezco mucho porque sé que esto les servirá mucho en otros escenarios.",
      name: "Dr. Raul Carbajal",
      title: "Pediatra y Doctor del Hospital del Niño",
    },
    {
      quote:
        "El Servicio de Medicina del Adolescente tiene años trabajando y saludamos la presencia de los jóvenes que guían a los adolescentes en esta etapa de la vida",
      name: "Dr. Carlos Urbano Durand",
      title: "Director general del INSN",
    },
  ];
  
  function Testimonials() {
    return (
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true} 
          className="rounded-md"
        />
    );
  }
  
  export default Testimonials;
  