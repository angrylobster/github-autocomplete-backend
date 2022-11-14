import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitHubModule } from './gitHub/gitHub.module';
import { Neo4jModule } from './neo4j/neo4j.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GitHubModule,
    Neo4jModule.forRoot(),
    AutocompleteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
