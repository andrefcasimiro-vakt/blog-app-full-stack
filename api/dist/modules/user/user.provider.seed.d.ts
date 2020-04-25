import { Repository } from "typeorm";
import { User as UserModel } from "./user.model";
export declare class UserProviderSeed {
    private readonly _userRepository;
    constructor(_userRepository: Repository<UserModel>);
    create(): Promise<UserModel | null>[];
}
