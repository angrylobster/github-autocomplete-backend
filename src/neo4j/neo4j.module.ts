import { DynamicModule, Module } from '@nestjs/common';
import { ENeo4jInjectionKeys, Neo4jConfig } from './neo4j.interfaces';
import { Neo4jService } from './neo4j.service';
import neo4j from 'neo4j-driver';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [Neo4jService],
})
export class Neo4jModule {
  static forRoot(): DynamicModule {
    return {
      module: Neo4jModule,
      exports: [
        Neo4jService,
        ENeo4jInjectionKeys.Config,
        ENeo4jInjectionKeys.Driver,
      ],
      providers: [
        {
          provide: ENeo4jInjectionKeys.Config,
          inject: [ConfigService],
          useFactory: async (
            configService: ConfigService,
          ): Promise<Neo4jConfig> => ({
            uri: configService.get('NEO4J_URI'),
            username: configService.get('NEO4J_USERNAME'),
            password: configService.get('NEO4J_PASSWORD'),
          }),
        },
        {
          provide: ENeo4jInjectionKeys.Driver,
          inject: [ENeo4jInjectionKeys.Config],
          useFactory: async ({ uri, username, password }: Neo4jConfig) => {
            const driver = neo4j.driver(
              uri,
              neo4j.auth.basic(username, password),
            );
            await driver.getServerInfo();
            return driver;
          },
        },
        Neo4jService,
      ],
    };
  }
}
