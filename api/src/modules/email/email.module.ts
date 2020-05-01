import { Module } from '@nestjs/common'

import EmailProvider from './email.provider'

@Module({
	imports: [],
	providers: [ EmailProvider ],
	exports: [ EmailProvider ],
})
export class EmailModule {}
