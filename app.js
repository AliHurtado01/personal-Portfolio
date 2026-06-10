let currentLang = localStorage.getItem('portfolioLang') || 'es';

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const dynamicContent = document.getElementById("dynamic-content");
    const tabsContainer = document.getElementById("tabs-container");

    const langButton = document.getElementById('lang-menu-button');
    const langMenu = document.getElementById('lang-dropdown-menu');
    const currentLangDisplay = document.getElementById('current-lang-display');

    let activeTab = "acercaDe";

    // Textos de interfaz y HTML de las Banderas (Imágenes en lugar de Emojis)
    const uiTexts = {
        es: { cvBtn: "📥 Descargar CV", repoBtn: "Ver Repositorio", flagHtml: `<img src="https://flagcdn.com/w20/es.png" alt="ES" class="w-5 h-auto mr-2 rounded-sm"> ES` },
        en: { cvBtn: "📥 Download CV", repoBtn: "View Repository", flagHtml: `<img src="https://flagcdn.com/w20/us.png" alt="US" class="w-5 h-auto mr-2 rounded-sm"> EN` },
        fr: { cvBtn: "📥 Télécharger le CV", repoBtn: "Voir le dépôt", flagHtml: `<img src="https://flagcdn.com/w20/fr.png" alt="FR" class="w-5 h-auto mr-2 rounded-sm"> FR` },
        de: { cvBtn: "📥 Lebenslauf Download", repoBtn: "Repository ansehen", flagHtml: `<img src="https://flagcdn.com/w20/de.png" alt="DE" class="w-5 h-auto mr-2 rounded-sm"> DE` }
    };

    // LÓGICA DEL MENÚ DESPLEGABLE
    langButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
        langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!langButton.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.add('hidden');
        }
    });

    window.changeLanguage = function (lang) {
        currentLang = lang;
        localStorage.setItem('portfolioLang', lang); 
        document.documentElement.lang = lang; 
        
        // Inyectamos el HTML de la imagen en lugar de texto plano
        if (currentLangDisplay) {
            currentLangDisplay.innerHTML = uiTexts[lang].flagHtml;
        }

        if (langMenu) {
            langMenu.classList.add('hidden');
        }

        renderSidebar();
        renderTabs();
        renderDynamicContent(activeTab);
    };

    // 1. Renderizar Sidebar
    function renderSidebar() {
        const data = misDatos[currentLang]; 
        const ui = uiTexts[currentLang];   

        sidebar.innerHTML = `
            <div class="flex flex-col items-center">
                <div class="w-32 h-32 p-1 rounded-full mb-4 bg-gradient-to-tr from-tech-cyan to-tech-accent">
                    <img src="./docs/photo.jpeg" alt="${data.nombre}" class="w-full h-full object-cover rounded-full border-4 border-dark-card bg-slate-600">
                </div>
                
                <h1 class="text-3xl font-bold text-white tracking-tight text-center">${data.nombre}</h1>
                
                <span class="mt-2 px-3 py-1 rounded-full bg-slate-700 text-tech-cyan text-sm font-medium border border-slate-600 text-center">
                    ${data.titulo}
                </span>
            </div>

            <div class="space-y-4 pt-6 mt-6 border-t border-slate-700 w-full">
                <div class="flex items-center group">
                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-tech-accent mr-3 group-hover:bg-tech-accent group-hover:text-white transition">📱</span> 
                    <span class="text-text-secondary text-sm">${data.telefono}</span>
                </div>
                <div class="flex items-center group">
                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-tech-accent mr-3 group-hover:bg-tech-accent group-hover:text-white transition">📧</span> 
                    <span class="text-text-secondary text-sm break-all">${data.email}</span>
                </div>
                <div class="flex items-center group">
                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-tech-accent mr-3 group-hover:bg-tech-accent group-hover:text-white transition">📍</span> 
                    <span class="text-text-secondary text-sm">${data.ubicacion}</span>
                </div>

                <div class="flex justify-center gap-4 py-4">
                    <a href="https://linkedin.com/in/${data.linkedin}" target="_blank" class="p-2 rounded-lg bg-slate-700 text-gray-400 hover:bg-tech-accent hover:text-white transition shadow-lg">
                       LinkedIn
                    </a>
                    <a href="https://github.com/${data.github}" target="_blank" class="p-2 rounded-lg bg-slate-700 text-gray-400 hover:bg-tech-cyan hover:text-white transition shadow-lg">
                       GitHub
                    </a>
                </div>
            </div>

            <a href="${data.cvUrl}" download class="mt-4 w-full block text-center bg-gradient-to-r from-tech-accent to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg shadow-blue-500/20 transform hover:-translate-y-1">
                ${ui.cvBtn}
            </a>
        `;
    }

    // 2. Configuración de Pestañas
    function renderTabs() {
        const labels = misDatos[currentLang].tabsLabels;
        
        const tabsConfig = [
            { key: "acercaDe", label: labels.acercaDe },
            { key: "experienciaLaboral", label: labels.experienciaLaboral },
            { key: "estudios", label: labels.estudios },
            { key: "proyectos", label: labels.proyectos },
        ];

        tabsContainer.innerHTML = tabsConfig
            .map((tab) => {
                const isActive = tab.key === activeTab;
                const activeClass = "bg-tech-accent text-white shadow-lg shadow-blue-500/30";
                const inactiveClass = "bg-dark-bg text-text-secondary hover:bg-dark-hover hover:text-white";

                return `
            <button
                data-tab="${tab.key}"
                class="tab-btn py-2 px-5 rounded-lg font-medium transition-all duration-300 text-sm md:text-base flex-grow md:flex-grow-0 ${isActive ? activeClass : inactiveClass}"
            >
                ${tab.label}
            </button>
            `;
            })
            .join("");

        document.querySelectorAll(".tab-btn").forEach((button) => {
            button.addEventListener("click", (e) => {
                activeTab = e.target.dataset.tab;
                renderTabs();
                renderDynamicContent(activeTab);
            });
        });
    }

    // 3. Renderizar Contenido
    function renderDynamicContent(key) {
        const data = misDatos[currentLang];
        const labels = data.tabsLabels;
        const ui = uiTexts[currentLang];

        dynamicContent.classList.remove("opacity-0", "translate-y-2");
        dynamicContent.classList.add("transition", "duration-500", "opacity-100", "translate-y-0");

        let contentHTML = "";

        if (key === "acercaDe") {
            const sectionTitle = labels.acercaDe.replace('👨‍💻 ', '');
            contentHTML = `
                <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                    <span class="w-2 h-8 bg-tech-cyan mr-3 rounded-full"></span>
                    ${sectionTitle}
                </h2>
                <div class="bg-dark-bg p-6 rounded-xl border border-slate-700 text-text-secondary leading-loose">
                    ${data.acercaDe}
                </div>
            `;
        } else {
            const items = data[key];
            let sectionTitle = labels[key];
            
            if(key === "experienciaLaboral") sectionTitle = sectionTitle.replace('🚀 ', '');
            if(key === "estudios") sectionTitle = sectionTitle.replace('🎓 ', '');
            if(key === "proyectos") sectionTitle = sectionTitle.replace('💻 ', '');

            contentHTML = `
                <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                    <span class="w-2 h-8 bg-tech-cyan mr-3 rounded-full"></span>
                    ${sectionTitle}
                </h2>
                <div class="grid gap-6">`;

            items.forEach((item) => {
                contentHTML += `
                    <div class="group relative bg-dark-bg p-5 rounded-xl border border-slate-700 hover:border-tech-accent transition duration-300">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-white group-hover:text-tech-cyan transition">
                                    ${item.titulo || item.puesto || item.nombre}
                                </h3>
                                <p class="text-tech-accent font-medium text-sm mt-1">
                                    ${item.institucion || item.empresa || item.tecnologias}
                                </p>
                            </div>
                            <span class="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded mt-2 md:mt-0 border border-slate-700">
                                ${item.periodo || "Code"}
                            </span>
                        </div>
                        
                        <p class="text-text-secondary text-sm mt-3 leading-relaxed">
                            ${item.descripcion}
                        </p>

                        ${item.url
                    ? `
                            <div class="mt-4 pt-4 border-t border-slate-800 flex justify-end">
                                <a href="${item.url}" target="_blank" class="text-sm flex items-center text-white hover:text-tech-cyan transition">
                                    ${ui.repoBtn} <span class="ml-2">→</span>
                                </a>
                            </div>
                        `
                    : ""
                }
                    </div>
                `;
            });

            contentHTML += `</div>`;
        }

        dynamicContent.innerHTML = contentHTML;
    }

    window.changeLanguage(currentLang);
});