import express from "express";
import request from "supertest";

test("Request Body Form", async () => {
  const app = express();
  app.use(express.urlencoded({ extends: false }));
  app.post("/", (req, res) => {
    const name = req.body.name;
    res.json({ hello: `Hello ${name}` });
  });

  const response = await request(app).post("/").send("name=World");
  expect(response.body).toEqual({ hello: "Hello World" });
});
