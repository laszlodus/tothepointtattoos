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
            sendButton.style.backgroundColor = 'red'; 
            sendButton.innerHTML = '<i class="fas fa-times"></i> Please fill all required fields!'; 
        } else {
            sendButton.style.backgroundColor = ''; 
            sendButton.innerHTML = 'Send'; 
        }
    }

    updateButtonState();

    form.addEventListener('input', updateButtonState);
});


function submitForm() {
    
    document.getElementById("myForm").submit();
    
    
    document.getElementById("myForm").reset();
}

