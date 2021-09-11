"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Config = /** @class */ (function () {
    function Config() {
        this.host = process.env.HOST_SMTP;
        this.port = Number(process.env.PORT_SMTP);
        this.user = process.env.USER_SMTP;
        this.pass = process.env.PASS_SMTP;
        this.from = process.env.EMAIL_FROM;
        this.baseurl = process.env.BASE_URL;
        this.secret = String(process.env.SECRET);
    }
    return Config;
}());
exports.default = new Config;
