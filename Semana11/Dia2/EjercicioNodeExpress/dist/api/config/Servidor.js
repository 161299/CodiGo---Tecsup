"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const personta_1 = require("./../routes/personta");
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.port = 3000;
        this.app.use(body_parser_1.default.json());
        //urlencoded sirve para leer la informacion mandada por los forms          
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.use('/api', personta_1.persona_router);
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`Servido corriendo exitosamente en el puerto ${this.port}`);
        });
    }
}
exports.Servidor = Servidor;
