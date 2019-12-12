import { Request, Response } from 'express';
import { Proyecto } from './../config/sequelize';

export const getProyectos = (req: Request, res: Response) => {

       Proyecto.findAll()
       .then((arregloProyectos: any)=>{
             let rpta = {ok: true, content: arregloProyectos}
             res.json(rpta)               
       })
       .catch((error: any)=>{console.log(error);
       })             
}

export const postProyecto = (req: Request, res: Response) => {
       
       let {nombre, fecha_inicio, fecha_fin, presupuesto, estado} = req.body;             
       let objProyecto = {pro_nom: nombre,
                          pro_fechin: fecha_inicio,
                          pro_fechfin: fecha_fin,
                          pro_pres: presupuesto,
                          pro_est: estado
                         };

       Proyecto.build(objProyecto).save()
       .then((proyectoCreado: any)=>{
              let rpta = {ok: true, content: proyectoCreado};
              res.status(201).json(rpta)     
       }) 
       .catch((error : any)=>{
              let fake = {ok: false, content: error.errors}             
              res.status(500).json(fake)
       })            
}

export const updateProyecto = (req: Request, res: Response) => {

       let {id_proyecto} = req.params;             
       let {nombre, fecha_inicio, fecha_fin, presupuesto, estado} = req.body;
       let objProyecto = {pro_nom: nombre,
                          pro_fechin: fecha_inicio,
                          pro_fechfin: fecha_fin,
                          pro_pres: presupuesto,
                          pro_est: estado
                         };

       Proyecto.update(objProyecto, {where:{pro_id:id_proyecto}})
       .then((proyectoUpdate : any)=>{
             let rpta = {ok: true, content: proyectoUpdate};
             res.status(201).json(rpta)              
       })
       .catch((error : any)=>{
             let fake = {ok: false, content: error.errors}             
             res.status(500).json(fake)
       })                  
                    
}

export let deleteProyecto = (req: Request, res: Response) => {
       let {id_proyecto} = req.params;
       Proyecto.destroy({where: {pro_id:id_proyecto}})
       .then((proyectoEliminado: any)=>{
             let rpta = {ok: true, content: proyectoEliminado};
             res.status(200).json(rpta)       
       })
       .catch((error : any)=>{
             let fake = {ok: false, content: error.errors};
             res.status(500).json(fake)               
       })
}

export const getProyectoById = (req: Request, res: Response) => {
       const {id_proyecto} = req.params;
       Proyecto.findByPk(id_proyecto)
       .then((objProyecto : any )=>{
             if(objProyecto){
               let rpta = {ok: true, content: objProyecto}
               res.status(200).json(rpta)                  
             }else{
               let fake = {ok: false, message: 'No hay un proyecto con ese id'}
               res.status(404).json(fake)                  
             }              
       })           
}