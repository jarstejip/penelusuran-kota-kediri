// Tentukan base URL otomatis - YANG BENAR
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const BASE_PATH = isLocalhost ? '' : 'public/';  // INI YANG DIBALIK!

// Data Destinasi Wisata Kediri
const destinasiWisata = [
    {
        id: 1,
        nama: "Gunung Kelud",
        kategori: "Alam",
        deskripsi: "Gunung berapi aktif dengan kawah indah dan pemandangan spektakuler. Cocok untuk pendakian dan fotografi.",
        lokasi: "Ngancar, Kediri",
        rating: 4.7,
        gambar: BASE_PATH + "images/kelud.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Gunung+Kelud+Kediri",
        slug: "gunung-kelud"
    },
    {
        id: 2,
        nama: "Air Terjun Irenggolo",
        kategori: "Alam",
        deskripsi: "Air terjun setinggi 40 meter dengan kolam alami yang jernih. Tempat yang sempurna untuk refreshing.",
        lokasi: "Besuki, Kediri",
        rating: 4.5,
        gambar: BASE_PATH + "images/irenggolo-3.webp",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Air+Terjun+Irenggolo+Kediri",
        slug: "air-terjun-irenggolo"
    },
    {
        id: 3,
        nama: "Taman Wisata Selomangleng",
        kategori: "Rekreasi",
        deskripsi: "Taman kota dengan kolam renang, area bermain anak, dan spot foto menarik.",
        lokasi: "Mojoroto, Kediri",
        rating: 4.3,
        gambar: BASE_PATH + "images/taman-selomangleng.jpg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Selomangleng+Kediri",
        slug: "taman-selomangleng"
    },
    {
        id: 4,
        nama: "Candi Surawana",
        kategori: "Sejarah",
        deskripsi: "Candi peninggalan Kerajaan Majapahit dengan relief yang masih terawat. Cocok untuk wisata edukasi.",
        lokasi: "Canggu, Kediri",
        rating: 4.4,
        gambar: BASE_PATH + "images/Candi-Surowono 1.jpg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Candi+Surawana+Kediri",
        slug: "candi-surawana"
    },
    {
        id: 5,
        nama: "Goa Selomangleng",
        kategori: "Alam",
        deskripsi: "Goa alami dengan stalaktit dan stalakmit yang indah. Pengalaman petualangan yang mengesankan.",
        lokasi: "Mojoroto, Kediri",
        rating: 4.2,
        gambar: BASE_PATH + "images/goa-selomangleng.jpg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Goa+Selomangleng+Kediri",
        slug: "goa-selomangleng"
    },
    {
        id: 6,
        nama: "Monumen Simpang Lima Gumul",
        kategori: "Landmark",
        deskripsi: "Monumen ikonik Kediri dengan arsitektur megah menyerupai Arc de Triomphe Paris.",
        lokasi: "Ngasem, Kediri",
        rating: 4.6,
        gambar: BASE_PATH + "images/simpang 1.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Simpang+Lima+Gumul+Kediri",
        slug: "simpang-lima-gumul"
    },
    {
        id: 7,
        nama: "Kampung Inggris Pare",
        kategori: "Edukasi",
        deskripsi: "Pusat pembelajaran bahasa Inggris terbesar di Indonesia dengan berbagai kursus berkualitas.",
        lokasi: "Pare, Kediri",
        rating: 4.8,
        gambar: BASE_PATH + "images/kmpung-inggris.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Kampung+Inggris+Pare+Kediri",
        slug: "kampung-inggris-pare"
    },
    {
        id: 8,
        nama: "Gumul Paradise Island",
        kategori: "Rekreasi",
        deskripsi: "Taman air modern dengan berbagai wahana seru untuk keluarga dan anak-anak.",
        lokasi: "Kediri",
        rating: 4.4,
        gambar: BASE_PATH + "images/paradise island.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Gumul+Paradise+Island+Kediri",
        slug: "gumul-paradise-island"
    },
    {
        id: 9,
        nama: "Museum Airlangga",
        kategori: "Sejarah",
        deskripsi: "Museum yang menyimpan koleksi sejarah Kerajaan Airlangga dan peninggalan bersejarah lainnya.",
        lokasi: "Kediri Kota",
        rating: 4.1,
        gambar: BASE_PATH + "images/airlangga.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Museum+Airlangga+Kediri",
        slug: "museum-airlangga"
    }
];
// Generate Destinasi Cards
function generateDestinasiCards() {
    const grid = document.getElementById('destinasiGrid');
    grid.innerHTML = '';
    
    destinasiWisata.forEach(destinasi => {
        const card = document.createElement('div');
        card.className = 'destinasi-card';
        card.innerHTML = `
            <img src="${destinasi.gambar}" alt="${destinasi.nama}" class="card-image" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.color='white'; this.style.fontSize='3rem'; this.innerHTML='🏔️'">
            <div class="card-content">
                <span class="card-category">${destinasi.kategori}</span>
                <h3 class="card-title">${destinasi.nama}</h3>
                <p class="card-description">${destinasi.deskripsi}</p>
                <div class="card-info">
                    <span class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${destinasi.lokasi}
                    </span>
                    <span class="card-rating">
                        <i class="fas fa-star"></i>
                        ${destinasi.rating}
                    </span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = 'pages/' + destinasi.slug + '.html';
        });
        grid.appendChild(card);
    });
}

// Generate Location Buttons
function generateLocationButtons() {
    const container = document.getElementById('locationButtons');
    container.innerHTML = '';
    
    destinasiWisata.forEach(destinasi => {
        const button = document.createElement('button');
        button.className = 'location-btn';
        button.textContent = destinasi.nama;
        button.addEventListener('click', () => {
            window.open(destinasi.koordinat, '_blank');
        });
        container.appendChild(button);
    });
}

// Navigation Toggle
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

// Smooth Scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            }
        });
    });
}

// Scroll Animation
function scrollAnimation() {
    const cards = document.querySelectorAll('.destinasi-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// Event Listeners - Semua dijalankan saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    // Generate cards dan buttons
    generateDestinasiCards();
    generateLocationButtons();
    
    // Smooth scroll untuk navigation
    smoothScroll();
    
    // Burger menu toggle
    const burger = document.querySelector('.burger');
    if (burger) {
        burger.addEventListener('click', toggleNav);
    }
    
    // Scroll animation
    setTimeout(scrollAnimation, 100);
    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Fallback untuk gambar yang error
    const images = document.querySelectorAll('.card-image');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = 'white';
            this.style.fontSize = '3rem';
            this.innerHTML = '🏔️';
        });
    });
});

// Fallback jika gambar tidak ada - tampilkan placeholder warna
function loadImageFallback() {
    const cardImages = document.querySelectorAll('.card-image');
    cardImages.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.style.color = 'white';
            img.style.fontSize = '3rem';
            img.innerHTML = '🏔️';
        }
    });
}

// Jalankan fallback setelah halaman selesai load
window.addEventListener('load', loadImageFallback);