import React from "react";
import { Link } from "react-router-dom";
import logoLight from '../assets/images/logo-light.png'
import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail} from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                            <Link to="#" className="text-[22px] focus:outline-none">
                                <img src={logoLight} className="mx-auto md:me-auto md:ms-0" alt=""/>
                            </Link>
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()} Hecho por Silingcorp </p>
                            <p>RUC: 20612728420 | INVERSIONES MULTIPLES SAN ISIDRO DE LLUTA INGENIEROS CORP S.A.C.</p>
                            <p></p>
                        </div>

                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            {/* <li className="inline"><Link to="https://1.envato.market/upcover-react" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiShoppingCart data-feather="shopping-cart" className="size-4 align-middle" title="Buy Now"/></Link></li> */}
                            {/* <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiDribbble className="size-4 align-middle" title="dribbble"/></Link></li> */}
                            <li className="inline"><Link to="https://www.linkedin.com/company/siling-corp/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiLinkedin className="size-4 align-middle" title="Linkedin"/></Link></li>
                            <li className="inline"><Link to="https://www.facebook.com/profile.php?id=61560654868156" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiFacebook className="size-4 align-middle" title="instagram"/></Link></li>
                            {/* <li className="inline"><Link to="https://www.instagram.com/siling-corp/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiInstagram className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link to="https://twitter.com/siling-corp" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiTwitter className="size-4 align-middle" title="twitter"/></Link></li> */}
                            <li className="inline"><Link to="mailto:recursos.humanos@silingcorp.com.pe" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiMail className="size-4 align-middle" title="email"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}