import mongoose from "mongoose";
//import Schema from "mongoose"

const clienteSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required: true,
            trim: true
        },
        NIT:{
            type:String,
            require: false,
            trim:true
        },
        email:{
            type:String,
            require:false,
            trim:true
        },
        telefono:{
            type:String,
            require:false,
            trim:true

        },
        modificador:{
            type: mongoose.Schema.Types.ObjectId,
            require:false
        }
    }
)

const Cliente = mongoose.model("Cliente",clienteSchema)
export default Cliente

