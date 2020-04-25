"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_helpers_1 = require("../bcrypt/bcrypt.helpers");
const config_main_1 = __importDefault(require("../config/config.main"));
const refresh_token_errors_1 = require("./refresh-token.errors");
exports.generateRefreshToken = async () => {
    const token = crypto
        .randomBytes(config_main_1.default.auth.refreshToken.length).toString('hex');
    const hashedToken = await bcrypt_helpers_1.hashString(token);
    return {
        refreshToken: token,
        refreshTokenHash: hashedToken,
        createdAt: new Date().toISOString(),
    };
};
exports.generateAccessToken = (payload) => {
    const { id, email, role } = payload;
    if (!id || !email || !role) {
        throw new Error(refresh_token_errors_1.errors.INVALID_PAYLOAD_INFORMATION);
    }
    const jwtPayload = { id, email, role };
    return jwt.sign(jwtPayload, config_main_1.default.jwt.secret, { expiresIn: config_main_1.default.jwt.expiresIn });
};
exports.generateAuthTokens = async (payload = {}) => {
    const accessToken = await exports.generateAccessToken(payload);
    const { expiresIn } = config_main_1.default.jwt;
    return {
        accessToken,
        expiresIn,
    };
};
//# sourceMappingURL=refresh-token.helpers.js.map