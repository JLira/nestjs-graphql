import { PeopleXHierarchy } from './../../people_x_hierarchies/entities/people_x_hierarchy.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';

@Entity()
export class Person extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => PeopleXHierarchy,
    (peopleXHierarchy) => peopleXHierarchy.person_id,
  )
  peopleXHierarchy: PeopleXHierarchy[];
}
