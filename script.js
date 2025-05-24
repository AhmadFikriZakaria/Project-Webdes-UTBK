const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Menutup menu ketika link di klik (untuk navigasi halaman tunggal atau jika diinginkan)
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    // Hanya tutup jika menu mobile sedang aktif
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}

// Optional: Header menjadi sedikit transparan saat scroll ke bawah
// dan solid saat kembali ke atas atau saat menu mobile aktif.
// Ini adalah contoh sederhana, bisa dikembangkan lebih lanjut.
const header = document.querySelector(".header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // Atau hilangkan shadow jika mau
    }
});

// Pastikan header solid jika menu mobile terbuka
hamburger.addEventListener("click", function() {
    if (hamburger.classList.contains("active")) {
        header.style.backgroundColor = "#fff"; // Warna solid saat menu terbuka
    } else if (window.scrollY <= 50) {
         header.style.backgroundColor = "#fff"; // Kembali ke state awal jika di atas
    }
});