import React, { useState } from "react";
import { Link } from "react-router-dom";

// import blog1 from '../assets/images/blog/01.jpg'
import blog1 from '../assets/images/blog/camion.jpg'
// import blog2 from '../assets/images/blog/02.jpg'
import blog2 from '../assets/images/blog/02.jpeg'
import blog3 from '../assets/images/blog/03.jpg'

export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">SILINGCORP, servicios e ingeniería</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Somos una empresa con 10 años de experiencia, especializada en servicios mineros</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        <span className="block">Sección 1</span>
                                        <span className="text-lg mt-2 block">MISION</span>
                                        <span className="block mt-2">Proveer soluciones inteligentes, innovadoras y seguras que agreguen valor a nuestros clientes... </span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        <span className="block">Sección 2</span>
                                        <span className="text-lg mt-2 block">VISION</span>
                                        <span className="block mt-2">Para el año 2025, posicionar a Siling Corp como la empresa más confiable y 
                                        respetada en servicios de Ingeniería....</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Sección 3</span>
                                        <span className="text-lg mt-2 block">Nuestros VALORES</span>
                                        <span className="block mt-2">Experiencia, Cercanía, Compromiso y Respaldo</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <img src={blog1} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">MISIÓN</h5>
                                    <p className="text-slate-400 mt-4">Proveer soluciones inteligentes, innovadoras y seguras que agreguen valor a nuestros clientes. Nos dedicamos a optimizar cada proyecto con un enfoque en la eficiencia, la calidad y la sostenibilidad, asegurando el éxito y la satisfacción de nuestros clientes en cada etapa del proceso.</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Leer Más<i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <img src={blog2} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">VISIÓN</h5>
                                    <p className="text-slate-400 mt-4">Para el año 2025, posicionar a Siling Corp como la empresa más confiable y respetada en servicios de Ingeniería, Procura y Construcción (EPC) y Operación y Mantenimiento (O&M) para proyectos civil-electromecánicos en el sur del Perú. Nos esforzamos por ser reconocidos por nuestra excelencia, compromiso y capacidad para superar las expectativas de nuestros clientes.</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Leer Más <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <img src={blog3} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Nuestros VALORES</h5>
                                    <p className="text-slate-400 mt-4">Experiencia: Brindamos y formamos organizaciones, versatilidad, saber hacer y confiabilidad.
                                    </p><p className="text-slate-500">Cercanía: Cercanía con una mejor comunicación, cercana, inmediata y coordial.
                                    </p><p className="text-slate-500">Compromiso: Siempre involucrados con responsabilidad, puntualidad y proactividad.
                                    </p><p className="text-slate-500">Respaldo: Con equipos, tecnología y solidez financiera, las cuales aportan y suman seguridad.
                                    </p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Leer Más <i className="mdi mdi-chevron-right align-middle"></i></Link>
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
