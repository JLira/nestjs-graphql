import { UpdatePeopleXHierarchyInput } from './dto/update-people_x_hierarchy.input';
import { CreatePeopleXHierarchyInput } from './dto/create-people_x_hierarchy.input';
import { PeopleXHierarchyDTO } from './dto/people_x_hierarchy.dto';
import { PeopleXHierarchy } from './entities/people_x_hierarchy.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PeopleXHierarchy])],
      resolvers: [
        {
          DTOClass: PeopleXHierarchyDTO,
          EntityClass: PeopleXHierarchy,
          CreateDTOClass: CreatePeopleXHierarchyInput,
          UpdateDTOClass: UpdatePeopleXHierarchyInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class PeopleXHierarchiesModule {}
