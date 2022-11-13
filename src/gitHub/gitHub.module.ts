import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
  ],
  controllers: [GitHubController],
  providers: [GitHubService],
})
export class GitHubModule {}
