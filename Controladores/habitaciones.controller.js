const express = require("express");
const res = require("express/lib/response");
const habitacionesService = require("../Servicios/habitaciones.service")

function HabitacionesController(app){

    app.get("/habitaciones", async (request, response)=>{
        const habitaciones = await habitacionesService.listarHabitaciones();
        response.json(habitaciones);
    });

}

module.exports = HabitacionesController;