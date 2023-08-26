"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataIsValidMidd = void 0;
const dataIsValidMidd = (schema) => (req, res, next) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;
    return next();
};
exports.dataIsValidMidd = dataIsValidMidd;
