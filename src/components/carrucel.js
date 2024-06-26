import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backgroundsHome } from "../data/data";
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import TinySlider from "tiny-slider-react";


export default function Carrucel() {
    let [isOpen, setOpen] = useState(false);
    const settings = {
        items: 1,
        slideBy: 'page',
        autoplay: true,
        loop: true,
        controls: false,
        nav: true,
        navPosition: 'bottom',
        responsive: {
            640: {
                items: 1
            },
            700: {
                items: 1
            },
            900: {
                items: 1
            }
        },
    };
    return (
        <>
            <section className="relative table w-full h-96 py-32 lg:py-64 overflow-hidden" id="home">
                <div className="absolute inset-0 overflow-hidden">
                    {/* <div className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}></div> */}
                    <TinySlider className="absolute inset-0" settings={settings}>
                        {backgroundsHome.map((item, index) => {
                            return (
                                <div className="tiny-slide" key={index}>
                                    <img className="min-w-full min-h-full w-auto h-[410px] lg:h-full object-cover" src={item.image} alt="" />
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 text-center">
                       


                        {/* <p className="text-white/70 text-lg max-w-xl mx-auto">Este es solo un texto simple creado para esta plantilla única e impresionante; puedes reemplazarlo con cualquier texto.</p> */}
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="TmGga93REHE"
                            onClose={() => setOpen(false)}
                        />
                        <div className="text-center">
                            <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-16 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>
                        </div>

                        <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-xl lg:text-5xl my-5">Brindando esfuerzos, sumamos soluciones</h4>

                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link to=""><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}