import express from "express";
import request from "supertest";

test("Request", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send("<h1>Hello World</h1>");
  });

  const response = await request(app).get("/");
  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe("<h1>Hello World</h1>");
});
