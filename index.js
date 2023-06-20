var i = 0;
var txt = "I'm Vijay Sabrole"; 
var speed = 400; 
function typeWriter() {
    var type = document.getElementById("type");
    var cursor = document.getElementById("cursor");
    if (i < txt.length) {
        type.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    else {
        cursor.style.display = "none";
    }
}
window.addEventListener('DOMContentLoaded', typeWriter);