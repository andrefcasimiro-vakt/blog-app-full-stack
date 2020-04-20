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
const common_1 = require("@nestjs/common");
function BaseResolver(classRef) {
    let BaseResolverHost = class BaseResolverHost {
        async findAll() {
            return [];
        }
    };
    __decorate([
        common_1.Query((type) => [classRef], { name: `findAll${classRef.name}` }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BaseResolverHost.prototype, "findAll", null);
    BaseResolverHost = __decorate([
        graphql_1.Resolver({ isAbstract: true })
    ], BaseResolverHost);
    return BaseResolverHost;
}
exports.default = BaseResolver;
//# sourceMappingURL=graphql.base-resolver.js.map