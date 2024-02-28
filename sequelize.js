require('dotenv').config();

const host = process.env.DB_HOST || 'postgres';
const port = parseInt(process.env.DB_PORT || 5432);
const username = process.env.DB_USERNAME || 'postgres';
const password = process.env.DB_PASSWORD || '1234';
const database = process.env.DB_DATABASE || 'postgres';
const dialect = 'postgres';

module.exports = {
  host,
  port,
  username,
  password,
  database,
  dialect,
  define: {
    timestamps: true,
    underscored: true,
  },
};
