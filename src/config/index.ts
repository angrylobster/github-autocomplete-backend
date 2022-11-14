export default () => ({
  PORT: +process.env.PORT || 3000,
  BASE_URL_GITHUB_API:
    process.env.BASE_URL_GITHUB_API || 'https://api.github.com',
  NEO4J_URI: process.env.NEO4J_URI,
  NEO4J_USERNAME: process.env.NEO4J_USERNAME,
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  NEO4J_DATABASE: process.env.NEO4J_DATABASE || 'neo4j',
});
