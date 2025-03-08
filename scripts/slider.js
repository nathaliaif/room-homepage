const sliderImage = document.querySelectorAll(".slider__image");
const sliderContent = document.querySelectorAll(".slider__container");
const btnBack = document.getElementById("slider-back");
const btnNext = document.getElementById("slider-forward");

let currentSlide = 0;

function hideSlider(){
    sliderImage.forEach(item => item.classList.remove('on'));
    sliderContent.forEach(item => item.style.display = "none");
}

function showSlider(){
    sliderImage[currentSlide].classList.add('on');
    sliderContent[currentSlide].style.display = "flex";
}

showSlider();

function nextSlider() {
    hideSlider();
    currentSlide === sliderImage.length-1 ? currentSlide = 0 : currentSlide++;
    showSlider();
}

function prevSlider() {
    hideSlider();
    currentSlide === 0 ? currentSlide = sliderImage.length-1 : currentSlide--;
    showSlider();
}

btnBack.addEventListener("click", prevSlider);
btnNext.addEventListener("click", nextSlider);
