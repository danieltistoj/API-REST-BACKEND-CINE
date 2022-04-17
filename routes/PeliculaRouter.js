import express from "express";
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

router.get("/todos",todos)
router.post("/registrar",registrar)
router.get("/getId/:id",getPeliculaId)
router.get("/getNombre/:nombre",getPeliculaNombre)
router.get("/getCategoria/:categoria",getPeliculaCategoria)
router.get("/getDirector/:director",getPeliculaDirector)
router.put("/update/:id",updatePeliculaId)
router.delete("/delete/:id",deletePeliculaId)

export default router
