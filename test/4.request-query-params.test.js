import express from "express";
import request from "supertest";

test("Request", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
  });

  const response = await request(app)
    .get("/")
    .query({ firstName: "Elham", lastName: "Aly" });

  expect(response.text).toBe("Hello Elham Aly");
});
