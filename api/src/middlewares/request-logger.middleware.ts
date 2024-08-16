import { Request, Response, NextFunction } from "express";

import { logger } from "../utils/logger";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { method, path: url } = req;
  const logMessage = `${method}: ${url}`;

  logger.verbose(logMessage);
  next();
};
