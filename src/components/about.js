import React from "react";
import { Link } from "react-router-dom";
import aboutImage from '../assets/images/about.jpg'

import CountUp from 'react-countup';

export default function About(){
    return(
        <section className="relative md:py-24 py-16" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={aboutImage} className="rounded-full shadow dark:shadow-gray-700" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-teal-500 text-2xl font-semibold mb-0 block"><CountUp className="counter-value text-6xl font-semibold" start={0} end={15}/>+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">¿Quienes somos?</h6>
                            <h3 className="font-semibold text-2xl leading-normal mb-4">We're a global stakeholder <br/> relations and partnership <br/> building consultancy.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Obtenga recursos útiles instantáneos sobre cualquier cosa mientras viaja, implemente fácilmente soluciones seguras de transferencia de dinero, aumente su eficiencia diaria, conéctese con otros usuarios de aplicaciones y cree su propia red Techwind, y mucho más con solo unos pocos toques. comodo consecuencia. Duis auté irure..</p>

                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Leer mas <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}