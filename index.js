const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

require("./db/connect");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const baseRoute = "/.netlify/functions/index";
const userRoute = require("./routes/user.route");

app.use(`${baseRoute}/user`, userRoute);

module.exports.handler = serverless(app);
