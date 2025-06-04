const burger = document.getElementById('burger');

if(burger){
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('active'); // ← вот оно!
        document.body.classList.toggle('nav-open');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            nav.classList.remove('show');
            burger.classList.remove('active'); // ← убираем крестик
            document.body.classList.remove('nav-open');
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll("[data-animate]").forEach(el => {
        observer.observe(el);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            item.classList.toggle('open');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.faq-item, .faq-header').forEach(el => {
        observer.observe(el);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll("[data-animate]").forEach(el => {
        const delay = el.getAttribute("data-delay");
        if (delay) el.style.setProperty("--delay", delay);
        observer.observe(el);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('downloadForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = form.querySelector('input[name="email"]');
        const email = emailInput.value.trim();

        // Простая валидация email
        if (email && email.includes('@') && email.includes('.')) {
            // Автоскачивание PDF
            const link = document.createElement('a');
            link.href = 'assets/images/book.pdf'; // путь к твоему PDF
            link.download = 'tainy-riska-sample.pdf';
            link.click();

            emailInput.value = '';
        } else {
            alert('Пожалуйста, введите корректный email.');
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookieBanner");
    const cookieAccept = document.getElementById("cookieAccept");

    if (!localStorage.getItem("cookieAccepted")) {
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 500);
    }

    cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        cookieBanner.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if(galleryItems){
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalText = document.getElementById('modalText');
        const modalClose = document.getElementById('modalClose');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                modalImg.src = item.dataset.image;
                modalTitle.textContent = item.dataset.title;
                modalText.textContent = item.dataset.text;
                modal.classList.add('show');
            });
        });

        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    if (burger && nav) {
        burger.addEventListener("click", function () {
            if (burger.className.indexOf("active") === -1) {
                burger.className += " active";
                nav.className += " open";
            } else {
                burger.className = burger.className.replace(" active", "");
                nav.className = nav.className.replace(" open", "");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const modal = document.getElementById("callbackModal");
    const openModal = document.getElementById("openCallback");
    const closeModal = document.getElementById("closeCallback");
    const navLinks = document.querySelectorAll(".nav-link");

    if (burger && nav) {
        burger.addEventListener("click", function () {
            if (!burger.classList.contains("active")) {
                burger.classList.add("active");
                nav.classList.add("open");
            } else {
                burger.classList.remove("active");
                nav.classList.remove("open");
            }
        });
    }

    if (openModal && modal) {
        openModal.addEventListener("click", function () {
            modal.classList.add("show");
        });
    }

    if (closeModal && modal) {
        closeModal.addEventListener("click", function () {
            modal.classList.remove("show");
        });
    }

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            burger.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".callback-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // отключаем перезагрузку страницы

            const name = form.name.value.trim();
            const phone = form.phone.value.trim();

            if (name && phone) {
                alert("Спасибо! Мы вам перезвоним.");
                form.reset(); // очищает форму
                document.getElementById("callbackModal").classList.remove("show"); // закрываем модалку
            }
        });
    }
});