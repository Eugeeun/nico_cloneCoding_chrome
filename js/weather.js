const API_key = `b76a3d924c91e7b28b68d284f076aeae`;

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      weather.innerText = `${data.weather[0].main} ${Math.round(
        data.main.temp
      )}℃`;
    });
}
function onGeoError() {
  alert(`can't find you no weather for you`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
