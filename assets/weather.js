const apiKey = "3657ca914ddc15820f0d8ea438943ca8"
const apiKeyTwo = "e486a7d8b0b54203d41c260f6ded5efd" //this one did not work either...

var searchCityEl = document.querySelector('#searchCity');
var currentWeatherEl = document.querySelector('#currentWeather');
var forecastWeatherEl = document.querySelector('#forecastWeather');
var submitButton = document.querySelector('#submit');
var searchList = document.querySelector('ul');
var cityNameEl = document.getElementById('city-name');
var searchHistoryEl = document.querySelector('.search-history');
var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
for (let i = 0; i < 5; i++) {
var button = document.createElement('button');
  button.textContent = searchedCities[i];
  button.value = searchedCities[i];
  searchHistoryEl.appendChild(button);
  button.addEventListener('click',fetchWeather);
}
  
var submitSearch = function (event) {
  event.preventDefault();
  console.log(event.target.value)
  
  
    var searchCity = searchCityEl.value;
    if (searchedCities.includes(searchCity)) {
      return;
    }
    else {
      searchedCities.push(searchCity);
    }
  
  localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
  

  console.log(searchCity);
  fiveDayForcast(searchCity);
}
function fetchWeather(event) {
  fiveDayForcast(event.target.value);

}
function fiveDayForcast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(function (response) {
      return response.json() //convert to json response
    })
    .then(function (data) {
      console.log(data);
  var forecastBoxEl = document.querySelector(".weather-forcast")
  // clear element so we don't append each time we run it
  forecastBoxEl.innerHTML = ''
      for (var i = 0; i < 5; i++) {
        //create the three elements within the HTML structure to house the forecast data:
        var dailyTempEl = document.createElement("h3")
        var dailyWindEl = document.createElement("h3")
        var dailyHumidityEl = document.createElement("h3")
      
        dailyTempEl.textContent = "Temperature: " + Math.floor(((data.list[i*8].main.temp-273.15)*1.8)+32) + " °F";
        forecastBoxEl.appendChild(dailyTempEl)
        dailyWindEl.textContent = "Wind: " + data.list[i*8].wind.speed + " mph";
        forecastBoxEl.appendChild(dailyWindEl)
        dailyHumidityEl.textContent = "Humidity: " + data.list[i*8].main.humidity + " %";
        forecastBoxEl.appendChild(dailyHumidityEl)
      } 
  })
}


submitButton.addEventListener('click', submitSearch);


