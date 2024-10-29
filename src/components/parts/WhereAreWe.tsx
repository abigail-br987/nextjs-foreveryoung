import MapFY from "../minicomponents/MapFY";
import Section from "../minicomponents/Section";

function WhereAreWe() {
  return (
    <div className="my-7">
      <h1 className="text-2xl font-bold mb-2">¿Dónde Estamos?</h1>

      <p className="mb-4">
        Realizamos nuestras actividades en Servicio de Medicina del Adolescente
        en el Hospital del Niño, el cual brinda atención integral (médica,
        psicológica, nutricional, sexual y social).
      </p>

      <div className="flex flex-col">
        <div className="w-full h-96">
          <MapFY />
        </div>
      </div>
    </div>
  );
}

export default WhereAreWe;
