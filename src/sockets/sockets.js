const { Socket } = require("socket.io");

const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log("Cliente desconectado");
    });
};

const wsockettemp = (cliente, io) => {
    cliente.on('emite-temp', (data) => {
        console.log(data);
        io.emit('obtiene-temp', data);
    });
};

module.exports = {
    desconectar,
    wsockettemp
}