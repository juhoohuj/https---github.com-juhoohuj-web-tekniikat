//a
let h2 = document.querySelector("h2")
h2.textContent = "Let's manipulate some DOM again!";

//b
let hrNode = document.createElement("hr");
h2.parentNode.insertBefore(hrNode, h2)

//c
let p = document.querySelector("article>p:nth-child(2)");
p.textContent = "teksti vaihdettu"

//d
let contents = document.querySelector("content");
let ul = document.createElement("ul");

for (let i=1; i<6; i++) {
    let li = document.createElement("li");
    li.textContent = "number " + i;
    ul.appendChild(li);
}

