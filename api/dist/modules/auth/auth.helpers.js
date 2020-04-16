"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_main_1 = __importDefault(require("../config/config.main"));
const apollo_server_express_1 = require("apollo-server-express");
exports.checkPassword = (password = '') => {
    const minimumPasswordLength = config_main_1.default.auth.password.minimumLength;
    if (password.length < minimumPasswordLength) {
        throw new apollo_server_express_1.ValidationError(`Password too small. Please provide a password with a minimum of ${minimumPasswordLength} characters.`);
    }
    if (!/\d/.test(password)) {
        throw new apollo_server_express_1.ValidationError(`Password must contain a number`);
    }
    if (!/([A-Za-z]+)/.test(password)) {
        throw new apollo_server_express_1.ValidationError(`Password must contain a character`);
    }
};
//# sourceMappingURL=auth.helpers.js.map