import { People } from './entities/people.entity';
import { NestjsQueryGraphQLModule} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule} from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([People])],
      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],
    }),
  ]
  providers: [],
})
export class PeoplesModule { }
