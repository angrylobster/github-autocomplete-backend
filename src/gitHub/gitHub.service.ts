import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class GitHubService {
  constructor(private readonly httpService: HttpService) {}

  getGitHubUsers(query: string) {
    return this.httpService
      .get('/search/users', { params: { q: encodeURIComponent(query) } })
      .pipe(map(({ data }) => data));
  }
}
