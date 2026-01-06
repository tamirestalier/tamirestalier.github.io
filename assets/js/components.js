// Função para carregar componentes
async function loadComponents() {
    try {
        // Carrega os componentes
        const components = [
            { id: 'header', path: 'components/header.html' },
            { id: 'hero', path: 'components/hero.html' },
            { id: 'sobre', path: 'components/sobre.html' },
            { id: 'projetos', path: 'components/projetos.html' },
            { id: 'contato', path: 'components/contato.html' },
            { id: 'footer', path: 'components/footer.html' }
        ];

        // Carrega cada componente
        for (const component of components) {
            const response = await fetch(component.path);
            const html = await response.text();
            
            // Insere o HTML no local apropriado
            if (component.id === 'header') {
                document.body.insertAdjacentHTML('afterbegin', html);
            } else if (component.id === 'footer') {
                document.body.insertAdjacentHTML('beforeend', html);
            } else {
                const main = document.querySelector('main') || document.body;
                main.insertAdjacentHTML('beforeend', html);
            }
        }

        // Atualiza o ano no rodapé
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Inicializa os componentes
        initializeComponents();
        
    } catch (error) {
        console.error('Erro ao carregar componentes:', error);
    }
}

// Função para inicializar componentes após o carregamento
function initializeComponents() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Inicializa a funcionalidade "Ver Mais"
    initVerMaisBtn();
    
    // Inicializa o formulário de contato
    initContactForm();
}

// Carrega os componentes quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadComponents);
