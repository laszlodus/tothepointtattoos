    document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const sendButton = document.querySelector('button[type="submit"]');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phonenumber');
    const agreeCheckbox = document.getElementById('gdpr');

    function updateButtonState() {
        sendButton.disabled = !(
            firstNameInput.value.trim() !== '' &&
            lastNameInput.value.trim() !== '' &&
            emailInput.checkValidity() &&
            phoneInput.value.trim() !== '' &&
            agreeCheckbox.checked
        );

        if (sendButton.disabled) {
            sendButton.style.backgroundColor = 'gray'; // Szürke háttérszín
            sendButton.innerHTML = '<i class="fas fa-times"></i> Disabled'; // Disabled ikon
        } else {
            sendButton.style.backgroundColor = ''; // Alaphelyzetű háttérszín
            sendButton.innerHTML = 'Send'; // Alaphelyzetű szöveg
        }
    }

    updateButtonState();

    form.addEventListener('input', updateButtonState);
});

// function submitForm() {
//     // Itt hozzáadhatod az űrlap elküldési logikáját
//     // Simulating a form submission delay (1 second)
//     setTimeout(function() {
//       // Clear the form after 1 second
//       document.getElementById("myForm").reset();
//     }, 1000);
//   }

// Az űrlap elküldése gombra kattintáskor hívódik meg
function submitForm() {
    // Űrlap elküldése
    document.getElementById("myForm").submit();
    
    // Törölje a kitöltött mezőket
    document.getElementById("myForm").reset();
}

