import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

test("Static File", async () => {
  const app = express();
  app.use(express.static(__dirname + "/static"));
  app.get("/", (req, res) => {
    res.send("Hello response");
  });

  let response = await request(app).get("/");
  expect(response.text).toBe("Hello response");
  response = await request(app).get("/contoh.txt");
  expect(response.text).toContain("Hello Static");
});
