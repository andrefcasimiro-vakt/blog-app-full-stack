import { UserProviderSeed } from "../user/user.provider.seed";
export declare class SeederProvider {
    private readonly _userProviderSeeder;
    constructor(_userProviderSeeder: UserProviderSeed);
    seed(): Promise<void>;
    createUsers(): Promise<void>;
}
