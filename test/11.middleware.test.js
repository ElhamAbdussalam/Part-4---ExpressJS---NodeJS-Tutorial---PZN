import express from "express";
import request from "supertest";
import { logger, addPoweredHeader, apiKeyMiddleware } from "../middleware.js";

test("Request", async () => {
  const app = express();
  app.use(logger);
  app.use(apiKeyMiddleware);
  app.use(addPoweredHeader);
  app.get("/", (req, res) => {
    res.send("Hello Response");
  });

  const response = await request(app).get("/");
  expect(response.status).toBe(401);
});
