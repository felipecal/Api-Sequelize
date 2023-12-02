import { Sequelize } from "sequelize-typescript";
import { config as dotEnv } from "dotenv";

dotEnv();

const dialect = "postgres";

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect,
  define: {
    timestamps: true,
    underscored: true,
  },
});
