let button = document.querySelector("button");
let content = document.querySelector("#content")
button.addEventListener("click", changeColor);
button.addEventListener("click", setColor);

function changeColor() {
    content.classList.toggle("blue")
}

let input = document.querySelector("input").value

let p = document.querySelector("p");

function setColor() {
    p.style.color = "yellow"
}