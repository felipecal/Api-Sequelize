import { Sequelize } from 'sequelize-typescript';
import { config as dotEnv } from 'dotenv';

dotEnv();

const dialect = 'postgres';

export const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_DATABASE || 'postgres',
  dialect,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
});

export function databaseConnection() {
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
