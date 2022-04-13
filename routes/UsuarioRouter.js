import express from "express";
const router = express.Router();
import {
  registrar
} from "../controllers/usuarioController.js";


// area publica
router.post("/", registrar);

export default router;
