"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const error_1 = require("./error");
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/movies", movies_routes_1.default);
app.use(error_1.handleErrors);
exports.default = app;
