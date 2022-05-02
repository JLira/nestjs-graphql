import { Person } from './../../persons/entities/person.entity';
import { BaseEntity } from './../../bases/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class PeopleXHierarchy extends BaseEntity {
  @Column()
  person_id: string;

  @Column()
  hierarchy_id: string;

  @Column()
  month: string;

  @Column()
  year: string;

  @Column()
  value: number;

  @Column()
  attendance: string;

  @ManyToOne(() => Person)
  person: Person;
}
