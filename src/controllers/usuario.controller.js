const pool = require("../db");

const createUser = async (req, res, next) => {
    try {
        const {nombre, codigo} = req.body;
        const codigoUser = await pool.query("select usuario.codigo from usuario");
        const codigos = codigoUser.rows;
        codigos.forEach(element => {
            if(element.codigo == codigo){
                return res.json({message: "El codigo ya existe"});
            }
        });
        
        const newUser = await pool.query("INSERT INTO public.usuario(nombre, codigo)VALUES ($1, $2)", [nombre, codigo]);
        return res.json({message: "Insertado con exito"});
    } catch (error) {
        return res.json(error);
    }
};

const showUsers = async (req, res, next) => {
    try {
        const usuarios = await pool.query("select usuario.nombre, usuario.codigo from usuario");
        const users = usuarios.rows;
        return res.json(users);
    } catch (error) {
        return res.json(error);
    }
};

module.exports = {
    createUser,
    showUsers
};