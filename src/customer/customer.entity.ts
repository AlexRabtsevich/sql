import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Profile } from '../profiles/profile.entity';
import { Address } from '../address/address.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Profile, { cascade: true, eager: true, onUpdate: 'CASCADE' })
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Address, { cascade: true, eager: true, onUpdate: 'CASCADE' })
  @JoinColumn()
  address: Address;
}
