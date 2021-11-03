export default class WeatherView {
    domStr = [
        { name: 'country', selector: '.country' },
        { name: 'city', selector: '.city' },
        { name: 'day', selector: '.day' },
        { name: 'time', selector: '.time' },
        { name: 'iconLocation', selector: '.icon-location' },
        { name: 'description', selector: '.description' },
        { name: 'pressure', selector: '.pressure' },
        { name: 'visibility', selector: '.visibility' },
        { name: 'humidity', selector: '.humidity' },
        { name: 'tempMin', selector: '.temp-min' },
        { name: 'tempMax', selector: '.temp-max' },
        { name: 'speed', selector: '.speed' },
        { name: 'deg', selector: '.deg' },
        { name: 'gust', selector: '.gust' },
        { name: 'feelings', selector: '.feelings' }
    ];

    linkDOMElements() {
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(`${selector}`);
            return acc;
        }, {});
        this.data = this.dom;
        return this.data;
    }

    constructor() {
        this.linkDOMElements();
    }

    render(data, { city, country_name }, { hours, min, day }) {
        this.dom.time.innerText = `${hours}:${min}`;

        const MAIN = data.main;
        const WIND = data.wind;

        this.dom.country.innerText = country_name;
        this.dom.city.innerText = city;
        this.dom.iconLocation.innerHTML = data.imgLink;
        this.dom.tempMin.innerHTML = `${MAIN.temp_min}&#176;/`;
        this.dom.tempMax.innerHTML = `${MAIN.temp_max}&#176;`;
        this.dom.description.innerText = data.weather[0].description;
        this.dom.pressure.innerHTML = `${MAIN.pressure}mp`;
        this.dom.visibility.innerHTML = `${data.visibility / 1000}km`;
        this.dom.humidity.innerHTML = `${MAIN.humidity}%`;
        this.dom.speed.innerHTML = `${WIND.speed}mps`;
        this.dom.deg.innerHTML = `${WIND.deg}&#176;`;
        this.dom.gust.innerHTML = `${WIND.gust}mps`;
        this.dom.feelings.innerHTML = `${MAIN.feels_like}&#176;`;
        this.dom.day.innerHTML = `${day}, `;
    }
}