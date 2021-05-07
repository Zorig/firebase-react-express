import express, { Request, Response, NextFunction } from "express";
import Cors from "cors";
import Routes from "./routes";
import { CustomError } from "./types";

export default async function Server() {
  const app = express();

  app.disable("x-powered-by");
  app.enable("trust proxy");

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(Cors({ maxAge: 86400 }));

  app.use("/", Routes);

  app.use(
    (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
      res.status(err.status).json({
        error: {
          message: err.message,
        },
      });
    }
  );

  return app;
}
