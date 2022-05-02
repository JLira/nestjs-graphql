import { BaseEntity } from './../../bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Client extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  discount: number;

  @Column()
  iss: number;

  @Column()
  fess: number;
}
