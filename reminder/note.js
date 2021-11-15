let body = document.querySelector("body");
let user = document.getElementById("name")
let note = document.getElementById("note")

let button = document.querySelector("button");
button.addEventListener("click", addNote);

function addNote() {
    let h3 = document.createElement("h3")
    h3.textContent = user.value;
    let p = document.createElement("p");
    p.textContent = note.value;

    if (document.getElementById("important").checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }

    body.append(document.createElement("hr") ,h3 ,p , document.createElement("hr"))
}