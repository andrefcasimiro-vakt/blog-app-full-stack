export interface Auth {
    token: string;
}
export interface IMutation {
    login(password: string, username: string): Auth | Promise<Auth>;
    register(password: string, username: string): Auth | Promise<Auth>;
}
export interface IQuery {
    whoAmI(): User | Promise<User>;
    findById(id: number): User | Promise<User>;
    findByUsername(username: string): User | Promise<User>;
}
export interface User {
    id: string;
    username: string;
    password: string;
    isActive: boolean;
    role: string;
}
