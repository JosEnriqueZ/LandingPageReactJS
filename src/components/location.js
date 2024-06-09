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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491307.3440214395!2d-72.23031947708112!3d-15.83363773922691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9141f6ecdc90dbcd%3A0x35fe3e38d4c7862e!2sDistrito%20de%20Lluta%2004115!5e0!3m2!1ses-419!2spe!4v1717711588917!5m2!1ses-419!2spe"
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
              <p className="text-white text-xl"><strong>La Colina E13, Carretera a Lluta, Distrito de Majes</strong> 
              </p>
              <p className="text-white text-xl">Provincia de Caylloma</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
