const pictures = document.querySelectorAll('.image img'); //select of pictures

// Lightbox and close
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.getElementById('close');

pictures.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = img.src;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});