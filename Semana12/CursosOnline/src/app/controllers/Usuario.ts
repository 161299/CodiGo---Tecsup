import { Request, Response} from 'express';
import { Usuario } from './../config/mongoose';


export const getUsuarios = (req: Request, res: Response) => {
     
      let { desde } = req.query;
      desde = +desde;

      if (isNaN(desde)){
         desde = 1;
      }

      Usuario.count({},(error, count) => {
         // console.log(count); nos muestra la cantidad de usuarios que existe en nuestra base de datos
         Usuario.find().skip(desde).limit(10).exec((error, usuarios) => {
            if (error){
               let fake : Object = {ok: false, content: 'Error al traer los recursos'}
               res.status(500).json(fake)
            }
            else{
               let rpta : Object = {ok: true, content:{pagina: desde == 1 ? 1 : Math.ceil(desde / 10),
                                                       por_pagina: 10,
                                                       total: count,
                                                       total_paginas: Math.ceil(count/10),
                                                       data: usuarios } };
               res.status(200).json(rpta)       
            }
        })  
      })



}
      
      // for (let i = 0; i < 100; i++) {
      //    let objUsuario = new Usuario({
      //       "usu_nom": `nombre ${i}`,
      //       "usu_ape": ` apellido ${i}`,
      //       "usu_salt": ` qwertyytrewq`,
      //       "usu_hash": `qwertyhgfdsa`,
      //       "usu_fonos": [{"numero": `${(Math.random() * (999999999 - 90000000) + 900000000).toFixed(0).toString()}`,
      //                      "operador": ` operador ${i}`}]
      //    }).save((error, usuCreado) => {
      //       console.log("Creado");
      //    });       
      // }

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