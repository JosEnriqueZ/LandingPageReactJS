import React from "react";

import NavLight from "../components/navLight";
import About from "../components/about";
import Details from "../components/details";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Blogs from "../components/blog";
import Carrucel from "../components/carrucel";

export default function IndexTwo() {
    return (
        <>
            <NavLight />
            <Carrucel />
            {/* <About /> */}
            <Details />
            <Blogs />
            <Footer />
            <Switcher />
        </>
    )
}