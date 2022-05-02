import { CreateHierarchyInput } from './create-hierarchy.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateHierarchyInput extends PartialType(CreateHierarchyInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
