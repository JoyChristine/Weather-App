const btn = document.querySelector(".go")
const input = document.querySelector(".input-city")
const name = document.querySelector(".name");
const description = document.querySelector(".decribe");
const temp = document.querySelector(".temp");

btn.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=6355e0b21e213f1e1de2ad6632831f2a")
        .then(response => response.json())
        .then(data => {
            var nameValue = data["name"];
            var tempValue = data["main"]["temp"];
            var descriptionValue = data["weather"][0]["description"];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            description.innerHTML = descriptionValue;
        })

    .catch(err => alert("No such City"))
})