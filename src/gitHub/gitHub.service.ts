import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { GetGitHubUsersResponse } from './gitHub.interfaces';

@Injectable()
export class GitHubService {
  constructor(private readonly httpService: HttpService) {}

  getGitHubUsers(query: string) {
    return this.httpService
      .get<GetGitHubUsersResponse>('/search/users', {
        params: { q: encodeURIComponent(query) },
      })
      .pipe(map(({ data }) => data));
  }
}
