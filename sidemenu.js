// Side menu

export function SideMenu() {
    const menuButton = document.querySelector(".menu-button");
    const submenu = document.querySelector(".submenu");

    if (!menuButton || !submenu) return; 

    menuButton.addEventListener("click", () => {
        const isOpen = submenu.classList.toggle("open");
        menuButton.textContent = isOpen ? "X" : "☰";
    });
}