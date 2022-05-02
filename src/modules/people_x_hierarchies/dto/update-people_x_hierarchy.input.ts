import { CreatePeopleXHierarchyInput } from './create-people_x_hierarchy.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePeopleXHierarchyInput extends PartialType(
  CreatePeopleXHierarchyInput,
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
