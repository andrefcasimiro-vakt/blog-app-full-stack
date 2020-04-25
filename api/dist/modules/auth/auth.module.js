"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_main_1 = __importDefault(require("../config/config.main"));
const jwt_strategy_1 = require("../jwt/jwt.strategy");
const refresh_token_module_1 = require("../refresh-token/refresh-token.module");
const user_module_1 = require("../user/user.module");
const auth_provider_1 = require("./auth.provider");
const auth_resolver_1 = require("./auth.resolver");
const auth_strategy_1 = require("./auth.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            refresh_token_module_1.RefreshTokenModule,
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: config_main_1.default.jwt.secret,
                signOptions: {
                    expiresIn: `${config_main_1.default.jwt.expiresIn}h`,
                },
            }),
        ],
        providers: [auth_resolver_1.AuthResolver, auth_provider_1.AuthProvider, auth_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map