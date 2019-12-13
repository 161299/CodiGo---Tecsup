import { documento_router } from './../routes/Documento';
import { gastoingreso_router } from './../routes/GastoIngreso';
import { familia_router } from './../routes/Familia';
import { categoria_router } from './../routes/Categoria';
import { conexion } from './sequelize';
import bodyParser from "body-parser";
import express , {Request, Response}from "express";
import { proyecto_router } from './../routes/Proyecto'
import { unidadmedida_router } from '../routes/UnidadMedida';
import { usuario_router } from '../routes/Usuario';
import { proveedor_router } from '../routes/Proveedor';
import { imagen_router } from '../routes/Imagen';

export class Server {
  public app: express.Application;
  public port: any =  process.env.PORT || 3000 ;
  constructor() {
    this.app = express();
    this.configuarBodyParser();
    this.configurarRutas();
  }

  configuarBodyParser() {
    this.app.use(bodyParser.json());
  }

  configurarRutas(){
     this.app.get('/', (req: Request, res: Response)=>{
           res.json({
               success: true,
               message: 'El servidor esta activo!'                
           });         
     });
     
     this.app.use('',proyecto_router);
     this.app.use('', unidadmedida_router);
     this.app.use('', usuario_router);
     this.app.use('', categoria_router);
     this.app.use('', familia_router);
     this.app.use('', proveedor_router);
     this.app.use('', gastoingreso_router);
     this.app.use('', documento_router);
     this.app.use('', imagen_router);
  }

  startServer(){
      this.app.listen(this.port, ()=>{
        console.log(`Server Start ${this.port}`);
        conexion.sync({ force: false })
        .then(()=>{console.log("== BD creada con Exito ==");})
        .catch((error:any)=>{console.log("== ERROR al crear la BD ==");
                             console.log(error);
        })
    })
  }
}
