import { Router } from 'express';
import { persona_controller } from './../controllers/persona';

export let persona_router = Router();

persona_router.post('/persona', persona_controller.agregarPersona)
persona_router.get('/personas', persona_controller.traerTodos)
// persona_router.get('/persona/:id_persona', persona_controller.traerPersona)
persona_router.get('/persona/:dni', persona_controller.traerPersonaPorDni, persona_controller.traerMascotas)
persona_router.put('/persona/:id_persona', persona_controller.editarPersona)
persona_router.delete('/persona/:id_persona', persona_controller.eliminarPersona)


persona_router.get('/mascotas', persona_controller.traerMascotas)
persona_router.post('/mascota/:id_persona', persona_controller.agregarMascota, persona_controller.agregarPersona)