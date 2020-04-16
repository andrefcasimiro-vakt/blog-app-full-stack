import { UserProvider } from 'src/modules/user/user.provider';
import { User } from 'src/modules/user/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthProvider {
    private userProvider;
    private jwtProvider;
    constructor(userProvider: UserProvider, jwtProvider: JwtService);
    validateUser(username: string, pwd: string): Promise<User>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
