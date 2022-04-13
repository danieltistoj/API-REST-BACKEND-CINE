import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
  });
  