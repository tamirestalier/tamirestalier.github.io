// Dados dos projetos
const projectsData = [
    {
        id: 1,
        title: "EcoGuard",
        description: "Projeto multiplataforma que utiliza a FIRMS (Fire Information for Resource Management System) da NASA para monitoramento de áreas de risco de incêndios. Desenvolvido durante o NASA Space Apps Challenge, onde fui nomeada Global Nominee.",
        image: "img/Ecoguard.png",
        links: [
            { icon: "external-link-alt", url: "https://www.spaceappschallenge.org/2023/find-a-team/ecoguardproject/", title: "Ver Projeto no NASA Space Apps" },
<<<<<<< HEAD
=======
            { icon: "youtube", url: "https://www.youtube.com/watch?v=3b8vmHEwhto", title: "Ver Vídeo no YouTube" },
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["JavaScript", "React", "Node.js", "NASA API", "FIRMS"],
        visible: true
    },
    {
        id: 2,
<<<<<<< HEAD
        title: "Meu Pet Sumiu",
        description: "Plataforma web para criação de cartazes digitais de pets desaparecidos, facilitando o reencontro com seus donos. Desenvolvido com PHP (MVC), MySQL, HTML, CSS e JavaScript, unindo tecnologia e impacto social.",
        image: "img/meupetsumiu.png",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto" },
            { icon: "github", url: "https://github.com/tamirestalier/MeuPetSumiu", title: "Repositório no GitHub" }
=======
        title: "Meu Pet Sumiu 🐾",
        description: "Plataforma web para criação de cartazes digitais de pets desaparecidos, facilitando o reencontro com seus donos. Desenvolvido com PHP (MVC), MySQL, HTML, CSS e JavaScript, unindo tecnologia e impacto social.",
        image: "img/fogozero.png",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto (em breve)" },
            { icon: "youtube", url: "https://www.youtube.com/watch?v=yuAVFgTNxfA", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        ],
        tags: ["PHP", "MVC", "MySQL", "JavaScript", "Bootstrap"],
        visible: true
    },
    {
        id: 3,
        title: "FogoZero",
        description: "Sistema de prevenção e combate a incêndios florestais desenvolvido como projeto acadêmico. Utiliza sensores IoT para detecção precoce de focos de incêndio e alerta as autoridades competentes.",
        image: "img/fogozero.png",
        links: [
            { icon: "linkedin", url: "https://www.linkedin.com/posts/tamires-talier-de-oliveira-73b050203_fogo-zero-turma-20242-pi-do-primeiro-activity-7272350374785667076-PIEI", title: "Ver Post no LinkedIn" },
<<<<<<< HEAD
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["PHP", "Inframe", "IoT", "Sensores", "Firebase"],
=======
            { icon: "youtube", url: "https://www.youtube.com/watch?v=oEBXpKh4ldg", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["Python", "Arduino", "IoT", "Sensores", "Firebase"],
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        visible: false
    },
    {
        id: 4,
        title: "Sistema de Agendamento",
        description: "Sistema completo para gerenciamento de consultas e pacientes em clínicas de Microfisioterapia. Inclui agendamento online, prontuário eletrônico e relatórios gerenciais.",
<<<<<<< HEAD
        image: "img/sistemaatendimento.png",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto" },
            { icon: "github", url: "https://github.com/tamirestalier/sistema-microfisioterapia.git", title: "Repositório no GitHub" }
=======
        image: "img/placeholder.jpg",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto (em breve)" },
            { icon: "youtube", url: "https://www.youtube.com/watch?v=dLdqgrTpWE8", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        ],
        tags: ["C#", "ASP.NET MVC", "SQL Server", "Entity Framework", "Bootstrap"],
        visible: false
    },
    {
        id: 5,
        title: "Site Voluntário - ABEMA",
        description: "Site institucional desenvolvido para a Associação de Bem-Estar de Menores Africanos (ABEMA). Design responsivo, acessível e otimizado para motores de busca.",
<<<<<<< HEAD
        image: "img/abema.png",
=======
        image: "img/abema-site.png",
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        links: [
            { icon: "external-link-alt", url: "https://spontaneous-nasturtium-da75b8.netlify.app/", title: "Acessar Site" },
            { icon: "github", url: "#", title: "Ver Código" }
        ],
        tags: ["HTML5", "CSS3", "JavaScript", "Responsivo", "SEO"],
        visible: true
    }
];

// Função para renderizar os projetos
function renderProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    const projectTemplate = document.getElementById('project-template');

<<<<<<< HEAD
    if (!projectsContainer || !projectTemplate) {
        console.error('Elementos necessários não encontrados no DOM');
        return;
    }
=======
    if (!projectsContainer || !projectTemplate) return;
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a

    projectsContainer.innerHTML = '';

    const visibleProjects = projectsData.filter(project => project.visible);
<<<<<<< HEAD
    console.log(`Renderizando ${visibleProjects.length} projetos visíveis`);

    // Adiciona animação de fade in
    projectsContainer.style.opacity = '0';
    setTimeout(() => {
        projectsContainer.style.transition = 'opacity 0.5s ease-in-out';
        projectsContainer.style.opacity = '1';
    }, 100);
=======
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a

    visibleProjects.forEach(project => {
        const projectCard = projectTemplate.content.cloneNode(true).firstElementChild;
        
<<<<<<< HEAD
        // Preenche os elementos do card
=======
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        const projectImage = projectCard.querySelector('.project-image');
        const titleElement = projectCard.querySelector('h3');
        const descriptionElement = projectCard.querySelector('p');
        const tagsContainer = projectCard.querySelector('.project-tags');
        const projectLinks = projectCard.querySelector('.project-links');

<<<<<<< HEAD
        // Configura a imagem com loading state
        if (project.image) {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'image-wrapper';
            
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title;
            img.className = 'project-image-preview loading';
            
            img.onload = function() {
                this.classList.remove('loading');
            };
            
            img.onerror = function() {
                imgWrapper.innerHTML = `
                    <div class="project-placeholder">
                        <i class="fas fa-image"></i>
                        <p>Imagem não disponível</p>
                    </div>
                `;
            };
            
            projectImage.innerHTML = '';
            imgWrapper.appendChild(img);
            projectImage.appendChild(imgWrapper);
        }

        // Configura os links
        if (project.links && project.links.length > 0) {
            projectLinks.innerHTML = '';
            
            // Verifica se existem links válidos
            const validLinks = project.links.filter(link => link.url && link.url !== '#');
            
            if (validLinks.length === 0) {
                const noLinksMsg = document.createElement('p');
                noLinksMsg.className = 'no-links';
                noLinksMsg.textContent = 'Links em breve';
                projectLinks.appendChild(noLinksMsg);
            } else {
                validLinks.forEach(link => {
                    const linkElement = document.createElement('a');
                    linkElement.href = link.url;
                    linkElement.className = 'project-link';
                    linkElement.title = link.title;
                    linkElement.target = '_blank';
                    linkElement.rel = 'noopener noreferrer';
                    
                    let iconClass = 'fas fa-external-link-alt';
                    if (link.icon === 'github') iconClass = 'fab fa-github';
                    else if (link.icon === 'youtube') iconClass = 'fab fa-youtube';
                    else if (link.icon === 'linkedin' || link.icon === 'linkedin-in') iconClass = 'fab fa-linkedin-in';
                    
                    linkElement.innerHTML = `<i class="${iconClass}"></i>`;
                    projectLinks.appendChild(linkElement);
                });
            }
        }

        // Preenche título e descrição
        titleElement.textContent = project.title;
        descriptionElement.textContent = project.description;

        // Adiciona as tags
        if (project.tags && project.tags.length > 0) {
            tagsContainer.innerHTML = '';
=======
        if (project.image) {
            projectImage.insertAdjacentHTML('afterbegin', `
                <img src="${project.image}" alt="${project.title}" loading="lazy" class="project-image-preview">
            `);
        } else {
            projectImage.insertAdjacentHTML('afterbegin', `
                <div class="project-placeholder">
                    <i class="fas fa-image"></i>
                    <p>Imagem não disponível</p>
                </div>
            `);
        }

        if (project.links && project.links.length > 0) {
            projectLinks.innerHTML = '';
            
            project.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.className = 'project-link';
                linkElement.title = link.title;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                
                let iconClass = '';
                if (link.icon === 'github') iconClass = 'fab fa-github';
                else if (link.icon === 'youtube') iconClass = 'fab fa-youtube';
                else if (link.icon === 'linkedin') iconClass = 'fab fa-linkedin-in';
                else iconClass = 'fas fa-external-link-alt';
                
                linkElement.innerHTML = `<i class="${iconClass}"></i>`;
                projectLinks.appendChild(linkElement);
            });
        }
        
        titleElement.textContent = project.title;
        descriptionElement.textContent = project.description;
        
        if (project.tags && project.tags.length > 0) {
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
        }
        
        projectsContainer.appendChild(projectCard);
    });
    
    updateVerMaisButton();
}

<<<<<<< HEAD
// Inicializa o botão "Ver Mais"
function initVerMaisBtn() {
    const verMaisBtn = document.getElementById('verMaisBtn');
    
    if (!verMaisBtn) {
        console.warn('Botão "Ver Mais" não encontrado');
        return;
    }
    
    verMaisBtn.addEventListener('click', () => {
        // Efeito de scroll suave ao mostrar mais projetos
        const projectsSection = document.getElementById('projetos');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Marca todos os projetos como visíveis
        projectsData.forEach(project => {
            project.visible = true;
        });
=======
function initVerMaisBtn() {
    const verMaisBtn = document.getElementById('verMaisBtn');
    
    if (!verMaisBtn) return;
    
    verMaisBtn.addEventListener('click', () => {
        projectsData.forEach(project => {
            project.visible = true;
        });
        
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
        renderProjects();
    });
    
    updateVerMaisButton();
}

<<<<<<< HEAD
// Atualiza a visibilidade do botão "Ver Mais"
=======
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
function updateVerMaisButton() {
    const verMaisBtn = document.getElementById('verMaisBtn');
    if (!verMaisBtn) return;
    
    const hasHiddenProjects = projectsData.some(project => !project.visible);
    verMaisBtn.style.display = hasHiddenProjects ? 'inline-block' : 'none';
}

<<<<<<< HEAD
// Inicializa tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe de carregamento ao body
    document.body.classList.add('js-loading');
    
    // Aguarda o carregamento completo da página
    window.addEventListener('load', () => {
        document.body.classList.remove('js-loading');
        renderProjects();
        initVerMaisBtn();
    });
=======
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initVerMaisBtn();
>>>>>>> 7db13d3475de29c537fdcd88dcc530eec94c050a
});