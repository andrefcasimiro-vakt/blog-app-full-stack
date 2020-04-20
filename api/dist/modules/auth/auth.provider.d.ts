import { UserProvider } from 'src/modules/user/user.provider';
import { User } from 'src/modules/user/user.model';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenProvider } from '../refresh-token/refresh-token.provider';
import { AuthResponse } from './auth.types';
export declare class AuthProvider {
    private userProvider;
    private jwtProvider;
    private refreshTokenProvider;
    constructor(userProvider: UserProvider, jwtProvider: JwtService, refreshTokenProvider: RefreshTokenProvider);
    validateUser(username: string, pwd: string): Promise<User>;
    login(user: User): Promise<AuthResponse>;
}
