const misDatos = {
  // ==========================================
  // ESPAÑOL (Idioma por defecto)
  // ==========================================
  es: {
    nombre: "Ali Hurtado",
    titulo: "Desarrollador Web Full Stack",
    telefono: "+34 669 234 224",
    email: "alihurtado16@gmail.com",
    ubicacion: "La Palma, España",
    linkedin: "ali-hurtado-a5a32a1b7",
    github: "AliHurtado01",
    cvUrl: "./docs/CV Ali Hurtado.pdf",

    tabsLabels: {
      acercaDe: "👨‍💻 Sobre mí",
      experienciaLaboral: "🚀 Experiencia",
      estudios: "🎓 Estudios",
      habilidades: "⚡ Habilidades",
      proyectos: "💻 Proyectos"
    },

    acercaDe: `Soy un desarrollador web apasionado con la tecnología desde muy pequeño, formándome en las últimas tecnologías y metodologías de desarrollo constantemente. He adquirido una sólida base en el desarrollo de aplicaciones web, destacando en la creación de <b>interfaces responsivas y dinámicas</b>, además de contar con experiencia en el desarrollo de sistemas de automatización y chat bots para mejorar la atención al cliente. También tengo experiencia en el desarrollo de aplicaciones móviles utilizando <b>Flutter y Dart</b>, con integración de APIs. Así como en la creación de proyectos completos, desde el diseño hasta el despliegue, utilizando tecnologías como <b>Laravel, PHP, JavaScript, Java, HTML, CSS y MySQL</b>.
    <br><br>
    Lo que me diferencia es mi perfil híbrido: cuento además con un <b>vasto conocimiento en sistemas informáticos y redes</b>, con capacidad para desplegar y administrar entornos físicos y virtuales participando de manera activa en la resolución de cualquier tipo de problema que pueda surgir.
    <br><br>
    Me considero una persona <b>proactiva</b>: si no sé cómo hacer algo, investigo hasta solucionarlo, comprometiéndome al 100% con el objetivo del proyecto. Cuento con un <b>nivel certificado de inglés B2</b> además de mi idioma nativo, el español. 
    `,

    estudios: [
      {
        titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
        institucion: "I.E.S. José María Pérez Pulido",
        periodo: "2023 - 2026",
        descripcion: "Formación exhaustiva en el desarrollo, implantación y mantenimiento de aplicaciones web. Aprendizaje de <b>programación orientada a objetos con Java</b> y diseño de bases de datos relacionales (<b>MySQL</b>). Dominio del desarrollo frontend creando interfaces modernas con <b>HTML, CSS, JavaScript y frameworks como Vue, React, Bootstrap y Tailwind CSS</b>. En el backend, desarrollo de APIs y lógica de servidor robusta mediante <b>PHP y Laravel</b>. Experiencia en despliegue de aplicaciones y uso de metodologías ágiles.",
      },
      {
        titulo: "Técnico medio en Sistemas Microinformáticos y Redes",
        institucion: "I.E.S. Villa de Mazo",
        periodo: "2020 - 2022",
        descripcion: "Formación técnica especializada en la instalación, configuración y mantenimiento de sistemas microinformáticos, aislados o en red. Adquisición de competencias en administración de <b>sistemas operativos (Windows y Linux)</b>, gestión de <b>redes locales</b>, montaje de hardware y diagnóstico de fallos. Implementación de protocolos de <b>seguridad informática</b> y configuración de servicios de red, estableciendo una base sólida para la resolución de incidencias en infraestructuras IT.",
      },
    ],

    habilidades: [
      {
        categoria: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React, Vue.js, Tailwind CSS, Bootstrap"
      },
      {
        categoria: "Backend & Base de Datos",
        items: "PHP, Laravel, Java, MySQL, API REST"
      },
      {
        categoria: "Desarrollo Móvil",
        items: "Flutter, Dart, Riverpod"
      },
      {
        categoria: "Sistemas y Herramientas",
        items: "Linux, Redes LAN/WAN, Git/GitHub, Firebase, N8N (Automatización)"
      },
      {
        categoria: "Idiomas",
        items: `<img src="https://flagcdn.com/w20/es.png" alt="ES" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Español (Nativo) <span class="mx-2 text-slate-600">|</span> <img src="https://flagcdn.com/w20/us.png" alt="US" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Inglés (B2 Certificado)`
      }
    ],

    experienciaLaboral: [
      {
        puesto: "Becario de Desarrollo Web",
        empresa: "Fiordland Travels - España",
        periodo: "Marzo 2024 - Junio 2024",
        descripcion: "Desarrollo y mantenimiento de sistemas de automatización utilizando N8N, integrando chatbots conversacionales que optimizaron los tiempos de respuesta. Colaboración estrecha con el equipo para identificar cuellos de botella y aplicar soluciones tecnológicas que mejoraron significativamente la experiencia y la atención al cliente final.",
      },
      {
        puesto: "Becario de Desarrollo Móvil",
        empresa: "Bucares S.A - Francia",
        periodo: "Febrero 2026 - Junio 2026",
        descripcion: "Desarrollo integral de la aplicación móvil 'Dealheure' (multiplataforma iOS y Android) desde cero utilizando el framework Flutter y Dart, aplicando Riverpod para la gestión del estado. Implementación de funciones avanzadas de geolocalización, manejo de permisos de ubicación y Google Maps mediante consumo de APIs para mostrar puntos de interés. Gestión del backend y base de datos con Firebase, finalizando con el empaquetado y despliegue exitoso en las tiendas de aplicaciones oficiales.",
      },
    ],

    proyectos: [
      {
        nombre: "Mercadillos La Palma",
        tecnologias: "Blade, Laravel, PHP, Javascript, HTML, CSS, MySQL",
        url: "",
        descripcion: "Proyecto de desarrollo web para la isla de La Palma de parte de toda mi clase como proyecto final, con el objetivo de crear una plataforma que permita a los usuarios consultar los mercadillos locales, sus ubicaciones, horarios y productos disponibles. Utilizando Laravel para el backend y Blade para las vistas, se ha desarrollado una aplicación que facilita la interacción entre vendedores y compradores, promoviendo el comercio local. (Repositorio privado por estar en conversaciones para su venta a la administración local).",
        periodo: "2026",
      },
      {
        nombre: "BibliotecaOnline",
        tecnologias: "PHP",
        url: "https://github.com/AliHurtado01/BibliotecaOnline",
        descripcion: "Es una biblioteca online de videojuegos donde puedes añadir, eliminar, votar y consultar juegos añadidos por tí usando AJAX y comunicación con la base de datos, como parte del segundo año de DAW.",
        periodo: "2025",
      },
      {
        nombre: "CriptoConverter",
        tecnologias: "JS, HTML, CSS",
        url: "https://github.com/AliHurtado01/CriptoConverter",
        descripcion: "Proyecto basado en JS, usando APIS para recibir precios de criptomonedas y poder tener una especie de calculadora sobre los datos de conversión con las criptomonedas más famosas.",
        periodo: "2025",
      },
      {
        nombre: "Proyecto LDN",
        tecnologias: "HTML, CSS",
        url: "https://github.com/AliHurtado01/ProyectoFinalLDN",
        descripcion: "Página sobre todos los juegos de Zelda, así como su historia y personaje. Realizada como proyecto del primer año de DAW usando HTML y CSS.",
        periodo: "2023",
      },
      {
        nombre: "Portfolio Personal",
        tecnologias: "JS, HTML, Tailwind CSS",
        url: "https://github.com/AliHurtado01/personal-Portfolio",
        descripcion: "Creación de mi portfolio personal como parte del proyecto de 2DAW, utilizando por primera vez tecnologías de Tailwind.",
        periodo: "2025",
      },
      {
        nombre: "Proyecto de 'Tienda de Superheroes'",
        tecnologias: "Vue, JavaScript, HTML, CSS",
        url: "https://github.com/AliHurtado01/tienda-superheroes",
        descripcion: "Creación de una tienda de superhéroes utilizando Vue.js y otras tecnologías web como JavaScript, HTML y CSS para mi ciclo de Desarrollo de Aplicaciones Web.",
        periodo: "2026",
      },
    ],
  },

  // ==========================================
  // INGLÉS
  // ==========================================
  en: {
    nombre: "Ali Hurtado",
    titulo: "Full Stack Web Developer",
    telefono: "+34 669 234 224",
    email: "alihurtado16@gmail.com",
    ubicacion: "La Palma, Spain",
    linkedin: "ali-hurtado-a5a32a1b7",
    github: "AliHurtado01",
    cvUrl: "./docs/CV Ali Hurtado English.pdf",

    tabsLabels: {
      acercaDe: "👨‍💻 About me",
      experienciaLaboral: "🚀 Experience",
      estudios: "🎓 Education",
      habilidades: "⚡ Skills",
      proyectos: "💻 Projects"
    },

    acercaDe: `I am a web developer passionate about technology since I was very young, constantly training in the latest technologies and development methodologies. I have acquired a solid foundation in web application development, standing out in the creation of <b>responsive and dynamic interfaces</b>, in addition to having experience in the development of automation systems and chatbots to improve customer service. I also have experience in mobile application development using <b>Flutter and Dart</b>, with API integration. As well as in the creation of complete projects, from design to deployment, using technologies such as <b>Laravel, PHP, JavaScript, Java, HTML, CSS, and MySQL</b>.
    <br><br>
    What sets me apart is my hybrid profile: I also have <b>vast knowledge in computer systems and networks</b>, with the ability to deploy and manage physical and virtual environments, actively participating in the resolution of any type of problem that may arise.
    <br><br>
    I consider myself a <b>proactive</b> person: if I don't know how to do something, I research until I solve it, committing 100% to the project's goal. I have a <b>certified B2 level in English</b> in addition to my native language, Spanish.`,

    estudios: [
      {
        titulo: "Higher Technician in Web Application Development",
        institucion: "I.E.S. José María Pérez Pulido",
        periodo: "2023 - 2026",
        descripcion: "Comprehensive training in the development, implementation, and maintenance of web applications. Learning <b>object-oriented programming with Java</b> and relational database design (<b>MySQL</b>). Mastery of frontend development, creating modern interfaces with <b>HTML, CSS, JavaScript, and frameworks like Vue, React, Bootstrap, and Tailwind CSS</b>. On the backend, development of APIs and robust server logic using <b>PHP and Laravel</b>. Experience in application deployment and agile methodologies.",
      },
      {
        titulo: "Intermediate Technician in Microcomputer Systems and Networks",
        institucion: "I.E.S. Villa de Mazo",
        periodo: "2020 - 2022",
        descripcion: "Specialized technical training in the installation, configuration, and maintenance of microcomputer systems, standalone or networked. Acquisition of skills in <b>operating systems administration (Windows and Linux)</b>, <b>local network</b> management, hardware assembly, and troubleshooting. Implementation of <b>cybersecurity</b> protocols and network services configuration, establishing a solid foundation for IT infrastructure incident resolution.",
      },
    ],

    habilidades: [
      {
        categoria: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React, Vue.js, Tailwind CSS, Bootstrap"
      },
      {
        categoria: "Backend & Database",
        items: "PHP, Laravel, Java, MySQL, REST APIs"
      },
      {
        categoria: "Mobile Development",
        items: "Flutter, Dart, Riverpod"
      },
      {
        categoria: "Systems & Tools",
        items: "Linux, LAN/WAN Networks, Git/GitHub, Firebase, N8N (Automation)"
      },
      {
        categoria: "Languages",
        items: `<img src="https://flagcdn.com/w20/es.png" alt="ES" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Spanish (Native) <span class="mx-2 text-slate-600">|</span> <img src="https://flagcdn.com/w20/us.png" alt="US" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> English (B2 Certified)`
      }
    ],

    experienciaLaboral: [
      {
        puesto: "Web Development Intern",
        empresa: "Fiordland Travels - Spain",
        periodo: "March 2024 - June 2024",
        descripcion: "Development and maintenance of automation systems using N8N, integrating conversational chatbots that optimized response times. Close collaboration with the team to identify bottlenecks and apply technological solutions that significantly improved the final customer's experience and service.",
      },
      {
        puesto: "Mobile Development Intern",
        empresa: "Bucares S.A - France",
        periodo: "February 2026 - June 2026",
        descripcion: "Comprehensive development of the 'Dealheure' mobile app (cross-platform iOS and Android) from scratch using the Flutter framework and Dart, applying Riverpod for state management. Implementation of advanced geolocation features, location permission handling, and Google Maps through API consumption to show points of interest. Backend and database management with Firebase, culminating in the successful packaging and deployment to official app stores.",
      },
    ],

    proyectos: [
      {
        nombre: "La Palma Markets",
        tecnologias: "Blade, Laravel, PHP, Javascript, HTML, CSS, MySQL",
        url: "",
        descripcion: "Web development project for the island of La Palma from my whole class as a final project, with the goal of creating a platform that allows users to check local markets, their locations, hours, and available products. Using Laravel for the backend and Blade for the views, an application has been developed that facilitates interaction between sellers and buyers, promoting local commerce. (Private repository as it is in talks for sale to the local administration).",
        periodo: "2026",
      },
      {
        nombre: "BibliotecaOnline (Online Library)",
        tecnologias: "PHP",
        url: "https://github.com/AliHurtado01/BibliotecaOnline",
        descripcion: "It is an online video game library where you can add, delete, vote, and consult games added by you using AJAX and database communication, as part of the second year of DAW.",
        periodo: "2025",
      },
      {
        nombre: "CriptoConverter",
        tecnologias: "JS, HTML, CSS",
        url: "https://github.com/AliHurtado01/CriptoConverter",
        descripcion: "JS-based project, using APIs to receive cryptocurrency prices and have a kind of calculator for conversion data with the most famous cryptocurrencies.",
        periodo: "2025",
      },
      {
        nombre: "Project LDN",
        tecnologias: "HTML, CSS",
        url: "https://github.com/AliHurtado01/ProyectoFinalLDN",
        descripcion: "Page about all Zelda games, as well as their history and characters. Made as a first-year DAW project using HTML and CSS.",
        periodo: "2023",
      },
      {
        nombre: "Personal Portfolio",
        tecnologias: "JS, HTML, Tailwind CSS",
        url: "https://github.com/AliHurtado01/personal-Portfolio",
        descripcion: "Creation of my personal portfolio as part of the 2DAW project, using Tailwind technologies for the first time.",
        periodo: "2025",
      },
      {
        nombre: "'Superhero Store' Project",
        tecnologias: "Vue, JavaScript, HTML, CSS",
        url: "https://github.com/AliHurtado01/tienda-superheroes",
        descripcion: "Creation of a superhero store using Vue.js and other web technologies like JavaScript, HTML, and CSS for my Web Application Development cycle.",
        periodo: "2026",
      },
    ],
  },

  // ==========================================
  // FRANCÉS
  // ==========================================
  fr: {
    nombre: "Ali Hurtado",
    titulo: "Développeur Web Full Stack",
    telefono: "+34 669 234 224",
    email: "alihurtado16@gmail.com",
    ubicacion: "La Palma, Espagne",
    linkedin: "ali-hurtado-a5a32a1b7",
    github: "AliHurtado01",
    cvUrl: "./docs/CV Ali Hurtado English.pdf",

    tabsLabels: {
      acercaDe: "👨‍💻 À propos de moi",
      experienciaLaboral: "🚀 Expérience",
      estudios: "🎓 Études",
      habilidades: "⚡ Compétences",
      proyectos: "💻 Projets"
    },

    acercaDe: `Je suis un développeur web passionné par la technologie depuis mon plus jeune âge, me formant constamment aux dernières technologies et méthodologies de développement. J'ai acquis une base solide dans le développement d'applications web, me démarquant dans la création d'<b>interfaces réactives et dynamiques</b>, en plus d'avoir de l'expérience dans le développement de systèmes d'automatisation et de chatbots pour améliorer le service client. J'ai également de l'expérience dans le développement d'applications mobiles utilisant <b>Flutter et Dart</b>, avec l'intégration d'API. Ainsi que dans la création de projets complets, de la conception au déploiement, en utilisant des technologies telles que <b>Laravel, PHP, JavaScript, Java, HTML, CSS et MySQL</b>.
    <br><br>
    Ce qui me différencie, c'est mon profil hybride : je possède également de <b>vastes connaissances en systèmes informatiques et réseaux</b>, avec la capacité de déployer et d'administrer des environnements physiques et virtuels en participant activement à la résolution de tout type de problème pouvant survenir.
    <br><br>
    Je me considère comme une personne <b>proactive</b> : si je ne sais pas comment faire quelque chose, je fais des recherches jusqu'à ce que je trouve la solution, en m'engageant à 100 % dans l'objectif du projet. Je possède un <b>niveau certifié d'anglais B2</b> en plus de ma langue maternelle, l'espagnol.`,

    estudios: [
      {
        titulo: "Technicien Supérieur en Développement d'Applications Web",
        institucion: "I.E.S. José María Pérez Pulido",
        periodo: "2023 - 2026",
        descripcion: "Formation exhaustive au développement, à l'implantation et à la maintenance d'applications web. Apprentissage de la <b>programmation orientée objet avec Java</b> et de la conception de bases de données relationnelles (<b>MySQL</b>). Maîtrise du développement frontend en créant des interfaces modernes avec <b>HTML, CSS, JavaScript et des frameworks comme Vue, React, Bootstrap et Tailwind CSS</b>. Côté backend, développement d'API et d'une logique serveur robuste à l'aide de <b>PHP et Laravel</b>. Expérience dans le déploiement d'applications et l'utilisation de méthodologies agiles.",
      },
      {
        titulo: "Technicien Intermédiaire en Systèmes Micro-informatiques et Réseaux",
        institucion: "I.E.S. Villa de Mazo",
        periodo: "2020 - 2022",
        descripcion: "Formation technique spécialisée dans l'installation, la configuration et la maintenance de systèmes micro-informatiques, isolés ou en réseau. Acquisition de compétences dans l'administration de <b>systèmes d'exploitation (Windows et Linux)</b>, la gestion de <b>réseaux locaux</b>, le montage de matériel et le diagnostic de pannes. Mise en œuvre de protocoles de <b>sécurité informatique</b> et configuration de services réseau, établissant une base solide pour la résolution d'incidents d'infrastructure informatique.",
      },
    ],

    habilidades: [
      {
        categoria: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React, Vue.js, Tailwind CSS, Bootstrap"
      },
      {
        categoria: "Backend & Base de données",
        items: "PHP, Laravel, Java, MySQL, API REST"
      },
      {
        categoria: "Développement Mobile",
        items: "Flutter, Dart, Riverpod"
      },
      {
        categoria: "Systèmes et Outils",
        items: "Linux, Réseaux LAN/WAN, Git/GitHub, Firebase, N8N (Automatisation)"
      },
      {
        categoria: "Langues",
        items: `<img src="https://flagcdn.com/w20/es.png" alt="ES" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Espagnol (Natif) <span class="mx-2 text-slate-600">|</span> <img src="https://flagcdn.com/w20/us.png" alt="US" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Anglais (B2 Certifié)`
      }
    ],

    experienciaLaboral: [
      {
        puesto: "Stagiaire en Développement Web",
        empresa: "Fiordland Travels - Espagne",
        periodo: "Mars 2024 - Juin 2024",
        descripcion: "Développement et maintenance de systèmes d'automatisation à l'aide de N8N, en intégrant des chatbots conversationnels qui ont optimisé les temps de réponse. Collaboration étroite avec l'équipe pour identifier les goulots d'étranglement et appliquer des solutions technologiques qui ont considérablement amélioré l'expérience et le service client final.",
      },
      {
        puesto: "Stagiaire en Développement Mobile",
        empresa: "Bucares S.A - France",
        periodo: "Février 2026 - Juin 2026",
        descripcion: "Développement complet de l'application mobile 'Dealheure' (multiplateforme iOS et Android) à partir de zéro en utilisant le framework Flutter et Dart, en appliquant Riverpod pour la gestion de l'état. Implémentation de fonctions avancées de géolocalisation, gestion des autorisations de localisation et Google Maps grâce à l'utilisation d'API pour afficher des points d'intérêt. Gestion du backend et des bases de données avec Firebase, aboutissant au conditionnement et au déploiement réussis sur les boutiques d'applications officielles.",
      },
    ],

    proyectos: [
      {
        nombre: "Marchés de La Palma",
        tecnologias: "Blade, Laravel, PHP, Javascript, HTML, CSS, MySQL",
        url: "",
        descripcion: "Projet de développement web pour l'île de La Palma réalisé par toute ma classe comme projet final, dans le but de créer une plateforme permettant aux utilisateurs de consulter les marchés locaux, leurs emplacements, horaires et produits disponibles. En utilisant Laravel pour le backend et Blade pour les vues, une application a été développée pour faciliter l'interaction entre vendeurs et acheteurs, favorisant le commerce local. (Dépôt privé car en pourparlers pour sa vente à l'administration locale).",
        periodo: "2026",
      },
      {
        nombre: "BibliotecaOnline",
        tecnologias: "PHP",
        url: "https://github.com/AliHurtado01/BibliotecaOnline",
        descripcion: "C'est une bibliothèque de jeux vidéo en ligne où vous pouvez ajouter, supprimer, voter et consulter les jeux que vous avez ajoutés en utilisant AJAX et la communication avec la base de données, dans le cadre de la deuxième année de DAW.",
        periodo: "2025",
      },
      {
        nombre: "CriptoConverter",
        tecnologias: "JS, HTML, CSS",
        url: "https://github.com/AliHurtado01/CriptoConverter",
        descripcion: "Projet basé sur JS, utilisant des API pour recevoir les prix des cryptomonnaies et disposer d'une sorte de calculatrice pour les données de conversion avec les cryptomonnaies les plus célèbres.",
        periodo: "2025",
      },
      {
        nombre: "Projet LDN",
        tecnologias: "HTML, CSS",
        url: "https://github.com/AliHurtado01/ProyectoFinalLDN",
        descripcion: "Page sur tous les jeux Zelda, ainsi que leur histoire et leurs personnages. Réalisé comme projet de première année de DAW en utilisant HTML et CSS.",
        periodo: "2023",
      },
      {
        nombre: "Portfolio Personnel",
        tecnologias: "JS, HTML, Tailwind CSS",
        url: "https://github.com/AliHurtado01/personal-Portfolio",
        descripcion: "Création de mon portfolio personnel dans le cadre du projet 2DAW, en utilisant pour la première fois les technologies Tailwind.",
        periodo: "2025",
      },
      {
        nombre: "Projet 'Boutique de Super-héros'",
        tecnologias: "Vue, JavaScript, HTML, CSS",
        url: "https://github.com/AliHurtado01/tienda-superheroes",
        descripcion: "Création d'une boutique de super-héros utilisant Vue.js et d'autres technologies web comme JavaScript, HTML et CSS pour mon cycle de Développement d'Applications Web.",
        periodo: "2026",
      },
    ],
  },

  // ==========================================
  // ALEMÁN
  // ==========================================
  de: {
    nombre: "Ali Hurtado",
    titulo: "Full-Stack-Webentwickler",
    telefono: "+34 669 234 224",
    email: "alihurtado16@gmail.com",
    ubicacion: "La Palma, Spanien",
    linkedin: "ali-hurtado-a5a32a1b7",
    github: "AliHurtado01",
    cvUrl: "./docs/CV Ali Hurtado English.pdf",

    tabsLabels: {
      acercaDe: "👨‍💻 Über mich",
      experienciaLaboral: "🚀 Erfahrung",
      estudios: "🎓 Ausbildung",
      habilidades: "⚡ Fähigkeiten",
      proyectos: "💻 Projekte"
    },

    acercaDe: `Ich bin ein Webentwickler, der sich seit seiner Kindheit für Technologie begeistert und sich ständig in den neuesten Technologien und Entwicklungsmethoden weiterbildet. Ich habe mir eine solide Grundlage in der Entwicklung von Webanwendungen angeeignet und zeichne mich durch die Erstellung von <b>responsiven und dynamischen Schnittstellen</b> aus. Darüber hinaus verfüge ich über Erfahrung in der Entwicklung von Automatisierungssystemen und Chatbots zur Verbesserung des Kundenservice. Ich habe auch Erfahrung in der Entwicklung mobiler Anwendungen mit <b>Flutter und Dart</b> und der Integration von APIs. Ebenso in der Erstellung kompletter Projekte, vom Design bis zur Bereitstellung, unter Verwendung von Technologien wie <b>Laravel, PHP, JavaScript, Java, HTML, CSS und MySQL</b>.
    <br><br>
    Was mich unterscheidet, ist mein hybrides Profil: Ich verfüge außerdem über <b>umfangreiche Kenntnisse in Computersystemen und Netzwerken</b> und kann physische und virtuelle Umgebungen bereitstellen und verwalten, wobei ich mich aktiv an der Lösung aller auftretenden Probleme beteilige.
    <br><br>
    Ich betrachte mich als eine <b>proaktive</b> Person: Wenn ich nicht weiß, wie man etwas macht, recherchiere ich, bis ich es löse, und engagiere mich zu 100 % für das Projektziel. Neben meiner Muttersprache Spanisch verfüge ich über ein <b>zertifiziertes B2-Niveau in Englisch</b>.`,

    estudios: [
      {
        titulo: "Höherer Techniker für Webanwendungsentwicklung",
        institucion: "I.E.S. José María Pérez Pulido",
        periodo: "2023 - 2026",
        descripcion: "Umfassende Ausbildung in der Entwicklung, Implementierung und Wartung von Webanwendungen. Erlernen der <b>objektorientierten Programmierung mit Java</b> und des Entwurfs relationaler Datenbanken (<b>MySQL</b>). Beherrschung der Frontend-Entwicklung durch die Erstellung moderner Schnittstellen mit <b>HTML, CSS, JavaScript und Frameworks wie Vue, React, Bootstrap und Tailwind CSS</b>. Im Backend Entwicklung von APIs und robuster Serverlogik mit <b>PHP und Laravel</b>. Erfahrung in der Bereitstellung von Anwendungen und agilen Methoden.",
      },
      {
        titulo: "Mittlerer Techniker für Mikrocomputersysteme und Netzwerke",
        institucion: "I.E.S. Villa de Mazo",
        periodo: "2020 - 2022",
        descripcion: "Spezialisierte technische Ausbildung in der Installation, Konfiguration und Wartung von Mikrocomputersystemen, isoliert oder im Netzwerk. Erwerb von Fähigkeiten in der Verwaltung von <b>Betriebssystemen (Windows und Linux)</b>, <b>lokalem Netzwerkmanagement</b>, Hardwaremontage und Fehlerdiagnose. Implementierung von <b>IT-Sicherheitsprotokollen</b> und Konfiguration von Netzwerkdiensten, wodurch eine solide Grundlage für die Lösung von Vorfällen in IT-Infrastrukturen geschaffen wird.",
      },
    ],

    habilidades: [
      {
        categoria: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React, Vue.js, Tailwind CSS, Bootstrap"
      },
      {
        categoria: "Backend & Datenbank",
        items: "PHP, Laravel, Java, MySQL, REST APIs"
      },
      {
        categoria: "Mobile Entwicklung",
        items: "Flutter, Dart, Riverpod"
      },
      {
        categoria: "Systeme & Werkzeuge",
        items: "Linux, LAN/WAN-Netzwerke, Git/GitHub, Firebase, N8N (Automatisierung)"
      },
      {
        categoria: "Sprachen",
        items: `<img src="https://flagcdn.com/w20/es.png" alt="ES" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Spanisch (Muttersprache) <span class="mx-2 text-slate-600">|</span> <img src="https://flagcdn.com/w20/us.png" alt="US" class="inline-block w-5 h-auto mr-1 -mt-1 rounded-sm"> Englisch (B2 Zertifiziert)`
      }
    ],

    experienciaLaboral: [
      {
        puesto: "Webentwicklungs-Praktikant",
        empresa: "Fiordland Travels - Spanien",
        periodo: "März 2024 - Juni 2024",
        descripcion: "Entwicklung und Wartung von Automatisierungssystemen mit N8N, Integration von konversationellen Chatbots, die die Reaktionszeiten optimierten. Enge Zusammenarbeit mit dem Team, um Engpässe zu identifizieren und technologische Lösungen anzuwenden, die das Erlebnis und den Service für den Endkunden deutlich verbesserten.",
      },
      {
        puesto: "Mobile-Entwicklungs-Praktikant",
        empresa: "Bucares S.A - Frankreich",
        periodo: "Februar 2026 - Juni 2026",
        descripcion: "Umfassende Entwicklung der mobilen App 'Dealheure' (plattformübergreifend für iOS und Android) von Grund auf mit dem Flutter-Framework und Dart, unter Anwendung von Riverpod für das State Management. Implementierung erweiterter Geolokalisierungsfunktionen, Handhabung von Standortberechtigungen und Google Maps durch API-Nutzung, um Sehenswürdigkeiten anzuzeigen. Backend- und Datenbankverwaltung mit Firebase, gipfelnd in der erfolgreichen Paketierung und Bereitstellung in den offiziellen App Stores.",
      },
    ],

    proyectos: [
      {
        nombre: "Märkte von La Palma",
        tecnologias: "Blade, Laravel, PHP, Javascript, HTML, CSS, MySQL",
        url: "",
        descripcion: "Webentwicklungsprojekt für die Insel La Palma von meiner gesamten Klasse als Abschlussprojekt, mit dem Ziel, eine Plattform zu schaffen, die es Benutzern ermöglicht, lokale Märkte, deren Standorte, Öffnungszeiten und verfügbare Produkte zu überprüfen. Mit Laravel für das Backend und Blade für die Ansichten wurde eine Anwendung entwickelt, die die Interaktion zwischen Verkäufern und Käufern erleichtert und den lokalen Handel fördert. (Privates Repository, da Gespräche über den Verkauf an die lokale Verwaltung geführt werden).",
        periodo: "2026",
      },
      {
        nombre: "BibliotecaOnline",
        tecnologias: "PHP",
        url: "https://github.com/AliHurtado01/BibliotecaOnline",
        descripcion: "Es ist eine Online-Videospielbibliothek, in der Sie Spiele hinzufügen, löschen, abstimmen und von Ihnen hinzugefügte Spiele mit AJAX und Datenbankkommunikation im Rahmen des zweiten Jahres von DAW abrufen können.",
        periodo: "2025",
      },
      {
        nombre: "CriptoConverter",
        tecnologias: "JS, HTML, CSS",
        url: "https://github.com/AliHurtado01/CriptoConverter",
        descripcion: "JS-basiertes Projekt, das APIs verwendet, um Kryptowährungspreise zu erhalten und eine Art Rechner für Umrechnungsdaten mit den bekanntesten Kryptowährungen zu haben.",
        periodo: "2025",
      },
      {
        nombre: "Projekt LDN",
        tecnologias: "HTML, CSS",
        url: "https://github.com/AliHurtado01/ProyectoFinalLDN",
        descripcion: "Seite über alle Zelda-Spiele sowie deren Geschichte und Charaktere. Erstellt als DAW-Projekt im ersten Jahr mit HTML und CSS.",
        periodo: "2023",
      },
      {
        nombre: "Persönliches Portfolio",
        tecnologias: "JS, HTML, Tailwind CSS",
        url: "https://github.com/AliHurtado01/personal-Portfolio",
        descripcion: "Erstellung meines persönlichen Portfolios als Teil des 2DAW-Projekts, bei dem zum ersten Mal Tailwind-Technologien eingesetzt wurden.",
        periodo: "2025",
      },
      {
        nombre: "Projekt 'Superhelden-Shop'",
        tecnologias: "Vue, JavaScript, HTML, CSS",
        url: "https://github.com/AliHurtado01/tienda-superheroes",
        descripcion: "Erstellung eines Superhelden-Shops mit Vue.js und anderen Webtechnologien wie JavaScript, HTML und CSS für meinen Zyklus zur Entwicklung von Webanwendungen.",
        periodo: "2026",
      },
    ],
  }
};