// JavaScript untuk Hamburger Menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainHeader = document.getElementById("mainHeader");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
        if (mainHeader) {
            mainHeader.classList.toggle("menu-open", navMenu.classList.contains("active"));
        }
    });
}

// Menutup menu ketika link di klik (untuk navigasi halaman atau section)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (hamburger && navMenu && hamburger.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "auto";
            if (mainHeader) {
                mainHeader.classList.remove("menu-open");
            }
        }
    });
});

// Update tahun di footer 
const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Efek header sticky dan berubah saat scroll 
if (mainHeader) {
    let lastScrollTop = 0;
    const scrollThreshold = 50;  // Jarak scroll sebelum header berubah/sembunyi

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }

        if (scrollTop > lastScrollTop && scrollTop > mainHeader.offsetHeight && !navMenu.classList.contains("active")) {
            mainHeader.classList.add("hidden");
        } else {
            mainHeader.classList.remove("hidden");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
}