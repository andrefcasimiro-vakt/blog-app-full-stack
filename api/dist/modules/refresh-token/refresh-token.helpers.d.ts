import { User } from '../user/user.model';
import { GeneratedAccessToken, RefreshToken } from './refresh-token.types';
export declare const generateRefreshToken: () => Promise<RefreshToken>;
export declare const generateAccessToken: (payload: Partial<User>) => string;
export declare const generateAuthTokens: (payload?: {}) => Promise<GeneratedAccessToken>;
