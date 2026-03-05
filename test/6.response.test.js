import express from "express";
import request from "supertest";

test("Request", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send("Hello Response");
  });

  const response = await request(app).get("/");

  expect(response.text).toBe("Hello Response");
});
