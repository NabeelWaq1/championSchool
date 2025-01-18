const counters = document.querySelectorAll('.counters span');
const counterContainer = document.querySelector(".counters");
let menuIcon = document.querySelector(".menu");
let menuCloseIcon = document.querySelector(".close");
let mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
});
menuCloseIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(1200px)";
});

