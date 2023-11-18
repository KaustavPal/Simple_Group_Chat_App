const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRouter = require("./routes/login");
const messageRouter = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(messageRouter);

app.listen(3000);
