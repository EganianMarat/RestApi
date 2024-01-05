const express = require("express");
const validation = require("./../middlewares/validateOrderType") // օրինակ
const bikeController = require("./../controllers/bikesController") // օրինակ

const app = express();

app.post("/bikes", validation, bikeController.createCar);  // ավելացնել bikes.json զանգվածի մեջ  ավտոմեքենա
app.get("/bikes", bikeController.getCars); // ստանալ բոլոր ավտոմեքենաները
app.put("/bikes/:id", validation, bikeController.updateCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
app.delete("/bikes/:id", bikeController.deleteCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
module.exports = app;