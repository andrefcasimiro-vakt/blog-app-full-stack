import { User } from 'src/data/models/user.model';
import { UserProvider } from 'src/data/providers/user.provider';
export declare class UserResolver {
    private readonly userProvider;
    constructor(userProvider: UserProvider);
    user(id: number): Promise<User>;
}
