#!/usr/bin/env node

import { getWeather } from "./weather.js";

const displayWeatherInfo = async () => {
    const weatherLocationInfo = await getWeather();

    console.log("================")
    console.log("CheckWeatherCLI")
    console.log("===============")

    console.log(`\n${weatherLocationInfo.country}, ${weatherLocationInfo.city}`)
    console.log(weatherLocationInfo.time);
    console.log(`\nTemperature: ${weatherLocationInfo.temperature}`);
    console.log(`Wind speed: ${weatherLocationInfo.windSpeed} km/h`);

}

displayWeatherInfo();