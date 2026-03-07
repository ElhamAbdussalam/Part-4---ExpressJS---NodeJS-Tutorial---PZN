import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

test("Cookie", async () => {
  const app = express();
  app.use(cookieParser());
  app.get("/", (req, res) => {
    const name = req.cookies["name"];
    res.send(`Hello ${name}`);
  });

  const response = await request(app)
    .get("/")
    .set("Cookie", "name=Elham;author=M Elham Abdussalam");
  expect(response.text).toBe("Hello Elham");
});
