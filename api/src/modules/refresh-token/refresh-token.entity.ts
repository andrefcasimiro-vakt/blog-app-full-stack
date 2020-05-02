import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

import { BaseEntity } from '../database/database.entities.base'
import { User } from '../user/user.entity'

@Entity()
export class RefreshToken extends BaseEntity {
	@Column() hash: string

	@ManyToOne((type) => User, { onDelete: 'CASCADE' })
	@JoinColumn()
	user: User
}
