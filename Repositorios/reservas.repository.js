const mysql = require("mysql2");
async function crearReserva(nombre, fechaIngreso, fechaSalida, horaIngreso, horaSalida, habitacionId){
    const pool = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"Manuel",
        database: "mydb"
    });

    const poolPromise = pool.promise();
    const result = await poolPromise.query(
        "insert into reserva(nombre,fecha_ingreso,fecha_salida,hora_ingreso,hora_salida,habitacion_id_habitacion) values(?,?,?,?,?,?)",
        [nombre, fechaIngreso, fechaSalida, horaIngreso, horaSalida, habitacionId]    
    );

    return true;
}

module.exports = {crearReserva}