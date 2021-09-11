"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        crypto_1.default.randomBytes(16, function (err, hash) {
            if (err) {
                cb(err, 'Error');
            }
            var fileName = hash.toString('hex') + "-" + file.originalname;
            cb(null, fileName);
        });
    }
});
var uploads = multer_1.default({ storage: storage });
exports.default = uploads;
