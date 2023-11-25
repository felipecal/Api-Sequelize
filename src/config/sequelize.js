require('dotenv').config()

const host = process.env.DB_HOST || '127.0.0.1';
const port = parseInt(process.env.DB_PORT|| 5432);
const username = process.env.DB_USERNAME || 'postgres';
const password = process.env.DB_PASSWORD || '1234'; 
const database = process.env.DB_DATABASE || 'users';
const env = process.env.NODE_ENV;
const dialect = env === 'test' ? 'sqlite' : 'postgres';

module.exports = {
    host,
    port,
    username,
    password,
    database,
    storage: './tests/database.sqlite',
    dialect,
    define: {
        timestamps: true,
        underscored: true
    }
}