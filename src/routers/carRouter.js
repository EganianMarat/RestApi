const express = require("express");
const bodyParser = require('body-parser');
const validation = require("./../middlewares/validateOrderType"); // օրինակ
const carController = require("./../controllers/carsController"); // օրինակ

const app = express();

app.use(bodyParser.json());

app.post("/cars", validation, carController.createCar);  // ավելացնել cars.json զանգվածի մեջ  ավտոմեքենա
app.get("/cars", carController.getCars); // ստանալ բոլոր ավտոմեքենաները
app.put("/cars/:id", validation, carController.updateCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
app.delete("/cars/:id", carController.deleteCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
module.exports = app;