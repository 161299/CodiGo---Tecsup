import { Request, Response } from 'express';
import { UnidadMedida } from './../config/sequelize'

export const postUnidadMedida = (req: Request, res: Response) => {
       
       let {nombre, abreviacion} = req.body;             
       let objUnidadMedida: Object = {
                               um_nom: nombre,
                               um_abr: abreviacion
                             };
       UnidadMedida.build(objUnidadMedida).save()
       .then((unidadMedidaCreado : any )=>{
              let rpta: Object = {ok: true, content: unidadMedidaCreado};
              res.status(201).json(rpta)             
       })
       .catch((error: any)=>{
              let fake: Object = {ok: false, content: error.errors}
              res.status(500).json(fake)             
       })                                   
}

export const getUnidadMedidas = (req: Request, res: Response) => {
       
       UnidadMedida.findAll()
       .then((arregloUnidadMedida : any ) => {
             let rpta: Object = {ok: true, content: arregloUnidadMedida};
             res.status(201).json(rpta)              
       })
       .catch((error: any)=>{
             let fake: Object = {ok: false, content: error.errors}
             res.status(500).json(fake)                  
       })             
}

export const getUnidadMedidaByNombre = (req: Request, res: Response) => {
       let {nombre} = req.params;
       UnidadMedida.findAll({where: {um_nom : nombre}})
       .then((objUnidadMedida: any)=>{
            if(objUnidadMedida){
              let rpta: Object = {ok: true, content: objUnidadMedida};
              res.status(200).json(rpta)                  
            }            
       })
       if({where: {um_nom !: nombre}}){res.status(404).json({message: 'No existe ese nombre de Unidad de medida'})}
}