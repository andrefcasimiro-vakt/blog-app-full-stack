import { Repository } from 'typeorm';
import { User } from 'src/data/entities/user.entity';
export declare class UserRepository {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<void>;
}
