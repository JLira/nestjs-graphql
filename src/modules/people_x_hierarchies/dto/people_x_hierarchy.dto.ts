import { PersonDTO } from './../../persons/dto/person.dto';
import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { BaseDTO } from '../../bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('PeopleXHierarchy')
@FilterableRelation('person', () => PersonDTO)
export class PeopleXHierarchyDTO extends BaseDTO {
  @FilterableField()
  person_id: string;

  @FilterableField()
  hierarchy_id: string;

  @FilterableField()
  month: string;

  @FilterableField()
  year: string;

  @FilterableField()
  value: number;

  @FilterableField()
  attendance: string;
}
