"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    try {
        var token = req.headers.authorization;
        if (!token)
            return res.status(401).json({ message: 'missing auth token' });
        var t = token.replace('Bearer', '').trim();
        var payload = jsonwebtoken_1.default.verify(token, 'secret');
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: error.message });
    }
}
exports.default = auth;
;
