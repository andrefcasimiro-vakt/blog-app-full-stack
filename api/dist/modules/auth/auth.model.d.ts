import { UserRole } from '../user/user.enum';
export declare class AuthUser {
    id: number;
    username: string;
    email: string;
    role: UserRole;
}
export declare class AuthResponse {
    user: AuthUser;
    accessToken: string;
    refreshToken: string;
}
