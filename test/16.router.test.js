import express from "express";
import request from "supertest";

const router = express.Router();
router.use((req, res, next) => {
  console.info(`Receive request : ${req.originalUrl}`);
  next();
});

router.get("/feature/a", (req, res) => {
  res.send("Feature A");
});

test("Request", async () => {
  const app = express();

  const featureEnabled = true;
  if (featureEnabled) {
    app.use(router);
  }

  let response = await request(app).get("/feature/a");
  expect(response.text).toBe("Feature A");
});
