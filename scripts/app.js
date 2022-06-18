// CURRENT TIME

function formatDate(currentTime) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentDay = days[currentTime.getDay()];
  let currentDate = currentTime.getDate();

  return `${currentDay} ${currentHours}:${currentMinutes}`;
}
let currentTime = new Date();
let actualTime = document.querySelector(".currentTime");
actualTime.innerHTML = formatDate(currentTime);

// CHANGE C AND F

function changeC(event) {
  event.preventDefault();
  let temperatureLinkF = document.querySelector(`#fahrenheit-link`);
  let temperatureF = document.querySelector("#temperatureCenter");
  temperatureF.innerHTML = "66";
}
let linkF = document.querySelector("#fahrenheit-link");
linkF.addEventListener("click", changeC);

function changeF(event2) {
  event2.preventDefault();
  let temperatureLinkC = document.querySelector(`#celsius-link`);
  let temperatureC = document.querySelector("#temperatureCenter");
  temperatureC.innerHTML = "19";
}
let linkC = document.querySelector("#celsius-link");
linkC.addEventListener("click", changeF);

//SEARCH CITY

// Search to H1
//function apiPosition() {
//let apiKey = "ed0417bf8fecd4ab27286ed64422cb0b";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;
//axios.get(apiUrl).then(showTempCity);
//}
function displayWeatherConditions(response) {
  console.log(response.data.name);
  //document.querySelector(h1).innerHTML = response.data.name;
}

function search(event) {
  event.preventDefault();
  let apiKey = "ed0417bf8fecd4ab27286ed64422cb0b";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}
//let form = document.querySelector("#search-form");
//form.addEventListener("submit", search);
