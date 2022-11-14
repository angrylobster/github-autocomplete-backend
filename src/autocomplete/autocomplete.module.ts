import { Module } from '@nestjs/common';
import { Neo4jModule } from '../neo4j/neo4j.module';
import { Neo4jService } from '../neo4j/neo4j.service';
import { AutocompleteController } from './autocomplete.controller';
import { AutocompleteService } from './autocomplete.service';

@Module({
  imports: [Neo4jModule.forRoot()],
  controllers: [AutocompleteController],
  providers: [AutocompleteService, Neo4jService],
  exports: [AutocompleteService],
})
export class AutocompleteModule {}
