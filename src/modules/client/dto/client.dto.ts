import { FilterableField } from '@nestjs-query/query-graphql';
import { BaseDTO } from './../../bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Client')
export class ClientDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  description: string;

  @FilterableField()
  discount: number;

  @FilterableField()
  iss: number;

  @FilterableField()
  fess: number;
}
