import { wachiman } from './../utils/utils';
import { PostPresupuestoProyecto, getPresupuestoByIdProyecto } from './../controllers/PresupuestoProyecto';
import {Router} from 'express';

export const presupuestoproyecto_router = Router();
presupuestoproyecto_router.post('/pp-varios',  wachiman  ,PostPresupuestoProyecto );
presupuestoproyecto_router.get('/presupuestoproyecto/proyecto/:pro_id', wachiman, getPresupuestoByIdProyecto)
