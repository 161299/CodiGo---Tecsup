import { Router } from 'express';
import { postGastoIngreso , getGastoIngresoByPk} from '../controllers/GastoIngreso';

export const gastoingreso_router = Router();
gastoingreso_router.post('/gastoingreso', postGastoIngreso);
gastoingreso_router.get('/gastoingreso/:id_gastoingreso', getGastoIngresoByPk)