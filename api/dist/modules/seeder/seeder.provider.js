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
const user_provider_seed_1 = require("../user/user.provider.seed");
let SeederProvider = class SeederProvider {
    constructor(_userProviderSeeder) {
        this._userProviderSeeder = _userProviderSeeder;
    }
    async seed() {
        await this.createUsers()
            .then((completed) => {
            console.log(`Operation completed`);
            Promise.resolve(completed);
        })
            .catch((error) => {
            console.error(`Operation failed`);
            Promise.reject(error);
        });
    }
    async createUsers() {
        return Promise.all(this._userProviderSeeder.create())
            .then(resultOfOperation => console.log(`Created ${resultOfOperation.filter(x => x).length} users.`));
    }
};
SeederProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_provider_seed_1.UserProviderSeed])
], SeederProvider);
exports.SeederProvider = SeederProvider;
//# sourceMappingURL=seeder.provider.js.map