var body = document.body;
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
    body.style.overflowY = "scroll";
})


var i = 0;
var txt = "I'm Web Developer & Python Developer";
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


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
        }
    });
}
