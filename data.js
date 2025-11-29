// data.js

const misDatos = {
  // Datos Personales y de Contacto
  nombre: "Ali Antonio Hurtado Hernández",
  titulo: "Desarrollador Web Full Stack",
  telefono: "+34669234224",
  email: "alihurtado16@gmail.com",
  ubicacion: "La Palma, España",
  linkedin: "tu-perfil-linkedin", // Usar solo el nombre de usuario
  github: "tu-usuario-github", // Usar solo el nombre de usuario
  cvUrl: "enlace/a/tu/cv.pdf",

  // Acerca de Mí (para la pestaña "Información")
  acercaDe:
    "Soy un apasionado desarrollador web con experiencia en la creación de interfaces de usuario robustas y la implementación de lógica de backend eficiente. Mi enfoque principal es el desarrollo _mobile-first_ y la optimización de la experiencia de usuario (UX).",

  // Estudios (Array de Objetos estudio)
  estudios: [
    {
      titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institucion: "I.E.S. Tu Instituto",
      periodo: "2023 - 2025",
      descripcion:
        "Especialización en entornos cliente (JS, React) y servidor (Node.js, PHP). Énfasis en metodologías ágiles y bases de datos relacionales/NoSQL.",
    },
    {
      titulo: "Certificación en Diseño UI/UX",
      institucion: "Plataforma Online",
      periodo: "2022",
      descripcion:
        "Curso intensivo sobre principios de diseño, _wireframing_ y prototipado con Figma.",
    },
  ],

  // Experiencia (Array de Objetos experienciaLaboral)
  experienciaLaboral: [
    {
      puesto: "Desarrollador Frontend Junior",
      empresa: "Tech Solutions S.L.",
      periodo: "Enero 2025 - Presente",
      descripcion:
        "Desarrollo y mantenimiento de la interfaz de usuario de la plataforma principal utilizando Vanilla JS y Tailwind. Colaboración en el diseño de nuevos componentes con enfoque _mobile-first_.",
    },
    {
      puesto: "Becario de Desarrollo Web",
      empresa: "Startup Innovadora",
      periodo: "Septiembre 2024 - Diciembre 2024",
      descripcion:
        "Apoyo en la migración de un sitio web antiguo a un nuevo stack tecnológico (HTML5, CSS3, JS).",
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
      nombre: "Portfolio Personal (¡Este!)",
      tecnologias: "JS, Tailwind CSS",
      url: "https://github.com/tu-usuario/portfolio-repo",
      descripcion:
        "Diseño _mobile-first_ y contenido inyectado dinámicamente. Uso de Grid y Flexbox para la maquetación responsiva.",
    },
  ],
};