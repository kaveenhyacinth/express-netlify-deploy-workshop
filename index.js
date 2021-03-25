const express = require("express");
const serverless = require("serverless-http");

const app = express();
const baseRoute = "/.netlify/functions/index";

const userRoute = require("./routes/user.route");

app.use(`${baseRoute}/user`, userRoute);

module.exports.handler = serverless(app);
