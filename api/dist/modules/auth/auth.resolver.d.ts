import { AuthResponse } from './auth.model';
import { UserProvider } from 'src/modules/user/user.provider';
import { AuthProvider } from './auth.provider';
export declare class AuthResolver {
    private readonly authProvider;
    private userProvider;
    constructor(authProvider: AuthProvider, userProvider: UserProvider);
    login(username: string, password: string): Promise<AuthResponse>;
    createAccount(username: string, password: string): Promise<AuthResponse>;
}
