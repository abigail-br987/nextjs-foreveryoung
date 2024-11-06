function JoinUs() {
  return (
    <div className="space-y-4">
      <h1 className="mb-2 text-deepGreen">Únete a ForeverYoung</h1>
      <div className="grid md:grid-cols-2 gap-2 justify-center">

        <div className="w-full space-y-2 rounded-lg">
          <div className="p-6 text-darkBlue bg-white border-2 rounded-lg border-darkBlue shadow-sm shadow-darkBlue">
            <h2 className="mt-2">Como Miembro</h2>
            <p>Sé parte activa de nuestras iniciativas. Para participar, debes pasar por Servicio de Medicina del Adolescente y preguntar a la Lic. Katty Rojas de Consejería de Salud Sexual y Reproductiva sobre la posibilidad de unirse.</p>
          </div>
          <div className="flex items-start border-2 border-darkBlue rounded-lg">
            <div
              className="w-full h-96 rounded-lg bg-cover bg-center cursor-pointer overflow-hidden transition-all relative"
              onClick={() => window.open("http://hola.com", "_blank")}
            >
              <div
                className="absolute h-96 inset-0 bg-cover bg-center transition-transform hover:rotate-1 duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url(/images/photo2.jpeg)` }}
              />
            </div>
          </div>
        </div>

        <div className="w-full space-y-2 rounded-lg">

          <div className="flex items-start border-2 border-darkBlue rounded-lg">
            <div
              className="w-full h-96 rounded-lg bg-cover bg-center cursor-pointer overflow-hidden transition-all relative"
              onClick={() => window.open("http://hola.com", "_blank")}
            >
              <div
                className="absolute h-96 inset-0 bg-cover bg-center transition-transform hover:rotate-1 duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url(/images/photo13.jpg)` }}
              />
            </div>
          </div>
          <div className="p-6 text-darkBlue bg-white border-2 rounded-lg border-darkBlue shadow-sm shadow-darkBlue">
            <h2 className="mt-2">Como Alianza</h2>
            <p>Si eres una empresa u organización interesada en colaborar, contáctanos para explorar posibles alianzas y proyectos conjuntos. Estamos abiertos a trabajar en equipo. Correo: @abigailbrionesaranda@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default JoinUs;