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
const auth_model_1 = require("./auth.model");
const user_provider_1 = require("../user/user.provider");
const auth_provider_1 = require("./auth.provider");
const auth_helpers_1 = require("./auth.helpers");
const bcrypt_helpers_1 = require("../bcrypt/bcrypt.helpers");
const graphql_ctx_utils_1 = require("../graphql/graphql.ctx.utils");
let AuthResolver = class AuthResolver {
    constructor(authProvider, userProvider) {
        this.authProvider = authProvider;
        this.userProvider = userProvider;
    }
    async login(username, password, ctx) {
        const user = await this.authProvider.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const { accessToken, refreshToken } = await this.authProvider.login(user);
        graphql_ctx_utils_1.setAuthHeaders(ctx, { accessToken, refreshToken });
        return {
            user,
            accessToken,
            refreshToken,
        };
    }
    async createAccount(username, email, password, ctx) {
        const user = await this.userProvider.findByUsername(username);
        if (user) {
            throw new common_1.ConflictException("Username is already registered");
        }
        auth_helpers_1.checkPassword(password);
        const hashedPassword = await bcrypt_helpers_1.hashString(password);
        const createdUser = await this.userProvider.createUser(username, email, hashedPassword);
        const { accessToken, refreshToken } = await this.authProvider.login(createdUser);
        graphql_ctx_utils_1.setAuthHeaders(ctx, { accessToken, refreshToken });
        return {
            user,
            accessToken,
            refreshToken,
        };
    }
};
__decorate([
    graphql_1.Mutation(returns => auth_model_1.AuthResponse, { name: 'login' }),
    __param(0, graphql_1.Args('username')),
    __param(1, graphql_1.Args('password')),
    __param(2, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(returns => auth_model_1.AuthResponse, { name: 'createAccount' }),
    __param(0, graphql_1.Args('username')),
    __param(1, graphql_1.Args('email')),
    __param(2, graphql_1.Args('password')),
    __param(3, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "createAccount", null);
AuthResolver = __decorate([
    graphql_1.Resolver(of => auth_model_1.AuthResponse),
    __metadata("design:paramtypes", [auth_provider_1.AuthProvider,
        user_provider_1.UserProvider])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map