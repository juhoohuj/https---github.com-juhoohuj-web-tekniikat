function get_joke_of_the_day() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        let joke = JSON.parse(this.response)
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
         document.getElementById("copyright").innerHTML = "&copy;" +  joke.contents.copyright
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()


