import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Cat } from './cats.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @ManyToMany(() => Cat, cat => cat.favoritedBy)
  favoriteCats: Cat[];
}
