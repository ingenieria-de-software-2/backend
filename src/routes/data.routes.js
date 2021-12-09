const {Router} = require("express");
const {newData, dataUser} = require("../controllers/data.constroller");

const router = Router();

//rutas de los datos
router.post("/newdata", newData);
router.get("/datauser", dataUser);

module.exports = router;
