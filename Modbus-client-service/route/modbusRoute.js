const {Router} = require('express');
const modbusController = require('../controller/modbusController');

const router = Router();

router.get("/connect", modbusController.connectToModbusServer);
router.get("/closeconnection", modbusController.closeConnection);
router.get("/writeholdingregister/:register/:value", modbusController.writeIntoHoldingRegister);
router.get("/readholdingregister", modbusController.readFromHoldingRegister);
router.get("/writecoil", modbusController.writeIntoCoil);
router.get("/readcoil", modbusController.readFromCoil);

module.exports = router;
