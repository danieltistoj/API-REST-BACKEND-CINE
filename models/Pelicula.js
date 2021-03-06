import mongoose from "mongoose"
import Schema from "mongoose"


const peliculaSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim: true
        },
        categoria:{
            type: String,
            required: true,
            trim: true
        },
        director:{
            type: String,
            required: true,
            trim: true
        },
        duracion:{
            type: String,
            require: true,
            trim: true
        },
        imagen:{
            type: String,
            require: false,
            trim: true
        },
        modificador: {
            type: Schema.Types.ObjectId
        }
    }
)
const Pelicula = mongoose.model("Pelicula",peliculaSchema)
export default Pelicula
