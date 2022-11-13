import { Controller, Get, Query } from '@nestjs/common';
import { GitHubService } from './gitHub.service';

@Controller('github')
export class GitHubController {
  constructor(private readonly gitHubService: GitHubService) {}

  @Get('search/users')
  getGitHubSearch(@Query('q') query: string) {
    return this.gitHubService.getGitHubUsers(query);
  }
}
