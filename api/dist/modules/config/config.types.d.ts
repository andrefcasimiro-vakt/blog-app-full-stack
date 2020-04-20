export declare type Config = {
    auth: {
        password: {
            minimumLength: number;
        };
        pepper: string;
        saltRounds: number;
        refreshToken: {
            length: number;
            limit: number;
            separator: string;
        };
    };
    jwt: {
        secret: string;
        expiresIn: number;
    };
    modules: Array<string>;
};
