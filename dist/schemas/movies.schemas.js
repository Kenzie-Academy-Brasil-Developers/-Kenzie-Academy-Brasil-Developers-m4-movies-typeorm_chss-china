"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieSchema = exports.movieSchemaRequest = exports.movieSchema = void 0;
const zod_1 = require("zod");
const movieSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(50),
    description: zod_1.z.string().nullish().optional(),
    duration: zod_1.z.number().positive(),
    price: zod_1.z.number().int(),
});
exports.movieSchema = movieSchema;
const movieSchemaRequest = movieSchema.omit({ id: true });
exports.movieSchemaRequest = movieSchemaRequest;
const updateMovieSchema = movieSchema.partial().omit({
    id: true,
});
exports.updateMovieSchema = updateMovieSchema;
