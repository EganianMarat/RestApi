const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const validation = express.Router();
app.use(bodyParser.json());

validation.use('', (req, res, next) => {
	if(req.method == 'POST' && !req.body.name) res.status(404).send(`Invalid request`);
	if(req.method == 'POST' && !req.body.price) res.status(404).send(`Invalid request`);
	if(req.method == 'POST' && !req.body.currency) res.status(404).send(`Invalid request`);
	/*madeDate: "2015-10-25",
	kilometer: 500,
	price: 1000,
	currency: "USD",
	description: "")*/
	if (req.params.id == 0) res.status(404).send(`Invalid request`);
	else next();
})

module.exports = validation;