import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentx",
  migrations: ["src/database/migrations/*.ts"],
  entities: [Category],
});

dataSource
  .initialize()
  .then(async () => {
    console.log("Initializing the database...");
  })
  .catch((err) => console.log(err));
