import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { AutocompleteService } from '../autocomplete/autocomplete.service';
import { Neo4jModule } from '../neo4j/neo4j.module';
import { GitHubController } from './gitHub.controller';
import { GitHubService } from './gitHub.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('BASE_URL_GITHUB_API'),
      }),
      inject: [ConfigService],
    }),
    AutocompleteModule,
    Neo4jModule.forRoot(),
  ],
  controllers: [GitHubController],
  providers: [GitHubService, AutocompleteService],
})
export class GitHubModule {}
