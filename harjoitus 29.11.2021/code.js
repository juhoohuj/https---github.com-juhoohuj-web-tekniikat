let courses = [];

let nappi = document.querySelector("button")

nappi.addEventListener("click", addinfo)

function addinfo() {
    let course = {
        courseName: document.getElementById("kurssi").value,
        student: document.getElementById("osallistujat").value,
    }
    courses.push(course)
}