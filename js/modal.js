"use strict"

function showPic(n) {
    let modal = document.querySelector(".modal");
    let close = document.querySelector("#close");
    let href = document.getElementsByClassName("about__images__content__row__img");
    let img = document.querySelector('#modal__img')

    // Узнаем размер скролла
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    // Узнаем размер скролла
    href = href[n-1].getAttribute('src')
    console.log(href)
    modal.classList.add("active");
    img.setAttribute('src', String(href));
    modal.style.height = String(img.height) + "px";

    close.addEventListener("click", function() {
        modal.classList.remove("active");
    })
    window.addEventListener('scroll', function() {
        modal.classList.remove("active");
      });
}