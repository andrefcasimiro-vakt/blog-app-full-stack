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
const graphql_1 = require("@nestjs/graphql");
const user_enum_1 = require("../user/user.enum");
const graphql_model_1 = require("../graphql/graphql.model");
let AuthUser = class AuthUser extends graphql_model_1.Model {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthUser.prototype, "username", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthUser.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthUser.prototype, "role", void 0);
AuthUser = __decorate([
    graphql_1.ObjectType()
], AuthUser);
exports.AuthUser = AuthUser;
let AuthResponse = class AuthResponse {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", AuthUser)
], AuthResponse.prototype, "user", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthResponse.prototype, "accessToken", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthResponse.prototype, "refreshToken", void 0);
AuthResponse = __decorate([
    graphql_1.ObjectType()
], AuthResponse);
exports.AuthResponse = AuthResponse;
//# sourceMappingURL=auth.model.js.map