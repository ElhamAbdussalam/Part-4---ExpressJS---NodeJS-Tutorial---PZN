import express from "express";
import request from "supertest";
import { requestTImeMiddleware } from "../middleware";

test("Request", async () => {
  const app = express();
  app.use(requestTImeMiddleware);
  app.get("/", (req, res) => {
    res.send(`Hallo, Today Is ${req.requestTime}`);
  });

  const response = await request(app).get("/");
  expect(response.text).toContain("Hallo, Today Is");
  console.info(response.text);
});
