import express from "express";
import { validarToken } from "../middleware/validarToken.js";
const router = express.Router()
import{
    todos,
    registrar,
    getPeliculaCategoria,
    getPeliculaNombre,
    getPeliculaId,
    getPeliculaDirector,
    updatePeliculaId,
    deletePeliculaId 
} from "../controllers/PeliculaController.js"

router.get("/todos",validarToken,todos)
router.post("/registrar",validarToken,registrar)
router.get("/getId/:id",getPeliculaId)
router.get("/getNombre/:nombre",validarToken,getPeliculaNombre)
router.get("/getCategoria/:categoria",validarToken,getPeliculaCategoria)
router.get("/getDirector/:director",validarToken,getPeliculaDirector)
router.put("/update/:id",validarToken,updatePeliculaId)
router.delete("/delete/:id",validarToken,deletePeliculaId)

export default router
