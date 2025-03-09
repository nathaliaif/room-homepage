const hamburgerMenuBtn = document.getElementById("menu__toggle");
const hamburgerLogo = document.querySelector(".menu__btn");
const hamburgerMenu = document.querySelector(".menu__box");
const gradientBg = document.getElementById("gradient-bg");

function handleScroll() {
    if(window.scrollY > 100){
        gradientBg.style.opacity = "1";
        gradientBg.style.transform = "translateY(0)";
    } else {
        gradientBg.style.opacity = "0";
        gradientBg.style.transform = "translateY(-20px)";
    }
}

window.addEventListener("scroll", handleScroll);