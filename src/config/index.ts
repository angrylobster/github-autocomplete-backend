export default () => ({
  PORT: +process.env.PORT || 3000,
  BASE_URL_GITHUB_API:
    process.env.BASE_URL_GITHUB_API || 'https://api.github.com',
});
