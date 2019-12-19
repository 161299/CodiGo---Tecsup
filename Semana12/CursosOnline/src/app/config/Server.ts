import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { usuario_router } from '../routers/Usuario';

export class Server {
  public app: express.Application;
  public static _instance: Server;
  public PUERTO = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.configurarBodyParser();
    this.habilitarCORS();
    this.conectarMongoDB();
    this.configurarRutas();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });
  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        ok: true,
        message: "El servidor está activo!"
      });
    });

    this.app.use('', usuario_router);  
  }

  conectarMongoDB(){
    mongoose.connect('mongodb://localhost:27017/cursosonline', {useNewUrlParser: true, useUnifiedTopology: true}); 
//     let db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//       console.log('conexion exitosa');
//     });    

  }

  start() {
    this.app.listen(this.PUERTO, () => {
      console.log("Servidor corriendo perfectamente en el puerto " + this.PUERTO);
    })
  }
}