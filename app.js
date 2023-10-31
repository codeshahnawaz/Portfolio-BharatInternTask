
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");
var links = document.querySelector(".nav-links li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typingEffect = new Typed(".input", {
    strings: ["Web Developer", "YouTuber", "Video Editor","Graphic Designer", "Writer" ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
    loop: true

})