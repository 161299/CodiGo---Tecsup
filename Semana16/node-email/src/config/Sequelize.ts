import { Sequelize } from "sequelize";
export const conexion: Sequelize = new Sequelize("email", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  dialectOptions: { useUTC: false, dateStrings: true, typeCast: true },
  timezone: "-05:00"
});
