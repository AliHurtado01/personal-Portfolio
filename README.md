# **👨‍💻 Portfolio Personal \- Ali Hurtado**

Un portfolio web personal desarrollado con enfoque **Mobile-First**, utilizando **JavaScript Vanilla** para la renderización dinámica y **Tailwind CSS** para un diseño moderno y adaptable.

## **🚀 Características Principales**

Este proyecto cumple con los criterios de Desarrollo Web en Entorno Cliente y Diseño de Interfaces, implementando:

* **🎨 Diseño Responsive & Mobile-First:** Maquetación fluida utilizando **Flexbox** y **Grid** de Tailwind CSS.  
* **🌗 Selector de Tema (Dark/Light):** \- **Modo Oscuro:** Paleta profesional en tonos *Slate* y *Blue Tech*.  
  * **Modo Claro:** Paleta cálida en tonos *Beige*, *Café* y *Ámbar* para mejorar la legibilidad diurna.  
  * Persistencia de preferencia de usuario mediante localStorage.  
* **⚡ Renderizado Dinámico:** Todo el contenido (perfil, experiencia, proyectos) se inyecta mediante **JavaScript** a partir de una estructura de datos JSON (Objetos y Arrays).  
* **📂 Gestión de Archivos:** Descarga directa de CV y visualización optimizada de imágenes.  
* **✨ Micro-interacciones:** Efectos de *hover*, transiciones suaves y estados activos en la navegación.

## **🛠️ Tecnologías Utilizadas**

## **📂 Estructura del Proyecto**

El proyecto mantiene una separación clara entre estructura, lógica y datos:

/  
├── 📄 index.html      \# Estructura base y configuración de Tailwind  
├── 📄 app.js          \# Lógica de renderizado, eventos y control del tema  
├── 📄 data.js         \# "Base de datos" local con toda la info del portfolio  
├── 📄 README.md       \# Documentación del proyecto  
└── 📁 docs/           \# Archivos estáticos  
    ├── 🖼️ photo.jpeg  \# Foto de perfil  
    └── 📄 cv.pdf      \# Archivo de Currículum para descargar

## **⚙️ Instalación y Uso**

Este proyecto no requiere dependencias de Node.js ni procesos de compilación complejos. Funciona directamente en el navegador.

1. **Clonar el repositorio:**  
   git clone \[https://github.com/AliHurtado01/personal-portfolio.git\](https://github.com/AliHurtado01/personal-portfolio.git)

2. Abrir el proyecto:  
   Navega a la carpeta y abre el archivo index.html en tu navegador favorito.  
   Recomendado: Usar la extensión "Live Server" en VS Code para ver los cambios en tiempo real.

## **🔧 Personalización**

El proyecto está diseñado para ser fácilmente editable sin tocar el HTML ni la lógica compleja.

### **1\. Cambiar la Información**

Edita el archivo data.js. Allí encontrarás el objeto misDatos:

const misDatos \= {  
  nombre: "Tu Nombre",  
  titulo: "Tu Título",  
  // ... edita los arrays de estudios, experiencia y proyectos  
};

### **2\. Cambiar los Colores**

Los colores están definidos en la configuración de Tailwind dentro del \<head\> de index.html:

* Modifica dark-bg, tech-accent, etc., para el modo oscuro.  
* Modifica light-bg, light-accent, etc., para el modo claro.

## **📬 Contacto**

**Ali Hurtado** \- Desarrollador Web Full Stack & SMR

* 🐱 GitHub: [AliHurtado01](https://www.google.com/search?q=https://github.com/AliHurtado01)  
* 💼 LinkedIn: [Ali Hurtado](https://www.google.com/search?q=https://linkedin.com/in/ali-hurtado-a5a32a1b7)  
* 📧 Email: alihurtado16@gmail.com