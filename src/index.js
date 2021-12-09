const app = require("./app");

app.listen(app.get("port"), () => {
    console.log(`Serbidor corriendo en el puerto ${app.get("port")}`);
});