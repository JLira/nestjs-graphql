import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field()
  name: string;
}
