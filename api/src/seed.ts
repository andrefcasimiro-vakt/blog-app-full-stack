import { NestFactory } from "@nestjs/core";

import { SeederModule } from "./modules/seeder/seeder.module";
import { SeederProvider } from "./modules/seeder/seeder.provider";

// seed.ts is not reading the env variables
// so the database config defaults to the fallback defined in the config/main

async function bootstrap() {
  await NestFactory.createApplicationContext(SeederModule)
    .then(appContext => {
      const seeder = appContext.get(SeederProvider);
      seeder
        .seed()
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });
}
bootstrap();
