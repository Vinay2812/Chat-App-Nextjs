import { config } from "dotenv";
config();

const NODE_ENV: string = process.env.NODE_ENV || "development"
const SERVER_PORT: number = parseInt(process.env.SERVER_PORT || "8800");
const SERVER_URL: string = process.env.SERVER_URL || "http://localhost"

const MONGO_URL: string = process.env.MONGO_URL || "";

export { SERVER_PORT, MONGO_URL, NODE_ENV, SERVER_URL };