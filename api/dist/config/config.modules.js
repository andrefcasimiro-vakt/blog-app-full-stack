"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_module_1 = require("../modules/config/config.module");
const database_module_1 = require("../modules/database/database.module");
const modulesMapper = {
    config: config_module_1.ConfigModule,
    database: database_module_1.DatabaseModule,
};
exports.mapModules = (providedModules) => {
    if (!Array.isArray(providedModules) || !providedModules.length) {
        throw new Error("No modules provided. Please provide a list of modules during the application boostrap");
    }
    const { keys, values } = Object;
    let applicationModules = [];
    keys(modulesMapper)
        .forEach((moduleName, index) => {
        const match = providedModules.findIndex(providedModule => providedModule === moduleName);
        if (match !== -1) {
            applicationModules.push(values(modulesMapper)[index]);
        }
    });
    return applicationModules;
};
//# sourceMappingURL=config.modules.js.map