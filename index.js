let number = 0

let count = document.getElementById("count-el")

let incrementBtn = document.getElementById("increment-btn")

let saveBtn = document.getElementById("save-btn")

let saveStr = " - "

let paraEl = document.getElementById("para-el")

incrementBtn.addEventListener('click', function() {
    number += 1
    count.textContent = number
})


saveBtn.addEventListener('click', function() {
    paraEl.textContent += number + saveStr;
    number = 0;
    count.textContent = number;
})