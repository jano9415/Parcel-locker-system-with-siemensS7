const express = require("express");
const modbusClient = require('./modbus/modbusClient');
const modbusRoute = require('./route/modbusRoute');

const app = express();
const port = 8085;

app.use(express.json());

app.use(modbusRoute);


app.listen(port, () => console.log('app listening on port ' + port));
