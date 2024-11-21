
import { getWeather } from "../controllers/weatherController"; // Import the controller function
import { Router } from "express";
const router = Router();

// Define the route for getting weather data by city
router.get('/:city',getWeather)
  

export default router; // Export the router
