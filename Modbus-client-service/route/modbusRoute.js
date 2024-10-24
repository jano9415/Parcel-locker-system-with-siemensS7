const {Router} = require('express');
const modbusController = require('../controller/modbusController');

const router = Router();

router.get("/connect", modbusController.connectToModbusServer);
router.get("/closeconnection");
router.get("/writeholdingregister", modbusController.writeIntoHoldingRegister);
router.get("/readholdingregister", modbusController.readFromHoldingRegister);
router.get("/writecoil", modbusController.writeIntoCoil);
router.get("/readcoil", modbusController.readFromCoil);

module.exports = router;
