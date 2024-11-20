"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const getWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.query.city; // Get city from query params
    // TypeScript will help ensure that the 'city' variable is treated as a string.
    // Check if city parameter is provided
    if (!city) {
        return res.status(400).json({ message: "City is required" });
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);
        // Handle non-200 status codes
        if (!response.ok) {
            return res.status(500).json({ message: "Failed to fetch weather data" });
        }
        const weatherData = yield response.json();
        // Send weather data in the response
        res.json({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            condition: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: "Error fetching weather data", error: err });
    }
});
exports.getWeather = getWeather;
