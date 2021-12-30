const express = require("express");
const res = require("express/lib/response");

function ReservasController(app){

    app.get("/reservas", (request, response)=>{
        response.send("reservacionessget");
    });

}

module.exports = ReservasController;