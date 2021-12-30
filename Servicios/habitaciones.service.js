const habitacionesRepository = require("../Repositorios/habitaciones.repository");
function listarHabitaciones(){
    return habitacionesRepository.listarHabitaciones();
}

module.exports = {
    listarHabitaciones
}