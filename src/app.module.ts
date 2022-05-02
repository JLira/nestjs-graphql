import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { PersonsModule } from './modules/persons/persons.module';
import { ClientModule } from './modules/client/client.module';
import { HierarchiesModule } from './modules/hierarchies/hierarchies.module';
import { PeopleXHierarchiesModule } from './modules/people_x_hierarchies/people_x_hierarchies.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    PersonsModule,
    ClientModule,
    HierarchiesModule,
    PeopleXHierarchiesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
