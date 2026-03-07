import express from "express";
import request from "supertest";

test("Response body file", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/contoh.txt");
  });

  const response = await request(app).get("/");
  expect(response.text).toContain("Hello World!");
});
