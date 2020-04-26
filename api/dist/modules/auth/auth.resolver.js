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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_provider_1 = require("../user/user.provider");
const graphql_ctx_utils_1 = require("../graphql/graphql.ctx.utils");
const auth_input_1 = require("./auth.input");
const auth_model_1 = require("./auth.model");
const auth_provider_1 = require("./auth.provider");
let AuthResolver = class AuthResolver {
    constructor(_authProvider, _userProvider) {
        this._authProvider = _authProvider;
        this._userProvider = _userProvider;
    }
    async login(input, ctx) {
        const { username, password } = input;
        const user = await this._authProvider.validateUserLogin(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const { accessToken, refreshToken } = await this._authProvider.login(user);
        graphql_ctx_utils_1.setAuthHeaders(ctx, { accessToken, refreshToken });
        return {
            user,
            accessToken,
            refreshToken,
        };
    }
};
__decorate([
    graphql_1.Mutation((returns) => auth_model_1.AuthResponse, { name: 'login' }),
    __param(0, graphql_1.Args('input')),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_input_1.ILogin, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
AuthResolver = __decorate([
    graphql_1.Resolver((of) => auth_model_1.AuthResponse),
    __metadata("design:paramtypes", [auth_provider_1.AuthProvider,
        user_provider_1.UserProvider])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map