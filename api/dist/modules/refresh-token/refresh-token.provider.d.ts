import { Repository } from 'typeorm';
import { RefreshToken as RefreshTokenModel } from './refresh-token.model';
export declare class RefreshTokenProvider {
    private refreshTokenRepository;
    constructor(refreshTokenRepository: Repository<RefreshTokenModel>);
    createRefreshToken(userId: number): Promise<string>;
    isValidRefreshToken(userId: number, refreshTokenPayload: string): Promise<boolean>;
}
