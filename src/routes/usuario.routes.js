const {Router} = require("express");
const {createUser, showUsers} = require("../controllers/usuario.controller");

const router = Router();

//rutas de usuarios
router.post("/newuser", createUser);
router.get("/users", showUsers);

module.exports = router;