import express from "express";
const router = express.Router();
import {
  registrar,
  entrar
} from "../controllers/usuarioController.js";


// area publica
router.post("/registrar", registrar);
router.post("/entrar",entrar)

export default router;
