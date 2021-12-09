const pool = require("../db");

const newData = async (req, res, next) => {
    try {
        const {temperatura, fecha, idUser} = req.body;
        const newdata = await pool.query("INSERT INTO public.datos(temperatura, fecha, id_usuario)VALUES ($1, $2, $3)", [temperatura,fecha,idUser]);
        return res.json({message: "Insertado con exito"});
    } catch (error) {
        return res.json(error);
    }
};

const dataUser = async (req, res, next) => {
    console.log(req);
};

module.exports = {
    newData,
    dataUser
};