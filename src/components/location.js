import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import ctaImage from "../assets/images/home.png"

// import ModalVideo from 'react-modal-video';
// import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function Cta() {
  return (
    <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gradient-to-b from-teal-400 to-teal-500">
      <div className="container relative">
        <div className="grid grid-cols-1 justify-center">
          <div className="relative z-1">
          <div className="content md:mt-8">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="items-center">
                    <div className="mt-8 mb-16">
                      <div className="section-title text-md-start">
                        {/* <h6 className="text-white/70 text-sm font-semibold uppercase">Get Free Trial</h6> */}
                        <h3 className="font-semibold text-2xl leading-normal text-white mt-2 text-center">
                          Nuestra Localizacion
                        </h3>
                      </div>
                    </div>

                    {/* <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/70 max-w-xl mx-auto mb-2">Mapa</p>
                                                <Link to="" className="text-white">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:text-start text-center md:text-start">
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-full h-96 md:h-[50vh] lg:h-[60vh] relative">
                  <div className="w-full h-full border-0 max-w-screen-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51579.98135852402!2d-72.15919858776121!3d-16.08078830006455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9141e94b170ae7ed%3A0x27ea7b798e0af463!2sCampamento%20Zafranal!5e0!3m2!1ses!2spe!4v1717302865596!5m2!1ses!2spe"
                      className="w-full h-full rounded-xl"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>
                {/* <img src={ctaImage} alt=""/> */}
                {/* <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div> */}
                {/* <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="S_CGed6E610"
                                onClose={() => setOpen(false)} 
                            /> */}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-teal-400 to-teal-500"></div> */}
    </section>
  );
}
