"use strict";

const apiKey = "8d8a485115058ff0bfd2e571762cd55e";
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getWeather(city) {
  const resp = await fetch(url(city), { origin: "cors" });
  const respData = await resp.json();

  addWeather(respData);
}

function addWeather(data) {
  const temp = Math.floor(data.main.temp - 273.15);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

  main.innerHTML = "";
  search.value = "";

  main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) getWeather(city);
});
