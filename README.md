## Description

This repository was created using the [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisites

- Node.js (v18.12.1)
  - Please refer to [this link](https://nodejs.org/en/download/) to install Node.js
- NPM (v8.19.2)
  - This version of NPM comes included with Node.js (v18.12.1)
- Environment variables 
  - You will need the environment variables for Neo4j database
  - You can setup your own free copy of Neo4j [here](https://neo4j.com/)

## Installation
Run the installation script to install the required packages with NPM:
```bash
$ npm install
```

## Running the app
You can run a development copy of this app with the following script:
```bash
$ npm run start:dev
```

## Endpoints
There are 2 endpoints available on this service.
### GET /github/search/users
This endpoint is used to retrieve GitHub user search results. 
| Response Key       | Type    | Description                                                                                                     |
|--------------------|---------|-----------------------------------------------------------------------------------------------------------------|
| incomplete_results | boolean | Whether the results list is incomplete or not. Returns true if there are more results that cannot be displayed. |
| items              | User[]  | An array of users. You can refer to the schema here: https://docs.github.com/en/rest/search#search-users        |
| total_count        | number  | The total number of results                                                                                     |

The request should contain a query string, which is used to search for users.
| Query Key | Type   | Description                                                            |
|-----------|--------|------------------------------------------------------------------------|
| q         | string | This is the query string that will be used to search for GitHub users. |

### GET /autocomplete/users
This endpoint is used to get autocomplete hints for user search queries. By default, only a maximum of 5 results are returned. 

| Response Key | Type   | Description                          |
|--------------|--------|--------------------------------------|
| avatar       | string | The URL of the GitHub user's avatar. |
| username     | string | The GitHub user's username.          |

The request should contain a query string, which is used to search for users.
| Query Key | Type   | Description                                                            |
|-----------|--------|------------------------------------------------------------------------|
| q         | string | This is the query string that will be used to search for GitHub users. |

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
