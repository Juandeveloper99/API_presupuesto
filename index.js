//crear la instancia de express
import express from 'express';

//importar cors
import cors from 'cors';

//crear la instancia de express
const app = express();

//habilitar cors
app.use(cors());
app.use(express.urlencoded({extended:true}));

//definir el puerto
const PORT = process.env.port || 4000;

//escuchar la app
app.listen(PORT, ()=>{
    console.log(`el servidor esta corriendo en el puerto: ${PORT}`);
})