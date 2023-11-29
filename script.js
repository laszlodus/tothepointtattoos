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

document.getElementById('send').addEventListener('click', function() {
    setTimeout(function() {
        var form = document.getElementById('myForm');
        if (form) {
            form.reset(); // Törli az űrlap mezőit
        }
    }, 2001); // 1000 ms = 5 másodperc
});