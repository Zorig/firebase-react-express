import { Router } from "express";
import Order from "./order";
import Home from "./home";

const router = Router();

router.use("/", Home);
router.use("/orders", Order);

export default router;
