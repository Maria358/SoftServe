const appid = '66285dfd0cb8c73411dc50d09d160bc6';
const apiKey = '1552d33abfd342309016c69dc5f52692';

const country = document.querySelector('.country');
const city = document.querySelector('.city');
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const iconLocation = document.querySelector('.icon-location');
const description = document.querySelector('.description');
const pressure = document.querySelector('.pressure');
const visibility = document.querySelector('.visibility');
const humidity = document.querySelector('.humidity');
const tempMin = document.querySelector('.temp-min');
const tempMax = document.querySelector('.temp-max');
const speed = document.querySelector('.speed');
const deg = document.querySelector('.deg');
const gust = document.querySelector('.gust');
const feelings = document.querySelector('.feelings');

getDay();
setInterval(getTime, 1000);

$(document).ready(function () {
    $.get(
        `https://api.ipgeolocation.io/getip`, {},
        function (data) {
            $.get(
                `https://api.ipgeolocation.io/ipgeo?`,
                {
                    'apiKey': apiKey,
                    'ip': data.ip,    // 46.133.170.246 - Kyiv
                    'fields': 'geo'
                },
                function (data) {
                    country.innerHTML = `${data.country_name}, `;
                    city.innerHTML = data.city;
                    $.get(
                        `http://api.openweathermap.org/data/2.5/weather?`,
                        {
                            'lat': data.latitude,
                            'lon': data.longitude,
                            'appid': appid
                        },
                        function (data) {
                            const MAIN = data.main;
                            const WIND = data.wind;
                            iconLocation.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
                            tempMin.innerHTML = `${toCelsius(MAIN.temp_min)}/`;
                            tempMax.innerHTML = `${toCelsius(MAIN.temp_max)}`;
                            description.innerHTML = data.weather[0].description;
                            pressure.innerHTML = `${MAIN.pressure}mp`;
                            visibility.innerHTML = `${data.visibility / 1000}km`;
                            humidity.innerHTML = `${MAIN.humidity}%`;
                            speed.innerHTML = `${WIND.speed}mps`;
                            deg.innerHTML = `${WIND.deg}&#176;`;
                            gust.innerHTML = `${WIND.gust}mps`;
                            feelings.innerHTML = `${toCelsius(MAIN.feels_like)}`;
                        }
                    )
                }
            )
        }
    )

})

function getDay() {
    const now = new Date();
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    day.innerHTML = `${days[now.getDay()]}, `;
}
function getTime() {
    const now = new Date();

    const hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
    const min = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    time.textContent = `${hours}:${min}`;
}
function toCelsius(parameter) {
    return `${Math.trunc(parameter - 273)}&#176;`;
}












