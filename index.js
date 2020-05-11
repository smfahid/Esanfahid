window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("bg-dark", window.scrollY > 0);
})

var typed = new Typed(".title-anim", {
    strings: ["Web Developer", "Competitive Programmer", "GUI Aplication Developer"],
    typeSpeed: 20,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

function home() {
    window.location = "index.html";
}

function about() {
    window.location = "about.html";
}

function gallery() {
    window.location = "gallery.html";
}

function contact() {
    window.location = "contact.html";
}

function skills() {
    window.location = "skills.html";
}

function services() {
    alert("No Services Availble Yet");
}

function experience() {
    alert("Noob player Yet");
}

function portfolio() {
    alert("Portfolio Will Add Soon");
}

function msg() {
    alert("Call Me for Cantact");
}