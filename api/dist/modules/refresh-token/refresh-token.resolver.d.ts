import { UserProvider } from 'src/modules/user/user.provider';
import { RefreshTokenProvider } from './refresh-token.provider';
import { IAuthRefreshToken } from './refresh-token.types';
export declare class RefreshTokenResolver {
    private readonly userProvider;
    private readonly refreshTokenProvider;
    constructor(userProvider: UserProvider, refreshTokenProvider: RefreshTokenProvider);
    authenticateRefreshToken(payload: IAuthRefreshToken): Promise<import("./refresh-token.types").GeneratedAccessToken>;
}
