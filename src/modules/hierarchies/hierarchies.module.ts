import { UpdateHierarchyInput } from './dto/update-hierarchy.input';
import { Hierarchy } from './entities/hierarchy.entity';
import { CreateHierarchyInput } from './dto/create-hierarchy.input';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { HierarchyDTO } from './dto/hierarchy.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Hierarchy])],
      resolvers: [
        {
          DTOClass: HierarchyDTO,
          EntityClass: Hierarchy,
          CreateDTOClass: CreateHierarchyInput,
          UpdateDTOClass: UpdateHierarchyInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class HierarchiesModule {}
