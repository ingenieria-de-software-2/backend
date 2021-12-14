const { httpServer, app } = require("./app");

httpServer.listen(app.get("port"), () => {
    console.log(`Serbidor corriendo en el puerto ${app.get("port")}`);
});