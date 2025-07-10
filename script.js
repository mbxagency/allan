// Dados do resume (padrão)
let resumeData = {
    address: "Rua Francisco Derosso, 375, Curitiba, Paraná",
    phone: "(41) 9 9707-1091",
    email: "allansqueiroz@hotmail.com",
    linkedin: "https://www.linkedin.com/in/allansqueiroz/"
};

// Smooth scrolling para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-menu .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Modal functionality
    const modal = document.getElementById('resumeModal');
    const closeBtn = document.querySelector('.close');
    const resumeForm = document.getElementById('resumeForm');

    // Fechar modais
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Fechar modais clicando fora
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Submissão do formulário de endereço
    const addressForm = document.getElementById('addressForm');
    if (addressForm) {
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newAddress = document.getElementById('addressInput').value;
            
            // Gerar CV com novo endereço
            generateCVWithAddress(newAddress);
            
            // Fechar modal
            const addressModal = document.getElementById('addressModal');
            addressModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simular envio de email
            console.log('Mensagem enviada:', { name, email, subject, message });
            
            // Limpar formulário
            this.reset();
            
            // Mostrar mensagem de sucesso
            showNotification('Mensagem enviada com sucesso!', 'success');
        });
    }

    // Animações de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.timeline-item, .case-card, .highlight, .skill-category');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Animar barras de skills
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Contador animado para estatísticas
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/\d/g, '');
        
        // Só animar se for um número válido
        if (!isNaN(target)) {
            animateCounter(stat, 0, target, 2000, suffix);
        }
    });
});

// Função para atualizar informações de contato
function updateContactInfo() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const icon = item.querySelector('i');
        const text = item.querySelector('p');
        
        if (icon.classList.contains('fa-map-marker-alt')) {
            text.textContent = resumeData.address;
        } else if (icon.classList.contains('fa-phone')) {
            text.textContent = resumeData.phone;
        } else if (icon.classList.contains('fa-envelope')) {
            text.textContent = resumeData.email;
        } else if (icon.classList.contains('fa-linkedin')) {
            text.textContent = resumeData.linkedin;
        }
    });
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Função para animar contadores
function animateCounter(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Função para validar formulários
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    return isValid;
}

// Função para formatar telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    input.value = value;
}

// Adicionar formatação de telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhone(this);
        });
    });
});

// Função para abrir modal de resume
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Função para abrir modal de endereço
function openAddressModal() {
    const resumeModal = document.getElementById('resumeModal');
    const addressModal = document.getElementById('addressModal');
    
    // Fechar modal de resume
    resumeModal.style.display = 'none';
    
    // Abrir modal de endereço
    addressModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Limpar o campo de endereço
    document.getElementById('addressInput').value = '';
}

// Função para gerar CV padrão
function generateDefaultCV() {
    const cvUrl = `cv_template.html?address=${encodeURIComponent(resumeData.address)}`;
    window.open(cvUrl, '_blank');
    
    // Fechar modal
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    showNotification('CV aberto em nova aba!', 'success');
}



// Função para gerar CV com endereço personalizado
function generateCVWithAddress(address) {
    // Se nenhum endereço foi inserido, usar o endereço padrão
    const finalAddress = address.trim() || resumeData.address;
    
    // Abrir a página do currículo em uma nova aba com o endereço atualizado
    const cvUrl = `cv_template.html?address=${encodeURIComponent(finalAddress)}`;
    window.open(cvUrl, '_blank');
    
    showNotification('CV aberto em nova aba!', 'success');
}

// Função para download do CV padrão
function downloadDefaultCV() {
    const link = document.createElement('a');
    link.href = 'Allan_Queiroz_CV.pdf';
    link.download = 'Allan_Queiroz_CV.pdf';
    link.click();
    
    // Fechar modal
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    showNotification('Download do CV padrão iniciado!', 'success');
}

// Função para exportar resume como PDF (simulação)
function exportResume() {
    showNotification('Funcionalidade de exportação será implementada em breve!', 'info');
}

// Função para compartilhar perfil
function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'Allan Queiroz - Desenvolvedor Full Stack',
            text: 'Conheça o perfil profissional de Allan Queiroz',
            url: window.location.href
        });
    } else {
        // Fallback para copiar URL
        navigator.clipboard.writeText(window.location.href);
        showNotification('Link copiado para a área de transferência!', 'success');
    }
}

// Adicionar funcionalidade de tema escuro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Carregar preferência de tema
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Função para scroll suave para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adicionar botão de voltar ao topo
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
});

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .scroll-top-btn:hover {
        background: #1d4ed8 !important;
        transform: translateY(-2px);
    }
    
    .dark-mode {
        background: #1f2937;
        color: #f9fafb;
    }
    
    .dark-mode .header {
        background: rgba(31, 41, 55, 0.95) !important;
    }
    
    .dark-mode .nav-link {
        color: #f9fafb;
    }
    
    .dark-mode .section-title {
        color: #f9fafb;
    }
`;
document.head.appendChild(style); 