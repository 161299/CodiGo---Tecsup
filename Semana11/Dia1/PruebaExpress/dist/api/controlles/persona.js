"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personas = [
    {
        id: 1,
        nombre: "Cristhian",
        apellido: "Laurente",
        edad: 19,
        estado: "activo"
    }
];
exports.persona_controller = {
    traerTodos: (req, res) => {
        res.status(200).json({
            message: 'OK',
            content: personas
        });
    },
    agregarPersona: (req, res) => {
        let objPersona = req.body;
        personas.push(objPersona);
        res.status(201).json({
            message: 'Persona Agregada exitosamente',
            content: personas
        });
    },
    editarPersona: (req, res) => {
        let { id_persona } = req.params;
        let objPersona = req.body;
        let personaEncontrada = personas.find(persona => { return persona.id == +id_persona; });
        if (personaEncontrada) {
            personaEncontrada.apellido = objPersona.apellido;
            personaEncontrada.nombre = objPersona.nombre;
            personaEncontrada.estado = objPersona.estado;
            personaEncontrada.edad = objPersona.edad;
            res.status(200).json({
                message: 'Persona actualizada con exito',
                content: personaEncontrada
            });
        }
        else {
            res.status(404).json({
                error: 'Error',
                content: `No se encontro el id ${id_persona} ingresado`
            });
        }
    },
    eliminarPersona: (req, res) => {
        let { id_persona } = req.params;
        personas = personas.filter(persona => { return persona.id != +id_persona; });
        res.status(200).json({
            message: 'OK',
            content: 'Persona Elminada con exito'
        });
    }
};
