"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
const budyParser = body_parser_1.default;
let listaPersona = [];
app.use(budyParser.json());
app.post("/persona", (req, res) => {
    let objPersona = listaPersona.push(req.body);
    res.json({
        ok: true,
        content: objPersona
    });
});
app.get("/persona/:id_persona", (req, res) => {
    let id = req.params.id_persona;
    for (let i = 0; i < listaPersona.length; i++) {
        if (JSON.stringify(listaPersona[i].id) == id) {
            console.log(id);
            console.log("-------------");
            console.log(JSON.stringify(listaPersona[i].id));
            console.log(JSON.parse(listaPersona[i].id));
            let objPersona = listaPersona[i];
            res.json({
                success: true,
                content: objPersona
            });
        }
        else {
            res.json({
                success: false,
                message: "El id ingresado no existe"
            });
        }
        ;
    }
});
app.get("/personas", (req, res) => {
    let objPersona = listaPersona;
    res.json({
        ok: true,
        content: objPersona
    });
});
app.put('/persona/:id_persona', (req, res) => {
    let id = req.params.id_persona;
    for (let i = 0; i < listaPersona.length; i++) {
        if (JSON.stringify(listaPersona[i].id) == id) {
            let objPersona = listaPersona.push(req.body);
            let NewObjPersona = listaPersona;
            res.json({
                success: true,
                message: "Se actualizo perfectamente",
                content: objPersona,
                new: NewObjPersona
            });
        }
        else {
            res.json({
                success: false,
                message: "El id ingresado no existe"
            });
        }
    }
});
app.delete('persona/:id_persona', (req, res) => {
    let objPersona = req.body;
    let id = req.params.id_persona;
    for (let i = 0; i < listaPersona.length; i++) {
        if (JSON.stringify(listaPersona[i].id) == id)
            listaPersona[i].splice();
    }
    res.json({
        ok: true,
        message: "Se elemino a persona"
    });
});
app.listen(port, () => {
    console.log("Servidor ejecutando correctamente en el puerto " + port);
});
