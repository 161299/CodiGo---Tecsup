import { Router } from 'express';
import { getUnidadMedidas, getUnidadMedidaByNombre, postUnidadMedida } from './../controllers/UnidadMedida';

export let unidadmedida_router = Router();
unidadmedida_router.get('/um', getUnidadMedidas);
unidadmedida_router.get('/um/:nombre', getUnidadMedidaByNombre);
unidadmedida_router.post('/um', postUnidadMedida);