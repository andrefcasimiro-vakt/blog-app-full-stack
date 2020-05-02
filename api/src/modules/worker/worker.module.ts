import { Module } from '@nestjs/common'

import { EmailModule } from '../email/email.module'
import { QueueModule } from '../queue/queue.module'
import { WorkerProvider } from './worker.provider'

@Module({
	imports: [ QueueModule, EmailModule ],
	providers: [ WorkerProvider ],
	exports: [ WorkerProvider ],
})
export class WorkerModule {}
