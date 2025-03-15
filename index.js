
if (!localStorage.getItem("cookiesAccepted")) {
    
    document.getElementById("cookieConsentPopup").style.display = "block";
  }
  
 
  document.getElementById("acceptCookies").addEventListener("click", function() {
    
    localStorage.setItem("cookiesAccepted", "true");
    
    
    document.getElementById("cookieConsentPopup").style.display = "none";
  });





const text = "01788 579 660";
let index = 0;
function typeEffect() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(typeEffect, 50);
}
typeEffect();