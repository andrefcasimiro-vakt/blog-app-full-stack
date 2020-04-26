import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { UserProvider } from '../user/user.provider';
import { AuthProvider } from './auth.provider';
export declare class AuthGuard implements CanActivate {
    private readonly _authProvider;
    constructor(_authProvider: AuthProvider);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export declare class AdminAuthGuard extends JwtGuard {
    private readonly _userProvider;
    constructor(_userProvider: UserProvider);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
