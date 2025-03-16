import { SideMenu } from "./sidemenu.js"; 

import { NavMenu } from "./menu.js";
import { Lightbox } from "./picture.js";
import { CookieConsent } from "./cookieConsent.js";
import { TypeRunningText } from "./index.js";

document.addEventListener("DOMContentLoaded", () => {
    SideMenu();
});



document.addEventListener("DOMContentLoaded", () => {
    NavMenu();
});

document.addEventListener("DOMContentLoaded", () => {
    Lightbox();
});

document.addEventListener("DOMContentLoaded", () => {
    CookieConsent();  
    TypeRunningText();         
});