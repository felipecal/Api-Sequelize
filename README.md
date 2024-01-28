# ⛇ Api Sequelize ⛇

This is a simple CRUD api in TypeScript, sequelize, aws rds or docker database.

## Technologies and Libraries Used

- NodeJS
- AWS RDS or Docker Database
- Sequelize - ORM
- Swagger - Documentation

## Installation

1. Clone this repository to your development environment:

```bash
git clone https://github.com/felipecal/Api-Sequelize.git

cd Api-Sequelize
```

<br>

2. Install the dependencies:

```bash
npm install

or

yarn install
```

<br>

3. Database

- Create database in docker with command:

```
docker run --name postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_USER=postgres --restart always -p 5432:5432 -d postgres:latest
```

- After create database in docker or if you already have a database, you just need to config the file .env with the environments of your database

<br>

4. Start the applicaation

```bash
npm start

or

yarn start
```
