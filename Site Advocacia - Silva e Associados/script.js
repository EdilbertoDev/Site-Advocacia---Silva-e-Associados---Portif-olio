// Funções para animações ao rolar
        document.addEventListener('DOMContentLoaded', function() {
            // Animação para as áreas de atuação
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, 200 * index);
            });
            
            // Animação para a equipe
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach((member, index) => {
                setTimeout(() => {
                    member.classList.add('animate');
                }, 300 * index);
            });
            
            // Botão WhatsApp flutuante
            const whatsappFloat = document.getElementById('whatsappFloat');
            const whatsappContacts = document.getElementById('whatsappContacts');
            const closeContacts = document.getElementById('closeContacts');
            
            whatsappFloat.addEventListener('click', function() {
                whatsappContacts.classList.toggle('active');
                whatsappFloat.classList.toggle('active');
            });
            
            closeContacts.addEventListener('click', function() {
                whatsappContacts.classList.remove('active');
                whatsappFloat.classList.remove('active');
            });
            
            // Fechar a caixa de contatos ao clicar fora
            document.addEventListener('click', function(event) {
                if (!whatsappContacts.contains(event.target)) {
                    if (event.target !== whatsappFloat && !whatsappFloat.contains(event.target)) {
                        whatsappContacts.classList.remove('active');
                        whatsappFloat.classList.remove('active');
                    }
                }
            });
            
            // Botão de voltar ao topo
            const backToTop = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            });
            
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Scroll suave para links internos
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Animação ao rolar para as seções
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
            
            // Efeito hover nos botões de CTA
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
            
            // Validação simples do formulário
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Validação simples
                    const inputs = this.querySelectorAll('input, textarea');
                    let isValid = true;
                    
                    inputs.forEach(input => {
                        if (!input.value.trim()) {
                            input.style.borderColor = 'red';
                            isValid = false;
                        } else {
                            input.style.borderColor = '#ddd';
                        }
                    });
                    
                    if (isValid) {
                        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                        this.reset();
                    } else {
                        alert('Por favor, preencha todos os campos obrigatórios.');
                    }
                });
            }
        });