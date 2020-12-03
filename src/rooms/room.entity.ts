import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RoomLevel } from '../roomLevel/room-level.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => RoomLevel, { cascade: true, eager: true })
  @JoinColumn()
  level: RoomLevel;

  @Column()
  number: number;
}
