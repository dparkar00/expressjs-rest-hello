import {
  Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
  BaseEntity, JoinTable
} from 'typeorm';

import {Users} from './Users'

import {Favorites} from './Favorites'


@Entity()
export class Planet extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  climate: number;

  @Column()
  terrain: string;

  @Column()
  population: number;

 
  @ManyToMany(() => Users)
  @JoinTable()
  users: Users[];
  
}