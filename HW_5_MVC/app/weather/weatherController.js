import WeatherModule from './weatherModule.js';
import WeatherView from './weatherView.js';

export default class WeatherController {
    constructor() {
        this.view = new WeatherView();
        this.module = new WeatherModule();
    }

    async init() {
        const data = await this.module.getWeather();
        const locationData = await this.module.getLocation();
        const dateInfo = this.module.getDateInfo();
        this.view.render(data, locationData, dateInfo);
    }
}