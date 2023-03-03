let counte = document.querySelector("h1");
let addButton = document.querySelector(".add");
let subButton = document.querySelector(".sub");
let counter = 0;

counte.innerHTML = counter;

addButton.addEventListener('click', function () {
    counter++;
    counte.innerHTML = counter;
});


subButton.addEventListener('click', function () {
    counter--;
    counte.innerHTML = counter;   
})


