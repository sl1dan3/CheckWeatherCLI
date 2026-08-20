import { getUserLocation as userLocationInfo} from "./location.js"

const getWeather = async () => {
    try {
        const { latitude, longitude } = await userLocationInfo();

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Failed to get the weather")
        }

        const weatherData = await response.json()

        const currentTime = weatherData.current.time.replace("T", " ");
        const currentTemperature = weatherData.current.temperature_2m + weatherData.current_units.temperature_2m ;
        const currentWindSpeed = weatherData.current.wind_speed_10m;

        return {
            time: currentTime,
            temperature: currentTemperature,
            windSpeed: currentWindSpeed,
        }
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export {getWeather};