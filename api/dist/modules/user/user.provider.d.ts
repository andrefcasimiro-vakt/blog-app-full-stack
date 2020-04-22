import { Repository } from 'typeorm';
import { User as UserEntity } from 'src/modules/user/user.entity';
import { User as UserModel } from 'src/modules/user/user.model';
export declare class UserProvider {
    private usersRepository;
    private context;
    constructor(usersRepository: Repository<UserModel>, context: any);
    findById(id: number): Promise<UserModel>;
    findByUsername(username: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
    createUser(username: string, email: string, hashedPassword: string): Promise<Partial<UserEntity> & UserModel>;
    updateLastLoginAt(userId: number): Promise<import("typeorm").UpdateResult>;
}
