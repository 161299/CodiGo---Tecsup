import { Documento } from './../config/sequelize';
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
