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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const moment_1 = __importDefault(require("moment"));
const user_entity_1 = require("./user.entity");
const user_model_1 = require("./user.model");
const typeorm_2 = require("typeorm");
const user_enum_1 = require("./user.enum");
let UserProvider = class UserProvider {
    constructor(_usersRepository, _context) {
        this._usersRepository = _usersRepository;
        this._context = _context;
    }
    async findById(id) {
        return this._usersRepository.findOne({ where: { id } });
    }
    async findByUsername(username) {
        return this._usersRepository.findOne({ where: { username } });
    }
    async findByEmail(email) {
        return this._usersRepository.findOne({ where: { email } });
    }
    async listUsers() {
        return this._usersRepository.find();
    }
    async createUser(username, email, hashedPassword, role = user_enum_1.UserRole.USER, isActive = false) {
        const userObject = {
            username,
            email,
            password: hashedPassword,
            role,
            isActive,
        };
        return this._usersRepository.save(userObject);
    }
    async updateLastLoginAt(userId) {
        const result = await typeorm_2.getConnection()
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set({ lastLoginAt: moment_1.default.utc().toISOString() })
            .where('id = :userId', { userId })
            .execute();
        return result;
    }
    async updateUser(input) {
        const result = await typeorm_2.getConnection()
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(Object.assign({}, input))
            .where('id = :id', { id: input.id })
            .execute();
        return result;
    }
};
UserProvider = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, common_1.Inject(graphql_1.CONTEXT)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], UserProvider);
exports.UserProvider = UserProvider;
//# sourceMappingURL=user.provider.js.map