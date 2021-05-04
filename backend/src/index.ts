import express, { NextFunction, Request, Response } from "express";
import Cors from "cors";
import Routes from "./routes";

const app = express();

app.disable("x-powered-by");
app.enable("trust proxy");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cors({ maxAge: 86400 }));

const PORT = process.env.PORT || 8001;

app.use("/orders", Routes);
app.get("/", (_req: Request, res: Response) => res.send("Express works"));

app.use((err: any, _req: Request, res: Response) => {
  if (typeof err === "number") {
    return res.sendStatus(err);
  } else if (err.message) {
    return res.status(err.status || 400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`[Server]: Server is running at http://localhost:${PORT})`);
});
