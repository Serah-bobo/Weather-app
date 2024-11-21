import { Request, Response } from "express";
 const apiKey='1c8d3e53e506d41d4ce5f96c35804e79';

 export const getWeather = async (req: Request, res: Response) => {
   const {city} = req.params; // Get city from route params
   try {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
       if (!response.ok) {
         throw new Error(`city not found: ${city}`);

       }
       const data=await response.json()
       const weatherData={
        city:data.name,
        temperature:`${data.main.temp}°C`,
        icon:`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        minTemperature:`${data.main.temp_min}°C`,
        maxTemperature:`${data.main.temp_max}°C`,
        pressure:`${data.main.pressure} hPa`,
        description:data.weather[0].description,
        humidity:`${data.main.humidity}%`,
        windSpeed:`${data.wind.speed} m/s`
       }
       res.json(weatherData);

   } catch (error) {
     console.error(error);
     res.status(500).json({error:"unable to fetch data"})
   }

  } 