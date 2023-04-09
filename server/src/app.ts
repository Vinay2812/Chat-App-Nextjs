import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { SERVER_PORT, SERVER_URL } from "./utils/config";
import logger from "./utils/logger";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(helmet());
app.use(morgan(":status :method :url :response-time ms"))

app.listen(SERVER_PORT, () => {
    logger.info(`🚀 [server]: running on ${SERVER_URL}:${SERVER_PORT}`)
});
