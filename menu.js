document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
        
        if (navbar.classList.contains('show')) {
            toggleButton.innerHTML = 'X'; 
        } else {
            toggleButton.innerHTML = '&#9776;'; 
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
            toggleButton.innerHTML = '&#9776;'; 
        });
    });
});

