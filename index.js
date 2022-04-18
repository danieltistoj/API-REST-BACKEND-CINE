import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import UsuarioRoutes from "./routes/UsuarioRouter.js";
import PeliculaRoutes from "./routes/PeliculaRouter.js"
import cors from "cors"
import path from "path";
import {fileURLToPath} from 'url';
import { callbackify } from "util";

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

//Lista de dominios permitidos
const listaBlanca = [process.env.FRONT_URL]
const corsOption ={
  origin: function(origin,callBack){
   //si la lista no esta vacia
    if(listaBlanca.indexOf(origin)!==-1){
      callBack(null,true)
    }else{
      callBack(new Error('No se acepto por los cors'))
    }
  }
}
app.use(cors(corsOption))

app.use('/api/usuarios', UsuarioRoutes);
app.use('/api/pelicula',PeliculaRoutes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
  });
  