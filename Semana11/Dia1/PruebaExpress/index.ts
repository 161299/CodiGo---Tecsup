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

app.get("/personas", (req: Request, res: Response) => {
    let objPersona = listaPersona
    res.json({
    ok: true,
    content: objPersona
  });
});


app.put('/persona/:id_persona', (req: Request, res:Response)=>{
    let objPersona = listaPersona['id_persona'].push(req.body)

    res.json({
        ok: true,
        content: objPersona
    })
})

app.delete('persona/:id_persona', (req: Request, res: Response) => {
    let objPersona = req.body
    res.json({ 
         ok: true,
         message: "Se elemino a persona"
    })
})


app.listen(port, () => {
  console.log("Servidor ejecutando correctamente en el puerto " + port);
});
