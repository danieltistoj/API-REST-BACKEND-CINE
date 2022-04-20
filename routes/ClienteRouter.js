import express from "express";
import { validarToken } from "../middleware/validarToken.js";
const router = express.Router()

import{
    todos,
    registrar
} from "../controllers/ClienteController.js"

router.get("/todos",todos)
router.post("/registrar",registrar)
export default router
