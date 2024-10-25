const modbusService = require('../service/modbusService');

const connectToModbusServer = (req, res) => {
    modbusService.connectToModbusServer(req, res);
}

const closeConnection = (req, res) => {
    modbusService.closeConnection(req, res);
}

const writeIntoHoldingRegister = (req, res) => {
    modbusService.writeIntoHoldingRegister(req, res);
}

const readFromHoldingRegister = (req, res) => {
    modbusService.readFromHoldingRegister(req, res);
}

const writeIntoCoil = (req, res) => {
    modbusService.writeIntoCoil(req, res);
}

const readFromCoil = (req, res) => {
    modbusService.readFromCoil(req, res);
}

module.exports = {
    writeIntoHoldingRegister,
    readFromHoldingRegister,
    writeIntoCoil,
    readFromCoil,
    connectToModbusServer,
    closeConnection
};