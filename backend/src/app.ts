import "reflect-metadata";
import "express-async-errors";
import { handleErrors } from "./error";

import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes)
app.use("/login", loginRoutes)

app.use(handleErrors);

export default app;