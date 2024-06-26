// iconos de los servicios
import { FaFileContract, BiWrench, BiBuildings, PiDrone, BiBarChartSquare, BiCog, FaTruck, FaFire } from '../assets/icons/vander'

import client1 from '../assets/images/team/lasbambaslogo.jpg'
// import client2 from '../assets/images/team/02.jpg'
import client2 from '../assets/images/team/antapaccay.png'
// import client3 from '../assets/images/team/03.jpg'
import client3 from '../assets/images/team/marcobre.png'
// import client4 from '../assets/images/team/04.jpg'
import client4 from '../assets/images/team/angloamerican.jpg'
import client5 from '../assets/images/team/gloria.png'
import client6 from '../assets/images/team/qkalas.png'

import camion from '../assets/images/blog/camion.jpg'

import blog1 from '../assets/images/blog/01.png'
import blog2 from '../assets/images/blog/02.jpeg'
import blog3 from '../assets/images/blog/03.jpg'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'

// Imagenes del carrucel Mineria
import imagen1 from '../assets/images/img-mineria/mantenimiento-de-vias.jpg'
import imagen2 from '../assets/images/img-mineria/otros-servicios.jpg'
import imagen3 from '../assets/images/img-mineria/perforacion.jpg'

import logoabout from '../assets/images/logo180x55OLD.png'

//silingcorp
import silingcorp1 from '../assets/images/imgSilingCorp/Armado de Libro - Faja Las Bambas.webp'
import silingcorp2 from '../assets/images/imgSilingCorp/Faja las bambas.webp'
import silingcorp3 from '../assets/images/imgSilingCorp/Mantenimiento Mecanico - Cambio de Muelas Cahncadora de Quijada.webp'
import silingcorp4 from '../assets/images/imgSilingCorp/Reunion - Mina.webp'
import silingcorp5 from '../assets/images/imgSilingCorp/Servicio de vuelo con dron - Mineria.webp'
import silingcorp6 from '../assets/images/imgSilingCorp/Servicio Mantto. Predicitivo.webp'
import silingcorp7 from '../assets/images/imgSilingCorp/Sistema contra incendios cuarto bombas.webp'
import silingcorp8 from '../assets/images/imgSilingCorp/Sistema contra incendios.webp'

//Services
import silingservice1 from '../assets/images/imgSilingCorp/arrendamiento.png'
import silingservice2 from '../assets/images/imgSilingCorp/mantenimientoplanta.png'
import silingservice3 from '../assets/images/imgSilingCorp/sistemasincendios.png'
import silingservice4 from '../assets/images/imgSilingCorp/obrasciviles.png'
import silingservice5 from '../assets/images/imgSilingCorp/ndt.png'
import silingservice6 from '../assets/images/imgSilingCorp/analisisestructurales.png'
import silingservice7 from '../assets/images/imgSilingCorp/proyectosindustriales.png'
import silingservice8 from '../assets/images/imgSilingCorp/transporte.png'
import silingservice9 from '../assets/images/imgSilingCorp/ANIOS.png'

import silingcorpcarosel1 from '../assets/images/imgSilingCorp/XArmado-de-Libro---Faja-Las-Bambas.png'
import silingcorpcarosel2 from '../assets/images/imgSilingCorp/XReunion---Mina.png'
import silingcorpcarosel3 from '../assets/images/imgSilingCorp/XServicio-Mantto.-Predicitivo.png'
import silingcorpcarosel4 from '../assets/images/imgSilingCorp/XServicio-de-vuelo-con-dron---Mineria.png'

import silingcorpcarosel5 from '../assets/images/imgSilingCorp/orgullosos.png'
import silingcorpcarosel6 from '../assets/images/imgSilingCorp/ccasca.png'
import silingcorpcarosel7 from '../assets/images/imgSilingCorp/capacitandonos.png'


// datos sobre la empresa
export const aboutData = {
    title: 'SILINGCORP',
    desc: `Somos una empresa Lluteña prestadora de bienes y servicios, fundada en el distrito de Lluta, provincia de Caylloma; el esfuerzo de nuestros fundadores oriundos de Lluta con más de 8 años orientada al transporte de carga y mercancías locales y más de 4 generaciones al servicio del desarrollo de la agricultura e industria de nuestro pueblo, sumados a la formación universitaria de sus descendientes nos permitió consolidarnos como empresa contratista ampliando nuestros servicios de mantenimiento mecánico, diseño y fabricación metalmecánica, mantenimiento de sistemas contra incendio para proyectos mineros e industriales en el sur del país.\n\Historia\nNuestro área de Ingeniería cuenta con Profesionales de primer nivel; desarrollamos proyectos integrales (mecánico, civil, eléctrico). Asimismo, se realiza el diseño, fabricación, montaje y mantenimiento de estructuras y equipos para la minería e industria, siendo especialistas en trabajos de recuperación de piezas por Soldadura, especialistas en el Montaje y Desmontaje de Andamios, todo esto de acuerdo a los requerimientos, estándares y especificaciones de alta calidad a precios competitivos y entregas en los tiempos requeridos. SILING CORP S.A.C. cuenta con un programa de Calidad, seguridad y Medio Ambiente para los diferentes proyectos que realizamos.`,
    img: logoabout,
}

// servicios que brinda la empresa
export const servicesData = [
    {
        id: 1,
        icon: FaFileContract,
        img: silingservice1,
        title: 'Arrendamiento',
        desc: 'Como contratistas locales brindamos el servicio de alquiler de camionetas y camiones de bajo tonelaje, unidades equipadas y homologadas para el servicio dentro de la gran minería, y proyectos industriales. En maquina seca o con conductor,contamos con personal certificado en manejo defensivo por la National Safety Council.'
    },
    {
        id: 2,
        icon: BiWrench,
        img: silingservice2,
        title: 'Servicios de Mantenimiento de Planta',
        desc: 'Brindamos el mantenimiento predictivo preventivo y correctivo de los equipos de planta minera e industriales. Contamos con experiencia en plantas concentradoras en gran minería y plantas procesadoras de alimentos'
    },
    {
        id: 3,
        icon: FaFire,
        img: silingservice3,
        title: 'Sistema contra incendios',
        desc: 'Ofrecemos el servicio de instalación y mantenimiento de sistemas contra incendios de acuerdos a las normas NFPA así como la ingeniería y equipos de alarma contra incendio tableros eléctricos, paneles de control. Con participación activa en el proyecto: puesta en marcha del centro de mantenimiento aeronáutico del ejercito , CEMAE en la joya-cocachacra\n'
+'Con participación activa en el proyecto: puesta en marcha del centro de mantenimiento aeronáutico del ejercito , CEMAE en la joya-cocachacra.\n'
+'-Mantenimiento de sistema de agua contra incendio.\n'
+'-Sistemas de agente limpio, sistemas de espuma, habilitación de extintores.\n'
+'-Mantenimiento de sistemas de alarma contra incendio y detectores de humo.\n'
+'-Mantenimiento de bomba contra incendio CLARKE.\n'
+'-Instalación de tableros de control contra incendio MIRCOM y SIMPLEX.\n'

    },
    {
        id: 4,
        icon: BiBuildings,
        img: silingservice4,
        title: 'Obras Civiles',
        desc: 'Brindamos el movimiento de tierras para la construcción de edificaciones, cercos perimétricos con experiencia en el área de construcción y obras civiles contamos con maquinaria y personal de respaldo.\n'
        +'Nuestra participación activa en el proyecto: puesta en marcha del centro de mantenimiento aeronáutico del ejército, CEMAE en la joya-cocachacra\n'
        +'-Instalacion de tuberías HDPE.\n'
        +'-Unión de tuberías HDPE por termofusión con pruebas de resistencia y elasticidad.\n'
        +'-Habilitación del sistema de riego de todo el centro de mantenimiento Aeronáutico.\n'
    },
    {
        id: 5,
        icon: PiDrone,
        img: silingservice5,
        title: 'Servicios NDT y Filmacion con Drone',
        desc: 'Realizamos ensayos NDT, elaboración de dosier de calidad contamos con certificación nivel II en ultrasonido, tintes penetrantes, análisis vibracional, medición de espesor de pinturas, inspección de soldadura.\n'
        +'\n-Pruebas de Ultrasonido con equipos SIUI (UT).'
        +'\n-Pruebas de tintes penetrantes (PT).'
        +'\n-Pruebas de inspección visual (VT).'
        +'\n-Pruebas de partículas magnéticas MAGNAFLUX fluorescentes y no fluorescentes.'
        +'\n-Pruebas de tracción, fuga, doblez y corte en uniones por termofusión.'
        +'\n- Filmación con drones DJI para documentar avances de proyectos, y escaneo 3D geográficos.'
    },
    {
        id: 6,
        icon: BiBarChartSquare,
        img: silingservice6,
        title: 'Analisis Estructural y Fabricaciones',
        desc: 'Realizamos el estudio análisis y simulación de estructuras con CAD CAM  y CAE trabajos realizados como:\n'
        +'\n-Chutes y tolvas.'
        +'\n-Plataformas de mantenimiento.'
        +'\n-Cercos y concertinas.'
        +'\n-Naves industriales.'
        +'\n-Techos campamentos, en gran minería.'

    },
    {
        id: 7,
        icon: BiCog,
        img: silingservice7,
        title: 'Proyectos Industriales',
        desc: 'Realizamos la fabricación de estructuras para la industria alimentaria, nuestra experiencia en:\n'
        +'\n-Material ACERO INOXIDABE 304, 316 y 3161L.'
        +'\n-Tableros eléctricos sistemas de refrigeración, cámaras frigoríficas.'
        +'\n-Tuberías en cedula y OD, tinas dobles o, Sistemas automatizados de lavado de envases.'
        +'\n-Intercambiadores de calor de tubos y de placas para la industria láctea.'
        +'\n-Energías renovables, sistemas solares fotovoltaicos para calderos.'
        
    },
    {
        id: 8,
        icon: FaTruck,
        img: silingservice8,
        title: 'Transporte',
        desc: 'Se realiza el transporte de personal y carga a nivel regional:\n'
         +'\n-Nuestras rutas.'
         +'\n-Arequipa.'
         +'\n-Pedregal Majes.'
         +'\n-Huancarqui.'
         +'\n-Lluta.'
        
    },
]

// imagenes del carrucel de la pagina principal //////
export const backgroundsHome = [
    {
        title: 'Manteniendo de Vias',
        image: silingcorpcarosel3
    },
    {
        title: 'Otros Servicios',
        image: silingcorpcarosel1
    },
    {
        title: 'Perforacion',
        image: silingcorpcarosel2
    }
]

// clientes de la empresa
export const clientData = [
    {
        image: client1,
        name: 'LAS BAMBAS',
        title: 'Minería',
    },
    {
        image: client2,
        name: 'ANTAPACCAY',
        title: 'Minería',
    },
    {
        image: client3,
        name: 'MARCOBRE',
        title: 'Minería',
    },
    {
        image: client4,
        name: 'ANGLOAMERICAN',
        title: 'Minería',
    },
    {
        image: client5,
        name: 'GLORIA',
        title: 'Industrial',
    },
    {
        image: client6,
        name: 'QKALA´S',
        title: 'Industrial',
    },
]
// Noveddades de la empresa
export const blogData = [
    {
        id: 1,
        image: blog1,
        title: 'SILING CORP ORGULLOSOS DE LO NUESTRO',
        desc: `SILINGCORP se renueva. Después de 5 años de amplia experiencia en servicios integrados para minería, infraestructura y edificaciones, seguimos dándoles más. Como parte de un grupo de grandes empresas, transformamos nuestra imagen. 
        Siempre acompañado de la atención más cercana, amable, inmediata y comprometida.
`,
        date: '01 de Mayo del 2024'
    },
    {
        id: 2,
        image: silingcorpcarosel5,
        title: 'SILING CORP ORGULLOSOS DE LO NUESTRO',
        desc: `Desde que tenemos memoria cada 15 de mayo nuestro pueblo de Lluta celebra a San Isidro Labrador, patrono de la agricultura y ganadería, así como de nuestra empresa es por eso reflejado también en nuestro nombre.
 Este año no podía ser la excepción unida a la Feria Agropecuaria de Lluta del 13 al 16 de mayo.
Las celebraciones destacan desde el día 14 de mayo con la celebración de la entrada de caballos, quema de capo, misa de vísperas, encendido de fuegos artificiales y el compartir junto con las bandas de músicos.
El día 15 se celebra la fiesta central iniciando con el Izamiento de la bandera nacional misa de Fiesta procesión y en la tarde nuestra corrida de toros todo a devoción de los mayordomos
Este año los mayordomos de fiesta son Nolberto Huanqui y Esposa
`,
        date: '12 de Mayo del 2024'
    },
    {
        id: 3,
        image: silingcorpcarosel6,
        title: 'La Ccascca de Lluta',
        desc: `La Ccascca es una tradición de Lluta que convoca a las familias de Taya , durante los primeros días de agosto, para limpiar el canal principal que abastece de agua a los campos de cultivo.

Es una fiesta de agradecimiento a la tierra y a los recursos que ella brinda. Este cuidado por el agua es un valor que compartimos.
¡¡¡En el 2023 fue emotivo como cada año, Hasta el 2024!!!
`,
        date: '10 de Enero del 2024'
    },
    {
        id: 4,
        image: silingcorpcarosel7,
        title: 'Capacitando a nuestro Equipo',
        desc: `Como un compromiso de mejora constante para obtener mejores trabajos y la máxima satisfacción de nuestros clientes tuvimos la capacitación de nuestros pilotos de Drone por parte de la marca DJ para mejorar los videos geográficos y tomas de muestra con análisis infrarrojo, SILING CORP a la vanguardia de la tecnología`,
        date: '22 de Marzo del 2024'
    },
    // {
    //     id: 4,
    //     image: silingcorp8,
    //     title: 'SILINGCORP sigue innovando en infraestructura',
    //     desc: '«Esta adquisición refuerza nuestro compromiso con la excelencia operativa y la satisfacción de nuestros clientes. Los camiones Volvo FMX-R Max son conocidos por su durabilidad y rendimiento, lo que los convierte en la elección ideal para las exigencias de nuestro proyecto en Cerro Corona», comentó Luis Flores, Gerente General.',
    //     date: '25 de Marzo del 2024'
    // },
]

// mision, vision y valores de la empresa
export const mision = {
    title: 'MISIÓN',
    desc: 'Proveer soluciones inteligentes, innovadoras y seguras que agreguen valor a nuestros clientes. Nos dedicamos a optimizar cada proyecto con un enfoque en la eficiencia, la calidad y la sostenibilidad, asegurando el éxito y la satisfacción de nuestros clientes en cada etapa del proceso.',
    img: silingcorpcarosel4
}
export const vision = {
    title: 'VISIÓN',
    desc: 'Posicionar a Siling Corp como la empresa contratista local más confiable y respetada en servicios de Ingeniería, y Operación y Mantenimiento para proyectos electromecánicos y civiles en el sur del Perú. Nos esforzamos por ser reconocidos por nuestra excelencia, compromiso y capacidad para superar las expectativas de nuestros clientes.',
    img: silingcorpcarosel3
}
export const valores = [
    {
        title: 'Responsabilidad y confianza',
        desc: 'Cumplir con nuestros compromisos y trabajar para cuidar nuestra reputación, como una empresa confiable.',
        img: silingcorpcarosel2
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

export const companyLogo = [company1, company2, company3, company4, company5, company6]