"use strict";

const daysTime = document.querySelector(".days");
const hoursTime = document.querySelector(".hour");
const minsTime = document.querySelector(".min");
const secsTime = document.querySelector(".sec");

const christmas = "25 Dec 2021";

function countdown() {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysTime.innerHTML = days;
  hoursTime.innerHTML = formatTime(hours);
  minsTime.innerHTML = formatTime(minutes);
  secsTime.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

countdown();

setInterval(countdown, 1000);
