import { Servidor } from './api/config/Servidor';

let _servidor = new Servidor();
_servidor.startServer();














































// import express, { Response, Request } from "express";
// import bodyParser from "body-parser";

// const app: express.Application = express();
// const port: number = 3000;
// const budyParser = bodyParser;
// let listaPersona: any = [];

// app.use(budyParser.json());

// app.post("/persona", (req: Request, res: Response) => {
//   let objPersona = listaPersona.push(req.body);

//   res.json({
//     ok: true,
//     content: objPersona
//   });
// });

// app.get("/persona/:id_persona", (req: Request, res: Response) => {
//   let id = req.params.id_persona  
//   for (let i = 0; i < listaPersona.length; i++) {
//     if(JSON.stringify(listaPersona[i].id) == id){
//       console.log(id);
//       console.log("-------------"); 
//       console.log(JSON.stringify(listaPersona[i].id));   
//       console.log(JSON.parse(listaPersona[i].id));   
//         let objPersona = listaPersona[i]
//         console.log(objPersona)
//         res.json({
//             success: true, 
//             content: objPersona
//         })
//     }
//   }
//   if(JSON.stringify(listaPersona[i].id) != id){
//     res.json({
//       message: 'No se encuentra el id ingresado'
//     })
//   }
// });
// app.get("/personas", (req: Request, res: Response) => {
//     let objPersona = listaPersona
//     res.json({
//     ok: true,
//     content: objPersona
//   });
// });

// app.put('/persona/:id_persona', (req: Request, res:Response)=>{
//     let id = req.params.id_persona
//     for (let i = 0; i < listaPersona.length; i++) {
//       if(JSON.stringify(listaPersona[i].id) == id){
//           console.log(i)
//           let objPersona = listaPersona.splice(i,1)
//           let newPersona = listaPersona.push(req.body)
//           res.json({
//               success: true, 
//               message: "Se actualizo perfectamente",
//           })
//       }
//       if(JSON.stringify(listaPersona[i].id) != id){
//         res.json({
//           message: 'No se encuentra el id ingresado'
//         })
//       }
      
//     }  
// })

// app.delete('/persona/:id_persona', (req: Request, res:Response)=>{
//     let id = req.params.id_persona
//     for (let i = 0; i < listaPersona.length; i++) {
//       if(JSON.stringify(listaPersona[i].id) == id){
//           listaPersona.splice(i,1)
//           res.json({
//               success: true, 
//               message: "Se elemino perfectamente",
//           })
//       }     
//     }  
//     if(JSON.stringify(listaPersona[i].id) != id){
//       res.json({
//         message: 'No se encuentra el id ingresado'
//       })
//     } 
// })

// app.listen(port, () => {
//   console.log("Servidor ejecutando correctamente en el puerto " + port);
// });

