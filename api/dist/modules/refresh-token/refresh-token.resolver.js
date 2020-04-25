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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_guard_1 = require("../graphql/graphql.guard");
const user_provider_1 = require("../user/user.provider");
const refresh_token_errors_1 = require("./refresh-token.errors");
const refresh_token_helpers_1 = require("./refresh-token.helpers");
const refresh_token_model_1 = require("./refresh-token.model");
const refresh_token_provider_1 = require("./refresh-token.provider");
let RefreshTokenResolver = class RefreshTokenResolver {
    constructor(_userProvider, _refreshTokenProvider) {
        this._userProvider = _userProvider;
        this._refreshTokenProvider = _refreshTokenProvider;
    }
    async authenticateRefreshToken(payload) {
        const { email, refreshToken } = payload;
        const user = await this._userProvider
            .findByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(refresh_token_errors_1.errors.EMAIL_NOT_FOUND);
        }
        const isMatchBetweenTokens = await this._refreshTokenProvider
            .isValidRefreshToken(user.id, refreshToken);
        if (!isMatchBetweenTokens) {
            throw new common_1.NotFoundException(refresh_token_errors_1.errors.INVALID_REFRESH_TOKEN);
        }
        return await refresh_token_helpers_1.generateAuthTokens(user);
    }
};
__decorate([
    graphql_1.Query(returns => refresh_token_model_1.RefreshToken, { name: 'authenticateRefreshToken' }),
    common_1.UseGuards(graphql_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RefreshTokenResolver.prototype, "authenticateRefreshToken", null);
RefreshTokenResolver = __decorate([
    graphql_1.Resolver(of => refresh_token_model_1.RefreshToken),
    __metadata("design:paramtypes", [user_provider_1.UserProvider,
        refresh_token_provider_1.RefreshTokenProvider])
], RefreshTokenResolver);
exports.RefreshTokenResolver = RefreshTokenResolver;
//# sourceMappingURL=refresh-token.resolver.js.map