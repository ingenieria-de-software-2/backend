const { Router } = require("express");
const { newData, dataUsers } = require("../controllers/data.constroller");

const router = Router();

//rutas de los datos
router.post("/newdata", newData);
router.get("/datauser", dataUsers);


module.exports = router;