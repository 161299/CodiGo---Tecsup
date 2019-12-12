import { Proveedor } from './../config/sequelize';
import { Request , Response } from 'express';


export const postProveedor = (req: Request, res: Response) => {
       let  {razonSocial, ruc} = req.body;
       let objProveedor = {
                           prov_rz: razonSocial,
                           prov_ruc: ruc
                          };
       Proveedor.build(objProveedor).save()
       .then((createProveedor : any)=>{
            if(createProveedor){
               let rpta = {ok: true, content: createProveedor};
               res.status(201).json(rpta)                 
            }             
       })
       .catch((error: any)=>{
             let fake = {ok: false, content: error.errors};
             res.status(500).json(fake)              
       })                                
} 

export const getProveedorById = (req: Request, res: Response) => {
       let {id_proveedor} = req.params;
       Proveedor.findByPk(id_proveedor)
       .then((objProveedor : any)=>{
           if(objProveedor){
               let rpta = {ok: true, content: objProveedor};
               res.status(200).json(rpta)                
           }
           else{
               let fake = {ok: false, content: 'Error al buscar Proveedor, no existe ese Id'};
               res.status(404).json(fake)                
           }                
       })
       .catch((error: any)=>{
               let fake = {ok: false, content: error.errors};
               res.status(400).json(fake)                    
       });              
}

export const getProveedores = (req: Request, res: Response) => {
       Proveedor.findAll(req.body)
       .then((objProveedor: any)=>{
           if(objProveedor){
               let rpta = {ok: true, content: objProveedor};
               res.status(200).json(rpta)               
           }
           else{
               let fake = {ok: false, content: 'No existe ningun Proveedor'};
               res.status(404).json(fake)                
           }                
       })
       .catch((error: any)=>{
             let fake = {ok: false, content: error.errors};
             res.status(400).json(fake)              
       })
}

export const updateProveedor = (req: Request, res: Response) => {
       let {id_proveedor} = req.params;
       let {razonSocial, ruc} = req.body;        
       let objProveedor = {
                           prov_rz: razonSocial,
                           prov_ruc: ruc                 
                          };
       Proveedor.update(objProveedor, {where: {prov_id : id_proveedor}})
       .then((proveedorUpdate: any)=>{
            let rpta = {ok: true, content: proveedorUpdate};
            res.status(201).json(rpta)               
       }) 
       .catch((error: any)=>{
            let fake = {ok: false, content: error.errors};
            res.status(500).json(fake)              
       })                        
}