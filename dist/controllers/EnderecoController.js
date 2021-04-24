"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco_1 = require("../schemas/Endereco");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, idUser, endereco, numero, complemento, cep, cidade, estado, newAddress, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, idUser = _a.idUser, endereco = _a.endereco, numero = _a.numero, complemento = _a.complemento, cep = _a.cep, cidade = _a.cidade, estado = _a.estado;
                        return [4 /*yield*/, Endereco_1.createAddress(idUser, endereco, numero, complemento, cep, cidade, estado)];
                    case 1:
                        newAddress = _b.sent();
                        return [2 /*return*/, res.status(201).json(newAddress)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(500).json({ message: 'Algo deu errado.' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var address, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Endereco_1.findAll()];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, res.json(address)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ message: 'Algo deu errado.' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressController.prototype.indexById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, address, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, Endereco_1.findOneAddress(Number(id))];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, res.status(200).json(address)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ message: 'Algo deu errado.' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, idUser, endereco, numero, complemento, cep, cidade, estado, editAddress, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, idUser = _a.idUser, endereco = _a.endereco, numero = _a.numero, complemento = _a.complemento, cep = _a.cep, cidade = _a.cidade, estado = _a.estado;
                        return [4 /*yield*/, Endereco_1.updateAddress(idUser, endereco, numero, complemento, cep, cidade, estado)];
                    case 1:
                        editAddress = _b.sent();
                        return [2 /*return*/, res.status(201).json(editAddress)];
                    case 2:
                        error_4 = _b.sent();
                        return [2 /*return*/, res.status(500).json({ message: 'Algo deu errado.' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressController.prototype.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, address, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, Endereco_1.removeAddress(Number(id))];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, res.status(200).json(address)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ message: 'Algo deu errado.' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AddressController;
}());
exports.default = new AddressController();
