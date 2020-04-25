import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/user.model';
import { UserProvider } from 'src/modules/user/user.provider';
import { RefreshTokenProvider } from '../refresh-token/refresh-token.provider';
import { AuthResponse } from './auth.types';
export declare class AuthProvider {
    private readonly _userProvider;
    private readonly _jwtProvider;
    private readonly _refreshTokenProvider;
    constructor(_userProvider: UserProvider, _jwtProvider: JwtService, _refreshTokenProvider: RefreshTokenProvider);
    validateUser(username: string, pwd: string): Promise<User>;
    login(user: User): Promise<AuthResponse>;
}
