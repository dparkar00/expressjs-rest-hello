import {
  Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity
} from 'typeorm';

import {Planet} from './Planets';
import {People} from './People';
import { Favorites } from './Favorites';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;  // Updated to `id` for consistency

  @Column()
  firstName: string;  // Use camelCase to follow TypeScript conventions

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Favorites, favorite => favorite.users)
  favorites: Favorites[];
}
