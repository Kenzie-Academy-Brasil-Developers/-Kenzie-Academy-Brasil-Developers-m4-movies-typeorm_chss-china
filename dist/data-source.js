"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const DataSourceConfig = () => {
    const entitiesPath = path_1.default.join(__dirname, "entities/**.{js,ts}");
    const migrationsPath = path_1.default.join(__dirname, "migrations/**.{js,ts}");
    if (process.env.NODE_ENV === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }
    if (!process.env.DATABASE_URL) {
        throw new Error("Env var DATABASE_URL does not exists ");
    }
    if (process.env.NODE_ENV === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        };
    }
    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};
const AppDataSource = new typeorm_1.DataSource(DataSourceConfig());
exports.AppDataSource = AppDataSource;
