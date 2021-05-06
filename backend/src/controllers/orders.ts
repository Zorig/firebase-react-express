import { Request, Response, NextFunction } from "express";
import db from "../db";
import { CustomError } from "../types";

const model = db.collection("orders");

class OrderController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    if (req.body === null) {
      const err: CustomError = new Error("The body was empty") as CustomError;
      err.status = 400;
      next(err);
    }
    try {
      const response = await model.add(req.body);
      if (response) {
        res.status(200).send({ id: response.id });
      }
    } catch (err) {
      next(err);
    }
  }

  public static async read(_req: Request, res: Response, next: NextFunction) {
    try {
      const ordersRef = await model.limit(10).get();
      const orders = ordersRef.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      res.status(200).send(orders);
    } catch (err) {
      next(err);
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    if (req.body === null) {
      const err: CustomError = new Error("The body was empty") as CustomError;
      err.status = 400;
      next(err);
    }
    try {
      const { id, customer, address, ...body } = req.body;
      const orderRef = model.doc(req.params.id);
      const response = await orderRef.update(body);
      if (response) {
        res.sendStatus(204);
      }
    } catch (err) {
      next(err);
    }
  }

  public static async getOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderRef = await model.doc(req.params.id).get();
      const order = orderRef.data();
      res.status(200).send({ ...order, id: orderRef.id });
    } catch (err) {
      next(err);
    }
  }
}

export default OrderController;
