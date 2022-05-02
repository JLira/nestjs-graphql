import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { PersonDTO } from './dto/person.dto';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './entities/person.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Person])],
      resolvers: [
        {
          DTOClass: PersonDTO,
          EntityClass: Person,
          CreateDTOClass: CreatePersonInput,
          UpdateDTOClass: UpdatePersonInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class PersonsModule {}
