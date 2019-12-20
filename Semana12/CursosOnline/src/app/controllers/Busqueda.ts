import { Request, Response} from 'express';
import { Usuario } from '../config/mongoose';

export let buscar = (req: Request, res: Response) => {
  let { termino, coleccion } = req.params;                  
  let regex = new RegExp(termino, 'i');
}

let buscarUsuarios = ( regex : any ) => {





           
   return 
}