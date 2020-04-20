import { Repository } from 'typeorm';
import { RefreshToken as RefreshTokenModel } from './refresh-token.model';
import { User } from '../user/user.model';
export declare class RefreshTokenProvider {
    private refreshTokenRepository;
    constructor(refreshTokenRepository: Repository<RefreshTokenModel>);
    createRefreshToken(user: User): Promise<string>;
    isValidRefreshToken(userId: number, refreshTokenPayload: string): Promise<boolean>;
}
