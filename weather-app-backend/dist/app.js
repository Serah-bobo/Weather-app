"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//define various routes for handling requests
const dotenv_1 = __importDefault(require("dotenv")); //This package is used for loading environment variables (such as API keys) from a .env file into the application.
const cors_1 = __importDefault(require("cors")); //Cross-Origin Resource Sharing (CORS) is needed to allow your API to be accessed from different domains.middleware modules eg frontend
const weatherRoutes_1 = __importDefault(require("./routes/weatherRoutes"));
dotenv_1.default.config(); //load environment variables and makes it accessible to process.env
const app = (0, express_1.default)();
//instance of express app define routes,middlewares
app.use((0, cors_1.default)()); //use cors middleware
app.use(express_1.default.json()); //convert the json data in the request body into js object
app.use("/weather", weatherRoutes_1.default);
exports.default = app;
