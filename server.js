const express = require("express");
const carRouter = require("./src/routers/carRouter");
const bikeRouter = require("./src/routers/bikeRouter");


const app = express();

app.use(`/`, carRouter);
app.use(`/`, bikeRouter);

app.listen(8000);