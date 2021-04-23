"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.Router();
routes.post('/users/create', UserController_1.default.create);
routes.get('/users', UserController_1.default.index);
routes.get('/users/:id', UserController_1.default.indexById);
routes.put('/update', UserController_1.default.update);
routes.delete('/users/:id', UserController_1.default.remove);
exports.default = routes;
