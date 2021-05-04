import { Router } from "express";
import Order from "./order";

const router = Router();

router.use("", Order);

export default router;
