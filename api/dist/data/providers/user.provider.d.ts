import { UserRepository } from 'src/data/repositories/user.repository';
export declare class UserProvider {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findOne(id: number): Promise<import("../entities/user.entity").User>;
}
