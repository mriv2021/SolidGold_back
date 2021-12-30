const express = require("express");
const app = express();
require("./Controladores/habitaciones.controller")(app);
require("./Controladores/reservas.controller")(app);
app.listen(5000, ()=>{
    console.log("aplicacion funcionando")
})