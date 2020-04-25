import { UserRole } from 'src/modules/user/user.enum';
import { BaseEntity } from '../database/database.entities.base';
export declare class User extends BaseEntity {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    role: UserRole;
    lastLoginAt: Date;
}
