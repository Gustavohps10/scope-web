import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { setupRoutes } from "./routes";
import { errorMiddleware } from "../middlewares/error";

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

setupRoutes(app);

app.use(errorMiddleware)
export default app