import { Request, Response, NextFunction } from "express";
import { AppError } from "./appError";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error.";

  res.status(statusCode).json({
    status: statusCode,
    message,
  });
};

export default errorHandler;
