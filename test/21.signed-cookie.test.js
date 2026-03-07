import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

test("Signed Cookie", async () => {
  const app = express();
  app.use(cookieParser("SECRET_KEY"));
  app.get("/", (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
  });

  const response = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3AElham.YR48lOg8RxmZ0UnIQCP%2B1FBT%2BWH6xrYM7xge25WqpuM",
    );
  expect(response.text).toBe("Hello Elham");
});
