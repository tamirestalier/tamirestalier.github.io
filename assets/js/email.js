// Inicializa o EmailJS com seu User ID
(function() {
    // Substitua pelo seu User ID do EmailJS
    emailjs.init("SUA_PUBLIC_KEY_AQUI");
})();

// Função para enviar o e-mail
function sendEmail(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Mostrar loading no botão
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Parâmetros do e-mail - estes nomes devem corresponder ao seu template no EmailJS
    const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };
    
    console.log('Enviando e-mail com os seguintes parâmetros:', templateParams);
    
    // Envia o e-mail usando EmailJS
    // Substitua 'SEU_SERVICE_ID' e 'SEU_TEMPLATE_ID' pelos seus IDs reais
    emailjs.send('SEU_SERVICE_ID_AQUI', 'SEU_TEMPLATE_ID_AQUI', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            
            // Mostrar mensagem de sucesso
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'flex';
                
                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
            
            // Resetar formulário
            form.reset();
            
        }, function(error) {
            console.error('ERRO ao enviar e-mail:', {
                code: error.status,
                text: error.text,
                message: error.message,
                fullError: error
            });
            
            let errorMessage = 'Erro ao enviar a mensagem. ';
            
            if (error.status === 0) {
                errorMessage += 'Verifique sua conexão com a internet.';
            } else if (error.status >= 400 && error.status < 500) {
                errorMessage += 'Verifique os dados do formulário e tente novamente.';
            } else if (error.text) {
                errorMessage += error.text;
            }
            
            alert(errorMessage);
        })
        .finally(() => {
            // Restaurar botão
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        });
}

// Adiciona o event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, configurando formulário de contato...');
    const form = document.getElementById('contactForm');
    
    if (form) {
        console.log('Formulário encontrado, adicionando event listener...');
        form.addEventListener('submit', sendEmail);
    } else {
        console.error('Formulário não encontrado! Verifique se o ID do formulário está correto.');
    }
    
    // Verifica se o EmailJS foi carregado corretamente
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS não foi carregado corretamente!');
    } else {
        console.log('EmailJS carregado com sucesso!');
    }
});
