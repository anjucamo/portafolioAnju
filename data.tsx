import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const socialNetworks = [
    
    
     {
        id: 3,
        logo: <FaWhatsapp  size={30} strokeWidth={1} />,
        src: "https://wa.me/573054277020",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "BACK OFFICE COMERCIAL",
        subtitle: "Jefe de Sala",
        description: "Apoyo en la gestión operativa y comercial de ventas de servicios de telecomunicaciones, principalmente en procesos relacionados con planes móviles, internet, televisión y telefonía fija.",
        date: "Hoy",
    },
   
    {
        id: 2,
        title: "DESARROLLADOR FRONTEND Y BACKEND",
        subtitle: "Digital Contact Center",
        description: " 	Diseño y desarrollo de interfaz para plataforma interna de Digital Contact Center Colombia, enfocada en el registro de ventas por parte de asesores y la revisión, aprobación o rechazo de solicitudes por el equipo de Back Office, mediante una experiencia moderna, organizada y responsive.Maqueté una vista administrativa para el área de Back Office, permitiendo revisar las ventas cargadas por los asesores, validar la información y aprobar o rechazar cada solicitud según su estado. ",
        date: "Dic 2025",
    },
    {
        id: 3,
        title: "DESARROLLADOR FRONTEND",
        subtitle: "Enerbook",
        description: " 	Diseñé la interfaz web de Enerbook, una plataforma digital para cotizar energía solar en línea, permitiendo a los usuarios subir su recibo, recibir propuestas verificadas, comparar opciones y conectar con instaladores solares confiables a través de una experiencia visual moderna y orientada a conversión.",
        date: "May 2025",
    },
    {
        id: 4,
        title: "DESARROLLADOR TARJETA DE MEDICION",
        subtitle: "Software Development",
        description: " 	Desarrollé tarjetas electrónicas para medir parámetros de agua y petróleo, asegurando su alta precisión y fiabilidad. Diseñé y desarrollé tarjetas electrónicas para medir parámetros de agua y petróleo, asegurando su alta precisión y fiabilidad.",
        date: "Dic 2024",
    },
    {
        id: 5,
        title: "Tecnólogo en Desarrollo de Sistemas de Información y Redes",
        subtitle: "Fundacion Escuela Tecnologica de Neiva (FET)",
        description: "Diseño e implementación de sistemas de información mediante herramientas de programación, participación activa en proyectos de ingeniería de software. Diseño lógico y físico de redes WAN, diagnóstico y evaluación de la eficiencia de software, y en la selección de hardware para la automatización o actualización de procesos. Además, poseo experiencia en el diseño e implementación de páginas web.",
        date: "Dic 2023",
    },
    {
        id: 6,
        title: "Técnico Profesional en Soportes en Sistemas Informáticos",
        subtitle: "Fundacion Escuela Tecnologica de Neiva (FET)",
        description: "Técnico en sistemas, con formación en mantenimiento preventivo y correctivo de equipos de cómputo e impresoras, instalación y configuración de sistemas, soporte a aplicativos, redes de área local y bases de datos básicas, experiencia como asistente en desarrollo de software e instructor en el Sistema de Gestión de la Calidad, lo que me permite desempeñarme con solvencia en el ámbito tecnológico y proyectarme hacia un futuro tecnólogo en desarrollo de software.       ",
        date: "Dic 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto Enerbook",
        image: "/image-1.png",
        URL: "https://www.enerbook.mx/",
        
        urlGithub: "https://www.enerbook.mx/",
        urlDemo: "https://www.enerbook.mx/"
    },
    {
        id: 2,
        title: "Digital Contact Center",
        image: "/image-2.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Restaurante",
        image: "/image-3.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "E-commerce",
        image: "/image-4.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];