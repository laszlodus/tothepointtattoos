
const galleryItems = document.querySelectorAll(".small-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightbox.style.display = "flex";
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showLightbox(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
