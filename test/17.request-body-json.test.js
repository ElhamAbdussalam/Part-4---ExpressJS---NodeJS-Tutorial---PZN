import express from "express";
import request from "supertest";

test("Request Body JSON", async () => {
  const app = express();
  app.use(express.json());
  app.post("/", (req, res) => {
    const name = req.body.name;
    res.json({ hello: `Hello ${name}` });
  });

  const response = await request(app).post("/").send({ name: "world" });
  expect(response.body).toEqual({ hello: "Hello world" });
});
