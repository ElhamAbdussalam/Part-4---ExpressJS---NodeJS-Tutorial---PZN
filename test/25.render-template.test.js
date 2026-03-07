import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";
import path from "path";

test("Template Mustache", async () => {
  const app = express();

  // setup mustache
  app.engine("html", mustacheExpress());
  app.set("view engine", "html");
  app.set("views", __dirname);

  app.get("/", (req, res) => {
    res.render("index", {
      title: "Hello World",
      say: "This is a test",
    });
  });

  const response = await request(app).get("/");

  expect(response.text).toContain("Hello World");
  expect(response.text).toContain("This is a test");
});
