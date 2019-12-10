import  bodyParser  from 'body-parser';
import express from 'express';
import { persona_router } from './../routes/personta'

export class Servidor{
    public app: express.Application;
    public port: number;
    constructor(){
         this.app = express();
         this.port= 3000; 
         this.app.use(bodyParser.json());
               //urlencoded sirve para leer la informacion mandada por los forms          
         this.app.use(bodyParser.urlencoded({extended: true}))   
         this.configurarRutas();           
    } 
          
    configurarRutas(){
       this.app.use('/api', persona_router )                 
    }

    startServer(){this.app.listen(this.port, () =>{
             console.log(`Servido corriendo exitosamente en el puerto ${this.port}`) 
        })   
    }
}