import express from "express";
import request from "supertest";
import { logger, addPoweredHeader } from "../middleware.js";

test("Request", async () => {
  const app = express();
  app.use(logger);
  app.use(addPoweredHeader);
  app.get("/", (req, res) => {
    res.send("Hello Response");
  });

  const response = await request(app).get("/");
  expect(response.get("X-Powered-By")).toBe("M Elham Abdussalam");
  expect(response.text).toBe("Hello Response");
});
