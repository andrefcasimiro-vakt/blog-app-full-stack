import { Entity, Column, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from '../database/database.entities.base'
import { User } from '../user/user.entity'

@Entity()
export class RefreshToken extends BaseEntity {
  
  @OneToOne(type => User)
  @JoinColumn()
  user: User

  @Column()
  hash: string

}
