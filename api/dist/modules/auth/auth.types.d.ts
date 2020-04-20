import { User } from "../user/user.model";
export declare type AuthResponse = {
    user: User;
    accessToken: string;
    refreshToken: string;
};
