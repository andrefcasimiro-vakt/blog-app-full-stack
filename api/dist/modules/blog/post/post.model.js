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
const graphql_model_1 = require("../../graphql/graphql.model");
let Post = class Post extends graphql_model_1.Model {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    graphql_1.Field(type => graphql_1.Int, { nullable: true, description: `The amount of votes given by other users` }),
    __metadata("design:type", Number)
], Post.prototype, "likes", void 0);
Post = __decorate([
    graphql_1.ObjectType()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.model.js.map