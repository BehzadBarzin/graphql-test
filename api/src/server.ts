import { createServer } from "./app";
import { logger } from "./utils/logger";

// Because ./app is imported above, and it imports the env file, we can use the environment variables here
const port = process.env.PORT || 8080;

createServer().then((app) => {
  // Listen on provided port when app is ready
  app.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
