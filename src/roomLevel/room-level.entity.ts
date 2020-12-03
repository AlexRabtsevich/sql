import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { RoomLevelTypes } from './room-level.types';

@Entity()
export class RoomLevel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: RoomLevelTypes;

  @Column()
  price: number;
}
