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
exports.deleteMovieControllers = exports.listMovieController = exports.updateMovieControllers = exports.createMovieControllers = void 0;
const createMovies_service_1 = require("../services/createMovies.service");
const updateMovies_service_1 = require("../services/updateMovies.service");
const listUser_service_1 = require("../services/listUser.service");
const deleteMovies_service_1 = require("../services/deleteMovies.service");
const createMovieControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieData = req.body;
    const newMovie = yield (0, createMovies_service_1.createMoviesService)(movieData);
    return res.status(201).json(newMovie);
});
exports.createMovieControllers = createMovieControllers;
const updateMovieControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieData = req.body;
    const id = parseInt(req.params.id);
    const updateMovie = yield (0, updateMovies_service_1.updateMovieService)(movieData, id);
    return res.status(200).json(updateMovie);
});
exports.updateMovieControllers = updateMovieControllers;
const listMovieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 5;
    const order = req.query.order === "desc" || req.query.order === "asc"
        ? req.query.order
        : "asc";
    const sort = req.query.sort === "duration"
        ? "duration"
        : req.query.sort === "price"
            ? "price"
            : "id";
    const movies = yield (0, listUser_service_1.listMoviesService)(page, perPage, order, sort);
    return res.json(movies);
});
exports.listMovieController = listMovieController;
const deleteMovieControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const deleteMovie = yield (0, deleteMovies_service_1.deleteMoviesService)(id);
    return res.status(204).json(deleteMovie);
});
exports.deleteMovieControllers = deleteMovieControllers;
