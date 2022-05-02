import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHierarchyInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  value?: number;

  @Field()
  salary?: number;

  @Field()
  p2?: number;
}
