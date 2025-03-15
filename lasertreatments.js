const text = "Pain-free tattoo removal with laser.";
let index = 0;
function typeEffect() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(typeEffect, 50);
}
typeEffect();