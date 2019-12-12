import {Router} from 'express';
import { persona_controller } from './../controlles/persona';

export let persona_router = Router();

persona_router.get('/personas', persona_controller.traerTodos)
persona_router.post('/persona', persona_controller.agregarPersona)
persona_router.put('/persona/:id_persona', persona_controller.editarPersona)
persona_router.delete('/persona/:id_persona', persona_controller.eliminarPersona)

