import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import UsuarioRoutes from "./routes/UsuarioRouter.js";
import PeliculaRoutes from "./routes/PeliculaRouter.js"
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();


app.use('/api/usuarios', UsuarioRoutes);
app.use('/api/pelicula',PeliculaRoutes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
  });
  