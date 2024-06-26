import React from "react";
import { Link } from "react-router-dom";
// import aboutImage from '../assets/images/about.jpg'
// import aboutImage from '../assets/images/carguio.jpg'
import silingservice9 from '../assets/images/imgSilingCorp/ANIOS.png'
import silingservice10 from '../assets/images/imgSilingCorp/ANIOS2.png'



import CountUp from 'react-countup';

export default function About(){
    return(
        <section className="relative md:py-24 py-16" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={silingservice10} className="rounded-full shadow dark:shadow-gray-700" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-teal-500 text-2xl font-semibold mb-0 block">+<CountUp className="counter-value text-4xl font-semibold" start={0} end={20000}/>HH</span>
                                        <span className="font-semibold block mt-2">EN INGENIERÍA BÁSICA <br/>Y DE DETALLE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">¿Quienes somos?</h6>
                            <h3 className="font-semibold text-2xl leading-normal mb-4">Somos una empresa Lluteña prestadora de bienes y servicios, fundada en el distrito de Lluta, provincia de Caylloma;</h3>

                            <p className="text-slate-400 max-w-xl mb-6 text-justify"> El esfuerzo de nuestros fundadores oriundos de Lluta con más de 8 años orientada al transporte de carga y mercancías locales y más de 4 generaciones al servicio del desarrollo de la agricultura e industria de nuestro pueblo, sumados a la formación universitaria de sus descendientes nos permitió consolidarnos como empresa contratista ampliando nuestros servicios de mantenimiento mecánico, diseño y fabricación metalmecánica, mantenimiento de sistemas contra incendio para proyectos mineros e industriales en el sur del país.</p>

                            <Link to="/detail/about" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Leer más <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}