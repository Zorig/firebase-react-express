import { Router } from "express";

import OrderController from "../controllers/orders";

const router = Router();

router.route("").get(OrderController.read).post(OrderController.create);

router.route("/:id").get(OrderController.getOrder).put(OrderController.update);

export default router;
