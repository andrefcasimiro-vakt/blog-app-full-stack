import { Entity, Column, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from '../database/database.entities.base'
import { User } from '../user/user.entity'

@Entity()
export class RefreshToken extends BaseEntity {

  @Column()
  hash: string
    
  @OneToOne(type => User)
  @JoinColumn()
  user: User

}
