const mysql = require("mysql2");
async function listarHabitaciones(){
    const pool = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"Manuel",
        database: "mydb"
    });
    const poolPromise = pool.promise();
    const result = await poolPromise.query("select * from habitacion");
    return result[0];

}
module.exports = {listarHabitaciones}