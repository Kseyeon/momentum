const API_KEY = '2784bfea1af7533a118122be05814d5d';

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

//브라우저에서 위치 좌표를 알 수 있음 <-- 브라우저 정책으로 인하여....https://에서만 사용가능
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);