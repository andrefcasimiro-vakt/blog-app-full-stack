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
const jwt_guard_1 = require("../jwt/jwt.guard");
const user_enum_1 = require("../user/user.enum");
const user_provider_1 = require("../user/user.provider");
const auth_provider_1 = require("./auth.provider");
let AuthGuard = class AuthGuard {
    constructor(_authProvider) {
        this._authProvider = _authProvider;
    }
    async canActivate(context) {
        const gqlCtx = graphql_1.GqlExecutionContext.create(context);
        const req = gqlCtx.getContext().req;
        const user = await this._authProvider.validateUser(req);
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthGuard = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(auth_provider_1.AuthProvider)),
    __metadata("design:paramtypes", [auth_provider_1.AuthProvider])
], AuthGuard);
exports.AuthGuard = AuthGuard;
let AdminAuthGuard = class AdminAuthGuard extends jwt_guard_1.JwtGuard {
    constructor(_userProvider) {
        super();
        this._userProvider = _userProvider;
    }
    async canActivate(context) {
        var _a;
        const gqlCtx = graphql_1.GqlExecutionContext.create(context);
        const req = gqlCtx.getContext().req;
        const username = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.username;
        const user = await this._userProvider.findByUsername(username);
        if (!user) {
            return false;
        }
        if (user.role === user_enum_1.UserRole.ADMIN) {
            return true;
        }
        else {
            return false;
        }
    }
};
AdminAuthGuard = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(user_provider_1.UserProvider)),
    __metadata("design:paramtypes", [user_provider_1.UserProvider])
], AdminAuthGuard);
exports.AdminAuthGuard = AdminAuthGuard;
//# sourceMappingURL=auth.guard.js.map