import { Router, Request, Response } from "express";

const router = Router();

router
  .route("")
  .get(async (_req, res) => {
    res.json({ su: true });
  })
  .post(async (_req: Request, res: Response, next) => {
    try {
      res.json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  });

export default router;
