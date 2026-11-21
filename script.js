// Tanggal mulai pacaran: 30 Oktober 2025
const startDate = new Date("2025-10-30T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = Math.max(0, now - startDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// Partikel hati lembut di latar belakang
const heartsBg = document.querySelector(".hearts-bg");
if (heartsBg) {
    const totalHearts = window.innerWidth <= 600 ? 8 : 14;
    for (let i = 0; i < totalHearts; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = "♥";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${14 + Math.random() * 14}px`;
        heart.style.animationDuration = `${11 + Math.random() * 10}s`;
        heart.style.animationDelay = `${Math.random() * 8}s`;
        heartsBg.appendChild(heart);
    }
}

// Lightbox perbesar foto
const photoCards = document.querySelectorAll(".photo-card");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

photoCards.forEach((card) => {
    card.addEventListener("click", () => {
        const imgEl = card.querySelector("img");
        const dataImg = card.getAttribute("data-img");
        const chosenSrc = dataImg || (imgEl ? imgEl.getAttribute("src") : "");
        const caption = card.getAttribute("data-caption") || "";

        if (lightboxImg && chosenSrc) {
            lightboxImg.src = chosenSrc;
            lightboxImg.alt = imgEl ? imgEl.alt : "Foto kenangan diperbesar";
        }
        if (lightboxCaption) {
            lightboxCaption.textContent = caption;
        }
        if (lightboxModal) {
            lightboxModal.classList.add("active");
        }
    });
});

function hideLightbox() {
    if (lightboxModal) {
        lightboxModal.classList.remove("active");
    }
}

if (closeLightbox) closeLightbox.addEventListener("click", hideLightbox);
if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) hideLightbox();
    });
}

// Modal pesan rahasia
const openSecretBtn = document.getElementById("openSecretBtn");
const secretModal = document.getElementById("secretModal");
const closeSecret = document.getElementById("closeSecret");
const okSecretBtn = document.getElementById("okSecretBtn");

function openSecret() {
    if (secretModal) secretModal.classList.add("active");
}

function closeSecretModal() {
    if (secretModal) secretModal.classList.remove("active");
}

if (openSecretBtn) openSecretBtn.addEventListener("click", openSecret);
if (closeSecret) closeSecret.addEventListener("click", closeSecretModal);
if (okSecretBtn) okSecretBtn.addEventListener("click", closeSecretModal);
if (secretModal) {
    secretModal.addEventListener("click", (e) => {
        if (e.target === secretModal) closeSecretModal();
    });
}

// Tutup modal yang sedang terbuka dengan tombol Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        hideLightbox();
        closeSecretModal();
    }
});

// Tombol musik latar opsional
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

if (musicToggle && bgMusic) {
    musicToggle.addEventListener("click", () => {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicToggle.classList.add("playing");
                if (musicLabel) musicLabel.textContent = "Jeda Lagu";
            }).catch(() => {
                if (musicLabel) musicLabel.textContent = "Lagu Belum Ada";
            });
        } else {
            bgMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove("playing");
            if (musicLabel) musicLabel.textContent = "Putar Lagu";
        }
    });
}