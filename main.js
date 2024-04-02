var bar = document.querySelector("#header input");
var form = document.querySelector("#lower-form");
var error = document.getElementById("error");
var btn = document
  .querySelector("#header button")
  .addEventListener("click", (onclick) => {
    Weather(bar.value);
  });

var ApiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var Api = "e6505bd80d5e6f89b49455c99a0d2b38";
var cityweather = document.getElementById("weather-txt");
var weathericon = document.getElementsByClassName("sun")[0];

async function Weather(city) {
  const response = await fetch(ApiURl + "&q=" + city + "&appid=" + Api);
  const data = await response.json();

  if (response.status == 404 || response.status == 400) {
    error.style.display = "block";
    form.style.display = "none";
  } else {
    form.style.display = "block";
    error.style.display = "none";
  }
  console.log(data);

  document.getElementById("city").innerHTML = data.name;
  document.getElementById("weather-txt").innerHTML =
    Math.round(data.main.temp) + "&deg;C";
  document.getElementById("hum-txt").innerHTML = data.main.humidity + "%";
  document.getElementById("wind-txt").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  }
}
