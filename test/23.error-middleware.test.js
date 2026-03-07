import express from "express";
import request from "supertest";

test("Error Middleware", async () => {
  const errorMiddleware = (err, req, res, next) => {
    res.status(500).send(`Error: ${err.message}`);
  };

  const app = express();
  app.get("/", (req, res) => {
    throw new Error("Ups");
  });
  app.use(errorMiddleware);

  const response = await request(app).get("/");
  expect(response.status).toBe(500);
  expect(response.text).toBe("Error: Ups");
});
