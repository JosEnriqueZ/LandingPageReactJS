import React from "react";

export default function Location() {
  return (
    <section className="relative md:py-24 py-16 bg-gradient-to-b from-teal-400 to-teal-500">
      <div className="container relative">
        <h3 className="font-semibold text-2xl leading-normal text-white mt-2 text-center">
          Nuestra Localización
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-8">
          <div className="flex justify-center w-full h-48 md:h-[25vh] md:w-full lg:h-[30vh] lg:w-[50%] relative">
            <div className="w-full h-full border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122512.67016647298!2d-72.2714134!3d-16.3474042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91419b002cee97cf%3A0xadf3029820729702!2sAsociaci%C3%B3n%20de%20Ganaderos%20de%20La%20Colina!5e0!3m2!1ses!2spe!4v1764701185575!5m2!1ses!2spe"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="lg:mt-4 lg:mb-16 lg:ml-16">
              <p className="text-white text-lg  mt-8" ><strong>Oficina central:</strong> </p>
              <p className="text-white text-xl"><strong>Distrito de Lluta, provincia de Caylloma</strong> 
              </p>
              <p className="text-white text-xl">Calle Unión S/N a tres cuadras de la plaza principal</p>

              <p className="text-white text-lg  mt-8"><strong>Oficina  de operaciones Majes:</strong></p>
              <p className="text-white text-xl"><strong>Asoc. Ganaderos, Carretera a Lluta, Distrito de Majes</strong>
              </p>
              <p className="text-white text-xl">Provincia de Caylloma</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
