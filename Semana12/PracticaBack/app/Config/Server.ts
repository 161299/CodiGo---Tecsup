import { producto_model } from './../Models/Producto';
import http from 'http';
import  socketIO  from 'socket.io';
import { conexion } from './Sequelize';
import bodyParser from "body-parser";
import express , {Request, Response}from "express";



export class Server {
  public app: express.Application;
  public httpServer: http.Server;
  public io: socketIO.Server;
  public port: any = process.env.PORT || 3000;
  constructor() {
    this.app = express();
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);

    this.configuarBodyParser();
    this.configurarRutas();
    this.habilitarCORS();
  }

  escucharSockets(){
            // let objProducto = new producto_model()
            console.log("Escuchando sockets");
            this.io.on("connect", (cliente: SocketIO.Socket)=>{
              console.log(`Se conectó el ${cliente.id}`);
              cliente.on("disconnect", (clientito: SocketIO.Socket) => {
                console.log(`Se desconecto el ${clientito.id}`);
                
              })
              
            })
                    
                    
                }

  habilitarCORS(){
                    this.app.use((req, res, next) => {
                      res.header('Access-Control-Allow-Origin', '*');
                      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
                      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
                      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
                      next();
                  });  
                  }  


  configuarBodyParser() {
    this.app.use(bodyParser.json());
  }

  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        success: true,
        message: "El servidor esta activo!"
      });
    });
  }

  startServer() {
    this.httpServer.listen(this.port, () => {
      console.log(`Server Start ${this.port}`);
      conexion
        .sync({ force: false })
        .then(() => {
          console.log("== BD creada con Exito ==");
        })
        .catch((error: any) => {
          console.log("== ERROR al crear la BD ==");
          console.log(error);
        });
    });
  }
}
