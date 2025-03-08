const sliderImageMobile = document.querySelectorAll(".slider-image-mobile");
const sliderImageDesktop = document.querySelectorAll(".slider-image-desktop");
const sliderContent = document.querySelectorAll(".slider__container");
const btnBack = document.getElementById("slider-back");
const btnNext = document.getElementById("slider-forward");

let totalSlides = sliderImageMobile.length;
let currentSlide = 0;

function hideSlider(){
    sliderImageMobile.forEach(item => item.classList.remove('on'));
    sliderImageDesktop.forEach(item => item.classList.remove('on'));
    sliderContent.forEach(item => item.style.display = "none");
}

function showSlider(){
    if (window.innerWidth >= 1000){
        sliderImageDesktop[currentSlide].classList.add('on');
    } else {
        sliderImageMobile[currentSlide].classList.add('on');
    }
    sliderContent[currentSlide].style.display = "flex";
}

showSlider();

function nextSlider() {
    hideSlider();
    currentSlide === totalSlides-1 ? currentSlide = 0 : currentSlide++;
    showSlider();
}

function prevSlider() {
    hideSlider();
    currentSlide === 0 ? currentSlide = totalSlides-1 : currentSlide--;
    showSlider();
}

btnBack.addEventListener("click", prevSlider);
btnNext.addEventListener("click", nextSlider);
