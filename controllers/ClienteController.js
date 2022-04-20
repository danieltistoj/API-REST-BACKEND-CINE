//import { TokenExpiredError } from "jsonwebtoken";
import Cliente from "../models/Cliente.js";

const todos = async(req,res)=>{
    const todos = await Cliente.find()
    res.json(todos)
}

const registrar = async(req,res)=>{
    
    const {NIT} = req.body
    const existeCliente = await Cliente.findOne({NIT})
    if(existeCliente){
        const error = new Error("El cliente ya existe")
        return res.status(400).json({msg:error.message})
    }
    try{
        const cliente = new Cliente(req.body)
        const clienteGuardado = await cliente.save()
        res.json(clienteGuardado)
    }catch(error){
        console.log(errr)
    }
}

const getClienteId = async(req,res)=>{
    const {id} = req.params
    const pelicula = await Cliente.findById(id)
    if(!cliente){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(cliente)
}

const getClienteNombre = async(req,res)=>{
    const {nombre} = req.params
    const cliente = await Cliente.findOne({nombre})
    if(!cliente){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(cliente)
}

const getClienteNIT = async(req,res)=>{
    const {NIT} = req.params
    const cliente = await Cliente.findOne({NIT})
    if(!cliente){
        const error = new Error("No se encuentro")
        return res.status(404).json({msg:error.message})
    }
}

const getClienteEmail = async(req,res)=>{
    const {email} = req.params
    const cliente = await Cliente.findOne({email})
    if(!cliente){
        const error = new Error("No se encontro")
        return res.status(404).json({msg:error.message})
    }
    res.json(cliente)
}

const updateClienteId = async(req,res)=>{
    const {id} = req.registrar
    const cliente = await Cliente.findById(id)
    if(!pelicula){
        const error = new Error("Cliente no encontrado")
        return res.status(404).json({msg:error.message})
    }
    cliente.nombre = req.body.nombre || cliente.nombre
    cliente.NIT = req.body.NIT || cliente.NIT
    cliente.email = req.body.email || cliente.email
    cliente.telefono = req.body.telefono || cliente.telefono
    cliente.modificador = req.userData.id
    try{
        const clienteAlmacenado = await cliente.save()
        res.json(clienteAlmacenado)
    }catch(error){
        console.log(error)
    }
}

const deleteClienteId = async(req,res)=>{
    const {id} = req.params
    const existeCliente = await Cliente.findById(id)
    if(!existeCliente){
        const error = new Error("Cliente no encontrado")
        return res.status(400).json({msg:error.message})
    }
    try{
        const delete_cliente = await Cliente.deleteOne({_id:id})
        console.log(delete_cliente)
        res.json({msg:"Pelicula eliminada correctamente"})
    }catch(error){
        console.log("Error")
        console.log(errror)

    }
}
export{
    todos,
    registrar,
    getClienteId,
    getClienteNombre,
    getClienteNIT,
    getClienteEmail,
    updateClienteId,
    deleteClienteId
}