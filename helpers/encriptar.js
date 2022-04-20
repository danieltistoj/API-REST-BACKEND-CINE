import bcrypt from 'bcrypt'

const comprobarPassword = async (password,passwordEncriptada)=>{
    return  await bcrypt.compareSync(password,passwordEncriptada)
}
export{
    comprobarPassword
}