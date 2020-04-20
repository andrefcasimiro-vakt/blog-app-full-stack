import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { UserRole } from 'src/modules/user/user.enum'

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
  
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
