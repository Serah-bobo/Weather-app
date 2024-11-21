//in rest apis we have routing responsible for mapping http requests eg GET to a logic
//controllers separate the logic of routes to keep the code clean
//middleware process requests before they reach route handler
//nodemon automatically restarts the server

import express from "express";
import cors from "cors";
import weatherRoutes from './routes/weatherRoutes'
const app = express(); // Initialize Express app
const port = 5000; // Define the port

// Middleware to parse JSON
app.use(express.json());
app.use(cors())
//routes
app.use('/api/weather', weatherRoutes)

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
});

