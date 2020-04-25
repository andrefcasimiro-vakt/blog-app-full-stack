import { User as UserModel } from 'src/modules/user/user.model';
import { Repository, UpdateResult } from 'typeorm';
import { UserRole } from './user.enum';
import { IUpdateUser } from './user.inputs';
export declare class UserProvider {
    private readonly _usersRepository;
    private readonly _context;
    constructor(_usersRepository: Repository<UserModel>, _context: any);
    findById(id: number): Promise<UserModel>;
    findByUsername(username: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
    listUsers(): Promise<UserModel[]>;
    createUser(username: string, email: string, hashedPassword: string, role?: UserRole, isActive?: boolean): Promise<Partial<UserModel> & UserModel>;
    updateLastLoginAt(userId: number): Promise<UpdateResult>;
    updateUser(input: IUpdateUser): Promise<UpdateResult>;
}
