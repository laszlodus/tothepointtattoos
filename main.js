import { SideMenu } from "./sidemenu.js"; 
import { TypeText } from "./lasertreatments.js";
import { NavMenu } from "./menu.js";
import { Lightbox } from "./picture.js";
import { CookieConsent } from "./cookieConsent.js";
import { TypeRunningText } from "./index.js";


document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".side-menu")) {
        SideMenu();
    }

    NavMenu(); 

    if (document.getElementById("typing")) {
        TypeText();
    }

    if (document.getElementById("texting")) {
        TypeRunningText();
    }

    if (document.querySelector(".lightbox")) {
        Lightbox();
    }

    if (document.querySelector(".cookie-consent")) {
        CookieConsent();
    }
});

