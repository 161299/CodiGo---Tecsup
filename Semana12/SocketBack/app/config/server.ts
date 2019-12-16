import { Producto } from './../Models/Producto';
import express, {Response , Request} from 'express';
import bodyParser from 'body-parser';
import  http  from 'http';
import socketIO from 'socket.io';
import { Productos } from '../Models/Productos';


export class Server {
        public app: express.Application;
        public httpServer : http.Server;
        public io: socketIO.Server;
        public port: any =  process.env.PORT || 3000 ;
        constructor() {
           this.app = express();
           this.httpServer = new http.Server(this.app);
           this.io = socketIO(this.httpServer);

           this.configuarBodyParser();
           this.configurarRutas();
           this.habilitarCORS();
           this.escucharSockets()
           }
        
        escucharSockets(){
            let objProductos = new Productos();
            console.log("Escuchando sockets");
            //  evento connect -> es un evento que se dispara automaticamente cuando un cliente se conecta al servido SOCKET(io)
            this.io.on("connect", (cliente: SocketIO.Socket)=>{
              console.log("Se conectó " + cliente.id);
              cliente.on("disconnect", (clientito: SocketIO.Socket) => {
                console.log(`Se desconecto ` + clientito.id);   
              });
              
              cliente.on("pedir-productos", ()=>{
               this.io.emit("lista-productos", objProductos.productos );
              }); 

              cliente.on("agregar-producto", (objProducto: Producto)=>{
               objProductos.agregarProducto(objProducto);
               this.io.emit("lista-productos", objProductos.productos);
             }) 
            });
            
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
                  
        configurarRutas(){
               this.app.get('/', (req: Request, res: Response)=>{
                    res.json({
                        success: true,
                        message: 'El servidor esta activo!'                
                             });         
                       });  
                    }              
        startServer(){
              this.httpServer.listen(this.port, ()=>{
                console.log(`Server Start ${this.port}`);
            })
          }
        }