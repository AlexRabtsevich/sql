import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';

@Entity()
export class Customer {
  constructor(profile: User, address: Address) {
    this.address = address;
    this.profile = profile;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  profile: User;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;
}
