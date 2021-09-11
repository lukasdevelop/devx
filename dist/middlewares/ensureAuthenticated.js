"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = __importDefault(require("../config"));
function ensureAuthenticated(request, response, next) {
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, config_1.default.secret).sub;
        //request.user_id = sub
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
