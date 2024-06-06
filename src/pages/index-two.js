import React from "react";

import NavLight from "../components/navLight";
import Carrucel from "../components/carrucel";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Location from "../components/location";
import Client from "../components/client";
// import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import GetInTouch from "../components/getInTuoch";

export default function IndexTwo() {
    return (
        <>
            {/* Es el navegador */}
            <NavLight />
            {/* Es el carrucel */}
            <Carrucel />
            {/* Es el quienes somos */}
            <About />
            {/* Es los servicios */}
            <Services />
            {/* Es mision,vision y valores */}
            <AgencyTab />
            {/* Localizacion y mapa */}
            <Location />
            {/* Clientes */}
            <Client />
            {/* Novedades */}
            <Blogs />
            {/* Contactanos */}
            <GetInTouch />
            {/* Pie de pagina */}
            <Footer />
            {/* Cambiador de tema */}
            <Switcher />
        </>
    )
}