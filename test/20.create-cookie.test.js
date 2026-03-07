import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

test("Create Cookie", async () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser("SECRET_KEY"));
  app.post("/", (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, { path: "/", signed: true });
    res.send(`Hello ${name}`);
  });

  const response = await request(app).post("/").send({ name: "Elham" });
  console.info(response.get("Set-Cookie").toString());

  expect(response.get("Set-Cookie").toString()).toContain("Elham");
  expect(response.text).toBe("Hello Elham");
});
