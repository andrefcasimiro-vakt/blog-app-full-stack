import { AuthUser } from '../auth/auth.model';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(user: Partial<AuthUser>): Promise<Partial<AuthUser>>;
}
export {};
