const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
const dataBase = './src/db/cars.json';

const app = express.Router();

app.use(bodyParser.json());

const carController = {}

carController.createCar = app.post('/cars', (req, res) => {
	let dataNew = [];
	if(fs.existsSync(dataBase)) dataNew = JSON.parse(fs.readFileSync(dataBase));	
	let maxId = 0;
	for(let r in dataNew) {
		if(maxId < ( dataNew[r].id * 1 ) ) maxId = dataNew[r].id * 1;
	}			
	dataNew.push({
		id: maxId + 1,
		...req.body
	})
	fs.writeFileSync(dataBase, JSON.stringify(dataNew));
	res.send(`bike ${req.body.name} is create`);	
});

carController.getCars = app.get('/cars', (req, res) => {
	if(fs.existsSync(dataBase)) {	
		let dataOld = JSON.parse(fs.readFileSync(dataBase));
		res.send(`Thise is ${JSON.stringify(dataOld[urlParams[2]])} all cars data`);
	}
	else {
		res.send(`We have no cars`);
	}
});
	
carController.updateCar = app.put('/cars/:id', (req, res) => {
	if(fs.existsSync(dataBase) && req.params.id) {
		let dataNew = [];
		dataNew = JSON.parse(fs.readFileSync(dataBase));
		let key = -1;
		for(let k in dataNew) {
			if(dataNew[k]['id'] == req.params.id) key = k;
		}	
		if(key > -1) {
			for(let k in req.body) {				
				dataNew[key][k] = req.body[k];
			}
			fs.writeFileSync(dataBase, JSON.stringify(dataNew));
			res.send(`Car updated`);
		}
		else {
			res.status(404).send(`We have no sach car`);
		}
	}
	else {	
		res.status(404).send(`Invalid request`);
	}	
});

carController.deleteCar = app.delete('/cars/:id', (req, res) => {
	if(fs.existsSync(dataBase) && req.params.id) {
		let dataNew = [];
		dataNew = JSON.parse(fs.readFileSync(dataBase));
		let key = -1;
		for(let k in dataNew) {
			if(dataNew[k]['id'] == req.params.id) key = k;
		}	
		if(key > -1) {
			delete(dataNew[key]);
			fs.writeFileSync(dataBase, JSON.stringify(dataNew));
			res.send(`Car deleted`);
		}
		else {
			res.status(404).send(`We have no this cars`);
		}
	}
	else {	
		res.status(404).send(`Invalid request`);
	}
});

module.exports = carController;