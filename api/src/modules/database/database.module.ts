import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST || 'localhost',
			port: parseFloat(process.env.DB_PORT) || 5432,
			username: process.env.DB_USERNAME || 'postgres',
			password: process.env.DB_PASSWORD || 'root',
			database: process.env.DB_NAME || 'test',
			entities: [ 'dist/**/**/*.entity{.ts,.js}' ],
			synchronize: true, // development only
		}),
	],
})
export class DatabaseModule {}
