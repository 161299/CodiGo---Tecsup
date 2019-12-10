import { Router } from 'express';
import { getProyectos } from './../controllers/Proyecto';

export let proyecto_router = Router();
proyecto_router.get('/proyecto', getProyectos);