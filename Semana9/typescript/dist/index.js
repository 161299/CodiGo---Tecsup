"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importando las funcion y el array de el archivo variables
// si quiero importar las variables del otro archivo solamrente las variables.... esas variables tienen que tener export
// capturando por nombre de las variables
// Importando variables y funciones con nombres iguales
const variables_1 = require("./variables");
// Importando un default, y si quiero llamar una variable por su nombre ponemos lo siguiente despues de la coma
const variables2_1 = __importStar(require("./variables2"));
// Importar varias variables en una sola
const abc = __importStar(require("./variables3"));
console.log(variables_1.arregloDeNumeros);
console.log(variables_1.imprimirSaludo);
// ==============================
console.log(variables2_1.default);
console.log(variables2_1.correo);
// ================================
console.log(abc);
