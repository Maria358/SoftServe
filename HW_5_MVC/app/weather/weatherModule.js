export default class WeatherModule {
    weatherId = '66285dfd0cb8c73411dc50d09d160bc6';
    locationKey = 'dfde8c55bfb3450aa449e65d86aa6a80';
    geoAPI = 'https://api.ipgeolocation.io/ipgeo';
    weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';

    getIP = async () => {
        const ipResponse = await fetch('https://api.ipgeolocation.io/getip')
        const data = await ipResponse.json()
        return data;
    }

    getLocation = async () => {
        const { ip } = await this.getIP();
        const geoResponse = await fetch(`${this.geoAPI}?g=${ip}&apiKey=${this.locationKey}&fields=geo`)
        const data = await geoResponse.json()
        return data;
    }

    async getWeather() {
        const { latitude } = await this.getLocation();
        const { longitude } = await this.getLocation();
        const weatherResponse = await fetch(`${this.weatherAPI}?lat=${latitude}&lon=${longitude}&appid=${this.weatherId}`);
        this.data = await weatherResponse.json();
        this.data = this.formatWeather(this.data);
        return this.data;
    }

    formatWeather(data) {
        data.main.temp_max = Math.trunc(data.main.temp_max) - 273;
        data.main.temp_min = Math.trunc(data.main.temp_min) - 273;
        data.main.feels_like = Math.trunc(data.main.feels_like) - 273;
        data.imgLink = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
        return data;
    }

    getDateInfo() {
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

        const hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
        const min = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const day = days[now.getDay()];

        return { hours, min, day }
    }

}