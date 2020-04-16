import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from 'src/modules/user/user.enum'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole
}
