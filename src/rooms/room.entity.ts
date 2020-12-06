import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RoomLevel } from '../roomLevel/room-level.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RoomLevel, { cascade: true, eager: true })
  @JoinColumn()
  level: RoomLevel;

  @Column()
  number: number;

  @Column({ default: false })
  isBooked: boolean;
}
