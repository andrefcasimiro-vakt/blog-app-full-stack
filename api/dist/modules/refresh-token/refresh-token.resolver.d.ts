import { UserProvider } from 'src/modules/user/user.provider';
import { RefreshTokenProvider } from './refresh-token.provider';
import { IAuthRefreshToken } from './refresh-token.types';
export declare class RefreshTokenResolver {
    private readonly _userProvider;
    private readonly _refreshTokenProvider;
    constructor(_userProvider: UserProvider, _refreshTokenProvider: RefreshTokenProvider);
    authenticateRefreshToken(payload: IAuthRefreshToken): Promise<import("./refresh-token.types").GeneratedAccessToken>;
}
