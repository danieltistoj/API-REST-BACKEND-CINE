import express from "express";
import { validarToken } from "../middleware/validarToken.js";
const router = express.Router()

import{
    todos,
    registrar,
    getClienteId,
    getClienteNombre,
    getClienteNIT,
    getClienteEmail,
    updateClienteId,
    deleteClienteId
} from "../controllers/ClienteController.js"

router.get("/todos",todos)
router.post("/registrar",registrar)
router.get("/getId/:id",getClienteId)
router.get("/getNombre/:nombre",getClienteNombre)
router.get("/getNIT/:nit",getClienteNIT)
router.get("/getEmail/:email",getClienteEmail)
router.put("/update/:id",validarToken,updateClienteId)
router.delete("/delete/:id",deleteClienteId)
export default router
