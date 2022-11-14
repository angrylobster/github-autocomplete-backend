import { Inject, Injectable } from '@nestjs/common';
import { Driver, session, Session } from 'neo4j-driver';
import { ENeo4jInjectionKeys } from './neo4j.interfaces';

@Injectable()
export class Neo4jService {
  constructor(
    @Inject(ENeo4jInjectionKeys.Driver) private readonly driver: Driver,
  ) {}

  getReadSession(database: string): Session {
    return this.driver.session({
      database,
      defaultAccessMode: session.READ,
    });
  }

  getWriteSession(database: string): Session {
    return this.driver.session({
      database,
      defaultAccessMode: session.WRITE,
    });
  }
}
