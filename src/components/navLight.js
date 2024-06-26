import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import logoMain from "../assets/images/logo180x55.png";
import logoMain2 from "../assets/images/logo180x55with.png";
import { Link as Link1 } from "react-scroll";

export default function NavLight() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  console.log(isHome);
  let [scroll, setScroll] = useState(false);
  let [manu, setManu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, []);

  return (
    <nav className={`navbar ${scroll ? "is-sticky" : ""}`} id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" to="/">
          <span className="inline-block dark:hidden">
            {/* LOGO DE LA EMPRESA */}
            <img src={logoMain} className="l-dark" alt="" />
            <img src={logoMain2} className="l-light" alt="" />
          </span>
          <img src={logoMain2} className="hidden dark:inline-block" alt="" />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          <ul className="list-none menu-social mb-0">
            <li className="inline">
              <Link
                to="https://silingcorp.com.pe/mail"
                className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white uppercase"
              >
                Email
              </Link>
            </li>
          </ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setManu(!manu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${
            manu ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
            <li className="nav-item">
              {isHome ? (
                <Link1
                  className="nav-link ms-0"
                  to="home"
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  spy={true}
                >
                  Inicio
                </Link1>
              ) : (
                <Link to="/" className="nav-link ms-0">
                  Inicio
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isHome ? (
                <Link1
                  className="nav-link ms-0"
                  to="about"
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  spy={true}
                >
                  Sobre Nosotros
                </Link1>
              ) : (
                <Link to="/" className="nav-link ms-0">
                  Sobre nosotros
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isHome ? (
                <Link1
                  className="nav-link ms-0"
                  to="services"
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  spy={true}
                >
                  Servicios
                </Link1>
              ) : (
                <Link to="/" className="nav-link ms-0">
                  Servicios
                </Link>
              )}
            </li>
            {/* <li className="nav-item">
                            <Link1 className="nav-link ms-0" to="review" smooth={true} duration={1000} activeClass='active' spy={true}>Testimonios</Link1>
                        </li> */}
            {/* <li className="nav-item">
                            <Link1 className="nav-link ms-0" to="pricing" smooth={true} duration={1000} activeClass='active' spy={true}>Precios</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link ms-0" to="blog" smooth={true} duration={1000} activeClass='active' spy={true}>Blogs</Link1>
                        </li> */}
            <li className="nav-item">
              {isHome ? (
                <Link1
                  className="nav-link ms-0"
                  to="contact"
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  spy={true}
                >
                  Contactanos
                </Link1>
              ) : (
                <Link to="/" className="nav-link ms-0">
                  Contactanos
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
