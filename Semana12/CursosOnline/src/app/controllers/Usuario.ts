import { Request, Response} from 'express';
import { Usuario } from './../config/mongoose';


export const getUsuarios = (req: Request, res: Response) => {
       Usuario.find((error, usuarios) => {
          if (error){
             let fake : Object = {ok: false, content: 'Error al traer los recursos'}
             res.status(500).json(fake)
          }
          else{
             let rpta : Object = {ok: true, content: usuarios};
             res.status(200).json(rpta)       
          }
                    });  
}

export const postUsuario = (req: Request, res: Response) => {
       let objUsuario = new Usuario(req.body);
       objUsuario.save((error, createUsuario) => {
          if (error){
              let fake : Object = {ok: false, content: 'Error al traer los recursos'}
              res.status(500).json(fake)
          }
          else{
              let rpta : Object = {ok: true, content: createUsuario};
              res.status(200).json(rpta)       
           }                           
       })             
}