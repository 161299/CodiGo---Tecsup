import { Categoria, Familia } from './../config/sequelize';
import {  Request , Response } from 'express';


export const postCategoria = (req: Request, res: Response) =>{
       let {nombre, familia} = req.body;
       let objCategoria = {
                           cat_nom: nombre,
                           fam_id: familia
                          }

       Familia.findByPk(req.body.familia)
       .then((objFamilia: any)=>{
           if(objFamilia){
              return  Categoria.build(objCategoria).save()     
           }
           if(!objFamilia){
              let fake = {ok: false, content: `La familia de id ${familia} no existe en la BD`}
              res.status(400).json(fake)                 
           }                
       })
       .then((objFamiliaC: any)=>{
           if(objFamiliaC){
              let rpta = {ok: true, content: objFamiliaC};
              res.status(201).json(rpta)                 
           }
       })
       .catch((error: any)=>{
              let fake: Object = {ok: false, content: error.errors}
              res.status(500).json(fake)                            
       }) 

}