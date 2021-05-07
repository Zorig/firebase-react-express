import request from "supertest";
import { Express } from "express-serve-static-core";

import Server from "../../server";

let app: Express;

beforeAll(async () => {
  app = await Server();
});

describe("Get /", () => {
  it("should return 200 & valid response", async (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: "It works" });
        done();
      });
  });
});
