document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostra o indicador de carregamento
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            // Verifica se o EmailJS está carregado
            if (typeof emailjs === 'undefined' || !emailjs.sendForm) {
                console.error('EmailJS não está carregado corretamente. Verifique se o script foi incluído antes deste arquivo.');
                showAlert('Erro: serviço de e-mail indisponível no momento. Por favor, tente novamente mais tarde.', 'error');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                return;
            }

            console.log('Iniciando envio do formulário...');
            
            // Verifica se o formulário está válido
            if (!contactForm.checkValidity()) {
                showAlert('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                return;
            }

            // Envia o e-mail
            emailjs.sendForm(
                'service_1qoml9f', 
                'template_1nn1mjc',  // Corrigido o template ID
                this
            )
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                contactForm.reset();
                showAlert('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            })
            .catch(function(error) {
                console.error('Erro ao enviar mensagem:', error);
                let errorMessage = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
                
                if (error.status === 0) {
                    errorMessage = 'Sem conexão com a internet. Verifique sua conexão e tente novamente.';
                } else if (error.status === 400) {
                    errorMessage = 'Dados do formulário inválidos. Verifique os campos e tente novamente.';
                } else if (error.status === 500) {
                    errorMessage = 'Erro no servidor. Por favor, tente novamente mais tarde.';
                }
                
                showAlert(errorMessage, 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        });
    }
    
    function showAlert(message, type = 'success') {
        // Remove alertas anteriores
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) existingAlert.remove();
        
        // Cria o alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = `form-alert alert-${type}`;
        alertDiv.textContent = message;
        
        // Adiciona o alerta antes do formulário
        const form = document.getElementById('contactForm');
        if (form && form.parentNode) {
            form.parentNode.insertBefore(alertDiv, form);
            
            // Remove o alerta após 5 segundos
            setTimeout(() => {
                alertDiv.style.opacity = '0';
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 300);
            }, 5000);
        }
    }
});