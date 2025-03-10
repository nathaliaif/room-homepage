const sliderImageMobile = document.querySelectorAll(".slider-image-mobile");
const sliderImageDesktop = document.querySelectorAll(".slider-image-desktop");
const sliderContent = document.querySelectorAll(".slider__container");
const btnBack = document.getElementById("slider-back");
const btnNext = document.getElementById("slider-forward");
const sliderTimer = document.querySelector(".slider-timer");

let totalSlides = sliderImageMobile.length;
let currentSlide = 0;
let timer = 20000;

function hideSlider(){
    sliderImageMobile.forEach(item => item.style.display = "none");
    sliderImageDesktop.forEach(item => item.style.display = "none");
    sliderContent.forEach(item => item.style.display = "none");
}

function showSlider(){
    if (window.innerWidth >= 1000){
        sliderImageDesktop[currentSlide].style.display = "block";
    } else {
        sliderImageMobile[currentSlide].style.display = "block";
    }
    sliderContent[currentSlide].style.display = "flex";
}

hideSlider();
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

// Timer
function startTimer() {
    sliderTimer.style.width = "0%";
    sliderTimer.style.transition = "none"; // Reset transition
    setTimeout(() => {
        sliderTimer.style.transition = `width ${timer}ms linear`;
        sliderTimer.style.width = "100%";
    }, 10); // Small delay to re-trigger animation
}

function nextSliderWithTimer(){
    nextSlider();
    startTimer();
}

// Start timer initially
startTimer();
let sliderInterval = setInterval(nextSliderWithTimer, timer);

// Reset timer when a button is clicked and add the slider change function
btnBack.addEventListener("click", () => {
    clearInterval(sliderInterval);
    prevSlider();
    startTimer();
    sliderInterval = setInterval(nextSliderWithTimer, timer);
});

btnNext.addEventListener("click", () => {
    clearInterval(sliderInterval);
    nextSlider();
    startTimer();
    sliderInterval = setInterval(nextSliderWithTimer, timer);
});