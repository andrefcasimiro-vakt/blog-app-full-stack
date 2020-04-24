import { Repository } from 'typeorm';
import { User as UserModel } from 'src/modules/user/user.model';
import { UserRole } from './user.enum';
export declare class UserProvider {
    private usersRepository;
    private context;
    constructor(usersRepository: Repository<UserModel>, context: any);
    findById(id: number): Promise<UserModel>;
    findByUsername(username: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
    listUsers(): Promise<UserModel[]>;
    createUser(username: string, email: string, hashedPassword: string, role?: UserRole, isActive?: boolean): Promise<Partial<UserModel> & UserModel>;
    updateLastLoginAt(userId: number): Promise<import("typeorm").UpdateResult>;
}
