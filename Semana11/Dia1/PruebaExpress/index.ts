import express, { Response, Request } from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
const port: number = 3000;
const budyParser = bodyParser;
let listaPersona: any = [];

app.use(budyParser.json());

app.post("/persona", (req: Request, res: Response) => {
  let objPersona = listaPersona.push(req.body);

  res.json({
    ok: true,
    content: objPersona
  });
});

app.get("/persona/:id_persona", (req: Request, res: Response) => {
  let id = req.params.id_persona  
  for (let i = 0; i < listaPersona.length; i++) {
    if(JSON.stringify(listaPersona[i].id) == id){
      console.log(id);
      console.log("-------------"); 
      console.log(JSON.stringify(listaPersona[i].id));   
      console.log(JSON.parse(listaPersona[i].id));   
        let objPersona = listaPersona[i]
        res.json({
            success: true, 
            content: objPersona
        })
    }else{
      res.json({
        success: false,
        message: "El id ingresado no existe"
      })
   };
  }
});
app.get("/personas", (req: Request, res: Response) => {
    let objPersona = listaPersona
    res.json({
    ok: true,
    content: objPersona
  });
});


app.put('/persona/:id_persona', (req: Request, res:Response)=>{
    let id = req.params.id_persona
    for (let i = 0; i < listaPersona.length; i++) {
      if(JSON.stringify(listaPersona[i].id) == id){
          let objPersona = listaPersona.push(req.body)
          let NewObjPersona = listaPersona
          res.json({
              success: true, 
              message: "Se actualizo perfectamente",
              content: objPersona,
              new : NewObjPersona
          })
      }else{
        res.json({
          success: false,
          message: "El id ingresado no existe"
        })
        
      }
      
    }
    
})

app.delete('persona/:id_persona', (req: Request, res: Response) => {
    let objPersona = req.body
    let id = req.params.id_persona
    for (let i = 0; i < listaPersona.length; i++) {
      if(JSON.stringify(listaPersona[i].id) == id)
      listaPersona[i].splice()
    }
    res.json({ 
         ok: true,
         message: "Se elemino a persona"
    })
})


app.listen(port, () => {
  console.log("Servidor ejecutando correctamente en el puerto " + port);
});
