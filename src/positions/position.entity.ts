import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Position {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
