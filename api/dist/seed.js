"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./modules/seeder/seeder.module");
const seeder_provider_1 = require("./modules/seeder/seeder.provider");
async function bootstrap() {
    core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule)
        .then(appContext => {
        const seeder = appContext.get(seeder_provider_1.SeederProvider);
        seeder
            .seed()
            .finally(() => appContext.close());
    })
        .catch(error => {
        throw error;
    });
}
bootstrap();
//# sourceMappingURL=seed.js.map