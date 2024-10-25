const modbusClient = require('../modbus/modbusClient');

const connectToModbusServer = (req, res) => {
    const stringResponse = {};

    modbusClient.connectToModbusServer();
    stringResponse.message = "Connected to Modbus server";
    res.status(200).json(stringResponse);
}

const closeConnection = (req, res) => {
    const stringResponse = {};

    modbusClient.closeConnection();
    stringResponse.message = "Connection closed";
    res.status(200).json(stringResponse);
}

const writeIntoHoldingRegister = (req, res) => {
    const register = req.params.register;
    const value = req.params.value;
    const stringResponse = {};

    modbusClient.writeIntoHoldingRegister(register, value);
    stringResponse.message = "Wrote to register";
    res.status(200).json(stringResponse);
}

const writeIntoCoil = (req, res) => {
    const stringResponse = {};

    modbusClient.writeIntoCoil();
    stringResponse.message = "Wrote to coil";
    res.status(200).json(stringResponse);
}

const readFromHoldingRegister = (req, res) => {
    const stringResponse = {};

    modbusClient.readFromHoldingRegister();
    stringResponse.message = "Read from holding register";
    res.status(200).json(stringResponse);
}

const readFromCoil = (req, res) => {
    const stringResponse = {};

    modbusClient.readFromCoil();
    stringResponse.message = "Read from coil";
    res.status(200).json(stringResponse);
}

module.exports = {
    writeIntoHoldingRegister,
    readFromHoldingRegister,
    writeIntoCoil,
    readFromCoil,
    connectToModbusServer,
    closeConnection
};