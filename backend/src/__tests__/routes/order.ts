import request from "supertest";
import { Express } from "express-serve-static-core";
import Server from "../../server";

let app: Express;

beforeAll(async () => {
  app = await Server();
});

let objId: string = "";
const title = new Date().toISOString();

const data = {
  title,
  bookingDate: 1620252081,
  customer: {
    phone: "08034017159",
    email: "coding-challenge@construyo.de",
    name: "Coding Challenge",
  },
  address: {
    street: "Wriezener Str. 12",
    zip: "13055",
    city: "Berlin",
    country: "Germany",
  },
};

describe("Get /orders", () => {
  it("should return list of orders", async (done) => {
    request(app)
      .get("/orders")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBeGreaterThan(0);
        done();
      });
  });
});

describe("Post /orders", () => {
  it("Should return list of orders", async (done) => {
    request(app)
      .post("/orders")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("id");
        objId = response.body.id;
        done();
      });
  });

  it("Should return error on empty body", async (done) => {
    const expectObj = {
      error: {
        message: "The body was empty",
      },
    };
    request(app)
      .post("/orders")
      .send({})
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toMatchObject(expectObj);
        done();
      });
  });
});

describe("Order detail", () => {
  it(`Should get order detail with ${objId}`, async (done) => {
    request(app)
      .get(`/orders/${objId}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("id", objId);
        expect(response.body.title).toEqual(title);
        done();
      });
  });

  it(`Should update order title: ${title}`, async (done) => {
    request(app)
      .put(`/orders/${objId}`)
      .send({ title: title + 10 })
      .expect(204, done);
  });
});
