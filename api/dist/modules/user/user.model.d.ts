import { UserRole } from './user.enum';
import { Model } from '../graphql/graphql.model';
export declare class User extends Model {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    role: UserRole;
    lastLoginAt: Date;
}
