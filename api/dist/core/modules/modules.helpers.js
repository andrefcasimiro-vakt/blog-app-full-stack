"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_mappers_1 = require("./modules.mappers");
exports.mapModules = (providedModules) => {
    if (!Array.isArray(providedModules) || !providedModules.length) {
        throw new Error("No modules provided. Please provide a list of modules during the application boostrap");
    }
    const { keys, values } = Object;
    let applicationModules = [];
    keys(modules_mappers_1.modulesMapper)
        .forEach((moduleName, index) => {
        const match = providedModules.findIndex(providedModule => providedModule === moduleName);
        if (match !== -1) {
            applicationModules.push(values(modules_mappers_1.modulesMapper)[index]);
        }
    });
    return applicationModules;
};
//# sourceMappingURL=modules.helpers.js.map