import mongoose from "mongoose";
import { MONGO_URL } from "../utils/config";
import logger from "../utils/logger";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    logger.info(`🚀 [mongodb]: connected`);
  })
  .catch((err) => {
    logger.error(`❌ [mongodb]: failed to connect`);
  });
