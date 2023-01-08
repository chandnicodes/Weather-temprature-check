let fetchApi = "https://api.openweathermap.org/data/2.5/weather?q=";
let cityNames = "";
let apiKeyCode = "31a68e4c9fc722a7849c8c57cbda01ab";
let Searchcity = document.querySelector("#cityname-search");
let Citydetails = document.querySelector(".city-details");
let temp = document.querySelector(".temperature");
let weather = document.querySelector(".weather-type");
let windSpeed=document.querySelector(".wind-speed");

Searchcity.addEventListener("keyup", (event) => {
  let { keyCode, target: input } = event;

  if (keyCode === 13) {
    cityNames = input.value;
    weatherDetails(cityNames);
    Searchcity.value = "";
  }
});

function weatherDetails(cityNames) {
  fetch(`${fetchApi}${cityNames}&appid=${apiKeyCode}`)
    .then((res) => res.json())
    .then((cityData) => {
      Citydetails.innerHTML = `${cityData.name}, ${cityData.sys.country}`;
      temp.innerHTML = `${Math.floor(cityData.main.temp - 273.15)}°c`;
      weather.innerHTML = `${cityData.weather[0].main}`;
      windSpeed.innerHTML=`${Math.floor(cityData.wind.speed- 0.62)}km/h`;
    })
    .catch((err) => alert("The city is not found"));
}

weatherDetails("Masoori");
