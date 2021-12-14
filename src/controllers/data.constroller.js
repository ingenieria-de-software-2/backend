const pool = require("../db");

const newData = async(req, res, next) => {
    try {
        const { temperatura, fecha, codigo } = req.body;
        const iduserquery = await pool.query("select usuario.id from usuario where usuario.codigo = $1", [codigo]);
        const iduser = iduserquery.rows[0].id;
        const newdata = await pool.query("INSERT INTO public.datos(temperatura, fecha, id_usuario)VALUES ($1, $2, $3)", [temperatura, fecha, iduser]);
        return res.json({ message: "Insertado con exito" });
    } catch (error) {
        return res.json(error);
    }
};

const dataUsers = async(req, res, next) => {
    try {
        const query = await pool.query("SELECT temperatura, usuario.nombre, usuario.codigo, datos.fecha FROM public.datos inner join usuario on datos.id_usuario = usuario.id");
        const resp = query.rows;
        return res.json(resp);
    } catch (error) {
        return res.json(error);
    }
};

module.exports = {
    newData,
    dataUsers
};