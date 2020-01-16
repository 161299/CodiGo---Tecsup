import { postRecurso, getRecursos } from './../controllers/Recurso';
import { Router } from 'express';
import { wachiman } from './../utils/utils'
export let recurso_router = Router();
recurso_router.post('/recurso', wachiman  ,postRecurso);
recurso_router.get('/recursos', wachiman ,getRecursos);

