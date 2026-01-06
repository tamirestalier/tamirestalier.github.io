// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
        behavior: 'smooth'
      });
    }
  });
});

// Ativar link ativo na navegação ao rolar
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Animação de rolagem suave para o topo
const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTop.classList.add('show');
  } else {
    scrollToTop.classList.remove('show');
  }
});

if (scrollToTop) {
  scrollToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Dados dos projetos
const projetos = [
  {
    id: 1,
    titulo: "EcoGuard",
    descricao: "Projeto multiplataforma que utiliza a FIRMS (Fire Information for Resource Management System) da NASA para monitoramento de áreas de risco de incêndios. Desenvolvido durante o NASA Space Apps Challenge, onde fui nomeada Global Nominee.",
    tecnologias: ["JavaScript", "React", "Node.js", "NASA API", "FIRMS"],
    imagem: "img/ecoguard.jpg",
    link: "https://www.spaceappschallenge.org/2023/find-a-team/ecoguardproject/",
    github: "https://github.com/tamirestalier/EcoGuardProject",
    video: "#"
  },
  {
    id: 2,
    titulo: "Meu Pet Sumiu ",
    descricao: "Plataforma web para criação de cartazes digitais de pets desaparecidos, facilitando o reencontro com seus donos. Desenvolvido com PHP (MVC), MySQL, HTML, CSS e JavaScript, unindo tecnologia e impacto social.",
    tecnologias: ["PHP", "MVC", "MySQL", "JavaScript", "Bootstrap"],
    imagem: "img/meupetsumiu.jpg",
    github: "https://github.com/tamirestalier/MeuPetSumiu",
    video: "#"
  },
  {
    id: 3,
    titulo: "FogoZero",
    descricao: "Sistema de prevenção e combate a incêndios florestais desenvolvido como projeto acadêmico. Utiliza sensores IoT para detecção precoce de focos de incêndio e alerta as autoridades competentes.",
    tecnologias: ["Python", "Arduino", "IoT", "Sensores", "Firebase"],
    imagem: "img/fogozero.jpg",
    linkedin: "https://www.linkedin.com/posts/tamires-talier-de-oliveira-73b050203_fogo-zero-turma-20242-pi-do-primeiro-activity-7272350374785667076-PIEI",
    github: "https://github.com/tamirestalier/fogozero-pi-main",
    video: "#"
  }
  // Adicione mais projetos conforme necessário
];

// Função para renderizar os projetos
function renderizarProjetos() {
  const projetosContainer = document.querySelector('.projects-grid');
  
  if (!projetosContainer) return;

  // Limpa o container
  projetosContainer.innerHTML = '';

  // Itera sobre os projetos e cria os elementos
  projetos.forEach(projeto => {
    // Cria as tags de tecnologia
    const tecnologiasHTML = projeto.tecnologias.map(tech => 
      `<span>${tech}</span>`
    ).join('\n');

    // Cria os links do projeto
    let linksHTML = '';
    if (projeto.link) {
      linksHTML += `
        <a href="${projeto.link}" target="_blank" class="project-link" title="Ver Projeto">
          <i class="fas fa-external-link-alt"></i>
        </a>`;
    }
    if (projeto.github) {
      linksHTML += `
        <a href="${projeto.github}" target="_blank" class="project-link" title="Ver no GitHub">
          <i class="fab fa-github"></i>
        </a>`;
    }
    if (projeto.linkedin) {
      linksHTML += `
        <a href="${projeto.linkedin}" target="_blank" class="project-link" title="Ver no LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>`;
    }

    // Cria o HTML do projeto
    const projetoHTML = `
      <div class="project-card ${projeto.id > 2 ? 'hidden' : ''}">
        <div class="project-image">
          ${projeto.imagem ? `<img src="${projeto.imagem}" alt="${projeto.titulo}">` : ''}
          <div class="project-overlay">
            <div class="project-links">
              ${linksHTML}
            </div>
          </div>
        </div>
        <div class="project-info">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <div class="project-tags">
            ${tecnologiasHTML}
          </div>
        </div>
      </div>
    `;

    projetosContainer.insertAdjacentHTML('beforeend', projetoHTML);
  });

  // Adiciona o evento do botão "Ver Mais"
  const verMaisBtn = document.getElementById('verMaisBtn');
  if (verMaisBtn) {
    // Mostra o botão apenas se houver projetos ocultos
    const hiddenProjects = document.querySelectorAll('.project-card.hidden').length;
    if (hiddenProjects === 0) {
      verMaisBtn.style.display = 'none';
    }

    verMaisBtn.addEventListener('click', () => {
      document.querySelectorAll('.project-card.hidden').forEach(card => {
        card.classList.remove('hidden');
      });
      verMaisBtn.style.display = 'none';
    });
  }
}

// Atualizar o ano no rodapé
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza os projetos
  renderizarProjetos();
  
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Adicionar classe de animação aos elementos
  const animateElements = document.querySelectorAll('.fade-in-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar o código para enviar o formulário
    // Por exemplo, usando Fetch API ou outra solução
    
    // Exemplo de feedback visual
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulando envio
    setTimeout(() => {
      submitButton.textContent = 'Mensagem Enviada!';
      contactForm.reset();
      
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 3000);
    }, 1500);
  });
}

// Efeito de digitação no cabeçalho
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', () => {
  const animatedText = document.querySelector('.animated-text');
  if (animatedText) {
    const text = animatedText.textContent;
    typeWriter(animatedText, text);
  }
});