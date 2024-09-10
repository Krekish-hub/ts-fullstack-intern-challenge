import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  name: string;

  @Column({ default: false })
  isFavorite: boolean;
}
