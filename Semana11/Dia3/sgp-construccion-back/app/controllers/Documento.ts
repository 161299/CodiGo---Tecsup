import { Documento, Proveedor } from './../config/sequelize';
import { Request, Response} from 'express';

export const postDocumento = (req : Request, res: Response)=>{
       let {tipo, total, observaciones , fecha, idproveedor} = req.body   
       let objDocumento = {
                           doc_tipo: tipo,
                           doc_total: total,
                           doc_obs: observaciones,
                           doc_fech: fecha,
                           prov_id: idproveedor
                          }
       Proveedor.findByPk(idproveedor)
       .then((proveedor: any)=>{
            if(proveedor){
               Documento.build(objDocumento).save()
               .then((createDocumento: any)=>{
                    let rpta = {ok: true, content: createDocumento};
                    res.status(201).json(rpta)               
               })
               .catch((error: any)=>{
                    let fake = {ok:false, content: error};
                    res.status(500).json(fake)               
               })
            }
            else{
               let fake = {ok: false, content: `no existe el ${idproveedor} ingresado` } 
               return res.status(404).json(fake)
            }
       })                       
       .catch((error: any)=>{
            let fake = {ok:false, content: error};
            res.status(500).json(fake)               
       })                             
}

export const getDocumento = (req: Request , res : Response) => {
     let {id_documento} = req.params;
     Documento.findByPk(id_documento)
     .then((objDocumento: any)=>{
          if(objDocumento){
               let rpta = {ok: true, content: objDocumento};
               res.status(200).json(rpta);
          }
          else{
               let fake = {ok: false, content: 'No hay ningun documento'};
               res.status(404).json(fake)
          }
     })
     .catch((error: any)=>{
          let fake = {ok: false, content: error};
          res.status(500).json(fake);
     })
}