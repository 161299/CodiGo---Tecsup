import { Request, Response } from 'express';
import { Familia } from './../config/sequelize';

export const postFamilia = (req: Request, res: Response) => {
       let {nombre} = req.body             
       let objFamilia = {fam_nom : nombre}
       Familia.build(objFamilia).save()
       .then((familiaCreada: any)=>{
         if(familiaCreada){
            let rpta = {ok: true, content: familiaCreada}
            res.status(201).json(rpta)
         }
         else{
            let fake = {ok: false, content: 'No se pudo crear el recurso'}
            res.status(204).json(fake)                 
         }
       })
       .catch((error: any)=>{
            let fake: Object = {ok: false, content: error.errors}
            res.status(500).json(fake)                            
       })                    
}

export const getFamilias = (req: Request, res: Response) =>{
       Familia.findAll()
       .then((arregloFamilias: any)=>{
            let rpta = {ok: true, content: arregloFamilias};
            res.status(200).json(rpta)               
       })
       .catch((error: any)=>{
            let fake: Object = {ok: false, content: error.errors}
            res.status(500).json(fake)  
       })             
}