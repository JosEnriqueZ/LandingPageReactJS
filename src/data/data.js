import { FiTrendingUp, BiBuildings,PiDrone ,BiBarChartSquare,BiCog,FaTruck, FaFire, FiDollarSign, FiCompass, FiCommand, FiBox, FiCamera, FiBell, FiMonitor } from '../assets/icons/vander'
import client1 from '../assets/images/team/lasbambaslogo.jpg'
// import client2 from '../assets/images/team/02.jpg'
import client2 from '../assets/images/team/minsurlogo.jpg'
// import client3 from '../assets/images/team/03.jpg'
import client3 from '../assets/images/team/03.png'
// import client4 from '../assets/images/team/04.jpg'
import client4 from '../assets/images/team/zafranallogo.jpg'
import client5 from '../assets/images/team/antapaccay.png'
import client6 from '../assets/images/team/06.jpg'

// import blog1 from '../assets/images/blog/01.jpg'
import camion from '../assets/images/blog/camion.jpg'
import blog1 from '../assets/images/blog/01.png'
// import blog2 from '../assets/images/blog/02.jpg'
import blog2 from '../assets/images/blog/02.jpeg'
import blog3 from '../assets/images/blog/03.jpg'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'

import bg1 from '../assets/images/bg/1.jpg'
import bg2 from '../assets/images/bg/2.jpg'

// Imagenes del carrucel Mineria
import imagen1 from '../assets/images/img-mineria/mantenimiento-de-vias.jpg'
import imagen2 from '../assets/images/img-mineria/otros-servicios.jpg'
import imagen3 from '../assets/images/img-mineria/perforacion.jpg'

import logoabout from '../assets/images/logo180x55OLD.png'

export const aboutData = {
    title: 'SILINGCORP',
    desc: `Somos una empresa Lluteña prestadora de bienes y servicios, fundada en el distrito de Lluta, provincia de Caylloma; el esfuerzo de nuestros fundadores oriundos de Lluta con más de 8 años orientada al transporte de carga y mercancías locales y más de 4 generaciones al servicio del desarrollo de la agricultura e industria de nuestro pueblo, sumados a la formación universitaria de sus descendientes nos permitió consolidarnos como empresa contratista ampliando nuestros servicios de mantenimiento mecánico, diseño y fabricación metalmecánica, mantenimiento de sistemas contra incendio para proyectos mineros e industriales en el sur del país.\n\Historia\nNuestro área de Ingeniería cuenta con Profesionales de primer nivel; desarrollamos proyectos integrales (mecánico, civil, eléctrico). Asimismo, se realiza el diseño, fabricación, montaje y mantenimiento de estructuras y equipos para la minería e industria, siendo especialistas en trabajos de recuperación de piezas por Soldadura, especialistas en el Montaje y Desmontaje de Andamios, todo esto de acuerdo a los requerimientos, estándares y especificaciones de alta calidad a precios competitivos y entregas en los tiempos requeridos. SILING CORP S.A.C. cuenta con un programa de Calidad, seguridad y Medio Ambiente para los diferentes proyectos que realizamos.`,
    img: logoabout,
}

export const servicesData = [
    {
        id: 1,
        icon: FiDollarSign,
        img: client1,
        title: 'Arrendamiento',
        desc: 'Como contratistas locales brindamos el servicio de alquiler de camionetas y camiones de bajo tonelaje, unidades equipadas y homologadas para el servicio dentro de la gran minería, y proyectos industriales. En maquina seca o con conductor,contamos con personal certificado en manejo defensivo por la National Safety Council.'
    },
    {
        id: 2,
        icon: FiCompass,
        img: client1,
        title: 'Servicios de Mantenimiento de Planta',
        desc: 'Brindamos el mantenimiento predictivo preventivo y correctivo de los equipos de planta minera e industriales. Contamos con experiencia en plantas concentradoras en gran minería y plantas procesadoras de alimentos'
    },
    {
        id: 3,
        icon: FaFire,
        img: client1,
        title: 'Sistema contra incendios',
        desc: 'Ofrecemos el servicio de instalación y mantenimiento de sistemas contra incendios de acuerdos alas normas NFPA asi como la ingeniería y equipos de alarma contra incendio tableros eléctricos, tableros de control.'
    },
    {
        id: 4,
        icon: BiBuildings,
        img: client1,
        title: 'Obras Civiles',
        desc: 'Brindamos el movimiento de tierras para la construcción de carreteras y edificaciones con amplia experiencia en el área de construcción y obras civiles contamos con maquinaria y personal de respaldo.'
    },
    {
        id: 5,
        icon: PiDrone,
        img: client1,
        title: 'Servicios NDT y Filmacion con Drone',
        desc: 'Realizamos ensayos NDT, elaboración de dosier de calidad contamos con certificación nivel II en ultrasonido, tintes penetrantes,análisis vibracional,medición de espesor de pinturas, inspección de soldadura'
    },
    {
        id: 6,
        icon: BiBarChartSquare,
        img: client1,
        title: 'Analisis Estructural y Fabricaciones',
        desc: 'Realizamos el estudio análisis y simulación de estructuras con CAD CAM  y CAE trabajos ralizados como chutes y tolvas plataformas de mantenimiento cercos y concertinas zarandas estáticas naves industriales techos campamentos.'
    },
    {
        id: 7,
        icon: BiCog,
        img: client1,
        title: 'Proyectos Industriales',
        desc: 'Realizamos la fabricación de estructuras para la industria alimentaria, en material inox, tableros eléctricos sistemas de refrigeración, tuberías, tinas doble o, intercambiadores de calor, energías renovables'
    },
    {
        id: 8,
        icon: FaTruck,
        img: client1,
        title: 'Transporte',
        desc: 'Se realiza el transporte de personal y carga a nivel regional, nuestras rutas. Arequipa, Pedregal Majes, Huancarqui, Lluta.'
    },
]
export const backgroundsHome = [
    {
        title: 'Manteniendo de Vias',
        image: imagen1
    },
    {
        title: 'Otros Servicios',
        image: imagen2
    },
    {
        title: 'Perforacion',
        image: imagen3
    }
]
export const clientData = [
    {
        image: client1,
        name: 'LAS BAMBAS',
        title: 'Minera',
    },
    {
        image: client2,
        name: 'Minsur',
        title: 'Minera',
    },
    {
        image: client3,
        name: 'STRACON',
        title: 'Minera',
    },
    {
        image: client4,
        name: 'Zafranal',
        title: 'Proyecto',
    },
    {
        image: client5,
        name: 'Antapaccay',
        title: 'Minera',
    },
]
// export const clientData = [
//     {
//         image:client1,
//         name:'Calvin Carlo',
//         title:'Manager',
//         desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
//     },
//     {
//         image:client2,
//         name:'Christa Smith',
//         title:'Manager',
//         desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "'
//     },
//     {
//         image:client3,
//         name:'Jemina CLone',
//         title:'Manager',
//         desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others"'
//     },
//     {
//         image:client4,
//         name:'Smith Vodka',
//         title:'Manager',
//         desc:'" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts "'
//     },
//     {
//         image:client5,
//         name:'Cristino Murfi',
//         title:'Manager',
//         desc:'" There is now an abundance of readable dummy texts. These are usually used when a text is required"'
//     },
//     {
//         image:client6,
//         name:'Cristino Murfi',
//         title:'Manager',
//         desc:'" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero "'
//     },
// ]

export const blogData = [
    {
        id: 1,
        image: blog1,
        title: 'Nuestra IMAGEN Nueva',
        desc: 'SILINGCORP Como parte de un grupo de grandes empresas mineras, transformamos nuestra imagen más actualizada y versátil. Para mostrar nuestra nueva filosofía de SUMA, la que compartimos TODOS dentro de la compañía y con nuestros clientes. ',
        date: '01 de Junio del 2024'
    },
    {
        id: 2,
        image: blog2,
        title: 'SILINGCORP apuesta por la transformación digital e innovación',
        desc: 'La transformación digital de SILINGCORP es un esfuerzo conjunto de todas las áreas de la empresa y estamos seguros que dará mucho valor a los equipos y nos permitirá afianzar nuestro proceso de transformación digital.',
        date: '25 de Mayo del 2024'
    },
    {
        id: 3,
        image: blog3,
        title: 'SILINGCORP sigue innovando en infraestructura',
        desc: '«Esta adquisición refuerza nuestro compromiso con la excelencia operativa y la satisfacción de nuestros clientes. Los camiones Volvo FMX-R Max son conocidos por su durabilidad y rendimiento, lo que los convierte en la elección ideal para las exigencias de nuestro proyecto en Cerro Corona», comentó Luis Flores, Gerente General.',
        date: '15 de Marzo del 2024'
    },
]

export const mision= {
    title: 'MISIÓN',
    desc: 'Proveer soluciones inteligentes, innovadoras y seguras que agreguen valor a nuestros clientes. Nos dedicamos a optimizar cada proyecto con un enfoque en la eficiencia, la calidad y la sostenibilidad, asegurando el éxito y la satisfacción de nuestros clientes en cada etapa del proceso.',
    img:camion
}

export const vision = {
    title: 'VISIÓN',
    desc: 'Posicionar a Siling Corp como la empresa contratista local más confiable y respetada en servicios de Ingeniería, y Operación y Mantenimiento para proyectos electromecánicos y civiles en el sur del Perú. Nos esforzamos por ser reconocidos por nuestra excelencia, compromiso y capacidad para superar las expectativas de nuestros clientes.',
    img:blog2
}

export const valores = [
    {
        title: 'Responsabilidad y confianza',
        desc: 'Cumplir con nuestros compromisos y trabajar para cuidar nuestra reputación, como una empresa confiable.',
        img:blog3
    },
    {
        title: 'Identidad Cultural',
        desc: 'Estamos orgullosos del legado y  tradiciones de nuestro pueblo transmitido por generaciones. Somos responsables de seguirlo transmitiendo. Aspiramos a ser la mejor empresa Lluteña',

    },
    {
        title: 'Respeto',
        desc: 'Creemos firmemente que  el respeto fomenta relaciones sólidas entre los miembros del equipo, mejora la comunicación y promueve la colaboración y la productividad con nuestro entorno.',

    },
    {
        title: 'Seguridad',
        desc: 'Trabajamos con altos estándares de seguridad, creemos firmemente que la seguridad no se negocia . Nuestros procedimientos aseguran que todo nuestro equipo humano , regresen sanos y salvos a sus hogares.',

    },
    {
        title: 'Sostenibilidad',
        desc: 'Trabajamos responsablemente y nos esforzamos por contribuir positivamente en el desarrollo del país a nivel económico social y medioambiental',

    }
]


export const misionVisionValores = {
    mision: 'Proveer soluciones inteligentes, innovadoras y seguras que agreguen valor a nuestros clientes. Nos dedicamos a optimizar cada proyecto con un enfoque en la eficiencia, la calidad y la sostenibilidad, asegurando el éxito y la satisfacción de nuestros clientes en cada etapa del proceso.',
    vision: 'Para el año 2025, posicionar a Siling Corp como la empresa más confiable y respetada en servicios de Ingeniería, Procura y Construcción (EPC) y Operación y Mantenimiento (O&M) para proyectos civil-electromecánicos en el sur del Perú. Nos esforzamos por ser reconocidos por nuestra excelencia, compromiso y capacidad para superar las expectativas de nuestros clientes.',
    valores: [
        {
            title: 'Experiencia',
            desc: 'Brindamos y formamos organizaciones, versatilidad, saber hacer y confiabilidad.'
        },
        {
            title: 'Cercanía',
            desc: 'Cercanía con una mejor comunicación, cercana, inmediata y coordial.'
        },
        {
            title: 'Compromiso',
            desc: 'Siempre involucrados con responsabilidad, puntualidad y proactividad.'
        },
        {
            title: 'Respaldo',
            desc: 'Con equipos, tecnología y solidez financiera, las cuales aportan y suman seguridad.'
        }
    ]
}

export const companyLogo = [company1, company2, company3, company4, company5, company6]