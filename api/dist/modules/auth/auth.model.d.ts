import { Model } from '../graphql/graphql.model';
import { UserRole } from '../user/user.enum';
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
