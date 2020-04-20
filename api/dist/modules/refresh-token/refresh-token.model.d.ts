import { Model } from '../graphql/graphql.model';
import { User } from '../user/user.model';
export declare class RefreshToken extends Model {
    user: User;
    hash: string;
}