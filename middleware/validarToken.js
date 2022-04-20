import jwt from "jsonwebtoken"

const validarToken = (req,res,next) =>{
    try{
        const token = req.headers['authorization'] 
        ? req.headers['authorization'].replace('Bearer ','')
        : undefined
        const data = jwt.verify(token,process.env.JWT_SECRET)
        console.log(data)
        next()
    }catch(error){
        return res.send(error.message)
    }
}

export{
    validarToken
}