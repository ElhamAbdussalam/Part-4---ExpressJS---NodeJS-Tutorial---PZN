import express from "express";
import request from "supertest";

test("Response Header", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res
      .set({
        "X-Powered-By": "M Elham Abdussalam",
        "X-author": "Elham",
      })
      .end();
  });

  const response = await request(app).get("/");

  expect(response.get("X-Powered-By")).toBe("M Elham Abdussalam");
  expect(response.get("X-author")).toBe("Elham");
});
