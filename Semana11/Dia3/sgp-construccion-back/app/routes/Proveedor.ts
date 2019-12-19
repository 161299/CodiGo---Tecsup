import { postProveedor, getProveedores, getProveedorById, updateProveedor } from './../controllers/Proveedor';
import { Router} from 'express';

export let proveedor_router = Router();
proveedor_router.post('/proveedor', postProveedor);
proveedor_router.get('/proveedores', getProveedores);
proveedor_router.get('/proveedor/:id_proveedor', getProveedorById); 
proveedor_router.put('/proveedor/:id_proveedor', updateProveedor);