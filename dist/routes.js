"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var EnderecoController_1 = __importDefault(require("./controllers/EnderecoController"));
var LoginController_1 = __importDefault(require("./controllers/LoginController"));
var Auth_1 = __importDefault(require("./middleware/Auth"));
var routes = express_1.Router();
routes.post('/users/create', UserController_1.default.create);
routes.post('/users/login', LoginController_1.default.login);
routes.get('/users', Auth_1.default, UserController_1.default.index);
routes.get('/users/:id', Auth_1.default, UserController_1.default.indexById);
routes.put('/users/update', Auth_1.default, UserController_1.default.update);
routes.delete('/users/delete/:id', Auth_1.default, UserController_1.default.remove);
routes.post('/endereco/create', Auth_1.default, EnderecoController_1.default.create);
routes.get('/endereco', Auth_1.default, EnderecoController_1.default.index);
routes.get('/endereco/:id', Auth_1.default, EnderecoController_1.default.indexById);
routes.put('/endereco/update', Auth_1.default, EnderecoController_1.default.update);
routes.delete('/endereco/delete/:id', Auth_1.default, EnderecoController_1.default.remove);
exports.default = routes;
