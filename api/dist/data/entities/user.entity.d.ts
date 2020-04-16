import { UserRole } from 'src/data/enums/user.enum';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRole;
}
