// data.js

const misDatos = {
  // Datos Personales y de Contacto
  nombre: "Ali Hurtado",
  titulo: "Desarrollador Web Full Stack",
  telefono: "+34669234224",
  email: "alihurtado16@gmail.com",
  ubicacion: "La Palma, España",
  linkedin: "ali-hurtado-a5a32a1b7",
  github: "AliHurtado01", 
  cvUrl: "enlace/a/tu/cv.pdf",

  // Acerca de Mí
  acercaDe:
    "Soy un apasionado desarrollador web con experiencia en la creación de interfaces de usuario robustas y la implementación de lógica de backend eficiente. Mi enfoque principal es el desarrollo _mobile-first_ y la optimización de la experiencia de usuario (UX).",

  // Estudios (Array de Objetos estudio)
  estudios: [
    {
      titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institucion: "I.E.S. José María Pérez Pulido",
      periodo: "2023 - 2025",
      descripcion:
        "Especialización en entornos cliente (JS, React) y servidor (Node.js, PHP). Énfasis en metodologías ágiles y bases de datos relacionales.",
    },
    {
      titulo: "Técnico medio en Sistemas Microinformáticos y Redes",
      institucion: "I.E.S. Villa de Mazo",
      periodo: "2021 - 2023",
      descripcion:
        "Formación en instalación, configuración y mantenimiento de sistemas informáticos y redes. Conocimientos básicos de programación y administración de sistemas.",
    },
  ],

  // Experiencia (Array de Objetos experienciaLaboral)
  experienciaLaboral: [
    {
      puesto: "Camarero",
      empresa: "Restaurante Mi Rincón",
      periodo: "Junio 2019 - Septiembre 2022",
      descripcion:
        "Atención al cliente, toma de pedidos y servicio en sala. Desarrollo de habilidades interpersonales y trabajo en equipo en un entorno dinámico.",
    },
    {
      puesto: "Becario de Desarrollo Web",
      empresa: "Fiorldland Travels",
      periodo: "Marzo 2024 - Mayo 2024",
      descripcion:
        "Apoyo en la creación de sistemas de automatización y chat bots para mejorar la atención al cliente.",
    },
  ],

  // Proyectos (Array de Objetos proyecto)
  proyectos: [
    {
      nombre: "E-commerce de Ropa",
      tecnologias: "JS, Tailwind CSS, Node.js",
      url: "https://github.com/tu-usuario/e-commerce-repo",
      descripcion:
        "Plataforma completa de comercio electrónico. Se implementó un sistema de carrito de compras 100% dinámico con JavaScript.",
    },
    {
      nombre: "Portfolio Personal",
      tecnologias: "JS, Tailwind CSS",
      url: "https://github.com/tu-usuario/portfolio-repo",
      descripcion:
        "Diseño _mobile-first_ y contenido inyectado dinámicamente. Uso de Grid y Flexbox para la maquetación responsiva.",
    },
  ],
};