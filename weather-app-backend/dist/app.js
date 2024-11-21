"use strict";
//in rest apis we have routing responsible for mapping http requests eg GET to a logic
//controllers separate the logic of routes to keep the code clean
//middleware process requests before they reach route handler
//nodemon automatically restarts the server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // Initialize Express app
const port = 3000; // Define the port
// Middleware to parse JSON
app.use(express_1.default.json());
// Create an array of items
const items = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "orange" },
];
// Route to fetch all items
app.get("/api/items", (req, res) => {
    res.json(items);
});
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
