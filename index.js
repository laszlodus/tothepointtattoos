// Text running on home page

export function TypeRunningText() {
  const text = "01788 579 660";
  let index = 0;

function typeEffect() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(typeEffect, 50);
}
typeEffect();
}
