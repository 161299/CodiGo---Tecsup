import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

//valida la token enviada de acuerdo a su password y algotirmo, si todo es correctom retorna un true y si algo esta mal, como su tiempo de vida, contraseña, algoritmo o longitud de la toke, retorna un false
export const verificarToken = ( token : any ) => {
       try{
            let data = jwt.verify(token, 'sapeee', {algorithm: 'RS256'});
            return data        
       } 
       catch(error){return false};            
};

export const wachiman = (req: Request, res: Response, next: NextFunction) => {
       if(req.headers.authorization){
            let token = req.headers.authorization.split(' ')[2];
            console.log(token);
            
            let rpta = verificarToken(token);
            console.log(rpta);
            
            if(rpta){next();}                
            else{
                let fake = {ok: false, content: 'No esta autorizado para realizar la solicitud'}                 
                res.status(401).json(fake)
            };                 
       }
       else{
            let fake = {ok: false, content: 'Necesita un token para realizar la solicitud'}                 
            res.status(401).json(fake)                           
       };
};
