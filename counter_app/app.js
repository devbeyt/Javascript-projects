const count = document.querySelector(".count")
const increment_count = document.querySelector(".increment")
const decrement_count = document.querySelector(".decrement")


let counter = 0;

events()


function events(){
    increment_count.addEventListener("click",increment)
    decrement_count.addEventListener("click",decrement)
}

function increment(){
    counter += 1
    count.innerHTML = counter;
}

function decrement(){
    counter -=1
    count.innerHTML = counter
}