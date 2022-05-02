import { PeopleXHierarchyDTO } from './../../people_x_hierarchies/dto/people_x_hierarchy.dto';
import { BaseDTO } from './../../bases/dto/base.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Person')
@FilterableOffsetConnection('peoplexhierarchy', () => PeopleXHierarchyDTO, {
  nullable: true,
})
export class PersonDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
