'use strict'

const itemList = document.querySelector(".certificate__items");
const leftButton = document.querySelector(".certificate__leftButton");
const rightButton = document.querySelector(".certificate__rightButton");

let maximumItems = 3;
let itemCurrent = 1;
let itemWidth = 370;


rightButton.addEventListener("click", () => {
    let shift = -itemCurrent * itemWidth;

    if (itemCurrent < (maximumItems - 1)) {
        itemCurrent++;
        leftButton.removeAttribute("disabled");
    }

    else {
        rightButton.setAttribute("disabled", "true");
    }

    itemList.style.transform = `translateX(${shift}px)`;  
})


leftButton.addEventListener("click", () => {
    let shift = -(itemCurrent - 1) * itemWidth;

    if (itemCurrent > -1) {
        itemCurrent--;
        rightButton.removeAttribute("disabled");
    }

    if (itemCurrent <= 0) {
        leftButton.setAttribute("disabled", "true");
    }

    itemList.style.transform = `translateX(${shift}px)`;
})