import { Model } from 'sequelize/types';
import { Request, Response } from "express";
import { Recurso } from "./../config/sequelize";

export const postRecurso = (req: Request, res: Response) => {
  let { nombre, categoria} = req.body;
  let objRecurso = {
    rec_nom: nombre,
    cat_id: categoria
  };

  Recurso.build(objRecurso)
    .save()
    .then((recursoCreado: any) => {
      let rpta = { ok: true, content: recursoCreado };
      res.status(201).json(rpta);
    })
    .catch((error: any) => {
      let fake = { ok: false, content: error.errors };
      res.status(500).json(fake);
    });
};


export const getRecursos = (req: Request, res: Response) => {
      Recurso.findAll()
      .then((arrayRecursos : any)=>{
         res.status(200).json({
              ok: true, content: arrayRecursos               
         })                 
      })
      .catch((error: any)=>{
          res.status(500).json({
              ok: false, content: 'Server internal Error'                
          })                
      })              
}