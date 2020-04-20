import { User as UserModel } from "./user.model";
import { Repository } from "typeorm";
export declare class UserProviderSeed {
    private readonly userRepository;
    constructor(userRepository: Repository<UserModel>);
    create(): Array<Promise<UserModel>>;
}
