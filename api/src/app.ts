import express, { Express, Request, Response, json } from "express";
import "express-async-errors";

// Make sure to import the env file first
import "./utils/env";
import { requestLogger } from "./middlewares/request-logger.middleware";
import { NotFoundError } from "./errors/not-found.error";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { seedDatabase } from "./utils/seed-db";
import { logger } from "./utils/logger";

export async function createServer() {
  const app: Express = express();

  // -----------------------------------------------------------------------------------------------
  // Serve static files
  app.use(express.static("public"));

  // Parse JSON request bodies
  app.use(json());

  // Setup request logger
  app.use(requestLogger);
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // Health-check

  app.get("/", (req: Request, res: Response) => {
    res.json({ data: "Hello World!" });
  });

  // -----------------------------------------------------------------------------------------------
  // Seed Database
  app.post("/seed-db", async (req: Request, res: Response) => {
    // Start seeding in the background
    seedDatabase()
      .then(() => {})
      .catch((error) => {
        logger.error(error);
      });

    return res.send({
      message: `Seeding database  started in the background.`,
    });
  });
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // Below code must come LAST
  // Catch all unhandled routes and forward to error handler
  app.all("*", (req, res) => {
    throw new NotFoundError();
  });

  // -----------------------------------------------------------------------------------------------
  // Catch all errors and forward to error handler middleware
  app.use(errorHandler);
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------

  return app;
}
