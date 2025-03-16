// Cookies consent

export function CookieConsent() {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieConsentPopup").style.display = "block";
    }

    document.getElementById("acceptCookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookieConsentPopup").style.display = "none";
    });
}
