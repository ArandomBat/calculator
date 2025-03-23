"use strict"

// Open de afbeelding in fullscreen
function openFullscreen(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

// Sluit de lightbox
function closeFullscreen() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
