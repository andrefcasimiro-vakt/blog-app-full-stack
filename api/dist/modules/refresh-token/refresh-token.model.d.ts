import { Model } from '../graphql/graphql.model';
export declare class RefreshToken extends Model {
    userId: number;
    hash: string;
}
