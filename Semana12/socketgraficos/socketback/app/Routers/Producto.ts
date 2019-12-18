import { ProductoController } from './../Controllers/Producto';
import { Router } from 'express';

export const producto_router = Router();
producto_router.post('/producto', ProductoController.postProducto);
producto_router.get('/reportes/ppcategoria', ProductoController.geProductosPorCategoriaHttp);