import {
  Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
  BaseEntity, JoinTable,
  ManyToOne
} from 'typeorm';
import {Users} from './Users'
import {Planet} from './Planets'
import {People} from './People'

@Entity()
export class Favorites extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  

 
  @ManyToOne(() => Users, user => user.favorites)
  users: Users;

  @ManyToOne(() => Planet, {nullable: true})
  planets: Planet;

  @ManyToOne(() => People, {nullable: true})
  people: People;
  
}