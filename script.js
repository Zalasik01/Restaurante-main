// Função para inicializar o AOS
function initializeAOS() {
    AOS.init();
}

// Função para inicializar o Swiper
function initializeSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 50
            }
        }
    });
}

// Função para carregar HTML de arquivos externos
function loadHTML(elementId, filePath) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}

// Função principal a ser executada quando o DOM estiver carregado
function onDOMContentLoaded() {
    loadHTML("nav-placeholder", "/nav.html");
    loadHTML("footer-placeholder", "/footer.html");

    // Inicializa os plugins
    initializeAOS();
    initializeSwiper();

    // Prevent reloading the same page
    const currentPath = window.location.pathname;
    document.querySelectorAll('a.navigation_link').forEach(link => {
        link.addEventListener('click', function(event) {
            if (link.getAttribute('href') === currentPath) {
                event.preventDefault();
            }
        });
    });
}

// Adiciona o evento DOMContentLoaded para garantir que os scripts sejam executados após o DOM estar pronto
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
