import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

import { BaseEntity } from '../database/database.entities.base'
import { User } from '../user/user.entity'

@Entity({ name: 'reset_password_requests' })
export class ResetPassword extends BaseEntity {
	@Column() code: string

	@ManyToOne((type) => User, { onDelete: 'CASCADE' })
	@JoinColumn()
	user: User
}
