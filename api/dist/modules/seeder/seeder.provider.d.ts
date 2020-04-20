import { UserProviderSeed } from "../user/user.provider.seed";
export declare class SeederProvider {
    private readonly userProviderSeeder;
    constructor(userProviderSeeder: UserProviderSeed);
    seed(): Promise<void>;
    createUsers(): Promise<void>;
}
