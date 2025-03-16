// Text running on home page

export function TypeRunningText() {
  const text = "01788 579 660";
  let index = 0;

function type() {
    document.getElementById("texting").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(type, 50);
}
type();
} 
