import express, { Request, Response } from "express";
import { conexion } from "./Sequelize";
import bodyParser from "body-parser";
import nodemailer from 'nodemailer';
import morgan from 'morgan';
import { nodemail_router } from "../routers/Nodemail";

export class Server {
  public app: express.Application;
  public port = process.env.PORT || 4000;

  constructor() {
    this.app = express();
    this.habilitarCORS();
    this.configurarBodyParser();
    this.configurarMorgan();
    this.configurarRutas();
  }


  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }

  configurarMorgan(){
//  Morgan es un middleware que me permite inspeccionar las peticiones que recibe mi back y asi evaluar o analizar el rendimineto   
      this.app.use(morgan('dev'))                
  }

  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        ok: true,
        message: "El servidor esta activo.!"
      });
    });

    this.app.use('', nodemail_router);


  };

  correrServer() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriendo en el puerto ${this.port} `);
      conexion
        .sync({ force: false })
        .then(() => {
          console.log(" ======== BD Creada con Exitó =======  ");
        })
        .catch((error: any) => {
          console.log("=====ERROR al crear la Base de Datos =====");
          console.log(error);
        });
    });
  }
}