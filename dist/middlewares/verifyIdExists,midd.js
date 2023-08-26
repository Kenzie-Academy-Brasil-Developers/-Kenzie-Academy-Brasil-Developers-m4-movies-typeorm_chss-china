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
exports.verifyIdMidd = void 0;
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const error_1 = require("../error");
function verifyIdMidd(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const movieRepository = data_source_1.AppDataSource.getRepository(entities_1.Movie);
        const id = parseInt(req.params.id);
        const movie = yield movieRepository.findOne({
            where: { id: id },
        });
        if (!movie) {
            throw new error_1.AppError("Movie not found", 404);
        }
        next();
    });
}
exports.verifyIdMidd = verifyIdMidd;
