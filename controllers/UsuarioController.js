import Usuario from "../models/Usuario.js";


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


  export {
    registrar
  };
  