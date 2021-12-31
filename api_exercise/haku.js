//Let's create a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/",true);
// Send request
xmlhttp.send();

xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200 ){
        let answerObject = JSON.parse(xmlhttp.response);

        document.getElementById("answer").innerHTML = answerObject.answer + "<br>";
        
        let img = document.createElement("IMG");
        img.setAttribute("src", answerObject.image);
        document.body.appendChild(img)
    }
        
  }
  