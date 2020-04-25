import { UserProvider } from 'src/modules/user/user.provider';
import { AuthResponse } from './auth.model';
import { AuthProvider } from './auth.provider';
export declare class AuthResolver {
    private readonly _authProvider;
    private readonly _userProvider;
    constructor(_authProvider: AuthProvider, _userProvider: UserProvider);
    login(username: string, password: string, ctx: any): Promise<AuthResponse>;
}
