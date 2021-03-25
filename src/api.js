const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    greet: "Hello World!",
    version: "0.0.1",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
