import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";
import{
  comprobarPassword
} from "../helpers/encriptar.js"

const registrar = async (req, res) => {
    const { email, nombre } = req.body;
  
    // prevenir usuarios duplicados
    const existeUsuario = await Usuario.findOne({ email });
  
    if (existeUsuario) {
      const error = new Error("Usuario ya registrado - DESDE BACKEND");
      return res.status(400).json({ msg: error.message });
    }
  
    try {
      // GUardar un NUevo Usuario
      const usuario = new Usuario(req.body);
      const usuarioGuardado = await usuario.save();
  
      // enviar email al usuario para ser confirmado
    
      res.json(usuarioGuardado);
    } catch (error) {
      console.log(error);
    }
  };

  const entrar = async(req,res)=>{
      const {nombre,password} = req.body //obtenemos del cliente
      const existeUsuario = await Usuario.findOne({nombre}) //vemos si exste el cliente 
      
      if(!existeUsuario){
        return res.send('El usuario no existe')
      }else{
       const passwordCorrecto = await comprobarPassword(password,existeUsuario.password)
        if(!passwordCorrecto){
          return res.send('password incorrecto')
        }
        else{
          const token = generarJWT(existeUsuario._id)
          res.json({
            _id:existeUsuario._id,
            nombre:existeUsuario.nombre,
            email:existeUsuario.email,
            token
          })
        }
      }
  }


  export {
    registrar,
    entrar
  };
  