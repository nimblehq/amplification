_This project is part of an Admin Toolkit Benchmark for [Nimble](https://nimblehq.co/)._

<p align="center">

  <a href="https://amplication.com" target="_blank">
    <img alt="amplication-logo" height="70" alt="Amplication Logo" src="https://amplication.com/images/amplication-logo-purple.svg"/>
  </a>
</p>
<p align="center">
    <a href="https://docs.amplication.com/docs/">Docs</a> <a href="https://twitter.com/amplication">Twitter</a>
</p>
<p align="center">
  <img src="https://github.com/amplication/amplication/workflows/Node.js%20CI/badge.svg" alt="Node.js CI">
  <a href="https://discord.gg/Z2CG3rUFnu">
    <img src="https://img.shields.io/discord/757179260417867879?label=discord" alt="Discord">
  </a>
  <a href="code_of_conduct.md">
    <img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Contributor Covenant">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License">
  </a>
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/amplication/amplication?color=purple">
</p>

<div align="center">
 
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-56-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

  </div>
  
Amplication is an open‑source development tool. It helps professional Node.js developers develop quality Node.js applications without spending time on repetitive coding tasks.

Amplication auto-generates backend apps built with TypeScript and Node.js, and a client built with React.

# Features

Build database applications with:

- Data models managed visually or through CLI
- Auto-generated human-editable source code
- Node.js server built with Nest.js and Passport
- REST API and GraphQL for CRUD with relations, sorting, filtering, pagination
- Custom code generated app
- Admin UI built with React-Admin
- Role-based access control
- Docker and docker-compose integration
- Automatic push of the generated code to your GitHub repo

# Getting Started

You can get started with Amplication immediately on the Amplication Cloud. 

Alternatively you can set up a local development environment.



See [Amplication website](http://amplication.com/) or [Amplication docs](http://docs.amplication.com/) for more details.

[Watch this video](https://youtu.be/tKGeLXoPr94) for a quick recap of everything you get with Amplication.

## Amplication Cloud (SaaS)

Launch Amplication from [app.amplication.com](http://app.amplication.com/)

## Development Environment (Local)

### System Requirements

:bulb: Before you begin, make sure you have all the below installed:

- [Node.js v14 or above](https://nodejs.org/en/download/)
- [npm v7 or above](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/)
- [Docker](https://docs.docker.com/desktop/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)


### Initializing all the packages

Amplication is using a mono-repo with multiple packages. To initialize all the packages on a local development environment, including running a docker image for the DB and seeding the DB.

1. Execute the following commands in the project root folder:

```jsx
npm install
npm run setup:dev
npm run start
```
This will install all the required dependencies, run the necessary scripts and init a Docker-based Postgres server.

2. Go to `.../packages/amplication-server` and execute the following command:

```jsx
npm run start
```

3. Go to `.../packages/amplication-client` and execute the following command:

```jsx
npm run start
```




### Setting Up Amplication Manually

You can use a manual step-by-step approach to set up Amplication in a local development environment. To do that, you should follow the following instructions for **Setting Up Amplication Server**, and **Setting Up Amplication Client**.

#### Setting up [Amplication Server](https://github.com/amplication/amplication/blob/master/packages/amplication-server/README.md)

Amplication Server is the main component of the platform that provides all the core functionality to design and create low-code applications.
The server exposes a GraphQL API for all actions. The server is built with the following awesome open-source technologies: Node.js, NestJS, Prisma over PostgreSQL, GraphQL API, and many more...

#### Setting Up [Amplication Client](https://github.com/amplication/amplication/blob/master/packages/amplication-client/README.md)

Amplication Client is the front end of the platform that provides you with an easy-to-drive UI for building your next low-code application.
The client is based on React, Apollo client, Primer components, React Material Web Components, Formik, and more.

# Beta version

Amplication is currently in Beta version. This means that we are still working on essential features like production-ready hosting, migrations, and stability to our console.

How does it affect you? Well... mostly it doesn't. Every app generated using Amplication platform contains popular, documented, secured, and supported production-ready open-source components & packages. Your app is stable, scalable, and production-ready you can deploy and rely on. You can read more about the generated app and its stack here https://docs.amplication.com/docs/getting-started
