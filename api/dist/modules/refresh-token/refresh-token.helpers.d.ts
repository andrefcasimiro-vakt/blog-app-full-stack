import { RefreshToken, GeneratedAccessToken } from './refresh-token.types';
import { User } from '../user/user.model';
export declare const generateRefreshToken: () => Promise<RefreshToken>;
export declare const generateAccessToken: (payload: Partial<User>) => string;
export declare const generateAuthTokens: (payload?: {}) => Promise<GeneratedAccessToken>;
