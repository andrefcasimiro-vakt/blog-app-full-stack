import { User } from 'src/modules/user/user.model';
import { UserProvider } from 'src/modules/user/user.provider';
import { AuthUser } from '../auth/auth.model';
export declare class UserResolver {
    private readonly userProvider;
    constructor(userProvider: UserProvider);
    whoAmI(user: AuthUser): Promise<User>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    listUsers(): Promise<User[]>;
}
