import { Router } from "express";
import Order from "./order";

const router = Router();

router.use("/orders", Order);

export default router;
