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
