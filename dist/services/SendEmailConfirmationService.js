"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = __importStar(require("nodemailer"));
var config_1 = __importDefault(require("../config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SendEmailConfirmationService = /** @class */ (function () {
    function SendEmailConfirmationService(user, to, subject, message) {
        this.user = user;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    SendEmailConfirmationService.prototype.sendMail = function () {
        var _this = this;
        var transporter = nodemailer.createTransport({
            host: config_1.default.host,
            port: config_1.default.port,
            secure: false,
            auth: {
                user: config_1.default.user,
                pass: config_1.default.pass
            },
            tls: { rejectUnauthorized: false }
        });
        jsonwebtoken_1.default.sign({
            email: this.to
        }, "" + config_1.default.secret, {
            subject: this.user,
            expiresIn: "1d"
        }, function (err, emailToken) {
            var url = config_1.default.baseurl + "confirmation/" + emailToken;
            var mailConfirmation = {
                from: config_1.default.from,
                to: _this.to,
                subject: "Confirm Email",
                html: "Please click this email to confirm your email: <a href=\"" + url + "\"> Click here</a>"
            };
            console.log(mailConfirmation);
            transporter.sendMail(mailConfirmation, function (error, info) {
                if (error) {
                    return error;
                }
                else {
                    return "E-mail successfully sent.";
                }
            });
        });
    };
    return SendEmailConfirmationService;
}());
exports.default = new SendEmailConfirmationService;
