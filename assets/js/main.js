// main.js - Script principal do site
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const header = document.getElementById('header');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const contactForm = document.getElementById('contactForm');
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Variáveis globais
    let lastScroll = 0;
    const scrollOffset = 100;

    // Menu Mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Fechar menu ao clicar em um link
    navLinksItems.forEach(link => {
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

    // Header com efeito de scroll
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > scrollOffset) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScroll > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
        
        updateActiveNavLink();
        animateOnScroll();
        lastScroll = currentScroll;
    }

    // Atualiza o link ativo na navegação
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (navLink) {
                    navLinksItems.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Anima elementos quando entram na viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }

    // Efeito de digitação
    function initTypingEffect() {
        const typedText = document.querySelector('.typing-text');
        if (!typedText) return;
        
        const words = JSON.parse(typedText.getAttribute('data-words'));
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            
            typedText.textContent = currentChar;
            
            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                typingSpeed = 100;
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                typingSpeed = 50;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500;
            } else if (charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1500;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(type, 1000);
    }

    // Efeito de hover nos cartões de projeto
    function initProjectHover() {
        projectCards.forEach(card => {
            const overlay = card.querySelector('.project-overlay');
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const tags = card.querySelectorAll('.project-tags span');
            
            card.addEventListener('mouseenter', () => {
                if (overlay) overlay.style.opacity = '1';
                if (title) title.style.transform = 'translateY(0)';
                if (description) description.style.transform = 'translateY(0)';
                if (tags) {
                    tags.forEach((tag, index) => {
                        tag.style.transform = 'translateY(0)';
                        tag.style.transitionDelay = `${index * 0.1}s`;
                    });
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (overlay) overlay.style.opacity = '0';
                if (title) title.style.transform = 'translateY(20px)';
                if (description) description.style.transform = 'translateY(20px)';
                if (tags) {
                    tags.forEach(tag => {
                        tag.style.transform = 'translateY(20px)';
                        tag.style.transitionDelay = '0s';
                    });
                }
            });
        });
    }

    // Botão de voltar ao topo
    function initScrollToTop() {
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Função para inicializar o botão Ver Mais
    function initVerMaisBtn() {
        const verMaisBtn = document.getElementById('verMaisBtn');
        const hiddenProjects = document.querySelectorAll('.project-card.hidden');
        
        if (!verMaisBtn || hiddenProjects.length === 0) {
            if (verMaisBtn) verMaisBtn.style.display = 'none';
            return;
        }
        
        verMaisBtn.addEventListener('click', function() {
            hiddenProjects.forEach(project => {
                project.classList.remove('hidden');
                project.classList.add('visible');
            });
            
            setTimeout(() => {
                verMaisBtn.style.display = 'none';
            }, 500);
        });
    }

    // Inicialização do Swiper
    function initSwiper() {
        if (document.querySelector('.swiper')) {
            const swiper = new Swiper('.swiper', {
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }
            });
        }
    }

    // Função para inicializar todos os componentes
    function init() {
        initScrollToTop();
        initVerMaisBtn();
        initSwiper();
        initTypingEffect();
        initProjectHover();
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        updateActiveNavLink();
        animateOnScroll();
    }

    // Inicializa tudo quando o DOM estiver carregado
    init();

    // Adiciona classe de carregamento ao body para transições suaves
    document.body.classList.add('loaded');

    // Remove a classe de carregamento após um curto atraso
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 500);
});