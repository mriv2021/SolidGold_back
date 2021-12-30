const reservasRepository = require("../Repositorios/reservas.repository");
function crearReserva(data){
    const {nombre, fechaIngreso, fechaSalida, horaIngreso, horaSalida, habitacionId} = data;
    return reservasRepository.crearReserva(nombre, fechaIngreso, fechaSalida, horaIngreso, horaSalida, habitacionId)
}

module.exports = {
    crearReserva
}