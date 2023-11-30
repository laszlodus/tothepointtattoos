const button = document.getElementById("showe");
const form = document.getElementById("form");
const picture = document.getElementById("picture");

button.addEventListener("click", () => {
    form.classList.toggle('hidden'); 
    picture.classList.toggle('picture2');
    button.classList.toggle('showe1');
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('age').value = '';
    document.getElementById('tattoidea').value = '';
    document.getElementById('bodypart').value = '';
    document.getElementById('gdpr').checked = false;
});

function submitForm() {
    // Here you can add your form submission logic, for example using AJAX
    
    // Simulating a form submission delay (1 second)
    setTimeout(function() {
      // Clear the form after 1 second
      document.getElementById("myForm").reset();
    }, 1000);
  }