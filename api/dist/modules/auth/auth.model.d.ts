import { UserRole } from '../user/user.enum';
import { Model } from '../graphql/graphql.model';
export declare class AuthUser extends Model {
    username: string;
    email: string;
    role: UserRole;
}
export declare class AuthResponse {
    user: AuthUser;
    accessToken: string;
    refreshToken: string;
}
