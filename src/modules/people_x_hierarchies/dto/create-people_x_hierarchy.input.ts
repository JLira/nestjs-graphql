import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePeopleXHierarchyInput {
  @Field()
  person_id: string;

  @Field()
  hierarchy_id: string;

  @Field()
  month: string;

  @Field()
  year: string;

  @Field()
  value: number;

  @Field()
  attendance: string;
}
