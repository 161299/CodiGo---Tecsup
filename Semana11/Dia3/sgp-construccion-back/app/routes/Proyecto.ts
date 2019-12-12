import { Router } from 'express';
import { getProyectos, postProyecto, updateProyecto, deleteProyecto, getProyectoById } from './../controllers/Proyecto';

export let proyecto_router = Router();
proyecto_router.get('/proyectos', getProyectos);
proyecto_router.get('/proyecto/:id_proyecto', getProyectoById);
proyecto_router.post('/proyecto', postProyecto);
proyecto_router.put('/proyecto/:id_proyecto', updateProyecto);
proyecto_router.delete('/proyecto/:id_proyecto', deleteProyecto);