import { Repository } from 'typeorm';
import { User } from '../user/user.model';
import { RefreshToken as RefreshTokenModel } from './refresh-token.model';
export declare class RefreshTokenProvider {
    private readonly _refreshTokenRepository;
    constructor(_refreshTokenRepository: Repository<RefreshTokenModel>);
    createRefreshToken(user: User): Promise<string>;
    isValidRefreshToken(userId: number, refreshTokenPayload: string): Promise<boolean>;
}
