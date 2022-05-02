import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Hierarchy extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  salary: number;

  @Column()
  p2: number;
}
