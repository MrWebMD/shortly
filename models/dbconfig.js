
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "shortly-db",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "sqlite",
    host: "./shortly.sqlite",
  }
);

export default sequelize;
