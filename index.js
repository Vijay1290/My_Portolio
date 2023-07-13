var body = document.body;
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
    body.style.overflowY = "scroll";
})



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
    } else {
        cursor.style.display = "none";
    }
}
window.addEventListener('load', typeWriter);



function toggleView() {
    var section = document.getElementById("view_more");
    var button = document.querySelector(".view_button");

    if (section.style.display === "none") {
        section.style.display = "flex";
        button.textContent = "View Less";
        AOS.init();

    } else {
        section.style.display = "none";
        button.textContent = "View More";
    }
}


