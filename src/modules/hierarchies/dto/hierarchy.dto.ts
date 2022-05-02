import { FilterableField } from '@nestjs-query/query-graphql';
import { BaseDTO } from './../../bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Hierarchy')
export class HierarchyDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  description: string;

  @FilterableField()
  value: number;

  @FilterableField()
  salary: number;

  @FilterableField()
  p2: number;
}
