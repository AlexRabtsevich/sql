import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Room } from '../rooms/room.entity';
import { Customer } from '../customer/customer.entity';
import { Manager } from '../managers/manager.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Room, { cascade: true, eager: true })
  @JoinColumn()
  room: Room;

  @ManyToOne(() => Customer, { cascade: true, eager: true })
  @JoinColumn()
  customer: Customer;

  @ManyToOne(() => Manager, { cascade: true, eager: true })
  @JoinColumn()
  manager: Manager;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  bookedDate: Date;

  @Column({ type: 'timestamp', nullable: true, default: () => 'NULL' })
  checkOutDate: Date;
}
