const modbusClient = require('../modbus/modbusClient');

const connectToModbusServer = (req, res) => {
    const stringResponse = {};

    modbusClient.connectToModbusServer();
    stringResponse.message = "success";
    res.status(200).json(stringResponse);
}

const writeIntoHoldingRegister = (req, res) => {
    const stringResponse = {};

    modbusClient.writeIntoHoldingRegister();
    stringResponse.message = "success";
    res.status(200).json(stringResponse);
}

const writeIntoCoil = (req, res) => {
    const stringResponse = {};

    modbusClient.writeIntoCoil();
    stringResponse.message = "success";
    res.status(200).json(stringResponse);
}

const readFromHoldingRegister = (req, res) => {
    const stringResponse = {};

    modbusClient.readFromHoldingRegister();
    stringResponse.message = "success";
    res.status(200).json(stringResponse);
}

const readFromCoil = (req, res) => {
    const stringResponse = {};

    modbusClient.readFromCoil();
    stringResponse.message = "success";
    res.status(200).json(stringResponse);
}

module.exports = {
    writeIntoHoldingRegister,
    readFromHoldingRegister,
    writeIntoCoil,
    readFromCoil,
    connectToModbusServer
};