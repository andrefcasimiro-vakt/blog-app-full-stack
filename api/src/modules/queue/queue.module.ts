import { Module } from '@nestjs/common'

import { QueueProvider } from './queue.provider'

@Module({
	imports: [],
	providers: [ QueueProvider ],
	exports: [ QueueProvider ],
})
export class QueueModule {}
