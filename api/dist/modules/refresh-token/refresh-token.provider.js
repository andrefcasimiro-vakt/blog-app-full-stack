"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_helpers_1 = require("../bcrypt/bcrypt.helpers");
const config_main_1 = __importDefault(require("../config/config.main"));
const refresh_token_entity_1 = require("./refresh-token.entity");
const refresh_token_helpers_1 = require("./refresh-token.helpers");
let RefreshTokenProvider = class RefreshTokenProvider {
    constructor(_refreshTokenRepository) {
        this._refreshTokenRepository = _refreshTokenRepository;
    }
    async createRefreshToken(user) {
        const newRefreshData = await refresh_token_helpers_1.generateRefreshToken();
        const { limit } = config_main_1.default.auth.refreshToken;
        const refreshTokens = await this._refreshTokenRepository
            .find({
            where: [{ user }],
            order: { id: 'DESC' },
        });
        const extraRefreshTokens = refreshTokens.slice(limit - 1);
        if (extraRefreshTokens.length) {
            extraRefreshTokens.forEach(async (extraRefreshToken) => {
                await this._refreshTokenRepository
                    .delete({
                    id: extraRefreshToken.id,
                });
            });
        }
        const newRefreshToken = await this._refreshTokenRepository
            .save({
            hash: newRefreshData.refreshTokenHash,
            user,
        });
        const { separator } = config_main_1.default.auth.refreshToken;
        return `${newRefreshToken.id}${separator}${newRefreshData.refreshToken}`;
    }
    async isValidRefreshToken(userId, refreshTokenPayload) {
        const { separator } = config_main_1.default.auth.refreshToken;
        if (refreshTokenPayload.indexOf(separator) === -1) {
            return false;
        }
        const [refreshTokenId, refreshTokenHash] = refreshTokenPayload.split(separator);
        if (isNaN(refreshTokenId)) {
            return false;
        }
        if (!Number.isInteger(parseFloat(refreshTokenId))) {
            return false;
        }
        const refreshTokenInDatabase = await this._refreshTokenRepository
            .findOne({
            where: [
                { userId },
                { id: refreshTokenId },
            ],
        });
        if (!refreshTokenInDatabase) {
            return false;
        }
        const isValidHash = await bcrypt_helpers_1.compareHashed(refreshTokenHash, refreshTokenInDatabase.hash);
        return isValidHash;
    }
};
RefreshTokenProvider = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RefreshTokenProvider);
exports.RefreshTokenProvider = RefreshTokenProvider;
//# sourceMappingURL=refresh-token.provider.js.map