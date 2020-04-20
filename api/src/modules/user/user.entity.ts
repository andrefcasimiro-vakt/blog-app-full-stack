import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { UserRole } from 'src/modules/user/user.enum'
import { BaseEntity } from '../database/database.entities.base'

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole

  @UpdateDateColumn({ type: 'timestamp' })
  lastLoginAt: string
}
