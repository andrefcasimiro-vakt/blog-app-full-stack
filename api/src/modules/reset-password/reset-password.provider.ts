import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { EmailTypeEnum, ForgotPasswordPayload } from '../email/email.email-types'
import { UserProvider } from '../user/user.provider'
import { omitPassword } from '../user/user.utils'
import { WorkerProvider } from '../worker/worker.provider'
import { workerTasks } from '../worker/worker.tasks'
import { ResetPassword as ResetPasswordEntity } from './reset-password.entity'
import { generateResetPasswordCode } from './reset-password.utils'

@Injectable()
export class ResetPasswordProvider {
	constructor(
		@InjectRepository(ResetPasswordEntity) private readonly _resetPasswordRepository: Repository<ResetPasswordEntity>,
		private readonly _userProvider: UserProvider,
		private readonly _workerProvider: WorkerProvider,
	) {}

	async resetPasswordCode(payload: { email: string }) {
		const { email } = payload

		const user = await this._userProvider.findByEmail(email)

		if (!user) {
			return {
				code: '',
			}
		}

		const code = generateResetPasswordCode()

		await this._resetPasswordRepository.save([ { user, code } ])

		// Send email
		this._workerProvider.dispatch<ForgotPasswordPayload>({
			type: workerTasks.EMAIL_SEND,
			payload: {
				type: EmailTypeEnum.ACCOUNT_FORGOT_PASSWORD,
				data: { code, ...omitPassword(user) },
			},
		})

		return { code }
	}
}
