import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  discount?: number;

  @Field()
  iss?: number;

  @Field()
  fess?: number;
}
