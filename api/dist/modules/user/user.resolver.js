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
const ramda_1 = require("ramda");
const graphql_guard_1 = require("../graphql/graphql.guard");
const user_model_1 = require("./user.model");
const user_provider_1 = require("./user.provider");
const auth_helpers_1 = require("../auth/auth.helpers");
const auth_model_1 = require("../auth/auth.model");
const bcrypt_helpers_1 = require("../bcrypt/bcrypt.helpers");
const current_user_1 = require("../graphql/decorators/current-user");
const user_inputs_1 = require("./user.inputs");
let UserResolver = class UserResolver {
    constructor(_userProvider) {
        this._userProvider = _userProvider;
    }
    whoAmI(user) {
        return this._userProvider.findById(user.id);
    }
    async findById(id) {
        const user = await this._userProvider.findById(id);
        if (!user) {
            throw new common_1.NotFoundException(id);
        }
        return user;
    }
    async findByUsername(username) {
        const user = await this._userProvider.findByUsername(username);
        if (!user) {
            throw new common_1.NotFoundException(username);
        }
        return user;
    }
    async listUsers() {
        return this._userProvider.listUsers();
    }
    async updateUser(input) {
        const user = await this._userProvider.findById(input.id);
        if (!user) {
            throw new common_1.ConflictException(`User with id: ${input.id} could not be found.`);
        }
        if (input.password) {
            const hashedPassword = await bcrypt_helpers_1.hashString(input.password);
            input.password = hashedPassword;
        }
        const filteredInput = ramda_1.reject(ramda_1.equals('') || ramda_1.isEmpty)(input);
        await this._userProvider.updateUser(filteredInput);
        return {
            id: user.id,
        };
    }
    async createUser(input, ctx) {
        const { username, email, password, role, isActive } = input;
        const user = await this._userProvider.findByUsername(username);
        if (user) {
            throw new common_1.ConflictException("Username is already registered");
        }
        auth_helpers_1.checkPassword(password);
        const hashedPassword = await bcrypt_helpers_1.hashString(password);
        const createdUser = await this._userProvider.createUser(username, email, hashedPassword, role, isActive);
        return createdUser;
    }
};
__decorate([
    graphql_1.Query(returns => user_model_1.User, { name: 'whoAmI' }),
    common_1.UseGuards(graphql_guard_1.GqlAuthGuard),
    __param(0, current_user_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.AuthUser]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "whoAmI", null);
__decorate([
    graphql_1.Query(returns => user_model_1.User, { name: 'getUserById' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findById", null);
__decorate([
    graphql_1.Query(returns => user_model_1.User, { name: 'getUserByUsername' }),
    __param(0, graphql_1.Args('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findByUsername", null);
__decorate([
    graphql_1.Query(returns => [user_model_1.User], { name: 'listUsers' }),
    common_1.UseGuards(graphql_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "listUsers", null);
__decorate([
    graphql_1.Mutation(returns => user_model_1.User, { name: 'updateUser' }),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputs_1.IUpdateUser]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(returns => user_model_1.User, { name: 'createUser' }),
    __param(0, graphql_1.Args('input')),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputs_1.ICreateUser, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => user_model_1.User),
    __metadata("design:paramtypes", [user_provider_1.UserProvider])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map