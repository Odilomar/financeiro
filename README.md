# Finance

- Web Application with Angular;
- REST API with NestJS, TypeORM e PostgreSQL;
- Docker Compose for setup DB;

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS@14.16.0](https://nodejs.org/) and NPM@6.14.11;
- [Docker](https://www.docker.com/);

### 1.2 Project configuration

Start by cloning this project on your workstation.

```sh
git clone https://github.com/Odilomar/financeiro
```

#### 1.2.1 Web

The next thing will be to install all the dependencies of the project.

```sh
cd ./financeiro/web
npm install or yarn
```

#### 1.2.2 Api

The next thing will be to install all the dependencies of the project.

```sh
cd ./financeiro/api
npm install or yarn
```

#### 1.2.3 DB

Once the dependencies are installed, you can now configure the database with Docker.

```
cd ./financeiro
docker-composer up -d
```

### 1.3 Launch and discover

#### 1.3.2 Web

You are now ready to launch the Angular application using the command below.

```sh
npm run start or yarn start
```

You can now head to `http://localhost:4200/`.

#### 1.3.2 API

You are now ready to launch the NestJS application using the command below.

```sh
npm run start:dev or yarn start:dev
```

You can now head to `http://localhost:3000/`.

## 2. Development

During de development of this project, i had some issues and decided to describe below:

- I´ve been having problems to connect web container with api container;
