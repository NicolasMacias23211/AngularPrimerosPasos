const express = require('express');

const ConectarDB = require('./config/db');
const app = express();

ConectarDB(); 
app.use('/api/productos',require('./routes/producto'));
//app.get('/',(req,res) =>{
//    res.send("bienvenido")
//})  
app.listen(4000,()=>{
    console.log('el servidor esta corriendo');
})


console.log('desde index.js');
