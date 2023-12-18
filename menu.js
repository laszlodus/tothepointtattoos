document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('show'); 
    });

    
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });
});
