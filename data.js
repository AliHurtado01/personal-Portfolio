// data.js

const misDatos = {
  // Datos Personales y de Contacto
  nombre: "Ali Hurtado",
  titulo: "Desarrollador Web Full Stack",
  telefono: "+34 669 234 224",
  email: "alihurtado16@gmail.com",
  ubicacion: "La Palma, España",
  linkedin: "ali-hurtado-a5a32a1b7",
  github: "AliHurtado01",
  cvUrl: "enlace/a/tu/cv.pdf",

  // Acerca de Mí
  acercaDe: `
    Soy un desarrollador Web en formación constante. He adquirido una base sólida en desarrollo de aplicaciones web, destacando en la creación de <b>interfaces responsivas y dinámicas</b>. 
    <br><br>
    Lo que me diferencia es mi perfil híbrido: cuento además con un <b>vasto conocimiento en sistemas informáticos y redes</b>, con capacidad para desplegar y administrar entornos físicos y virtuales.
    <br><br>
    Me considero una persona <b>proactiva</b>: si no sé cómo hacer algo, investigo hasta solucionarlo, comprometiéndome al 100% con el objetivo del proyecto.
`,

  // Estudios (Array de Objetos estudio)
  estudios: [
    {
      titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institucion: "I.E.S. José María Pérez Pulido",
      periodo: "2023 - 2025",
      descripcion:
        "Especialización en entornos cliente (JS, React) y servidor (Node.js, PHP, MySQL). Énfasis en metodologías ágiles y bases de datos relacionales.",
    },
    {
      titulo: "Técnico medio en Sistemas Microinformáticos y Redes",
      institucion: "I.E.S. Villa de Mazo",
      periodo: "2020 - 2022",
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
      empresa: "Fiordland Travels",
      periodo: "Marzo 2024 - Mayo 2024",
      descripcion:
        "Apoyo en la creación de sistemas de automatización y chat bots para mejorar la atención al cliente.",
    },
  ],

  // Proyectos (Array de Objetos proyecto)
  proyectos: [
    {
      nombre: "BibliotecaOnline",
      tecnologias: "PHP",
      url: "https://github.com/AliHurtado01/BibliotecaOnline",
      descripcion:
        "Es una biblioteca online de videojuegos donde puedes añadir, eliminar, votar y consultar juegos añadidos por tí como parte del segundo año de DAW.",
      periodo: "2025",
    },
    {
      nombre: "CriptoConverter",
      tecnologias: "JS, HTML, CSS",
      url: "https://github.com/AliHurtado01/CriptoConverter",
      descripcion:
        "Proyecto basado en JS, usando APIS para recibir precios de criptomonedas y poder tener una especie de calculadora sobre los datos de conversión con las criptomonedas más famosas.",
    },
    {
      nombre: "Proyecto LDN",
      tecnologias: "HTML, CSS",
      url: "https://github.com/AliHurtado01/ProyectoFinalLDN",
      descripcion:
        "Página sobre todos los juegos de Zelda, así como su historia y personaje. Realizada como proyecto del primer año de DAW usando HTML y CSS.",
    },
    {
      nombre: "Portfolio Personal",
      tecnologias: "JS, HTML, Tailwind CSS",
      url: "https://github.com/AliHurtado01/personal-Portfolio",
      descripcion:
        "Creación de mi portfolio personal como parte del proyecto de 2DAW, utilizando por primera vez tecnologías de Tailwind.",
    },
  ],
};
