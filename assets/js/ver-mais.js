// ver-mais.js - Script para a funcionalidade "Ver Mais" dos projetos
document.addEventListener('DOMContentLoaded', function() {
    // Função para inicializar o botão Ver Mais
    function initVerMaisBtn() {
        const verMaisBtn = document.getElementById('verMaisBtn');
        const hiddenProjects = document.querySelectorAll('.project-card.hidden');
        
        // Se não houver botão ou projetos ocultos, não faz nada
        if (!verMaisBtn || hiddenProjects.length === 0) {
            if (verMaisBtn) verMaisBtn.style.display = 'none';
            return;
        }
        
        // Adiciona o evento de clique ao botão
        verMaisBtn.addEventListener('click', function() {
            // Mostra todos os projetos ocultos
            hiddenProjects.forEach(project => {
                project.classList.remove('hidden');
                project.classList.add('visible');
            });
            
            // Adiciona um pequeno atraso antes de ocultar o botão para garantir que a animação seja concluída
            setTimeout(() => {
                verMaisBtn.classList.add('hidden');
            }, 500);
        });
    }

    // Inicializa a funcionalidade
    initVerMaisBtn();
});
