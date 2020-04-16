"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_module_1 = require("../../modules/blog/blog.module");
const config_module_1 = require("../../modules/config/config.module");
const database_module_1 = require("../../modules/database/database.module");
const graphql_module_1 = require("../../modules/graphql/graphql.module");
exports.modulesMapper = {
    blog: blog_module_1.BlogModule,
    config: config_module_1.ConfigModule,
    database: database_module_1.DatabaseModule,
    graphql: graphql_module_1.GraphQLModule,
};
//# sourceMappingURL=modules.mappers.js.map