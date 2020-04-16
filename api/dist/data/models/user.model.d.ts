import { UserRole } from '../enums/user.enum';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRole;
}
