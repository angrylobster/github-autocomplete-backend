## Description

This repository was created using the [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisites

- Node.js (v18.12.1)
  - Please refer to [this link](https://nodejs.org/en/download/) to install Node.js
- NPM (v8.19.2)
  - This version of NPM comes included with Node.js (v18.12.1)
- Neo4j (5.1.0-community)
- Docker (optional)
  - Docker can be used to run a local version of the Neo4j database
- Git Bash (optional)
  - Git Bash should be used for running scripts


## Installation
Run the installation script to install the required packages with NPM:
```bash
$ npm install
```

## Running the app
Please ensure that there is `.env` file containing the correct environment variables in the root folder of this repository when running it locally. You can refer to the `.env.example` file for some defaults you may use.

If you wish to connect to a local version of Neo4j, you can start a Docker Neo4j container with the following script:

```bash
$ npm run db:dev
```

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

## License

Nest is [MIT licensed](LICENSE).
