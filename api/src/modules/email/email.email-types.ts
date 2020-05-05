import { User } from '../user/user.model'

export enum EmailTypeEnum {
	// Member e-mails
	ACCOUNT_CREATED = 'ACCOUNT_CREATED',
	ACCOUNT_FORGOT_PASSWORD = 'ACCOUNT_FORGOT_PASSWORD',

	// Payment
	PAYMENT_FAILED = 'PAYMENT_FAILED',

	// Orders
	ORDER_CREATED = 'ORDER_CREATED',
	ORDER_CANCELLED = 'ORDER_CANCELLED',
}

export type EmailType =
	| 'ACCOUNT_CREATED'
	| 'ACCOUNT_FORGOT_PASSWORD'
	| 'PAYMENT_FAILED'
	| 'ORDER_CREATED'
	| 'ORDER_CANCELLED'

export type AccountCreatedPayload = {
	type: EmailTypeEnum.ACCOUNT_CREATED
	data: Omit<Partial<User>, 'password'>
}

export type ForgotPasswordPayload = {
	type: EmailTypeEnum.ACCOUNT_FORGOT_PASSWORD
	data: Omit<Partial<User>, 'password'> & { code: string }
}
