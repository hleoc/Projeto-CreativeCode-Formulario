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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Connection_1 = __importDefault(require("./Connection"));
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        var user, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Connection_1.default];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, user.query('SELECT * FROM users')];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.rows];
            }
        });
    });
}
exports.findAll = findAll;
function createUser(nome, telefone, email, idade, peso, senha, etinia) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sql, values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Connection_1.default];
                case 1:
                    user = _a.sent();
                    sql = 'INSERT INTO users(nome, telefone, email, idade, peso, senha, etinia) VALUES ($1,$2,$3,$4,$5,$6,$7);';
                    values = [nome, telefone, email, idade, peso, senha, etinia];
                    return [4 /*yield*/, user.query(sql, values)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createUser = createUser;
function getByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var findEmail, sql, values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Connection_1.default];
                case 1:
                    findEmail = _a.sent();
                    sql = 'SELECT * FROM users WHERE email=$1;';
                    values = [email];
                    return [4 /*yield*/, findEmail.query(sql, values)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getByEmail = getByEmail;
function updateUser(nome, telefone, email, idade, peso, senha, etinia) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sql, values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Connection_1.default];
                case 1:
                    user = _a.sent();
                    sql = 'UPDATE users SET nome=$1, telefone=$2, email=$3, idade=$4, peso=$5, senha=$6, etinia=$7 WHERE id=id';
                    values = [nome, telefone, email, idade, peso, senha, etinia];
                    return [4 /*yield*/, user.query(sql, values)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateUser = updateUser;
function findOne(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Connection_1.default];
                case 1:
                    user = _a.sent();
                    sql = 'SELECT FROM users where id=$1;';
                    return [4 /*yield*/, user.query(sql, [id])];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.findOne = findOne;
function removeUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sql, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Connection_1.default];
                case 1:
                    user = _a.sent();
                    sql = 'DELETE FROM users where id=$1;';
                    return [4 /*yield*/, user.query(sql, [id])];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, console.error(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.removeUser = removeUser;
