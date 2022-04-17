import Pelicula from "../models/Pelicula.js";

const todos = async(req,res) =>{
    const todos = await Pelicula.find()
    res.json(todos)
}

const registrar = async(req,res)=>{
    const{nombre,categoria,director,duracion,imagen} = req.body
    const existePelicula = await Pelicula.findOne({nombre})
    if(existePelicula){
        const error = new Error("La pelicula ya existe")
        return res.status(400).json({msg: error.message})
    }
    try{
        const pelicula = new Pelicula(req.body)
        const peliculaGuardada = await pelicula.save()
        res.json(peliculaGuardada)
    } catch(error){
        console.log(error)
    }
}

const getPeliculaId = async(req, res)=>{
    const {id} = req.params
    const pelicula = await Pelicula.findById(id)
    if(!pelicula){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(pelicula)
}

const getPeliculaNombre = async(req,res)=>{
    const {nombre} = req.params
    const pelicula = await Pelicula.findOne({"nombre":nombre})
    if(!pelicula){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(pelicula)
}
const getPeliculaCategoria = async(req,res)=>{
    const {categoria} = req.params
    const pelicula = await Pelicula.find({"categoria":categoria})
    
    if(!pelicula){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    
    res.json(pelicula)
}

const getPeliculaDirector = async(req,res)=>{
    const {director} = req.params
    const pelicula = await Pelicula.find({"director":director})
    if(!pelicula){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(pelicula)
}

const updatePeliculaId = async(req,res)=>{
    const {id} = req.params
    const pelicula = await Pelicula.findById(id)
    if(!pelicula){
        const error = new Error("Pelicula no encontrada")
        return res.status(404).json({msg:error.message})
    }

    pelicula.nombre = req.body.nombre || pelicula.nombre
    pelicula.categoria = req.body.categoria || pelicula.categoria
    pelicula.director = req.body.director || pelicula.director
    pelicula.duracion = req.body.duracion || pelicula.duracion
    pelicula.imagen = req.body.imagen || pelicula.imagen
    try{
        const peliculaAlmacenada = await pelicula.save()
        res.json(peliculaAlmacenada)
    }catch(error){
        console.log(error)
    }
}

const deletePeliculaId = async(req,res)=>{
    const {id} = req.params
    const existePelicula = await Pelicula.findById(id)

    if(!existePelicula){
        const error = new Error("Pelicula no encontrada")
        return res.status(400).json({msg:error.message})
    }
    
    try{
        const  delete_pelicula = await Pelicula.deleteOne({_id: id})
        console.log(delete_pelicula)
        res.json({msg:"Pelicula eliminada correctamente"})
    }catch(error){
        console.log("Error")
        console.log(error)
    }
}   

export{
    todos,
    registrar,
    getPeliculaCategoria,
    getPeliculaNombre,
    getPeliculaId,
    getPeliculaDirector,
    updatePeliculaId,
    deletePeliculaId
}