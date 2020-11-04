"use strict"

function showPic(n) {
    let modal = document.querySelector(".modal");
    let close = document.querySelector("#close");
    let href = document.getElementsByClassName("about__images__content__row__img");
    let img = document.querySelector('#modal__img');
    let sections = document.querySelectorAll("section");

    // Узнаем размер скролла
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    // Узнаем размер скролла

    for(i = 0; i < sections.length; i++) {
        sections[i].style.filter = "blur(4px)"
    }
    href = href[n-1].getAttribute('src')
    console.log(href)
    modal.classList.add("active__modal");
    img.setAttribute('src', String(href));
    modal.style.height = String(img.height) + "px";
    img.classList.add("active__img");

    close.addEventListener("click", function() {
        modal.classList.remove("active__modal");
        img.classList.remove("active__img");
        for(i = 0; i < sections.length; i++) {
            sections[i].style.filter = ""
        }
    })
    window.addEventListener('scroll', function() {
        modal.classList.remove("active__modal");
        img.classList.remove("active__img");
        for(i = 0; i < sections.length; i++) {
            sections[i].style.filter = ""
        }
      });
}