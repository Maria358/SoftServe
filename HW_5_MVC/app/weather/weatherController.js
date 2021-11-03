import WeatherView from './weatherView.js';
import WeatherModel from './weatherModel.js';

export default class WeatherController {
    constructor() {
        this.view = new WeatherView();
        this.model = new WeatherModel();
    }

    async init() {
        const data = await this.model.getWeather();
        const locationData = await this.model.getLocation();
        const dateInfo = this.model.getDateInfo();
        this.view.render(data, locationData, dateInfo);
    }
}