const express = require("express");
const res = require("express/lib/response");
const reservasService = require("../Servicios/reservas.service");

function ReservasController(app){

    app.post("/reservas", async (request, response)=>{
        console.log(request.body)
        await reservasService.crearReserva(request.body);
        response.json({completado:true});
    });

}

module.exports = ReservasController;