"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personas = [
    {
        id: 1,
        nombre: "Cristhian",
        apellido: "Laurente",
        dni: 75076838,
        correo: "crstn.space19@gmail.com",
        nacionalidad: "Peruano",
        mascota: [1]
    }
];
let mascotas = [
    {
        id: 1,
        nombre: "Dora",
        raza: "rotwailer",
        tipo: "grande",
        sexo: "femenino",
        fechanacimiento: "2019/12/12",
        colores: "cafe"
    }
];
exports.persona_controller = {
    traerTodos: (req, res) => {
        res.status(200).json({
            message: "OK",
            content: personas
        });
    },
    traerPersona: (req, res) => {
        let { id_persona } = req.params;
        let personaEncontrada = personas.find(persona => {
            return persona.id == +id_persona;
        });
        if (personaEncontrada) {
            res.status(200).json({
                message: "OK",
                content: personaEncontrada
            });
        }
        else {
            res.status(404).json({
                error: "Error",
                content: `No se encontro el id ${id_persona} ingresado`
            });
        }
    },
    traerPersonaPorDni: (req, res) => {
        let { dni } = req.params;
        let personaEncontrada = personas.find(persona => {
            return persona.dni == +dni;
        });
        if (personaEncontrada) {
            res.status(200).json({
                message: "OK",
                content: personaEncontrada
            });
        }
        else {
            res.status(404).json({
                error: "Error",
                content: `No se encontro el dni ${dni} ingresado`
            });
        }
    },
    agregarPersona: (req, res) => {
        let objPersona = req.body;
        personas.push(objPersona);
        res.status(201).json({
            message: "Persona agrega exitosamente",
            content: objPersona
        });
    },
    editarPersona: (req, res) => {
        let { id_persona } = req.params;
        let objPersona = req.body;
        let personaEncontrada = personas.find(persona => {
            return persona.id == +id_persona;
        });
        if (personaEncontrada) {
            personaEncontrada.nombre = objPersona.nombre;
            personaEncontrada.apellido = objPersona.apellido;
            personaEncontrada.dni = objPersona.dni;
            personaEncontrada.correo = objPersona.correo;
            personaEncontrada.mascota = objPersona.mascota;
            res.status(200).json({
                message: "Persona actualizada con exito",
                content: personaEncontrada
            });
        }
        else {
            res.status(404).json({
                error: "Error",
                content: `No se encontro el id ${id_persona} ingresado`
            });
        }
    },
    eliminarPersona: (req, res) => {
        let { id_persona } = req.params;
        personas = personas.filter(persona => {
            return persona.id != +id_persona;
        });
        res.status(200).json({
            message: "OK",
            content: "Persona Elminada con exito"
        });
    },
    traerMascotas: (req, res) => {
        res.status(200).json({
            message: "OK",
            content: mascotas
        });
    },
    agregarMascota: (req, res) => {
        let id_persona = req.params.id_persona;
        let objMascota = req.body;
        let personaEncontrada = personas.find(persona => {
            return persona.id == +id_persona;
        });
        if (personaEncontrada) {
            for (let i = 0; i < personas.length; i++) {
                personas[i].mascota.push(objMascota.id);
            }
            res.status(200).json({
                message: "Mascota agregada con exito",
                content: personaEncontrada
            });
        }
        else {
            res.status(404).json({
                error: "Error",
                content: `No se encontro el id ${id_persona} ingresado`
            });
        }
    }
};
