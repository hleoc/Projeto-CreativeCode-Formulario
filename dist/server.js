"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import routes from './routes';
var app = express_1.default();
app.use(express_1.default.json());
// app.use(routes);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("A CreativeCode est\u00E1 ON na porta " + PORT);
});
