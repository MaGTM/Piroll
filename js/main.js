var slideIndex = 1;
showSlides(slideIndex);

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(slideNum) {
    var slides = document.getElementsByClassName("testimonials__content__item");
    var dots = document.getElementsByClassName("testimonials__content__dots__item");
    if (slideNum > slides.length) {
        slideIndex = 1
      }
    if (slideNum < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}