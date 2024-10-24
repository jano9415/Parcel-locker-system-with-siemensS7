const net = require('net');
const modbus = require('jsmodbus');

//TCP socket
const clientSocket = new net.Socket();

//Szerver adatok
const options = {
    host: '192.168.0.11',
    port: 502
};

//Kliens létrehozása 1-es ID-vel
const client = new modbus.client.TCP(clientSocket, 1);

//Kapcsolódás a modbus szerverhez
const connectToModbusServer = () => {
    clientSocket.connect(options, () => {
        console.log('Connected to Modbus server');
    })
}

//Kapcsolat lezárása
clientSocket.on('close', () => {
    console.log('Connection closed');
});

//Adat írása holding regiszterekbe
const writeIntoHoldingRegister = () => {
    //Kapcsolódás a modbus szerverhez
    clientSocket.connect(options, () => {
        console.log('Connected to Modbus server');

        //Holding regiszterek írása
        client.writeSingleRegister(0, 104)
            .then((response) => {
                console.log('Wrote to register');
            })
            .catch((err) => {
                console.error('Error writing to register:', err);
            });
    });
}

//Adat írása coil-ba
const writeIntoCoil = () => {
    clientSocket.connect(options, () => {
        console.log('Connected to Modbus server');

        //Coil írása
        client.writeSingleCoil(0, true)
            .then((response) => {
                console.log('Wrote to coil');
            })
            .catch((err) => {
                console.error('Error writing to coil:', err);
            });
    });
}


//Adat olvasása holding regiszterekből
const readFromHoldingRegister = () => {
    //Kapcsolódás a modbus szerverhez
    clientSocket.connect(options, () => {
        console.log('Connected to Modbus server');


        //Holding regiszterek olvasása
        client.readHoldingRegisters(0, 2)
            .then((response) => {
                console.log('Holding Registers:', response.response._body.values);
            })
            .catch((err) => {
                console.error('Error reading holding registers:', err);
            });
    });
}

//Adat olvasása coil-ból
const readFromCoil = () => {
    //Kapcsolódás a modbus szerverhez
    clientSocket.connect(options, () => {
        console.log('Connected to Modbus server');


        //Coil olvasása
        client.readCoils(0, 1)
            .then((response) => {
                console.log('Coil:', response.response._body.valuesAsArray);
            })
            .catch((err) => {
                console.error('Error reading coil:', err);
            });
    });
}



//Hibakezelés
clientSocket.on('error', (err) => {
    console.error('Socket error:', err);
});

module.exports = {
    writeIntoHoldingRegister,
    readFromHoldingRegister,
    writeIntoCoil,
    readFromCoil,
    connectToModbusServer
};