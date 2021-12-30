const express = require("express");
const app = express();
app.use(express.json());
require("./Controladores/habitaciones.controller")(app);
require("./Controladores/reservas.controller")(app);
app.listen(5000, ()=>{
    console.log("aplicacion funcionando")
})