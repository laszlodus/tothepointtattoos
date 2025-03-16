// Text display on hero section at laser treatement


export function TypeText() {
  const text = "Pain-free tattoo removal with laser.";
  let index = 0;

  function textAdd() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(textAdd, 50);
  }

  textAdd();
}

