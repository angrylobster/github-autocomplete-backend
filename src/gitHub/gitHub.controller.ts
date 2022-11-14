import { Controller, Get, Logger, Query } from '@nestjs/common';
import { map } from 'rxjs';
import { AutocompleteService } from '../autocomplete/autocomplete.service';
import { GitHubService } from './gitHub.service';

@Controller('github')
export class GitHubController {
  private readonly logger = new Logger();

  constructor(
    private readonly gitHubService: GitHubService,
    private readonly autocompleteService: AutocompleteService,
  ) {}

  @Get('search/users')
  getGitHubSearch(@Query('q') query: string) {
    return this.gitHubService.getGitHubUsers(query).pipe(
      map((res) => {
        if (res && Array.isArray(res.items) && res.items.length) {
          this.autocompleteService
            .createUserAutocompletes(res.items)
            .catch((e) => this.logger.error(e.message));
        }
        return res;
      }),
    );
  }
}
