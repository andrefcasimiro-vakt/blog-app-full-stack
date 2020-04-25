import { User } from 'src/modules/user/user.model';
import { UserProvider } from 'src/modules/user/user.provider';
import { AuthUser } from '../auth/auth.model';
import { UserRole } from './user.enum';
export declare class UserResolver {
    private readonly _userProvider;
    constructor(_userProvider: UserProvider);
    whoAmI(user: AuthUser): Promise<User>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    listUsers(): Promise<Partial<User[]>>;
    createUser(username: string, email: string, password: string, role: UserRole, isActive: boolean, ctx: any): Promise<Partial<User>>;
}
