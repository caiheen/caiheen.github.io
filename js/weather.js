const API_KEY ="ae06f3ab80806ea68edd83506d0fc192";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live it.", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(date => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name
        weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find your. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);