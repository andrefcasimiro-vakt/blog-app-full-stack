export declare type Config = {
    auth: {
        password: {
            minimumLength: number;
        };
        pepper: string;
        saltRounds: number;
    };
    jwt: {
        secret: string;
        expiresIn: number;
    };
    modules: Array<string>;
};
