import { Strategy } from 'passport-local';
import { AuthProvider } from './auth.provider';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly _authProvider;
    constructor(_authProvider: AuthProvider);
    validate(username: string, password: string): Promise<any>;
}
export {};
