export declare class AuthUser {
    id: number;
    username: string;
    email: string;
}
export declare class AuthResponse {
    user: AuthUser;
    accessToken: string;
    refreshToken: string;
}
