const {Pool} = require("pg");
const {db} = require("./config");

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});

pool.connect().then(db => {
    console.log("estas conectado a postgresql");
}).catch(error => {
    console.log(error);
});

module.exports = pool;