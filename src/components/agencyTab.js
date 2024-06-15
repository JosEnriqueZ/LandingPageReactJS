import React, { useState } from "react";
import { Link } from "react-router-dom";

// import blog1 from '../assets/images/blog/01.jpg'
import blog1 from '../assets/images/blog/camion.jpg'
// import blog2 from '../assets/images/blog/02.jpg'
import blog2 from '../assets/images/blog/02.jpeg'
import blog3 from '../assets/images/blog/03.jpg'

//silingcorp
import silingcorp1 from '../assets/images/imgSilingCorp/Armado de Libro - Faja Las Bambas.webp'
import silingcorp2 from '../assets/images/imgSilingCorp/Faja las bambas.webp'
import silingcorp3 from '../assets/images/imgSilingCorp/Mantenimiento Mecanico - Cambio de Muelas Cahncadora de Quijada.webp'
import silingcorp4 from '../assets/images/imgSilingCorp/Reunion - Mina.webp'
import silingcorp5 from '../assets/images/imgSilingCorp/Servicio de vuelo con dron - Mineria.webp'
import silingcorp6 from '../assets/images/imgSilingCorp/Servicio Mantto. Predicitivo.webp'
import silingcorp7 from '../assets/images/imgSilingCorp/Sistema contra incendios cuarto bombas.webp'
import silingcorp8 from '../assets/images/imgSilingCorp/Sistema contra incendios.webp'

import silingcorpcarosel1 from '../assets/images/imgSilingCorp/XArmado-de-Libro---Faja-Las-Bambas.png'
import silingcorpcarosel2 from '../assets/images/imgSilingCorp/XReunion---Mina.png'
import silingcorpcarosel3 from '../assets/images/imgSilingCorp/XServicio-Mantto.-Predicitivo.png'
import silingcorpcarosel4 from '../assets/images/imgSilingCorp/XServicio-de-vuelo-con-dron---Mineria.png'

import { mision,vision,valores } from "../data/data";

export default function AgencyTab() {
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">SILINGCORP, servicios e ingeniería</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Somos una empresa con +20,000HH EN INGENIERÍA BÁSICA Y DE DETALLE
                    </p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        {/* <span className="block">Sección 1</span> */}
                                        <span className="text-lg mt-2 block">MISION</span>
                                        {/* <span className="block mt-2">{misionVisionValores.mision}</span> */}
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        {/* <span className="block">Sección 2</span> */}
                                        <span className="text-lg mt-2 block">VISION</span>
                                        {/* <span className="block mt-2">{misionVisionValores.vision}</span> */}
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        {/* <span className="block">Sección 3</span> */}
                                        <span className="text-lg mt-2 block">VALORES</span>
                                        {/* <span className="block mt-2">{misionVisionValores.valores.title}</span> */}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden'}>
                                <img src={silingcorpcarosel4} className="shadow dark:shadow-gray-700 rounded-md" alt="" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">MISIÓN</h5>
                                    <p className="text-slate-400 mt-4">{mision.desc}</p>
                                    <div className="mt-4">
                                        <Link to="/detail/mision" className="text-teal-500">Leer Más<i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden'}>
                                <img src={silingcorpcarosel3} className="shadow dark:shadow-gray-700 rounded-md" alt="" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">VISIÓN</h5>
                                    <p className="text-slate-400 mt-4">{vision.desc}</p>
                                    <div className="mt-4">
                                        <Link to="/detail/vision" className="text-teal-500">Leer Más <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden'}>
                                <img src={silingcorpcarosel2} className="shadow dark:shadow-gray-700 rounded-md" alt="" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">NUESTROS VALORES</h5>
                                    <ul className="text-left">{valores.map((valor, index) => <li key={index}>• {valor.title}</li>)}</ul>
                                    <div className="mt-4">
                                        <Link to="/detail/valores" className="text-teal-500">Leer Más <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
