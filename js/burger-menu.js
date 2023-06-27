'use strict'

const burgerButton = document.getElementById("burgerButton");
const menu = document.querySelectorAll(".menu__list");

burgerButton.addEventListener("click", () => {
    for (let el of menu) {
        el.classList.toggle("show-menu");
    }

    document.querySelector(".header-menu").classList.toggle("with-bg");
    document.querySelector(".content--text").classList.toggle("with-text");
    document.querySelector(".logo__img").classList.toggle("logo__img--fixed");
})  