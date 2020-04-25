import { User } from 'src/modules/user/user.model';
import { UserProvider } from 'src/modules/user/user.provider';
import { AuthUser } from '../auth/auth.model';
import { ICreateUser, IUpdateUser } from './user.inputs';
export declare class UserResolver {
    private readonly _userProvider;
    constructor(_userProvider: UserProvider);
    whoAmI(user: AuthUser): Promise<User>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    listUsers(): Promise<Partial<User[]>>;
    updateUser(input: IUpdateUser): Promise<Partial<User>>;
    createUser(input: ICreateUser, ctx: any): Promise<Partial<User>>;
}
