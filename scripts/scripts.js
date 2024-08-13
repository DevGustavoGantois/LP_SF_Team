var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Número de slides visíveis por vez por padrão
    spaceBetween: 30, // Espaçamento entre slides
    loop: true, // Habilita rotação infinita
    autoplay: {
        delay: 3000, // Tempo de exibição de cada slide em milissegundos
        disableOnInteraction: false, // Continua o autoplay mesmo após interação
    },
    pagination: {
        el: ".swiper-pagination", // Seleciona o elemento de paginação
        clickable: true, // Permite que os botões de paginação sejam clicáveis
    },
    breakpoints: {
        // Quando a largura da tela é >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // Quando a largura da tela é >= 992px e < 1200px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // Quando a largura da tela é >= 768px e < 992px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // Quando a largura da tela é >= 576px e < 768px
        576: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        // Quando a largura da tela é < 576px
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

//Navbar Mobile
function OpenMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.nav-list-mobile');
    
    // Toggle the 'active' class on the menu list
    navList.classList.toggle('active');
    
    // Optional: Toggle a class on the menu icon to change its appearance
    menuIcon.classList.toggle('active');
}

//Faq section
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const chevron = button.querySelector('.chevron');

        // Toggle the display of the FAQ answer
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';

        // Toggle the rotation of the chevron
        chevron.classList.toggle('rotate');
    });
});