const url = "https://api.openweathermap.org/data/2.5/";

const key = "59e691b5589dfc00c976f6411ada97e9";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  // console.log(result);
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temperature = document.querySelector(".temperature");
  temperature.innerText = `${Math.round(result.main.temp)}°C`;

  let description = document.querySelector(".description");
  description.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
