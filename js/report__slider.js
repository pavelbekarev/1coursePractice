'use strict'

const items = document.querySelector(".report__items");
const buttonLeft = document.querySelector(".report__leftButton");
const buttonRight = document.querySelector(".report__rightButton");

let maxItems = 3;
let currentItem = 1;
let width = document.querySelector(".slider__item").getBoundingClientRect().width;


buttonRight.addEventListener("click", () => {
    let shift = -currentItem * width;

    if (currentItem < (maxItems - 1)) {
        currentItem++;
        buttonLeft.removeAttribute("disabled");
    }

    else {
        buttonRight.setAttribute("disabled", "true");
    }

    items.style.transform = `translateX(${shift}px)`;  
})


buttonLeft.addEventListener("click", () => {
    let shift = -(currentItem - 1) * width;

    if (currentItem > -1) {
        currentItem--;
        buttonRight.removeAttribute("disabled");
    }

    if (currentItem <= 0) {
        buttonLeft.setAttribute("disabled", "true");
    }

    items.style.transform = `translateX(${shift}px)`;
})