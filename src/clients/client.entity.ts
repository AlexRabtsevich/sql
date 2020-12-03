import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';

import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  profile: User;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;
}
