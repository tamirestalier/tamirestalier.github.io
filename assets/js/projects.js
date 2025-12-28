// Dados dos projetos
const projectsData = [
    {
        id: 1,
        title: "EcoGuard",
        description: "Projeto multiplataforma que utiliza a FIRMS (Fire Information for Resource Management System) da NASA para monitoramento de áreas de risco de incêndios. Desenvolvido durante o NASA Space Apps Challenge, onde fui nomeada Global Nominee.",
        image: "img/Ecoguard.png",
        links: [
            { icon: "external-link-alt", url: "https://www.spaceappschallenge.org/2023/find-a-team/ecoguardproject/", title: "Ver Projeto no NASA Space Apps" },
            { icon: "youtube", url: "https://www.youtube.com/watch?v=3b8vmHEwhto", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["JavaScript", "React", "Node.js", "NASA API", "FIRMS"],
        visible: true
    },
    {
        id: 2,
        title: "Meu Pet Sumiu 🐾",
        description: "Plataforma web para criação de cartazes digitais de pets desaparecidos, facilitando o reencontro com seus donos. Desenvolvido com PHP (MVC), MySQL, HTML, CSS e JavaScript, unindo tecnologia e impacto social.",
        image: "img/fogozero.png",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto (em breve)" },
            { icon: "youtube", url: "https://www.youtube.com/watch?v=yuAVFgTNxfA", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
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
            { icon: "youtube", url: "https://www.youtube.com/watch?v=oEBXpKh4ldg", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["Python", "Arduino", "IoT", "Sensores", "Firebase"],
        visible: false
    },
    {
        id: 4,
        title: "Sistema de Agendamento",
        description: "Sistema completo para gerenciamento de consultas e pacientes em clínicas de Microfisioterapia. Inclui agendamento online, prontuário eletrônico e relatórios gerenciais.",
        image: "img/placeholder.jpg",
        links: [
            { icon: "external-link-alt", url: "#", title: "Ver Projeto (em breve)" },
            { icon: "youtube", url: "https://www.youtube.com/watch?v=dLdqgrTpWE8", title: "Ver Vídeo no YouTube" },
            { icon: "github", url: "#", title: "Repositório no GitHub (em breve)" }
        ],
        tags: ["C#", "ASP.NET MVC", "SQL Server", "Entity Framework", "Bootstrap"],
        visible: false
    },
    {
        id: 5,
        title: "Site Voluntário - ABEMA",
        description: "Site institucional desenvolvido para a Associação de Bem-Estar de Menores Africanos (ABEMA). Design responsivo, acessível e otimizado para motores de busca.",
        image: "img/abema-site.png",
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

    if (!projectsContainer || !projectTemplate) return;

    projectsContainer.innerHTML = '';

    const visibleProjects = projectsData.filter(project => project.visible);

    visibleProjects.forEach(project => {
        const projectCard = projectTemplate.content.cloneNode(true).firstElementChild;
        
        const projectImage = projectCard.querySelector('.project-image');
        const titleElement = projectCard.querySelector('h3');
        const descriptionElement = projectCard.querySelector('p');
        const tagsContainer = projectCard.querySelector('.project-tags');
        const projectLinks = projectCard.querySelector('.project-links');

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

function initVerMaisBtn() {
    const verMaisBtn = document.getElementById('verMaisBtn');
    
    if (!verMaisBtn) return;
    
    verMaisBtn.addEventListener('click', () => {
        projectsData.forEach(project => {
            project.visible = true;
        });
        
        renderProjects();
    });
    
    updateVerMaisButton();
}

function updateVerMaisButton() {
    const verMaisBtn = document.getElementById('verMaisBtn');
    if (!verMaisBtn) return;
    
    const hasHiddenProjects = projectsData.some(project => !project.visible);
    verMaisBtn.style.display = hasHiddenProjects ? 'inline-block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initVerMaisBtn();
});