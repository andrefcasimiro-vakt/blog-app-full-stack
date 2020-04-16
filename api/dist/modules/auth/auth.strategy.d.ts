import { Strategy } from 'passport-local';
import { AuthProvider } from './auth.provider';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authProvider;
    constructor(authProvider: AuthProvider);
    validate(username: string, password: string): Promise<any>;
}
export {};
