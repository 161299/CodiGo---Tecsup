import { Usuario } from './../config/sequelize';
import { Request, Response } from 'express';

export const RegistrarUsuario = ( req: Request, res: Response) => {
       Usuario.findAll({where: {usu_email : req.body.usu_email}})
       .then((usuarios: any)=>{
            if(usuarios.length != 0){
              let rpta: Object = {ok: false, content: `El usuario con email ${req.body.usu_email} ya existe!`}
              res.status(204).json(rpta)                  
            }
            else{
               let objUsuario = Usuario.build(req.body);
               objUsuario.setSaltAndHash(req.body.password);
               objUsuario.save()
               .then((usuarioCreado: any)=>{
                    let rpta: Object = {ok: true, content: `Usuario ${usuarioCreado.usu_email} creado con exito`};
                    res.status(201).json(rpta)  
               })                                
            }               
       })             
}

export const login = (req: Request, res: Response) => {
       let {correo, password} = req.body;
       Usuario.findOne({where: {usu_email:correo}})
       .then((objUsuario: any)=>{
           if(objUsuario){
             let validacion = objUsuario.validarPassword(password);
             if (validacion){
                let rpta = {ok: true, content: 'Usuario correctamente logeado'};
                res.status(200).json(rpta)                 
             }
             else{
                let fake = {ok: false, content: 'Usuario o contraseña incorrectos'};
                res.status(404).json(fake)                 
             }                  
           }
           else{
             let fake = {ok: false, content: 'Usuario no registrado'};
             res.status(404).json(fake)                  
           }                
       })
}

