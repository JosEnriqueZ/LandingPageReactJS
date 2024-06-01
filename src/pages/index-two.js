import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backgroundsHome } from "../data/data";

import bg from '../assets/images/bg/1.jpg'

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import GetInTouch from "../components/getInTuoch";
import TinySlider from "tiny-slider-react";

export default function IndexTwo() {

    let [isOpen, setOpen] = useState(false);
    const settings = {
        items: 1,
        slideBy: 'page',
        autoplay: true,
        loop: true,
        controls: false,
        nav: true,
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
            <NavLight />
            <section className="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
                <div className="absolute inset-0 overflow-hidden">
                    {/* <div className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}></div> */}
                    <TinySlider className="absolute 
                     
                    bg-center
                    min-w-full 
                    w-100% 
                    min-h-full  
                    m-100% 
                    " settings={settings}>
                        {backgroundsHome.map((item, index) => {
                            return (   
                                <div className="tiny-slide image-wrap" key={index}>
                                        <img className="w-full h-full object-cover" src={item.image} alt="" />
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="text-center">
                            <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>
                        </div>
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="S_CGed6E610"
                            onClose={() => setOpen(false)}
                        />

                        <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">Nosotros colaboramos fácil y rápido</h4>

                        <p className="text-white/70 text-lg max-w-xl mx-auto">Este es solo un texto simple creado para esta plantilla única e impresionante; puedes reemplazarlo con cualquier texto.</p>

                        <div className="relative mt-8">
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Empezar</Link>
                        </div>
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
            <About />
            <Services />
            <AgencyTab />
            <Cta />
            <Client />
            {/* <Pricing/> */}
            <Blogs />
            <GetInTouch />
            <Footer />
            <Switcher />
        </>
    )
}