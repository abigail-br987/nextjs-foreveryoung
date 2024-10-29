import { useState } from "react";
import poster1 from "/posters.png";
import poster2 from "/poster2.png";
import carta2 from "/carta2.png";
import carta1 from "/carta1.png";
import people from "/people.png"
import consen from "/consen.png"

const articles = [
  {
    id: 1,
    title: "Cartas de Esperanza",
    description:
      "En esta actividad, creamos cartas para niños y adolescentes hospitalizados del INSN",
    date: "2024-09-20",
    bigPhoto: carta1,
    content: (
      <div>
        <p>
          Estamos creando cartas llenas de amor y apoyo para nuestros amigos
          hospitalizados. Nuestros voluntarios guían a los jóvenes en la
          creación de estas cartas, asegurándose de que sigamos normas y
          criterios para hacerlas aún más especiales.
        </p>
        <p>
          ¡El tiempo de creación es de 35 minutos a 1 hora, y los participantes
          pueden hacer tantas tarjetas como deseen! 🎨✉️ Nuestro objetivo es
          brindar un apoyo sincero a los adolescentes que están en el hospital y
          fomentar su participación en el servicio.
        </p>
        <p>
          <strong>Contenido de la Carta:</strong>
        </p>
        <p>
          <strong>Temas:</strong> Puedes escribir sobre deportes, películas,
          series, hobbies, libros, cómics, moda, música, cultura, naturaleza,
          fotografía, paisajes, pasatiempos, caricaturas, flores y autos.
        </p>
        <p>
          <strong>Frases de aliento:</strong> Queremos que cada carta inspire y
          motive. 💪
        </p>
        <p>
          <strong>Detalles de la Carta:</strong>
          Deben ser creativas y originales, hechas a mano con papel, plumones y
          lápices de colores. Usaremos una hoja completa para dar espacio a
          todas nuestras ideas. Los temas deben ser generales y positivos, ¡sin
          contenido inapropiado o condescendiente!
        </p>
        <p>
          Estamos ansiosos por ver la creatividad y el cariño que cada uno de
          ustedes aportará. ¡Juntos podemos hacer una diferencia! 💖✨
        </p>
        <p>
          <strong>PROXIMAMENTE</strong>
        </p>
        <p>
          En la segunda etapa de este proyecto, colaboraremos con colegios de
          Lima para poder expandir nuestro impacto. Asimismo, crearemos un
          establecimiento para la recolección de cartas y futuras donaciones.
          Buscamos apoyarlos con otros medios también.
        </p>
        <img
          src={carta2}
          className="w-full h-64 object-cover my-3 object-top rounded-lg border-2 border-dark_blue"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Diseños que Inspiran",
    description:
      " ¿Necesitas un poco de inspiración para tu día a día? ✨ Descarga nuestros diseños por Drive",
    date: "2024-04-23",
    bigPhoto: poster1,
    content: (
      <div>
        <p>
          ¿Necesitas un poco de inspiración para tu día a día? ✨ ¡Aquí
          encontrarás una colección de frases motivacionales diseñadas
          especialmente para ti! Perfectas para compartir, usar como fondo de
          pantalla o simplemente tener un recordatorio diario. Si tienes
          sugerencias, no dudes en contactarnos por Instagram. Explora nuestros
          diseños:
        </p>

        <p>
          <a
            target="_blank"
            class="block underline-offset-1 underline"
            href="https://drive.google.com/drive/folders/1gNpCWpx-Tmdrjx7DPJAfCOhkjSf6tyLJ"
          >
            https://drive.google.comdrive/folders/1gN...
          </a>
        </p>

        <img
          src={poster1}
          className="w-full h-64 object-cover my-3 rounded-lg border-2 border-dark_blue"
        />
        <img
          src={poster2}
          className="w-full h-64 object-cover my-3 rounded-lg border-2 border-dark_blue"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Tenemos derechos",
    description:
      "Los adolescentes tenemos un conjunto de derechos humanos diseñados para nosotros",
    date: "2024-06-23",
    bigPhoto: people,
    content: (
      <div>
        <p>
          <strong>¿Qué es la Convención sobre los Derechos del NIño?</strong>
        </p>
        <p>
          La Convención sobre los Derechos del Niño de la ONU es un tratado
          internacional adoptado en 1989 que establece los derechos humanos
          fundamentales de todos los niños y adolescentes menores de 18 años.
          Reconoce que los niños y adolescentes tienen derechos específicos que
          deben ser protegidos y promovidos, incluyendo el derecho a la salud,
          la educación, la protección contra la violencia y la discriminación, y
          el derecho a participar en decisiones que les afecten. Esta convención
          es crucial porque asegura que los derechos de los adolescentes sean
          respetados y garantizados en todo el mundo.
        </p>
        <strong>
          Es independiente de tu color, sexo, idioma, nacionalidad, origen,
          religión, discapacidad, etc.
        </strong>
        <p>
          <strong>En el Perú</strong>
        </p>
        <p>
          Los derechos de los adolescentes en el Perú son fundamentales para
          asegurar su bienestar y desarrollo integral. Según la Convención sobre
          los Derechos del Niño y la legislación peruana, los adolescentes
          tienen derecho a la salud, educación, protección contra cualquier
          forma de discriminación, y a participar activamente en decisiones que
          les afecten. Esto incluye el derecho a ser escuchados, a la
          privacidad, y a recibir información adecuada sobre salud sexual y
          reproductiva. Para garantizar los derechos de los niños, niñas y
          adolescentes, se han dado las iniciativas legislativas: Ley N° 30403,
          Ley que prohíbe el uso del castigo físico y humillante contra los
          niños, niñas y adolescentes y su Reglamento aprobado por el D.S N°
          003-2018-MIMP Ley N° 30466, que fija parámetros para garantizar el
          interés superior del niño y su Reglamento aprobado por D.S N°
          002-2018-MIMP Ley N° 30797, norma que promueve la educación inclusiva,
          garantizando el enfoque inclusivo en la educación en todas sus
          modalidades, incorporando al profesional de psicología como integrante
          de la comunidad educativa. Ley N° 30862, norma que busca prevenir,
          sancionar y erradicar toda forma de violencia contra las mujeres en
          sus diferentes ciclos de vida.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Comprendiendo la Educación Sexual y el Consentimiento",
    description: "Es esencial respetarte a ti mismo y a los demás.",
    date: "2024-09-23",
    bigPhoto: consen,
    content: (
      <div>
        <h2>Introducción</h2>
        <p>
          La educación sexual es una parte esencial del crecimiento, ayudándonos a navegar
          en las relaciones, entender nuestros cuerpos y tomar decisiones informadas. Este
          artículo tiene como objetivo desglosar lo básico de la educación sexual y, lo
          más importante, el concepto de consentimiento.
        </p>
        
        <h2>¿Qué es la Educación Sexual?</h2>
        <p>
          La educación sexual abarca varios temas, incluyendo:
        </p>
        <ul>
          <li><strong>Anatomía:</strong> Entender cómo funcionan nuestros cuerpos y qué cambios ocurren durante la pubertad.</li>
          <li><strong>Salud Reproductiva:</strong> Conocimiento sobre anticonceptivos, ETS (enfermedades de transmisión sexual) y prácticas seguras.</li>
          <li><strong>Relaciones:</strong> Explorar diferentes tipos de relaciones, dinámicas saludables versus no saludables y comunicación efectiva.</li>
        </ul>
        
        <h2>La Importancia del Consentimiento</h2>
        <p>
          <strong>¡El consentimiento es clave!</strong> Se trata de un acuerdo mutuo entre
          las parejas para participar en cualquier forma de actividad sexual. Aquí hay algunos
          puntos cruciales a entender:
        </p>
        <ul>
          <li><strong>Informado:</strong> Ambas partes deben tener toda la información necesaria para tomar una decisión.</li>
          <li><strong>Otorgado Libremente:</strong> El consentimiento debe darse voluntariamente, sin presión, manipulación o intimidación.</li>
          <li><strong>Revocable:</strong> El consentimiento puede ser retirado en cualquier momento. Si alguien se siente incómodo, tiene el derecho de cambiar de opinión.</li>
          <li><strong>Específico:</strong> Aceptar una actividad no significa consentimiento para otra. Siempre verifica con tu pareja.</li>
        </ul>
        
        <h2>Por Qué Importa el Consentimiento</h2>
        <p>
          Entender y practicar el consentimiento es vital para:
        </p>
        <ul>
          <li><strong>Construir Confianza:</strong> El consentimiento fomenta el respeto y la comprensión en las relaciones, lo que lleva a conexiones más fuertes.</li>
          <li><strong>Promover la Seguridad:</strong> Saber que ambas parejas están en la misma página ayuda a crear un entorno más seguro.</li>
          <li><strong>Empoderamiento:</strong> El consentimiento empodera a las personas para hablar sobre sus límites y deseos.</li>
        </ul>
        
        <h2>Consejos para Comunicar Sobre el Consentimiento</h2>
        <ol>
          <li><strong>Sé Abierto:</strong> Fomenta discusiones abiertas sobre los límites con tu pareja.</li>
          <li><strong>Haz Preguntas:</strong> No dudes en preguntar a tu pareja cómo se siente acerca de diferentes actividades.</li>
          <li><strong>Escucha:</strong> Presta atención a las señales verbales y no verbales; si tu pareja parece insegura, es esencial detenerse y hablar.</li>
          <li><strong>Verifica:</strong> Regularmente verifica con tu pareja durante momentos íntimos para asegurarte de que estén cómodos.</li>
        </ol>
        
        <h2>Conclusión</h2>
        <p>
          La educación sexual y el consentimiento son temas cruciales para los adolescentes.
          Empoderan a tomar decisiones informadas y fomentan relaciones saludables. Recuerda,
          es esencial respetarte a ti mismo y a los demás al priorizar la comunicación abierta
          y entender el consentimiento.
        </p>
      </div>
  
    ),
  },
];

const ArticleGrid = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openPopup = (article) => {
    setSelectedArticle(article);
  };

  const closePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="my-7">
      <h1>Nuestro blog</h1>
      <div
        className="grid grid-cols-2 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`rounded-lg p-4 border-2 border-dark_blue hover:cursor-pointer bg-opacity-40
      ${
        index % 2 === 0
          ? "bg-light_green hover:bg-light_orange"
          : "bg-light_orange hover:bg-light_green"
      }
      transition transform 
      ${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"} 
      hover:rotate-0 hover:scale-105 // Straighten out on hover
    `}
            onClick={() => openPopup(article)}
          >
            <img
              src={article.bigPhoto}
              alt={article.title}
              className="h-32 w-full object-cover rounded-lg border-2 border-dark_blue mb-4"
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p className="opacity-40">{article.date}</p>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-md flex justify-center items-center">
          <div className="bg-white overflow-auto max-h-[75vh] p-6 rounded-lg max-w-2xl w-full relative border-2 border-dark_blue">
            <button
              onClick={closePopup}
              className="absolute top-2 text-3xl right-4 hover:text-gray-500"
            >
              &times;
            </button>
            <h2 className="text-2xl">{selectedArticle.title}</h2>
            <div>{selectedArticle.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleGrid;
