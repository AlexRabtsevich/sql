import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';
import { Position } from '../positions/position.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  profile: User;

  @OneToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Position, { cascade: true, eager: true })
  @JoinColumn()
  position: Position;
}
