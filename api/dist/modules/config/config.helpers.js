"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_module_mappers_1 = require("./config.module.mappers");
exports.mapModules = (providedModules) => {
    if (!Array.isArray(providedModules) || !providedModules.length) {
        throw new Error("No modules provided. Please provide a list of modules during the application boostrap");
    }
    const { keys, values } = Object;
    const applicationModules = [];
    keys(config_module_mappers_1.moduleMappers)
        .forEach((moduleName, index) => {
        const match = providedModules.findIndex(providedModule => providedModule === moduleName);
        if (match !== -1) {
            applicationModules.push(values(config_module_mappers_1.moduleMappers)[index]);
        }
    });
    return applicationModules;
};
//# sourceMappingURL=config.helpers.js.map