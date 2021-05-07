import { Router, Response, Request } from "express";

const router = Router();
router.get("/", (_req: Request, res: Response) =>
  res.send({ message: "It works" })
);

export default router;
