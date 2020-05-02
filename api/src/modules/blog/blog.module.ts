import { Module } from '@nestjs/common'
import { UserModule } from 'src/modules/user/user.module'

@Module({
	imports: [ UserModule ],
})
export class BlogModule {}
