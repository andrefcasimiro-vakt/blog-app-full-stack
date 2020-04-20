import { BaseEntity } from '../database/database.entities.base';
import { User } from '../user/user.entity';
export declare class RefreshToken extends BaseEntity {
    hash: string;
    user: User;
}
