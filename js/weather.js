const API_KEY = config.WEATHER_API_KEY;
let weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
};

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    var svgCode = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">' +
                  '<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>' +
                  '</svg>';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const outer_weather = document.querySelector("#weather");
        const weatherContainer = document.querySelector("#weather span");
        const outer_city = document.querySelector("#city span:first-child");
        const city = document.querySelector("#city span:last-child");
        const weatherNum = (data.weather[0].icon).substr(0,2);
        outer_city.innerHTML = svgCode;
        city.innerText = data.name;
        weatherContainer.innerText =  `${parseInt(data.main.temp)}°C`;
        const i = document.createElement("i");
        i.setAttribute("class", `${weatherIcon[weatherNum]}`);
        outer_weather.appendChild(i)
        i.classList.add("fas-1")
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// var $Icon = (data.weather[0].icon).substr(0,2);
//             var $Temp = Math.floor(data.main.temp) + 'º';
//             var $city = data.name;

//              $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
