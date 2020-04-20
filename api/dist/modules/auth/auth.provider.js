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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_provider_1 = require("../user/user.provider");
const user_model_1 = require("../user/user.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_helpers_1 = require("../bcrypt/bcrypt.helpers");
const refresh_token_provider_1 = require("../refresh-token/refresh-token.provider");
let AuthProvider = class AuthProvider {
    constructor(userProvider, jwtProvider, refreshTokenProvider) {
        this.userProvider = userProvider;
        this.jwtProvider = jwtProvider;
        this.refreshTokenProvider = refreshTokenProvider;
    }
    async validateUser(username, pwd) {
        const user = await this.userProvider.findByUsername(username);
        if (!user) {
            return null;
        }
        const passwordsMatch = bcrypt_helpers_1.compareHashed(pwd, user.password);
        if (!passwordsMatch) {
            return null;
        }
        const { password } = user, result = __rest(user, ["password"]);
        return user;
    }
    async login(user) {
        const payload = { username: user.username, id: user.id };
        const accessToken = this.jwtProvider.sign(payload);
        const refreshToken = await this.refreshTokenProvider
            .createRefreshToken(user);
        await this.userProvider.updateLastLoginAt(user.id);
        return {
            user,
            accessToken,
            refreshToken,
        };
    }
};
AuthProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_provider_1.UserProvider,
        jwt_1.JwtService,
        refresh_token_provider_1.RefreshTokenProvider])
], AuthProvider);
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth.provider.js.map