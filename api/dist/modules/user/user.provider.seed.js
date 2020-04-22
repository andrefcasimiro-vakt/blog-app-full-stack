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
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const user_enum_1 = require("./user.enum");
const users = [
    {
        username: 'admin',
        email: 'admin@app.com',
        password: '$2b$10$tbRa37rfDDFM7DZ1uNJA6ODgk30gXHVsZZ/rBJmgQ0O1O1MXrG3RS',
        role: user_enum_1.UserRole.ADMIN,
    }
];
let UserProviderSeed = class UserProviderSeed {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create() {
        return users.map(async (user) => await this.userRepository
            .findOne({ email: user.email })
            .then(async (userRecord) => {
            if (userRecord) {
                return Promise.resolve(null);
            }
            return Promise.resolve(await this.userRepository.save(user));
        })
            .catch(error => Promise.reject(error)));
    }
};
UserProviderSeed = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserProviderSeed);
exports.UserProviderSeed = UserProviderSeed;
//# sourceMappingURL=user.provider.seed.js.map