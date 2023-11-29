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

window.addEventListener('focus', function() {
    window.location.reload();
});
document.getElementById('send').addEventListener('click', function() {
setTimeout(function() {
    window.location.reload();
}, 1000); // 1000 ms = 1 másodperc
});