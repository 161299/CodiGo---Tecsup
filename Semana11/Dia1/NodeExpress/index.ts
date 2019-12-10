import express, {Response,Request} from 'express';

import bodyParser from 'body-parser';

const app: express.Application = express()
const port:number = 3000
const budyParser = bodyParser;

// configurando bodyParser -> recibir peticiones con el protocolo 'application/json'
app.use(budyParser.json());
// terminando Configuracion de bodyParser

// Inicializando peticiones
      // Recibiendo parametros por la Url
app.get('/usuario/:id_usuario', (req: Request, res: Response) =>{
       let id = req.params.id_usuario;
       let paths = req.path ;
       let protocolo = req.protocol
       res.json({
              ok: true,
              message: `El id recibo es ${id} `,
              Url: `${protocolo}:/${paths}`   
       })             
})

app.get('/', (req: Request, res: Response)=>{
   res.json({
       mensaje: "Respuesta correcta del servidor"
   })
}) 

app.post('/usuario', (req: Request, res: Response)=>{
     res.json({
            message: "Usuario creado correctamente"
     })
})

app.post('/persona', (req: Request, res: Response) =>{
    let objPersona = req.body;
    console.log(objPersona);
    res.json({
         ok : true,
         content: objPersona
    })
    
})
// Finalizando peticiones

// levantando el servidor
app.listen(port, () =>{
       console.log("Servidor corriendo correctamente en el puerto " + port);               
})


