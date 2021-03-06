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


// Меню Бургер

function burger() {
    let burger = document.querySelector(".navbar__burger"),
        list = document.querySelector(".navbar__list"),
        listLi = document.getElementsByClassName('navbar__list__li'),
        listLeft = window.getComputedStyle(list).left;

    burger.addEventListener('click', function() {
        console.log(window.getComputedStyle(list).left);
        if(window.getComputedStyle(list).left === '1000px') {
            burger.classList.add('active__burger');
            list.style.display = 'flex';
            list.animate([
                {left: '70%'}
            ], {
                // timing options
                duration: 400,
                fill: "forwards"
            })
        }

        if(window.getComputedStyle(list).left === '700px') {
            burger.classList.add('active__burger');
            list.style.display = 'flex';
            list.animate([
                {left: '50%'}
            ], {
                // timing options
                duration: 400,
                fill: "forwards"
            })
        }

        if(window.getComputedStyle(list).left != listLeft) {
            burger.classList.remove('active__burger');
            list.animate([
                {left: listLeft}
            ], {
                // timing options
                duration: 400,
                fill: "forwards"
            })
            setTimeout(displayFlex, 400);
        }
        
    })

    window.addEventListener('scroll', function() {
        burger.classList.remove('active__burger');
        list.animate([
            {left: listLeft}
        ], {
            // timing options
            duration: 400,
            fill: "forwards"
        })
    })
}

function displayFlex() {
    let list = document.querySelector(".navbar__list")
    list.style.display = 'none'
}

burger()