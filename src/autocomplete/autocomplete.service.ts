import { Injectable } from '@nestjs/common';
import { GitHubUser } from '../gitHub/gitHub.interfaces';
import { Neo4jService } from '../neo4j/neo4j.service';
import neo4j from 'neo4j-driver';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AutocompleteService {
  private readonly database: string;

  constructor(
    private readonly neo4jService: Neo4jService,
    private readonly configService: ConfigService,
  ) {
    this.database = this.configService.get('NEO4J_DATABASE');
  }

  createUserAutocompletes(users: GitHubUser[]) {
    return this.neo4jService.getWriteSession(this.database).run(
      `WITH $nodes AS nodes
        UNWIND nodes AS node
        MERGE(user:User {id: node.id, username:node.login, avatar:node.avatar_url})
        ON MATCH
          SET 
            user.id=node.id,
            user.username=node.login,
            user.avatar=node.avatar_url
      `,
      {
        nodes: users.map((user) => ({ ...user, id: neo4j.int(user.id) })),
      },
    );
  }

  getUserAutocompletes(query: string, limit = 5) {
    return this.neo4jService
      .getReadSession(this.database)
      .run(
        `MATCH (user:User)
          WHERE toLower(user.username) STARTS WITH toLower($query)
          RETURN user.username AS username, user.avatar AS avatar
          LIMIT $limit`,
        { query, limit: neo4j.int(limit) },
      )
      .then(({ records }) =>
        records.map((record) => ({
          username: record.get('username'),
          avatar: record.get('avatar'),
        })),
      );
  }
}
