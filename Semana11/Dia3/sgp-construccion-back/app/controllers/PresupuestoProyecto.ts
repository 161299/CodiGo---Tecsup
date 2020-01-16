import { Request, Response } from 'express';
import { PresupuestoProyecto } from '../config/sequelize';


export const PostPresupuestoProyecto = (req: Request, res: Response)=>{
       let {objPresupuesto} = req.body;
       PresupuestoProyecto.build(objPresupuesto).save()  
       .then((PresProyCreated: any)=>{
          res.status(201).json({
               ok: true, content: PresProyCreated, message: 'Prepuesto del Proyecto creado Correctamente'               
          })                 
       })
       .catch((error : any)=>{
           res.status(500).json({
               ok:false , content: error                
           })                
       })           
}


