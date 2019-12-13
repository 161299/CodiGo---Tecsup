"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("./../controlles/persona");
exports.persona_router = express_1.Router();
exports.persona_router.get('/personas', persona_1.persona_controller.traerTodos);
exports.persona_router.post('/persona', persona_1.persona_controller.agregarPersona);
exports.persona_router.put('/persona/:id_persona', persona_1.persona_controller.editarPersona);
exports.persona_router.delete('/persona/:id_persona', persona_1.persona_controller.eliminarPersona);
