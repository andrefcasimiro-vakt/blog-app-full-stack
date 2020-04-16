"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_module_1 = require("../auth/auth.module");
const blog_module_1 = require("../blog/blog.module");
const config_module_1 = require("./config.module");
const database_module_1 = require("../database/database.module");
const graphql_module_1 = require("../graphql/graphql.module");
exports.moduleMappers = {
    auth: auth_module_1.AuthModule,
    blog: blog_module_1.BlogModule,
    config: config_module_1.ConfigModule,
    database: database_module_1.DatabaseModule,
    graphql: graphql_module_1.GraphQLModule,
};
//# sourceMappingURL=config.module.mappers.js.map