import { Categoria, Familia, Recurso } from './../config/sequelize';
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

export const getCategorias = ( req: Request, res: Response ) => {
       Categoria.findAll(
                         {include:[{model: Familia},
                                   //{model: Recurso, include[model:PresupuestoProyecto]} -> para sacar info de las tablas relacionadas
                                   {model: Recurso}
                                  ]}
                         )
       .then((arregloCategorias: any)=>{
            if(arregloCategorias){
               let rpta = {ok: true, content: arregloCategorias};
               res.status(200).json(rpta)               
            }
            else{
               let fake = {ok: false, content: 'No se encontro ninguna Categoria'};
               res.status(404).json(fake)
            }
       });
}