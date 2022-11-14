export interface GitHubUser {
  id: number;
  login: string;
  avatar_url?: string;
  type: string;
  score: number;
}

export interface GetGitHubUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}
