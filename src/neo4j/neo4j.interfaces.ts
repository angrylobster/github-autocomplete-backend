export type Neo4jScheme =
  | 'neo4j'
  | 'neo4j+s'
  | 'neo4j+scc'
  | 'bolt'
  | 'bolt+s'
  | 'bolt+scc';

export interface Neo4jConfig {
  uri: string;
  username: string;
  password: string;
}

export enum ENeo4jInjectionKeys {
  Driver = 'NEO4J_DRIVER',
  Config = 'NEO4J_CONFIG',
}
