import { UserRole } from 'src/modules/user/user.enum';
export declare class User {
    id: number;
    username: string;
    password: string;
    isActive: boolean;
    role: UserRole;
}
