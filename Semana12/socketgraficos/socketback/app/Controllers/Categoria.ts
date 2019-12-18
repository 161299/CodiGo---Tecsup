
import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { Categoria } from '../config/Sequelize';

export class CategoriaController {
     public static getCategorias(req: Request, res: Response) {
           Categoria.findAll()
           .then((arrayCategoria: [Model])=>{
              let rpta: Object = {ok: true, content: arrayCategoria};
              res.status(200).json(rpta)      
           })
           .catch((error : any )=>{
              let fake: Object = {ok: false, content: error};
              res.status(500).json(fake)              
           })

     }               
}