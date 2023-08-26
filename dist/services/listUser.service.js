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
exports.listMoviesService = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const listMoviesService = (page, perPage, order, sort) => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = data_source_1.AppDataSource.getRepository(entities_1.Movie);
    let movies;
    let myPrevPage = `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`;
    if (page <= 1) {
        myPrevPage = null;
    }
    let numberIntPerPage = Number.isInteger(perPage);
    if (numberIntPerPage === false || perPage <= 0 || perPage > 5) {
        perPage = 5;
    }
    let numberInt = Number.isInteger(page);
    if (numberInt == false || page <= 0) {
        page = 1;
    }
    let orderObj = {};
    if (sort == "price") {
        orderObj = { price: order };
    }
    else if (sort == "duration") {
        orderObj = { duration: order };
    }
    const totalCount = yield movieRepository.count();
    let numberPages = totalCount / perPage;
    let myNextPage = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`;
    let numberPageInt = numberPages > Math.trunc(numberPages)
        ? Math.trunc(numberPages)
        : numberPages;
    if (page > numberPageInt) {
        myNextPage = null;
    }
    if (!sort) {
        movies = yield movieRepository.find({
            skip: (page - 1) * perPage,
            take: perPage,
        });
    }
    movies = yield movieRepository.find({
        skip: (page - 1) * perPage,
        take: perPage,
        order: orderObj,
    });
    const objReturnMovies = {
        prevPage: myPrevPage,
        nextPage: myNextPage,
        count: totalCount,
        data: movies,
    };
    return objReturnMovies;
});
exports.listMoviesService = listMoviesService;
