const apiKey = 'e3bec1ae7cd603a801e1bd5753542560';
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiSearch = document.querySelector('.input-city');
const apiBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('.weth-icon');


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".weth-temp").innerHTML = Math.round(data.main.temp) + ' °C';
  document.querySelector(".weth-city-name").innerHTML = data.name;
  document.querySelector(".humid").innerHTML = Math.round(data.main.humidity) + '%';
  document.querySelector(".wind-speed-p").innerHTML = data.wind.speed + ' km/h';

  if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = "images/clouds.png"
  } else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = "images/clear.png"
  }  else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = "images/drizzle.png"
  } else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = "images/mist.png"
  } else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = "images/rain.png"
  } else if (data.weather[0] == 'Snow'){
    weatherIcon.src = "images/snow.png"
  }

}

apiBtn.addEventListener('click', () => {
  checkWeather(apiSearch.value);
});


window.onload = () => {
  checkWeather('Mumbai');
};
