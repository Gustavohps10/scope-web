import bodyParser from "body-parser";
import express from "express";
import { setupRoutes } from "./routes";
import { errorMiddleware } from "../middlewares/error";

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setupRoutes(app);
app.use(errorMiddleware)
export default app