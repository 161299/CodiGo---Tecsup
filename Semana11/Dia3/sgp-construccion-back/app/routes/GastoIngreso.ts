import { wachiman } from './../utils/utils';
import { postTransaccion } from './../controllers/GastoIngreso';
import { Router } from 'express';
import { //postGastoIngreso ,
         getGastoIngresoByPk, updateGastoIngresoByPk
       } from '../controllers/GastoIngreso';

export const gastoingreso_router = Router();
// gastoingreso_router.post('/gastoingreso', postGastoIngreso);
gastoingreso_router.get('/gastoingreso/:id_gastoingreso', getGastoIngresoByPk);
gastoingreso_router.post('/transaccion/gasto-ingreso', wachiman  ,postTransaccion);
gastoingreso_router.put('/gastoingreso/:id_gastoingreso', updateGastoIngresoByPk);